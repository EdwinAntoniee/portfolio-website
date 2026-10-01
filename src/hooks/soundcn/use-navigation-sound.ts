"use client"

import type { PointerEvent as ReactPointerEvent } from "react"
import { useCallback } from "react"

import { playClickSound } from "@/lib/soundcn/sound-engine"
import { useSoundPreference } from "./use-sound-preference"

export function useNavigationSoundHandlers() {
  const { enabled } = useSoundPreference()

  const play = useCallback((force?: boolean) => {
    playClickSound({ force: force ?? false })
  }, [])

  const onPointerDown = useCallback((event?: ReactPointerEvent<Element>) => {
    if (
      event &&
      (event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey)
    ) {
      return
    }
    playClickSound()
  }, [])

  return { play, onPointerDown, enabled }
}

export function useNavigationSound() {
  return useNavigationSoundHandlers().play
}
