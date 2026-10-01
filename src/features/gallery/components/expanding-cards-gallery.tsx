"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import React, { useCallback, useEffect, useRef, useState } from "react"

import { Tag } from "@/components/ui/tag"
import { useNavigationSoundHandlers } from "@/hooks/soundcn/use-navigation-sound"
import { cn } from "@/lib/utils"

import { GALLERY_SLIDES, type GallerySlide } from "../data/gallery-slides"

type AnimationStatus =
  | "idle"
  | "animating-next"
  | "prepping-prev"
  | "animating-prev"

function isCardOpened(idx: number, status: AnimationStatus): boolean {
  if (status === "idle") {
    return idx === 0
  }
  if (status === "animating-next") {
    return idx === 1
  }
  if (status === "prepping-prev") {
    return idx === 1
  }
  if (status === "animating-prev") {
    return idx === 0
  }
  return idx === 0
}

export function ExpandingCardsGallery({ className }: { className?: string }) {
  const [items, setItems] = useState<GallerySlide[]>(() => GALLERY_SLIDES)
  const [status, setStatus] = useState<AnimationStatus>("idle")
  const { play: playClick, onPointerDown: pressSound } =
    useNavigationSoundHandlers()

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Handle advance forward to next slide
  const nextSlide = useCallback(() => {
    if (status !== "idle") return

    setStatus("animating-next")
    timeoutRef.current = setTimeout(() => {
      setItems((prev) => [...prev.slice(1), prev[0]])
      setStatus("idle")
    }, 500)
  }, [status])

  // Handle step backward to previous slide
  const prevSlide = useCallback(() => {
    if (status !== "idle") return

    // Move last slide to the front immediately
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)])
    setStatus("prepping-prev")
  }, [status])

  // Run the prev animation once the prepping frame is committed
  useEffect(() => {
    if (status === "prepping-prev") {
      let raf2: number | null = null
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setStatus("animating-prev")
          timeoutRef.current = setTimeout(() => {
            setStatus("idle")
          }, 500)
        })
      })

      return () => {
        cancelAnimationFrame(raf1)
        if (raf2 !== null) cancelAnimationFrame(raf2)
      }
    }
  }, [status])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return
      }

      if (e.key === "ArrowRight") {
        playClick()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        playClick()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, playClick])

  // Mobile Touch Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
    touchStartYRef.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null)
      return
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const diffX = touchStartXRef.current - touchEndX
    const diffY = touchStartYRef.current - touchEndY

    // Only trigger if horizontal swipe is dominant
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      playClick()
      if (diffX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartXRef.current = null
    touchStartYRef.current = null
  }

  // Active slide identification for counter
  const activeSlide =
    status === "animating-next" ? (items[1] ?? items[0]) : items[0]

  const activeIndex = GALLERY_SLIDES.findIndex((s) => s.id === activeSlide?.id)
  const displayIndex = activeIndex >= 0 ? activeIndex + 1 : 1
  const totalSlides = GALLERY_SLIDES.length

  const isTrackShifted =
    status === "animating-next" || status === "prepping-prev"

  const isTransitioning =
    status === "animating-next" || status === "animating-prev"

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden bg-card",
        // CSS Custom Properties for sizing:
        // Visual proportion: ~70% highlighted card, ~20% second card, ~10% third card peek & gaps
        // Desktop (672px inner): Opened=460px (68.5%), Closed=135px (20.1%), Gap=12px, Height=430px (Third card peeks in ~53px)
        // Mobile (330px inner): Opened=230px (~70%), Closed=70px (~21%), Gap=8px, Height=370px
        "[--card-closed:70px] [--card-gap:8px] [--card-height:370px] [--card-opened:230px]",
        "sm:[--card-closed:135px] sm:[--card-gap:12px] sm:[--card-height:430px] sm:[--card-opened:460px]",
        className
      )}
    >
      {/* Cards Stage Container */}
      <div
        className="relative w-full overflow-hidden px-4 py-5 sm:px-6 sm:py-7"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Seamless Soft Right Edge Fade (Progressively masked so there is no hard line) */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-card via-card/25 to-transparent backdrop-blur-[1.5px] sm:w-16"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 55%, rgba(0, 0, 0, 0) 100%)",
            maskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 55%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Moving Track */}
        <div
          className={cn(
            "flex items-center",
            isTransitioning
              ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              : "transition-none"
          )}
          style={{
            gap: "var(--card-gap)",
            transform: isTrackShifted
              ? "translateX(calc(-1 * (var(--card-closed) + var(--card-gap))))"
              : "translateX(0px)",
          }}
        >
          {items.map((slide, idx) => {
            const isOpened = isCardOpened(idx, status)

            return (
              <div
                key={slide.id}
                role="button"
                tabIndex={0}
                aria-label={`${slide.title} (${slide.category})`}
                aria-expanded={isOpened}
                onPointerDown={
                  status === "idle" && idx >= 1 ? pressSound : undefined
                }
                onClick={(e) => {
                  if (status !== "idle" || idx === 0) return
                  if (e.detail === 0) playClick()
                  nextSlide()
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    if (status !== "idle" || idx === 0) return
                    playClick()
                    nextSlide()
                  }
                }}
                className={cn(
                  "group relative shrink-0 overflow-hidden rounded-2xl border border-line bg-card select-none",
                  isTransitioning
                    ? "transition-[width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    : "transition-none",
                  isOpened
                    ? "shadow-md"
                    : "cursor-pointer opacity-90 shadow-xs hover:opacity-100"
                )}
                style={{
                  width: isOpened ? "var(--card-opened)" : "var(--card-closed)",
                  height: "var(--card-height)",
                }}
              >
                {/* Background Image */}
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 640px) 240px, 480px"
                  priority={idx < 3}
                  quality={85}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Vignette Overlay for Contrast & Readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                {/* Top-Left Category Tag (Rendered on highlighted card only, in natural Title Case) */}
                {isOpened && (
                  <div className="relative z-10 animate-in p-3 duration-300 fade-in sm:p-4">
                    <Tag className="border-line bg-card/90 text-foreground shadow-xs backdrop-blur-md">
                      {slide.category}
                    </Tag>
                  </div>
                )}

                {/* Bottom Card Content: Title on all cards; Subtitle on highlighted card only */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-3.5 sm:p-4">
                  {/* Headline Title */}
                  <h3
                    className={cn(
                      "font-sans leading-snug font-medium tracking-tight text-white transition-all",
                      isOpened
                        ? "line-clamp-2 text-base sm:text-xl"
                        : "line-clamp-3 text-xs sm:text-sm"
                    )}
                  >
                    {slide.title}
                  </h3>

                  {/* Subtitle / Timestamp - Only on Highlighted Image */}
                  {isOpened && (
                    <p className="mt-1 animate-in text-[11px] font-normal text-white/80 duration-300 fade-in sm:text-xs">
                      {slide.subtitle} • {slide.date}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Clean Minimalist Control Bar */}
      <div className="flex items-center justify-between border-t border-line px-4 py-3 sm:px-6">
        {/* Normalized Slide Counter */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground tabular-nums select-none">
          <span className="font-semibold text-foreground">0{displayIndex}</span>
          <span className="text-muted-foreground/60">/</span>
          <span>0{totalSlides}</span>
        </div>

        {/* Minimalist Prev/Next Arrow Steppers */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onPointerDown={status === "idle" ? pressSound : undefined}
            onClick={(e) => {
              if (status !== "idle") return
              if (e.detail === 0) playClick()
              prevSlide()
            }}
            aria-label="Previous slide"
            className="flex size-8 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onPointerDown={status === "idle" ? pressSound : undefined}
            onClick={(e) => {
              if (status !== "idle") return
              if (e.detail === 0) playClick()
              nextSlide()
            }}
            aria-label="Next slide"
            className="flex size-8 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
