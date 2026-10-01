"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import {
  decodeAudioData,
  getAudioContext,
  getCachedAudioBuffer,
} from "@/lib/soundcn/sound-engine"
import type {
  SoundAsset,
  UseSoundOptions,
  UseSoundReturn,
} from "@/lib/soundcn/sound-types"

export function useSound(
  sound: SoundAsset,
  options: UseSoundOptions = {}
): UseSoundReturn {
  const {
    volume = 1,
    playbackRate = 1,
    interrupt = false,
    soundEnabled = true,
    onPlay,
    onEnd,
    onPause,
    onStop,
  } = options

  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState<number | null>(
    sound.duration ?? null
  )
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const bufferRef = useRef<AudioBuffer | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Keep the synchronous cache hit so playback stays instant; the duration
    // state update goes through the (already-resolved) promise instead of
    // being set synchronously inside the effect.
    const cached = getCachedAudioBuffer(sound.dataUri)
    if (cached) bufferRef.current = cached

    let cancelled = false
    decodeAudioData(sound.dataUri)
      .then((buf) => {
        if (cancelled) return
        bufferRef.current = buf
        setDuration(buf.duration)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [sound.dataUri])

  const stop = useCallback(() => {
    if (sourceRef.current) {
      try {
        sourceRef.current.stop()
      } catch {
        // Already stopped
      }
      sourceRef.current = null
    }
    setIsPlaying(false)
    onStop?.()
  }, [onStop])

  const play = useCallback(
    (overrides?: { volume?: number; playbackRate?: number }) => {
      if (!soundEnabled || typeof window === "undefined") return

      const buffer = bufferRef.current || getCachedAudioBuffer(sound.dataUri)

      if (buffer) {
        // Instant synchronous playback path
        try {
          const ctx = getAudioContext()
          if (ctx.state === "suspended") {
            ctx.resume().catch(() => {})
          }

          if (interrupt && sourceRef.current) {
            stop()
          }

          const source = ctx.createBufferSource()
          const gain = ctx.createGain()

          source.buffer = buffer
          source.playbackRate.value = overrides?.playbackRate ?? playbackRate
          gain.gain.value = overrides?.volume ?? volume

          source.connect(gain)
          gain.connect(ctx.destination)

          source.onended = () => {
            setIsPlaying(false)
            onEnd?.()
          }

          source.start(0)
          sourceRef.current = source
          gainRef.current = gain
          setIsPlaying(true)
          onPlay?.()
        } catch {
          // Playback error fallback
        }
        return
      }

      // Asynchronous decode fallback if not yet buffered
      decodeAudioData(sound.dataUri)
        .then((buf) => {
          bufferRef.current = buf
          setDuration(buf.duration)
          const ctx = getAudioContext()
          if (ctx.state === "suspended") {
            ctx.resume().catch(() => {})
          }
          if (interrupt && sourceRef.current) {
            stop()
          }
          const source = ctx.createBufferSource()
          const gain = ctx.createGain()
          source.buffer = buf
          source.playbackRate.value = overrides?.playbackRate ?? playbackRate
          gain.gain.value = overrides?.volume ?? volume
          source.connect(gain)
          gain.connect(ctx.destination)
          source.onended = () => {
            setIsPlaying(false)
            onEnd?.()
          }
          source.start(0)
          sourceRef.current = source
          gainRef.current = gain
          setIsPlaying(true)
          onPlay?.()
        })
        .catch(() => {})
    },
    [
      soundEnabled,
      sound.dataUri,
      playbackRate,
      volume,
      interrupt,
      stop,
      onPlay,
      onEnd,
    ]
  )

  const pause = useCallback(() => {
    stop()
    onPause?.()
  }, [stop, onPause])

  return [play, { stop, pause, isPlaying, duration, sound }] as const
}
