"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { useMounted } from "@/hooks/use-mounted"
import { cn } from "@/lib/utils"

export interface AsciiBannerProps {
  dayBase?: string
  dayScrolled?: string
  nightBase?: string
  nightScrolled?: string
  alt?: string
  className?: string
  scanlines?: boolean
  scrollThreshold?: number
}

/**
 * Dynamic Scroll & Day/Night Transition Banner
 *
 * Mapped to descriptive SVGs stored in /public/banners/:
 * - Day Mode: banner-day-base.svg (looking forward) -> banner-day-typing.svg (coding on laptop)
 * - Night Mode: banner-night-base.svg (looking forward) -> banner-night-typing.svg (coding on laptop)
 *
 * Fast, snappy scroll response (threshold: 50px) ensures the head turn is immediately
 * noticeable as soon as the user begins scrolling.
 */
export function AsciiBanner({
  dayBase = "/banners/banner-day-base.svg",
  dayScrolled = "/banners/banner-day-typing.svg",
  nightBase = "/banners/banner-night-base.svg",
  nightScrolled = "/banners/banner-night-typing.svg",
  alt = "Profile Banner",
  className = "",
  scanlines = true,
  scrollThreshold = 50,
}: AsciiBannerProps) {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0
          // Fast and snappy: turns head decisively within the first 50px of scroll
          const rawProgress = Math.min(1, Math.max(0, y / scrollThreshold))
          // Smoothstep easing for fluid motion
          const eased = rawProgress * rawProgress * (3 - 2 * rawProgress)
          setScrollProgress(eased)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollThreshold])

  const isDark = mounted ? resolvedTheme === "dark" : false

  return (
    <div
      className={cn(
        "relative isolate size-full overflow-hidden bg-card select-none",
        className
      )}
    >
      {/* 1. Day Mode Banner Layers (banner-day-base.svg -> banner-day-typing.svg) */}
      <div
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-500 ease-in-out",
          isDark ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <img
          src={dayBase}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-[center_38%]"
        />
        <img
          src={dayScrolled}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          style={{ opacity: scrollProgress }}
          className="absolute inset-0 size-full object-cover object-[center_38%] will-change-[opacity]"
        />
      </div>

      {/* 2. Night Mode Banner Layers (banner-night-base.svg -> banner-night-typing.svg) */}
      <div
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-500 ease-in-out",
          isDark ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <img
          src={nightBase}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-[center_38%]"
        />
        <img
          src={nightScrolled}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          style={{ opacity: scrollProgress }}
          className="absolute inset-0 size-full object-cover object-[center_38%] will-change-[opacity]"
        />
      </div>

      {/* 3. Subtle CRT Scanlines for retro / painterly pixel harmony */}
      {scanlines && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.32)_51%)] bg-[length:100%_3px] opacity-25 mix-blend-overlay"
        />
      )}

      {/* 4. Soft Vignette Edge Shadow for seamless blending into card borders */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08)_0%,transparent_30%,rgba(0,0,0,0.22)_100%)] opacity-70"
      />
    </div>
  )
}

export default AsciiBanner
