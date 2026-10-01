"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export interface SectionSeparatorProps {
  className?: string
  initialProgress?: number
}

const PATH_D =
  "M0 8 C60 0, 120 16, 180 8 C240 0, 300 16, 360 8 C420 0, 480 16, 540 8 C570 4, 590 6, 600 8"

/**
 * Sky-themed Contrail & Draggable Airplane Section Separator (Option 2)
 *
 * Features:
 * - Smooth dashed contrail flight path (Option 2)
 * - Draggable airplane that smoothly tracks and banks along the wavy curve
 * - Origin cloud puff at the left edge
 * - Real-time tangent pitch/bank calculation based on curve slope
 * - Touch & pointer drag support with pointer capture
 */
export function SectionSeparator({
  className,
  initialProgress = 0.85,
}: SectionSeparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  const [progress, setProgress] = useState(initialProgress)
  const [isDragging, setIsDragging] = useState(false)
  const [planePos, setPlanePos] = useState({
    xPercent: initialProgress * 100,
    yPercent: 50,
    angle: -12,
  })

  // Calculate plane position and tangent angle along the SVG wavy path
  const updatePosition = useCallback((targetProgress: number) => {
    const path = pathRef.current
    const container = containerRef.current
    if (!path || !container) return

    try {
      const totalLen = path.getTotalLength()
      const clamped = Math.max(0.02, Math.min(0.98, targetProgress))
      const distance = clamped * totalLen
      const pt = path.getPointAtLength(distance)

      // Sample a nearby point to calculate the exact tangent flight angle
      const delta = Math.min(3, totalLen - distance)
      const nextPt = path.getPointAtLength(distance + delta)

      const containerRect = container.getBoundingClientRect()
      // Adjust angle for screen-space aspect ratio stretch
      const screenX1 = (pt.x / 600) * (containerRect.width || 600)
      const screenY1 = (pt.y / 16) * (containerRect.height || 36)
      const screenX2 = (nextPt.x / 600) * (containerRect.width || 600)
      const screenY2 = (nextPt.y / 16) * (containerRect.height || 36)

      const rad = Math.atan2(screenY2 - screenY1, screenX2 - screenX1)
      const angle = (rad * 180) / Math.PI

      setPlanePos({
        xPercent: (pt.x / 600) * 100,
        yPercent: (pt.y / 16) * 100,
        angle,
      })
    } catch {
      // Fallback if SVG geometry calculation fails
      setPlanePos({
        xPercent: targetProgress * 100,
        yPercent: 50,
        angle: -12,
      })
    }
  }, [])

  // Sync on mount and progress change
  useEffect(() => {
    updatePosition(progress)
  }, [progress, updatePosition])

  // Recalculate angles on resize
  useEffect(() => {
    const handleResize = () => updatePosition(progress)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [progress, updatePosition])

  const handlePointerFromClientX = useCallback(
    (clientX: number) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      if (rect.width <= 0) return
      const raw = (clientX - rect.left) / rect.width
      const clamped = Math.max(0.02, Math.min(0.98, raw))
      setProgress(clamped)
      updatePosition(clamped)
    },
    [updatePosition]
  )

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    handlePointerFromClientX(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    handlePointerFromClientX(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId)
      } catch {
        // Pointer capture was already released
      }
      setIsDragging(false)
    }
  }

  return (
    <div
      ref={containerRef}
      role="separator"
      aria-label="Interactive draggable airplane section separator"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        "group/sep relative z-1 flex h-10 w-full touch-none items-center bg-card transition-colors select-none",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
    >
      {/* 1. Left Cloud Puff (Origin where the flight contrail starts) */}
      <div className="pointer-events-none absolute left-3 z-1 flex items-center gap-1 opacity-70 transition-all duration-300 group-hover/sep:scale-105 group-hover/sep:opacity-100 sm:left-5">
        <svg
          className="size-4 text-primary/55 dark:text-primary/70"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </div>

      {/* 2. Contrail Dotted Wave Path (Option 2) */}
      <svg
        className="pointer-events-none relative h-4 w-full text-primary/45 transition-colors duration-300 group-hover/sep:text-primary/75 dark:text-primary/50 dark:group-hover/sep:text-primary/80"
        viewBox="0 0 600 16"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d={PATH_D}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeDasharray="14 8"
          strokeLinecap="round"
          className="transition-all duration-300 group-hover/sep:animate-contrail-flow"
        />
      </svg>

      {/* 3. Draggable Interactive Jet Silhouette */}
      <div
        style={{
          left: `${planePos.xPercent}%`,
          top: `${planePos.yPercent}%`,
          transform: `translate(-50%, -50%) rotate(${planePos.angle}deg)`,
        }}
        title="Drag me along the flight path! ✈️"
        className={cn(
          "absolute z-2 flex items-center justify-center rounded-full bg-card px-1 py-0.5 text-primary shadow-2xs transition-transform",
          isDragging
            ? "scale-130 cursor-grabbing shadow-md ring-2 ring-primary/40 duration-75"
            : "cursor-grab duration-200 hover:scale-125 hover:text-primary"
        )}
      >
        <svg
          className="size-3.5 transition-transform sm:size-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>

      {/* 4. Mini Trailing Cloud Puff on the right */}
      <div className="pointer-events-none absolute right-3 z-1 opacity-45 transition-opacity group-hover/sep:opacity-80 sm:right-6">
        <svg
          className="size-3 text-primary/45 dark:text-primary/60"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </div>
    </div>
  )
}
