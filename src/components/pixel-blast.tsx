"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

import { useMounted } from "@/hooks/use-mounted"

export interface HalftoneCloudProps {
  className?: string
  pixelSize?: number
  patternScale?: number
  patternDensity?: number
  dotContrast?: number
  speed?: number
  opacity?: number
  interactivity?: number
  skyTopColor?: [number, number, number]
  skyBottomColor?: [number, number, number]
  cloudColor?: [number, number, number]
  onReady?: () => void
}

export type PixelBlastProps = HalftoneCloudProps

const VERTEX_SHADER_SOURCE = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER_SOURCE = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uContrast;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uInteractivity;

uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uCloudColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.52;
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 4; i++) {
    val += amp * noise(p);
    p = rot * p * 2.08 + vec2(100.0, 50.0);
    amp *= 0.48;
  }
  return val;
}

void main() {
  vec2 coord = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y);
  vec2 uvScreen = coord / uResolution;

  vec2 cellIndex = floor(coord / uPixelSize);
  vec2 cellUv = fract(coord / uPixelSize);
  vec2 cellCenterUv = (cellIndex + 0.5) * uPixelSize / uResolution;

  // Cursor interactivity: warp and swirl cloud field around mouse
  vec2 mouseDelta = cellCenterUv - uMouse;
  float mouseDist = length(mouseDelta);
  float mouseEffect = exp(-mouseDist * 4.0) * uInteractivity;
  vec2 warp = normalize(mouseDelta + vec2(0.0001)) * mouseEffect * 0.09;

  vec2 cloudUv = (cellCenterUv + warp) * (uScale * 2.2);
  cloudUv.x += uTime * 0.04;
  cloudUv.y -= uTime * 0.015;

  float n = fbm(cloudUv);
  float grain = (hash(cellIndex) - 0.5) * 0.08;
  float cloudField = n + grain + mouseEffect * 0.08;

  float density = smoothstep(0.36, 0.76, cloudField * uDensity);
  density = pow(density, 1.0 / max(0.2, uContrast));

  // Halftone Dot Modulation: Radius expands in dense cloud regions
  float targetRadius = density * 0.51;
  float distFromCenter = length(cellUv - vec2(0.5));

  float dotMask = 1.0 - smoothstep(targetRadius - 0.08, targetRadius + 0.08, distFromCenter);
  if (targetRadius < 0.06) dotMask = 0.0;

  vec3 skyColor = mix(uSkyTop, uSkyBottom, uvScreen.y);
  vec3 finalColor = mix(skyColor, uCloudColor, dotMask * uOpacity);

  gl_FragColor = vec4(finalColor, 1.0);
}
`

// Day Sky Palette (User's custom palette):
// Sky Top: #4682A9 (Deep Horizon Blue)
// Sky Bottom: #91C8E4 (Morning Sky Blue)
// Cloud: #FFFBDE (Warm Ivory Sunlight)
const DAY_SKY_TOP: [number, number, number] = [70 / 255, 130 / 255, 169 / 255]
const DAY_SKY_BOTTOM: [number, number, number] = [
  145 / 255,
  200 / 255,
  228 / 255,
]
const DAY_CLOUD: [number, number, number] = [255 / 255, 251 / 255, 222 / 255]

// Night Sky Palette (Deep Celestial Midnight):
// Sky Top: #060D16 (Deep Cosmic Space)
// Sky Bottom: #112032 (Twilight Horizon)
// Cloud: #749BC2 (Moonlit Azure Clouds)
const NIGHT_SKY_TOP: [number, number, number] = [6 / 255, 13 / 255, 22 / 255]
const NIGHT_SKY_BOTTOM: [number, number, number] = [
  17 / 255,
  32 / 255,
  50 / 255,
]
const NIGHT_CLOUD: [number, number, number] = [116 / 255, 155 / 255, 194 / 255]

export function HalftoneCloud({
  className = "",
  pixelSize = 4.5,
  patternScale = 4.3,
  patternDensity = 1.05,
  dotContrast = 2.3,
  speed = 1.5,
  opacity = 0.75,
  interactivity = 0.2,
  skyTopColor,
  skyBottomColor,
  cloudColor,
  onReady,
}: HalftoneCloudProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const isDark = mounted && resolvedTheme === "dark"

  const activeTop = skyTopColor ?? (isDark ? NIGHT_SKY_TOP : DAY_SKY_TOP)
  const activeBottom =
    skyBottomColor ?? (isDark ? NIGHT_SKY_BOTTOM : DAY_SKY_BOTTOM)
  const activeCloud = cloudColor ?? (isDark ? NIGHT_CLOUD : DAY_CLOUD)

  const targetTopRef = useRef<[number, number, number]>(activeTop)
  const targetBottomRef = useRef<[number, number, number]>(activeBottom)
  const targetCloudRef = useRef<[number, number, number]>(activeCloud)

  useEffect(() => {
    targetTopRef.current = activeTop
    targetBottomRef.current = activeBottom
    targetCloudRef.current = activeCloud
  }, [activeTop, activeBottom, activeCloud])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const gl =
      (canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        powerPreference: "low-power",
      }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)

    if (!gl) return

    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE)
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE)
    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const pos = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, "uResolution")
    const uTime = gl.getUniformLocation(program, "uTime")
    const uPix = gl.getUniformLocation(program, "uPixelSize")
    const uScale = gl.getUniformLocation(program, "uScale")
    const uDens = gl.getUniformLocation(program, "uDensity")
    const uCont = gl.getUniformLocation(program, "uContrast")
    const uOpac = gl.getUniformLocation(program, "uOpacity")
    const uMouse = gl.getUniformLocation(program, "uMouse")
    const uInter = gl.getUniformLocation(program, "uInteractivity")
    const uTop = gl.getUniformLocation(program, "uSkyTop")
    const uBot = gl.getUniformLocation(program, "uSkyBottom")
    const uCld = gl.getUniformLocation(program, "uCloudColor")

    let reqId = 0
    let lastTime = 0
    let accumTime = 0

    // Smooth cursor interpolation
    const mouse = {
      currX: 0.5,
      currY: 0.5,
      targetX: 0.5,
      targetY: 0.5,
      active: 0,
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX / window.innerWidth
      mouse.targetY = e.clientY / window.innerHeight
      mouse.active = 1
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })

    const currentTop: [number, number, number] = [...targetTopRef.current]
    const currentBottom: [number, number, number] = [...targetBottomRef.current]
    const currentCloud: [number, number, number] = [...targetCloudRef.current]

    const render = (time: number) => {
      if (document.hidden) {
        reqId = requestAnimationFrame(render)
        return
      }

      if (lastTime) {
        accumTime += Math.min((time - lastTime) / 1000, 0.1) * speed
      }
      lastTime = time

      // Smooth mouse lerp
      mouse.currX += (mouse.targetX - mouse.currX) * 0.08
      mouse.currY += (mouse.targetY - mouse.currY) * 0.08

      // Smooth color lerp when theme switches
      currentTop[0] += (targetTopRef.current[0] - currentTop[0]) * 0.05
      currentTop[1] += (targetTopRef.current[1] - currentTop[1]) * 0.05
      currentTop[2] += (targetTopRef.current[2] - currentTop[2]) * 0.05

      currentBottom[0] += (targetBottomRef.current[0] - currentBottom[0]) * 0.05
      currentBottom[1] += (targetBottomRef.current[1] - currentBottom[1]) * 0.05
      currentBottom[2] += (targetBottomRef.current[2] - currentBottom[2]) * 0.05

      currentCloud[0] += (targetCloudRef.current[0] - currentCloud[0]) * 0.05
      currentCloud[1] += (targetCloudRef.current[1] - currentCloud[1]) * 0.05
      currentCloud[2] += (targetCloudRef.current[2] - currentCloud[2]) * 0.05

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, accumTime)
      gl.uniform1f(uPix, pixelSize)
      gl.uniform1f(uScale, patternScale)
      gl.uniform1f(uDens, patternDensity)
      gl.uniform1f(uCont, dotContrast)
      gl.uniform1f(uOpac, opacity)
      gl.uniform2f(uMouse, mouse.currX, mouse.currY)
      gl.uniform1f(uInter, mouse.active * interactivity)
      gl.uniform3fv(uTop, currentTop)
      gl.uniform3fv(uBot, currentBottom)
      gl.uniform3fv(uCld, currentCloud)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      reqId = requestAnimationFrame(render)
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
    }

    window.addEventListener("resize", resize)
    resize()
    reqId = requestAnimationFrame(render)
    onReady?.()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointerMove)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
    }
  }, [
    pixelSize,
    patternScale,
    patternDensity,
    dotContrast,
    speed,
    opacity,
    interactivity,
    onReady,
  ])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  )
}

// Export as PixelBlast for seamless backward compatibility across the app
export const PixelBlast = HalftoneCloud
