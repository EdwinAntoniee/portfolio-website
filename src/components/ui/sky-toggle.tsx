"use client"

import { useTheme } from "next-themes"
import type { CSSProperties, KeyboardEvent } from "react"
import { useCallback } from "react"

import { useSoundPreference } from "@/hooks/soundcn/use-sound-preference"
import { useMounted } from "@/hooks/use-mounted"
import { getAudioContext } from "@/lib/soundcn/sound-engine"
import { cn } from "@/lib/utils"

interface SkyToggleProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  scale?: number
  speed?: number
  sound?: boolean
  ariaLabel?: string
}

const BASE_WIDTH = 280
const BASE_HEIGHT = 120

const SCALE_MAP: Record<NonNullable<SkyToggleProps["size"]>, number> = {
  sm: 0.23,
  md: 0.32,
  lg: 0.5,
  xl: 1,
}

function playSwitchSound(toNight: boolean) {
  if (typeof window === "undefined") return
  try {
    // Reuse the app-wide context: a fresh AudioContext per toggle has to open
    // the audio device first (audible lag) and browsers cap how many can exist.
    const ctx = getAudioContext()
    if (ctx.state === "suspended") ctx.resume().catch(() => {})

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    // Frequency sweep for cheerful daytime chirp or deep night swoop
    const startFreq = toNight ? 380 : 260
    const endFreq = toNight ? 220 : 540

    osc.type = "sine"
    osc.frequency.setValueAtTime(startFreq, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.12)

    gain.gain.setValueAtTime(0.18, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.16)
  } catch {
    // Audio note prevented by browser policy or unsupported environment
  }
}

function SkyToggle({
  className,
  size = "md",
  scale,
  speed = 0.65,
  sound = true,
  ariaLabel,
}: SkyToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const soundPref = useSoundPreference()
  const mounted = useMounted()

  const isDark = mounted && resolvedTheme === "dark"

  const handleToggle = useCallback(() => {
    const nextIsDark = !isDark
    if (sound && soundPref?.enabled) {
      playSwitchSound(nextIsDark)
    }
    setTheme(nextIsDark ? "dark" : "light")
  }, [isDark, sound, soundPref?.enabled, setTheme])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        handleToggle()
      }
    },
    [handleToggle]
  )

  const computedScale = scale ?? SCALE_MAP[size] ?? SCALE_MAP.md
  const width = Math.round(BASE_WIDTH * computedScale)
  const height = Math.round(BASE_HEIGHT * computedScale)

  return (
    <div
      className={cn(
        "switch-wrapper relative inline-block shrink-0 select-none",
        isDark ? "theme-night" : "theme-day",
        className
      )}
      style={
        {
          width: `${width}px`,
          height: `${height}px`,
          "--toggle-speed": `${speed}s`,
        } as CSSProperties
      }
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          transform: `scale(${computedScale})`,
        }}
      >
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-label={
            ariaLabel ??
            (isDark
              ? "Click to switch into light mode"
              : "Click to switch into night mode")
          }
          title={
            isDark
              ? "Click to switch into light mode"
              : "Click to switch into night mode"
          }
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={cn(
            "toggle-track m-0 block border-0 bg-transparent p-0 text-left",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
            isDark ? "theme-night" : "theme-day"
          )}
          data-state={isDark ? "night" : "day"}
        >
          {/* Concentric Depth Aura Rings */}
          <div className="ring-layer ring-3" aria-hidden="true" />
          <div className="ring-layer ring-2" aria-hidden="true" />
          <div className="ring-layer ring-1" aria-hidden="true" />

          {/* DAY SCENERY: Layered Soft Clouds (SVG) */}
          <div className="clouds-container" aria-hidden="true">
            <svg
              viewBox="0 0 160 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full drop-shadow-[0_-2px_4px_rgba(0,0,0,0.06)]"
            >
              {/* Back dark tint cloud puff */}
              <path
                d="M70 65 C60 45 80 25 105 32 C120 18 145 25 152 42 C165 48 165 70 150 78 Z"
                fill="#6797c0"
                opacity="0.6"
              />
              {/* Mid sky cloud puff */}
              <path
                d="M40 75 C30 55 52 40 75 48 C88 32 115 35 125 50 C140 48 155 60 150 78 Z"
                fill="#9bc4e4"
                opacity="0.85"
              />
              {/* Front white crisp cloud puffs matching reference */}
              <path
                d="M5 82 C0 68 18 56 36 62 C48 48 74 48 85 62 C96 52 118 54 126 66 C138 64 152 74 150 85 L0 85 Z"
                fill="#ffffff"
                opacity="0.95"
              />
              <path
                d="M45 84 C40 70 58 60 74 65 C84 52 108 53 118 64 C128 56 148 58 152 72 L160 85 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* NIGHT SCENERY: Ursa Major Constellation Stars */}
          <div className="stars-container" aria-hidden="true">
            {/* Big Dipper / Constellation Stars matched to reference placement */}
            <svg
              className="star-sparkle"
              style={{
                left: 12,
                top: 38,
                width: 13,
                height: 13,
                animationDelay: "0.1s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
            <svg
              className="star-sparkle"
              style={{
                left: 36,
                top: 26,
                width: 11,
                height: 11,
                animationDelay: "0.4s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
            <svg
              className="star-sparkle"
              style={{
                left: 54,
                top: 28,
                width: 10,
                height: 10,
                animationDelay: "0.8s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
            <svg
              className="star-sparkle"
              style={{
                left: 74,
                top: 28,
                width: 12,
                height: 12,
                animationDelay: "0.2s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
            <svg
              className="star-sparkle"
              style={{
                left: 88,
                top: 50,
                width: 11,
                height: 11,
                animationDelay: "0.6s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
            <svg
              className="star-sparkle"
              style={{
                left: 114,
                top: 12,
                width: 12,
                height: 12,
                animationDelay: "0.3s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
            <svg
              className="star-sparkle"
              style={{
                left: 116,
                top: 38,
                width: 11,
                height: 11,
                animationDelay: "0.7s",
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
          </div>

          {/* The Floating Orb: Sun (left) to Moon (right) */}
          <div className="celestial-knob" aria-hidden="true">
            {/* Moon Craters (visible during night mode) */}
            <div className="crater crater-1" />
            <div className="crater crater-2" />
            <div className="crater crater-3" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default SkyToggle
export { SkyToggle, SkyToggle as Switch, SkyToggle as ThemeSwitch }
export type { SkyToggleProps, SkyToggleProps as ThemeSwitchProps }
