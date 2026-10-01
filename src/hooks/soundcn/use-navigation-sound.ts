"use client"

import type { PointerEvent } from "react"
import { useCallback, useEffect } from "react"

import { clickSound } from "@/lib/soundcn/click-sound"
import { decodeAudioData } from "@/lib/soundcn/sound-engine"

import { useSound } from "./use-sound"
import { useSoundPreference } from "./use-sound-preference"

/**
 * `click` fires on release, 80-150ms after the finger/mouse goes down, which
 * makes the pop feel late. `onPointerDown` plays it on press instead; the
 * follow-up `play()` from the element's onClick is then skipped so the sound
 * never doubles. Keyboard activation has no pointerdown, so it still plays
 * from onClick.
 */
const PRESS_DEDUPE_MS = 600
let lastPressAt = Number.NEGATIVE_INFINITY

export function useNavigationSoundHandlers() {
  const { enabled } = useSoundPreference()
  const [playClick] = useSound(clickSound, {
    volume: 0.85,
    soundEnabled: true,
    interrupt: true,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      decodeAudioData(clickSound.dataUri).catch(() => {})
    }
  }, [])

  const play = useCallback(
    (force?: boolean) => {
      if (performance.now() - lastPressAt < PRESS_DEDUPE_MS) {
        // Already played on pointerdown for this interaction.
        lastPressAt = Number.NEGATIVE_INFINITY
        return
      }
      if (enabled || force) {
        playClick()
      }
    },
    [enabled, playClick]
  )

  const onPointerDown = useCallback(
    (event: PointerEvent<Element>) => {
      if (
        !enabled ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }
      playClick()
      lastPressAt = performance.now()
    },
    [enabled, playClick]
  )

  return { play, onPointerDown }
}

export function useNavigationSound() {
  return useNavigationSoundHandlers().play
}
