"use client"

import { useCallback, useEffect } from "react"

import { clickSound } from "@/lib/soundcn/click-sound"
import { decodeAudioData } from "@/lib/soundcn/sound-engine"

import { useSound } from "./use-sound"
import { useSoundPreference } from "./use-sound-preference"

export function useNavigationSound() {
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

  return useCallback(
    (force?: boolean) => {
      if (enabled || force) {
        playClick()
      }
    },
    [enabled, playClick]
  )
}

export { useNavigationSound as useClickSound }
