"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { FooterClock } from "@/components/footer-clock"
import { USER } from "@/features/portfolio/data/user"
import { useMounted } from "@/hooks/use-mounted"
import { cn } from "@/lib/utils"

const CONTACT_LINKS = [
  { title: "Email", href: "mailto:edwin.xw23@gmail.com" },
  { title: "GitHub", href: "https://github.com/EdwinAntoniee" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/edwin-antonie-171016326",
  },
  { title: "Instagram", href: "https://www.instagram.com/edwin_.a/" },
]

const INDEX_LINKS = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
]

export function SiteFooter() {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const isDark = mounted ? resolvedTheme === "dark" : false

  return (
    <footer className="relative aspect-[16/11] min-h-[380px] w-full overflow-hidden border-t-0 bg-[#EFE7D8] select-none sm:aspect-[16/9] sm:min-h-0 dark:bg-[#343f49]">
      {/* 1. Day Mode Postcard Background */}
      <div
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-500 ease-in-out",
          mounted
            ? isDark
              ? "pointer-events-none opacity-0"
              : "opacity-100"
            : "opacity-100 dark:opacity-0"
        )}
      >
        <Image
          src="/image/postcard-footer-day.jpg"
          alt="Vintage Postcard Footer (Day)"
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 100vw, 720px"
          className="pointer-events-none object-cover object-right-top select-none sm:object-center"
        />
      </div>

      {/* 2. Night Mode Postcard Background */}
      <div
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-500 ease-in-out",
          mounted
            ? isDark
              ? "opacity-100"
              : "pointer-events-none opacity-0"
            : "opacity-0 dark:opacity-100"
        )}
      >
        <Image
          src="/image/postcard-footer-night.png"
          alt="Vintage Postcard Footer (Night)"
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 100vw, 720px"
          className="pointer-events-none object-cover object-right-top select-none sm:object-center"
        />
      </div>

      {/* Postcard Surface Content Layer */}
      <div className="relative z-10 grid h-full grid-cols-12 px-6 py-6 sm:px-9 sm:py-8 md:px-11 md:py-9">
        {/* Left Side: Contact & Index at top, Shoutout at bottom left */}
        <div className="col-span-7 flex flex-col justify-between pt-1 sm:pt-2">
          {/* Top: Contact and Index Columns */}
          <div className="flex flex-row gap-5 sm:gap-9 md:gap-12">
            {/* Contact Column */}
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-handwritten text-base font-bold tracking-[0.15em] text-black uppercase sm:text-lg md:text-[1.15rem] dark:text-[#f3ede2]">
                Contact
              </h3>
              <ul className="space-y-1 border-l border-black/60 pl-2.5 sm:space-y-1.5 sm:pl-3.5 dark:border-[#f3ede2]/60">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.title} className="relative flex items-center">
                    <span className="absolute top-1/2 -left-2.5 w-2 border-b border-black/60 sm:-left-3.5 sm:w-2.5 dark:border-[#f3ede2]/60" />
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="font-handwritten text-sm leading-snug text-black transition-colors hover:text-neutral-700 hover:underline sm:text-base md:text-[1.05rem] dark:text-[#f3ede2] dark:hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Index Column */}
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-handwritten text-base font-bold tracking-[0.15em] text-black uppercase sm:text-lg md:text-[1.15rem] dark:text-[#f3ede2]">
                Index
              </h3>
              <ul className="space-y-1 border-l border-black/60 pl-2.5 sm:space-y-1.5 sm:pl-3.5 dark:border-[#f3ede2]/60">
                {INDEX_LINKS.map((link) => (
                  <li key={link.href} className="relative flex items-center">
                    <span className="absolute top-1/2 -left-2.5 w-2 border-b border-black/60 sm:-left-3.5 sm:w-2.5 dark:border-[#f3ede2]/60" />
                    <Link
                      href={link.href}
                      className="font-handwritten text-sm leading-snug text-black transition-colors hover:text-neutral-700 hover:underline sm:text-base md:text-[1.05rem] dark:text-[#f3ede2] dark:hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Left: Shoutout to Zickrian */}
          <div className="pt-3 pb-1 text-black dark:text-[#f3ede2]">
            <p className="font-handwritten text-[11px] leading-tight font-medium sm:text-xs md:text-sm">
              Huge Shoutout to Zickrian for the inspiration of the website!!
            </p>
            <p className="mt-0.5 font-handwritten text-[11px] leading-tight font-medium sm:text-xs md:text-sm">
              Go check out his own portfolio at:{" "}
              <a
                href="https://www.zickrian.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 transition-colors hover:text-neutral-700 dark:hover:text-white"
              >
                zickrian.dev
              </a>
            </p>
          </div>
        </div>

        {/* Right Corner: Name "Edwin Antonie", with single-line Time and Location underneath */}
        <div className="col-span-5 flex flex-col items-start justify-end pb-1 pl-2 sm:pb-2 sm:pl-4">
          {/* Signature Name: Edwin Antonie */}
          <div>
            <p className="font-handwritten text-xl leading-tight font-bold tracking-tight text-black sm:text-2xl md:text-[28px] dark:text-[#f3ede2]">
              Edwin Antonie
            </p>
          </div>

          {/* Time & Location Postal Stamps */}
          <div className="mt-2 flex flex-col gap-1.5 text-black sm:mt-2.5 sm:gap-2 dark:text-[#f3ede2]">
            {/* Single-line Clock / Time Stamp */}
            <FooterClock
              timeZone={USER.timeZone}
              place={USER.address}
              singleLine
              className="text-black dark:text-[#f3ede2]"
            />

            {/* Single-line Location Stamp: "Asia/Jakarta, Indonesia" */}
            <div
              className="inline-flex items-center gap-2 text-black dark:text-[#f3ede2]"
              aria-hidden
            >
              <svg
                className="size-4 shrink-0 stroke-current"
                viewBox="0 0 20 20"
                stroke="currentColor"
                fill="none"
              >
                <circle cx="10" cy="10" r="9" strokeWidth="1.25" />
                <ellipse cx="10" cy="10" rx="4" ry="9" strokeWidth="1.25" />
                <path d="M1 10h18M1.9 6h16.2M1.9 14h16.2" strokeWidth="1.25" />
              </svg>
              <span
                className="font-handwritten text-xs whitespace-nowrap text-black sm:text-sm dark:text-[#f3ede2]"
                suppressHydrationWarning
              >
                Asia/Jakarta, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
