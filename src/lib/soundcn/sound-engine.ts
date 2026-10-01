let audioContext: AudioContext | null = null
const bufferCache = new Map<string, AudioBuffer>()
const decodingPromises = new Map<string, Promise<AudioBuffer>>()

export function getAudioContext(): AudioContext {
  if (typeof window === "undefined") {
    throw new Error("AudioContext is only available in browser environment")
  }
  if (!audioContext) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    audioContext = new AudioContextClass()
  }
  return audioContext
}

export function getCachedAudioBuffer(dataUri: string): AudioBuffer | undefined {
  return bufferCache.get(dataUri)
}

export function decodeAudioData(dataUri: string): Promise<AudioBuffer> {
  const cached = bufferCache.get(dataUri)
  if (cached) return Promise.resolve(cached)

  const existingPromise = decodingPromises.get(dataUri)
  if (existingPromise) return existingPromise

  const promise = (async () => {
    const ctx = getAudioContext()
    const base64 = dataUri.split(",")[1]
    const binaryString = atob(base64)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }

    const audioBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0))
    bufferCache.set(dataUri, audioBuffer)
    decodingPromises.delete(dataUri)
    return audioBuffer
  })()

  decodingPromises.set(dataUri, promise)
  return promise
}

export interface PlaySoundOptions {
  volume?: number
  playbackRate?: number
  onEnd?: () => void
}

export interface SoundPlayback {
  stop: () => void
}

export function playSoundSync(
  dataUri: string,
  options: PlaySoundOptions = {}
): SoundPlayback | null {
  const buffer = bufferCache.get(dataUri)
  if (!buffer) return null

  const ctx = getAudioContext()
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {})
  }

  const source = ctx.createBufferSource()
  const gain = ctx.createGain()

  source.buffer = buffer
  source.playbackRate.value = options.playbackRate ?? 1
  gain.gain.value = options.volume ?? 1

  source.connect(gain)
  gain.connect(ctx.destination)

  source.onended = () => {
    options.onEnd?.()
  }

  source.start(0)

  return {
    stop: () => {
      try {
        source.stop()
      } catch {
        // No-op if already stopped
      }
    },
  }
}

export async function playSound(
  dataUri: string,
  options: PlaySoundOptions = {}
): Promise<SoundPlayback> {
  const syncPlayback = playSoundSync(dataUri, options)
  if (syncPlayback) return syncPlayback

  const { volume = 1, playbackRate = 1, onEnd } = options
  const ctx = getAudioContext()
  if (ctx.state === "suspended") {
    await ctx.resume().catch(() => {})
  }

  const buffer = await decodeAudioData(dataUri)
  const source = ctx.createBufferSource()
  const gain = ctx.createGain()

  source.buffer = buffer
  source.playbackRate.value = playbackRate
  gain.gain.value = volume

  source.connect(gain)
  gain.connect(ctx.destination)

  source.onended = () => {
    onEnd?.()
  }

  source.start(0)

  return {
    stop: () => {
      try {
        source.stop()
      } catch {
        // No-op if already stopped
      }
    },
  }
}

if (typeof window !== "undefined") {
  const unlockAudio = () => {
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume().catch(() => {})
    }
  }
  window.addEventListener("pointerdown", unlockAudio, {
    capture: true,
    passive: true,
  })
  window.addEventListener("keydown", unlockAudio, {
    capture: true,
    passive: true,
  })
}
