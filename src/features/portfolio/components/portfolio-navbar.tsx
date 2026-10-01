"use client"

import {
  CaretDown,
  GearSix,
  SpeakerHigh,
  SpeakerX,
} from "@phosphor-icons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type MouseEvent, useEffect, useRef, useState } from "react"

import { useChat } from "@/components/chat-provider"
import { preloadChatPanel } from "@/components/chat-widget"
import { ThemeSwitch } from "@/components/theme-switch"
import { useNavigationSoundHandlers } from "@/hooks/soundcn/use-navigation-sound"
import { useSoundPreference } from "@/hooks/soundcn/use-sound-preference"
import { useLanguagePreference } from "@/hooks/use-language-preference"
import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

type IconProps = {
  className?: string
  active?: boolean
}

/* Refined Duotone SVG Icons with subtle translucent fills adaptive to light & dark mode + micro-animations */
function IconHome({ className, active = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        "transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105",
        className
      )}
    >
      <path
        d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        fill="currentColor"
        opacity={active ? 0.16 : 0.06}
      />
      <path
        d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-90"
      />
    </svg>
  )
}

function IconProjects({ className, active = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        "transition-transform duration-300 ease-out group-hover:scale-105",
        className
      )}
    >
      <path
        d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
        fill="currentColor"
        opacity={active ? 0.16 : 0.06}
      />
      <path
        d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-[4px_19px] transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:skew-x-2"
      />
      <circle
        cx="14"
        cy="15"
        r="1.1"
        fill="currentColor"
        className="origin-[14px_15px] transition-transform duration-300 ease-out group-hover:scale-125"
      />
    </svg>
  )
}

function IconGallery({ className, active = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        "transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-2",
        className
      )}
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="3"
        fill="currentColor"
        opacity={active ? 0.16 : 0.06}
      />
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8.5"
        cy="8.5"
        r="1.5"
        fill="currentColor"
        className="origin-[8.5px_8.5px] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
      />
      <path
        d="m21 15-5-5-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14 14 2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconChat({ className, active = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        "origin-bottom-left transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-rotate-3",
        className
      )}
    >
      <path
        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        fill="currentColor"
        opacity={active ? 0.16 : 0.06}
      />
      <path
        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="12"
        r="1"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
      />
      <circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
        className="transition-transform delay-75 duration-300 ease-out group-hover:-translate-y-0.5"
      />
      <circle
        cx="16"
        cy="12"
        r="1"
        fill="currentColor"
        className="transition-transform delay-150 duration-300 ease-out group-hover:-translate-y-0.5"
      />
    </svg>
  )
}

export function PortfolioNavbar({ className }: { className?: string }) {
  const pathname = usePathname()
  const { setIsChatOpen } = useChat()
  const { enabled, setEnabled } = useSoundPreference()
  const { language, setLanguage } = useLanguagePreference()
  const { t } = useTranslation()
  const { play: playNavigation, onPointerDown: pressSound } =
    useNavigationSoundHandlers()
  const [settingsOpen, setSettingsOpen] = useState(false)

  const settingsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!settingsOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Element | null
      if (target?.closest?.("[data-settings-trigger]")) return
      if (!settingsRef.current?.contains(target)) setSettingsOpen(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [settingsOpen])

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    isActive: boolean
  ) => {
    setSettingsOpen(false)
    if (
      !isActive &&
      event.detail === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      playNavigation()
    }
  }

  const items = [
    {
      id: "home",
      label: t.nav.home,
      href: "/",
      icon: IconHome,
      type: "link" as const,
    },
    {
      id: "projects",
      label: t.nav.projects,
      href: "/projects",
      icon: IconProjects,
      type: "link" as const,
    },
    {
      id: "gallery",
      label: t.nav.gallery,
      href: "/gallery",
      icon: IconGallery,
      type: "link" as const,
    },
    {
      id: "chat",
      label: t.nav.chat,
      icon: IconChat,
      type: "action" as const,
      onClick: () => setIsChatOpen(true),
      onPointerEnter: preloadChatPanel,
    },
    {
      id: "settings",
      label: t.nav.settings,
      icon: GearSix,
      type: "action" as const,
      onClick: () => {
        setSettingsOpen((open) => !open)
      },
    },
  ]

  const activeItemIndex = items.findIndex(
    (item) =>
      item.type === "link" &&
      (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
  )

  return (
    <nav
      className={cn(
        "border-b-straight relative sticky top-0 z-40 -mt-px border-b bg-card/95 backdrop-blur-md",
        className
      )}
      style={{ borderBottom: "1px solid var(--line)" }}
      aria-label="Main Navigation"
    >
      <div className="relative grid h-full w-full grid-cols-5">
        {items.map((item) => {
          const isActive =
            item.type === "link" &&
            (item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href))
          const Icon = item.icon

          if (item.type === "link") {
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive || undefined}
                onPointerDown={isActive ? undefined : pressSound}
                onClick={(event) => handleLinkClick(event, isActive)}
                className={cn(
                  "group relative flex h-full min-w-0 cursor-pointer items-center justify-center gap-1.5 px-2 text-xs font-medium transition-colors duration-200 select-none focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset sm:text-sm",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon
                  active={isActive}
                  className="size-4 shrink-0 transition-colors duration-200 sm:size-4.5"
                />
                <span
                  className={cn(
                    "hidden max-w-24 overflow-hidden font-sans whitespace-nowrap transition-[opacity,max-width] duration-200 ease-out sm:block",
                    isActive ? "opacity-100" : "max-w-0 opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          }

          return (
            <button
              key={item.id}
              type="button"
              onPointerDown={pressSound}
              onClick={(event) => {
                if (event.detail === 0) playNavigation()
                item.onClick()
              }}
              onPointerEnter={item.onPointerEnter}
              data-settings-trigger={item.id === "settings" || undefined}
              aria-expanded={item.id === "settings" ? settingsOpen : undefined}
              aria-haspopup={item.id === "settings" ? "dialog" : undefined}
              title={item.label}
              aria-label={item.label}
              className={cn(
                "group relative flex h-full min-w-0 cursor-pointer items-center justify-center gap-1.5 px-2 text-xs font-medium text-muted-foreground transition-colors duration-200 select-none hover:text-foreground focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset sm:text-sm",
                item.id === "settings" && settingsOpen && "text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "size-4 shrink-0 transition-transform duration-300 ease-out sm:size-4.5",
                  item.id === "settings" &&
                    (settingsOpen
                      ? "rotate-180 duration-500"
                      : "duration-500 group-hover:rotate-90")
                )}
              />
              <span
                className={cn(
                  "hidden max-w-24 overflow-hidden font-sans whitespace-nowrap transition-[opacity,max-width] duration-200 ease-out sm:block",
                  item.id === "settings" && settingsOpen
                    ? "opacity-100"
                    : "max-w-0 opacity-0"
                )}
              >
                {item.label}
              </span>
              {item.id === "settings" && (
                <CaretDown
                  className={cn(
                    "hidden size-3 shrink-0 transition-transform duration-200 sm:block",
                    settingsOpen && "rotate-180"
                  )}
                  weight="bold"
                  aria-hidden
                />
              )}
            </button>
          )
        })}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/5 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: activeItemIndex >= 0 ? 1 : 0,
            transform: `translate3d(${Math.max(activeItemIndex, 0) * 100}%, 0, 0)`,
          }}
        >
          <span
            className="absolute bottom-0 h-0.5 bg-foreground"
            style={{ insetInline: "min(1rem, 20%)" }}
          />
        </span>
      </div>

      {settingsOpen && (
        <div
          ref={settingsRef}
          role="dialog"
          aria-label="Settings"
          className="absolute top-[calc(100%+0.75rem)] right-3 z-50 w-72 rounded-2xl border border-line bg-card p-3 shadow-xl sm:right-6"
        >
          <span
            aria-hidden
            className="absolute -top-1.5 right-7 size-3 rotate-45 border-t border-l border-line bg-card"
          />
          <div className="relative space-y-3">
            <SettingsRow label={t.settings.language}>
              <SettingsOption
                label={t.settings.english}
                pressed={language === "en"}
                onPointerDown={pressSound}
                onClick={(event) => {
                  if (event.detail === 0) playNavigation()
                  setLanguage("en")
                }}
              >
                <span className="text-[10px] font-semibold">EN</span>
              </SettingsOption>
              <SettingsOption
                label={t.settings.indonesian}
                pressed={language === "id"}
                onPointerDown={pressSound}
                onClick={(event) => {
                  if (event.detail === 0) playNavigation()
                  setLanguage("id")
                }}
              >
                <span className="text-[10px] font-semibold">ID</span>
              </SettingsOption>
            </SettingsRow>

            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-foreground">
                {t.settings.theme}
              </span>
              <ThemeSwitch size="sm" />
            </div>

            <SettingsRow label={t.settings.sound}>
              <SettingsOption
                label={t.settings.soundOn}
                pressed={enabled}
                onPointerDown={() => playNavigation(true)}
                onClick={(event) => {
                  setEnabled(true)
                  if (event.detail === 0) playNavigation(true)
                }}
              >
                <SpeakerHigh size={16} weight="duotone" aria-hidden />
              </SettingsOption>
              <SettingsOption
                label={t.settings.soundOff}
                pressed={!enabled}
                onPointerDown={pressSound}
                onClick={(event) => {
                  if (event.detail === 0) playNavigation()
                  setEnabled(false)
                }}
              >
                <SpeakerX size={16} weight="duotone" aria-hidden />
              </SettingsOption>
            </SettingsRow>
          </div>
        </div>
      )}
    </nav>
  )
}

function SettingsRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-1 rounded-xl bg-muted p-1">
        {children}
      </div>
    </div>
  )
}

function SettingsOption({
  label,
  pressed,
  onClick,
  onPointerDown,
  children,
}: {
  label: string
  pressed: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onPointerDown?: (event: React.PointerEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onPointerDown={onPointerDown}
      onClick={onClick}
      className={cn(
        "grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        pressed && "bg-card text-foreground shadow-sm"
      )}
    >
      {children}
    </button>
  )
}
