"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import { useCallback, useState } from "react"

import { cn } from "@/lib/utils"

export function ProjectGallery({
  images,
  title,
  layout = "desktop",
}: {
  images: string[]
  title: string
  layout?: "desktop" | "phone"
}) {
  const [current, setCurrent] = useState(0)
  const len = images.length
  const isInitialImage = current === 0

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + len) % len)
  }, [len])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % len)
  }, [len])

  return (
    <div className="relative">
      {layout === "phone" ? (
        <div className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-muted p-6 shadow-sm select-none sm:min-h-[580px] sm:p-10">
          {/* Background: same /card-bg.webp as the project card */}
          <Image
            src="/card-bg.webp"
            alt=""
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="pointer-events-none object-cover select-none"
            priority
            aria-hidden
          />

          {/* Smartphone device mockup frame */}
          <div className="relative z-10 flex aspect-[9/19.5] h-[430px] items-center justify-center overflow-hidden rounded-[2.2rem] border-[6px] border-neutral-900 bg-neutral-950 shadow-2xl ring-1 shadow-black/70 ring-white/15 sm:h-[500px] sm:rounded-[2.6rem]">
            {/* Dynamic Island pill */}
            <div className="absolute top-2.5 z-20 h-3.5 w-20 rounded-full bg-neutral-900 ring-1 ring-neutral-700/60 sm:w-24" />

            {/* Screen content */}
            <Image
              src={images[current]}
              alt={`${title} - ${current + 1}`}
              fill
              sizes="(min-width: 640px) 320px, 80vw"
              loading={isInitialImage ? "eager" : "lazy"}
              fetchPriority={isInitialImage ? "high" : "auto"}
              className="object-cover transition-opacity duration-300"
              quality={90}
            />
          </div>

          {/* Navigation arrows positioned on outer container */}
          {len > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute top-1/2 left-3 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line/60 bg-card/90 text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105 active:scale-95 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute top-1/2 right-3 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line/60 bg-card/90 text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105 active:scale-95 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="relative aspect-1200/630 overflow-hidden rounded-lg border border-line bg-card shadow-sm">
          <Image
            src={images[current]}
            alt={`${title} - ${current + 1}`}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            loading={isInitialImage ? "eager" : "lazy"}
            fetchPriority={isInitialImage ? "high" : "auto"}
            className="object-contain transition-opacity duration-300"
            quality={85}
          />

          {/* Navigation arrows */}
          {len > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute top-1/2 left-2 z-10 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line/50 bg-card/85 text-foreground shadow-md backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-card active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute top-1/2 right-2 z-10 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line/50 bg-card/85 text-foreground shadow-md backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-card active:scale-95"
                aria-label="Next image"
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </>
          )}
        </div>
      )}

      {/* Dots indicator */}
      {len > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                index === current
                  ? "w-6 bg-foreground"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
