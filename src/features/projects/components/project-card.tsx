"use client"

import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Tag } from "@/components/ui/tag"
import type { Project } from "@/features/portfolio/types/projects"
import { useIntentPrefetch } from "@/hooks/use-intent-prefetch"
import { localize } from "@/lib/i18n/localize"
import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

export function ProjectCard({
  project,
  eager,
}: {
  project: Project
  eager?: boolean
}) {
  const { language } = useTranslation()
  const href = `/projects/${project.id}`
  const intentPrefetch = useIntentPrefetch(href)
  const coverSkills = project.coverSkills ?? project.skills.slice(0, 3)
  const tagline = localize(language, project.tagline, project.taglineId)

  const handleCardClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("projects_scroll_y", String(window.scrollY))
      sessionStorage.setItem("projects_from_detail", "true")
      sessionStorage.setItem("projects_last_id", project.id)
    }
  }

  return (
    <div
      id={`project-${project.id}`}
      className="group flex h-full flex-1 flex-col justify-between bg-card p-3 transition-[background-color] duration-200 ease-out hover:bg-accent-muted"
    >
      <Link
        href={href}
        prefetch={false}
        scroll={false}
        {...intentPrefetch}
        onClick={handleCardClick}
        className="flex h-full flex-1 flex-col justify-between gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        {/* Photo frame container (locked design) */}
        <div className="relative flex aspect-[16/10] w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-muted select-none">
          {/* In-progress status pill */}
          {project.status === "in-progress" && (
            <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 rounded-full border border-primary/25 bg-card/90 px-2.5 py-0.5 text-[11px] font-medium text-primary shadow-xs backdrop-blur-md dark:border-primary/35 dark:bg-card/85">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              <span>
                {language === "id" ? "Sedang Berjalan" : "In Progress"}
              </span>
            </div>
          )}

          {/* Main Background: Sharp unblurred card-bg.webp */}
          <Image
            src="/card-bg.webp"
            alt=""
            fill
            sizes="(min-width: 640px) 550px, 100vw"
            className="pointer-events-none object-cover select-none"
            priority={eager}
          />

          {/* Floating Frame in the center: Phone mockup or Standard Desktop */}
          {project.layout === "phone" ? (
            <div className="relative z-10 flex aspect-[9/19.5] h-[90%] items-center justify-center overflow-hidden rounded-[1.25rem] border-[3px] border-neutral-800/90 bg-neutral-950 shadow-2xl ring-1 shadow-black/60 ring-white/15 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
              {/* Dynamic Island pill */}
              <div className="absolute top-1.5 z-20 h-2 w-12 rounded-full bg-neutral-900/95 ring-1 ring-neutral-700/60" />

              {/* Main project photo filling the phone screen */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 240px, 45vw"
                className="relative z-10 object-cover"
                quality={85}
                loading={eager ? "eager" : "lazy"}
                fetchPriority={eager ? "high" : "auto"}
              />
            </div>
          ) : (
            <div className="relative z-10 flex aspect-[16/10] w-[86%] items-center justify-center overflow-hidden rounded-lg border border-black/20 bg-black/40 shadow-xl shadow-black/40 transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 dark:border-white/20">
              {/* Empty space / slip filler: Blurred project photo */}
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 640px) 480px, 90vw"
                className="pointer-events-none scale-110 object-cover opacity-75 blur-md brightness-90 select-none"
                priority={eager}
              />
              <div className="pointer-events-none absolute inset-0 bg-black/15 dark:bg-black/30" />

              {/* Main project photo: 100% visible, uncropped */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 480px, 90vw"
                className="relative z-10 object-contain drop-shadow-md"
                quality={85}
                loading={eager ? "eager" : "lazy"}
                fetchPriority={eager ? "high" : "auto"}
              />
            </div>
          )}
        </div>

        {/* Project details inside card (original design) */}
        <div className="flex flex-1 flex-col justify-between gap-2 p-2">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <p className="text-lg leading-snug font-medium text-balance">
                {project.title}
              </p>
              <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
              {tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            {project.status === "in-progress" && (
              <Tag className="gap-1.5 border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/15 dark:text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                {language === "id" ? "Sedang Berjalan" : "In Progress"}
              </Tag>
            )}
            {coverSkills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const isOdd = projects.length % 2 === 1

  return (
    <div className="grid grid-cols-1 border-b border-line sm:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={cn(
            "relative flex h-full flex-col border-b border-line",
            index % 2 === 1 && "sm:border-l sm:border-line"
          )}
        >
          <ProjectCard project={project} eager={index < 2} />
        </div>
      ))}
      {isOdd && (
        <div className="relative hidden min-h-[300px] flex-col items-center justify-center border-b border-line bg-card p-6 select-none sm:flex sm:border-l sm:border-line">
          <span className="font-handwritten text-3xl font-medium tracking-wider text-muted-foreground">
            Still cooking
          </span>
        </div>
      )}
    </div>
  )
}
