import { clickSound } from "./click-sound"

const STORAGE_KEY = "sound-enabled"

let audioContext: AudioContext | null = null
let clickBuffer: AudioBuffer | null = null
let cachedCtx: AudioContext | null = null

// Pre-parsed PCM data cache so base64 decoding is done only once:
let preParsedPcm: {
  numChannels: number
  sampleRate: number
  channels: Float32Array[]
} | null = null

function parseClickSoundPcm() {
  if (preParsedPcm) return preParsedPcm

  const base64 = clickSound.dataUri.split(",")[1]
  const binaryString = atob(base64)
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }

  const view = new DataView(bytes.buffer)
  const numChannels = view.getUint16(22, true)
  const sampleRate = view.getUint32(24, true)
  const bitsPerSample = view.getUint16(34, true)

  let dataOffset = 36
  while (dataOffset < len - 8) {
    const chunkId = String.fromCharCode(
      bytes[dataOffset],
      bytes[dataOffset + 1],
      bytes[dataOffset + 2],
      bytes[dataOffset + 3]
    )
    if (chunkId === "data") {
      dataOffset += 8
      break
    }
    const chunkSize = view.getUint32(dataOffset + 4, true)
    dataOffset += 8 + chunkSize
  }

  const bytesPerSample = bitsPerSample / 8
  const frameCount = Math.floor(
    (len - dataOffset) / (numChannels * bytesPerSample)
  )
  const channels: Float32Array[] = []
  for (let c = 0; c < numChannels; c++) {
    channels.push(new Float32Array(frameCount))
  }

  for (let i = 0; i < frameCount; i++) {
    for (let c = 0; c < numChannels; c++) {
      const sampleOffset = dataOffset + (i * numChannels + c) * bytesPerSample
      channels[c][i] = view.getInt16(sampleOffset, true) / 32768
    }
  }

  preParsedPcm = { numChannels, sampleRate, channels }
  return preParsedPcm
}

export function getAudioContext(): AudioContext {
  if (typeof window === "undefined") {
    throw new Error("AudioContext is only available in browser environment")
  }
  if (!audioContext) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    audioContext = new AudioContextClass({ latencyHint: "interactive" })
  }
  return audioContext
}

export function getClickAudioBuffer(ctx: AudioContext): AudioBuffer {
  if (clickBuffer && cachedCtx === ctx) {
    return clickBuffer
  }
  const { numChannels, sampleRate, channels } = parseClickSoundPcm()
  const buffer = ctx.createBuffer(numChannels, channels[0].length, sampleRate)
  for (let c = 0; c < numChannels; c++) {
    buffer.copyToChannel(channels[c], c)
  }
  clickBuffer = buffer
  cachedCtx = ctx
  return buffer
}

function isSoundGloballyEnabled(): boolean {
  if (typeof window === "undefined") return true
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === null ? true : stored === "true"
  } catch {
    return true
  }
}

export function playClickSound(
  options: { volume?: number; force?: boolean } = {}
): void {
  if (typeof window === "undefined") return
  if (!options.force && !isSoundGloballyEnabled()) return

  try {
    const ctx = getAudioContext()
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {})
    }

    const buffer = getClickAudioBuffer(ctx)
    const source = ctx.createBufferSource()
    source.buffer = buffer

    const gain = ctx.createGain()
    gain.gain.value = options.volume ?? 0.85

    source.connect(gain)
    gain.connect(ctx.destination)

    source.start(0)
  } catch {
    // Audio playback blocked or unsupported
  }
}

// Global user gesture pre-warming listener
if (typeof window !== "undefined") {
  const unlockAudio = () => {
    try {
      if (audioContext && audioContext.state === "suspended") {
        audioContext.resume().catch(() => {})
      }
    } catch {
      // AudioContext unsupported
    }
  }

  const events = [
    "pointerdown",
    "touchstart",
    "touchend",
    "mousedown",
    "keydown",
    "click",
  ] as const

  for (const eventName of events) {
    window.addEventListener(eventName, unlockAudio, {
      capture: true,
      passive: true,
    })
  }
}
