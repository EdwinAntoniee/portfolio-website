"use client"

import { BriefcaseBusiness, Globe2, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { AsciiBanner } from "@/components/ascii-banner"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { USER } from "@/features/portfolio/data/user"
import { useMounted } from "@/hooks/use-mounted"
import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

export function ProfileHeader() {
  const { l } = useTranslation()
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const isDark = mounted ? resolvedTheme === "dark" : false

  return (
    <header id="about" className="relative z-1 border-b border-line bg-card">
      {/* Top Banner Image with Interactive Scroll Head-Turn and Smooth Bottom Fade/Blur */}
      <div className="relative z-0 h-44 overflow-hidden border-b border-line sm:h-56">
        <AsciiBanner alt="Profile Banner" />

        {/* Smooth bottom fade & blur transition blending into bg-card */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-card via-card/80 to-transparent backdrop-blur-[2px] sm:h-36"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 100%)",
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 px-4 pb-6 sm:px-6 sm:pb-7">
        {/* Identity Section: Left-aligned Avatar overlapping banner + Name & Handle in the blur transition area */}
        <div className="-mt-12 flex items-end gap-3.5 sm:-mt-16 sm:gap-4.5">
          {/* Avatar / Profile Picture */}
          <div className="relative isolate z-20 size-22 shrink-0 overflow-hidden rounded-full border-4 border-card bg-card shadow-[0_12px_32px_rgba(0,0,0,0.24),0_2px_16px_rgba(0,0,0,0.16)] transition-shadow duration-300 sm:size-28 md:size-32 dark:shadow-[0_14px_36px_rgba(0,0,0,0.8),0_2px_20px_rgba(0,0,0,0.6)]">
            {/* Day Mode Profile Picture */}
            <Image
              src={USER.avatar}
              alt={`Portrait of ${USER.displayName}`}
              fill
              priority
              sizes="(min-width: 640px) 128px, 88px"
              className={cn(
                "size-full object-cover object-center transition-opacity duration-500",
                isDark ? "opacity-0" : "opacity-100"
              )}
            />
            {/* Night Mode Profile Picture */}
            <Image
              src={USER.avatarNight || USER.avatar}
              alt={`Portrait of ${USER.displayName} (Night)`}
              fill
              priority
              sizes="(min-width: 640px) 128px, 88px"
              className={cn(
                "size-full object-cover object-center transition-opacity duration-500",
                isDark ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          {/* Identity Info: Display name & @handle sitting right at the transition area */}
          <div className="min-w-0 flex-1 pb-1 sm:pb-1.5">
            <h1 className="text-lg leading-tight font-bold tracking-tight text-foreground sm:text-2xl md:text-[26px]">
              {USER.displayName}
            </h1>
            <p className="mt-0.5 text-[11px] font-normal text-muted-foreground sm:text-sm">
              {USER.headline
                ? l(USER.headline, USER.headlineId)
                : `@${USER.username}`}
            </p>
          </div>
        </div>

        {/* 3-Column Stats/Metadata Section (Title on top, Content on bottom) */}
        <div className="mt-3.5 grid grid-cols-3 divide-x divide-line overflow-hidden rounded-xl border border-line bg-muted/20 px-0.5 py-1.5 shadow-2xs sm:mt-5 sm:px-2 sm:py-3">
          {/* Role */}
          <div className="flex min-h-[38px] min-w-0 flex-1 flex-col items-center justify-center px-0.5 text-center sm:min-h-[46px] sm:px-2">
            <span className="inline-flex items-center gap-1 text-[9px] font-medium text-muted-foreground sm:text-xs">
              <BriefcaseBusiness
                className="size-2.5 shrink-0 sm:size-3.5"
                aria-hidden
              />
              Role
            </span>
            <span
              className="mt-0.5 block w-full truncate text-[8.5px] font-semibold tracking-tight whitespace-nowrap text-foreground sm:mt-1 sm:text-[13px] sm:tracking-normal md:text-sm"
              title={USER.jobTitle}
            >
              {USER.jobTitle}
            </span>
          </div>

          {/* Location */}
          <div className="flex min-h-[38px] min-w-0 flex-1 flex-col items-center justify-center px-0.5 text-center sm:min-h-[46px] sm:px-2">
            <span className="inline-flex items-center gap-1 text-[9px] font-medium text-muted-foreground sm:text-xs">
              <MapPin className="size-2.5 shrink-0 sm:size-3.5" aria-hidden />
              Location
            </span>
            <span
              className="mt-0.5 block w-full truncate text-[8.5px] font-semibold tracking-tight whitespace-nowrap text-foreground sm:mt-1 sm:text-[13px] sm:tracking-normal md:text-sm"
              title={USER.address}
            >
              {USER.address}
            </span>
          </div>

          {/* Website */}
          <div className="flex min-h-[38px] min-w-0 flex-1 flex-col items-center justify-center px-0.5 text-center sm:min-h-[46px] sm:px-2">
            <span className="inline-flex items-center gap-1 text-[9px] font-medium text-muted-foreground sm:text-xs">
              <Globe2 className="size-2.5 shrink-0 sm:size-3.5" aria-hidden />
              Website
            </span>
            <a
              href={USER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 block w-full truncate text-[8px] font-semibold tracking-tight whitespace-nowrap text-foreground transition-colors hover:text-primary sm:mt-1 sm:text-[13px] sm:tracking-normal md:text-sm"
              title="edwinantonie.vercel.app"
            >
              edwinantonie.vercel.app
            </a>
          </div>
        </div>

        {/* Call-to-Action & Social Action Bar: Full-width on mobile with 2 rows, single row on desktop */}
        <div className="mt-3.5 flex flex-col gap-2 sm:mt-4.5 sm:flex-row sm:items-center sm:gap-2.5">
          {/* Primary Action Buttons (Get in Touch & My CV spanning full width on mobile) */}
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:flex-1 sm:gap-2.5">
            <Button
              asChild
              className="h-10 w-full min-w-0 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-[0.98] sm:flex-1 sm:px-5 sm:text-sm"
            >
              <a href="mailto:edwin.xw23@gmail.com" className="justify-center">
                <Mail className="mr-1.5 size-4 shrink-0 sm:mr-2" />
                <span className="truncate">Get in Touch</span>
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="h-10 w-full min-w-0 rounded-lg px-3 text-xs font-semibold shadow-xs transition-all active:scale-[0.98] sm:flex-1 sm:px-5 sm:text-sm"
            >
              <a
                href="https://drive.google.com/file/d/10aZdCQvhw1_KWDKIamThMpxvR5nYRCua/view"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center"
              >
                <span className="mr-1.5 size-4 shrink-0 sm:mr-2 [&>svg]:size-full">
                  <Icons.cv />
                </span>
                <span className="truncate">My CV</span>
              </a>
            </Button>
          </div>

          {/* Secondary Social Action Icons (LinkedIn, Instagram, X, GitHub) on new line on mobile */}
          <div className="grid w-full grid-cols-4 gap-2 sm:flex sm:w-auto sm:shrink-0 sm:gap-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-9 w-full rounded-lg border-line bg-card text-muted-foreground shadow-2xs transition-all hover:border-foreground/25 hover:bg-muted hover:text-foreground active:scale-95 sm:size-10"
            >
              <a
                href="https://www.linkedin.com/in/edwin-antonie-171016326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="justify-center"
              >
                <span className="size-[17px] [&>svg]:size-full">
                  <Icons.linkedin />
                </span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-9 w-full rounded-lg border-line bg-card text-muted-foreground shadow-2xs transition-all hover:border-foreground/25 hover:bg-muted hover:text-foreground active:scale-95 sm:size-10"
            >
              <a
                href="https://www.instagram.com/edwin_.a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="justify-center"
              >
                <span className="size-[17px] [&>svg]:size-full">
                  <Icons.instagram />
                </span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-9 w-full rounded-lg border-line bg-card text-muted-foreground shadow-2xs transition-all hover:border-foreground/25 hover:bg-muted hover:text-foreground active:scale-95 sm:size-10"
            >
              <a
                href="https://x.com/WinnieDePup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                title="X (formerly Twitter)"
                className="justify-center"
              >
                <span className="size-[17px] [&>svg]:size-full">
                  <Icons.x />
                </span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-9 w-full rounded-lg border-line bg-card text-muted-foreground shadow-2xs transition-all hover:border-foreground/25 hover:bg-muted hover:text-foreground active:scale-95 sm:size-10"
            >
              <a
                href="https://github.com/EdwinAntoniee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="justify-center"
              >
                <span className="size-[17px] [&>svg]:size-full">
                  <Icons.github />
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Bio / Summary cleanly underneath the action button row */}
        <p className="mt-3.5 max-w-2xl text-[13px] leading-relaxed text-foreground/90 sm:mt-4 sm:text-[15px]">
          {l(USER.about, USER.aboutId)}
        </p>
      </div>
    </header>
  )
}
