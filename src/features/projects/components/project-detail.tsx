"use client"

import { ExternalLinkIcon, PlayIcon, XIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Icons } from "@/components/icons"
import { Markdown } from "@/components/markdown"
import { SectionSeparator } from "@/components/section-separator"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import type { Project } from "@/features/portfolio/types/projects"
import { useIntentPrefetch } from "@/hooks/use-intent-prefetch"
import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

import { ProjectGallery } from "./project-gallery"

function isExternalUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
}

export function ProjectDetail({ project }: { project: Project }) {
  const { t, l } = useTranslation()
  const backPrefetch = useIntentPrefetch("/projects")
  const [activeMedia, setActiveMedia] = useState<"gallery" | "video">("gallery")
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Close modal on Escape and prevent body scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false)
      }
    }
    if (isVideoModalOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isVideoModalOpen])

  // Always position view at the exact top of the project detail (directly below navbar)
  useEffect(() => {
    const scrollToProjectTop = () => {
      const about = document.getElementById("about")
      const main = document.getElementById("main")
      const nav = document.querySelector("nav")
      const targetY = about
        ? about.offsetTop + about.offsetHeight
        : main
          ? main.offsetTop - (nav?.offsetHeight || 56)
          : 0
      window.scrollTo({ top: targetY, behavior: "instant" })
    }

    scrollToProjectTop()
    const frame = requestAnimationFrame(scrollToProjectTop)
    return () => cancelAnimationFrame(frame)
  }, [project.id])

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("projects_from_detail", "true")
    }
  }

  return (
    <article className="relative z-1 -mt-px bg-card">
      {/* Sticky back nav */}
      <div className="sticky top-14 z-30 border-b border-line bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/75">
        <div className="flex h-12 items-center justify-between gap-3 px-4 md:px-8">
          <Link
            href="/projects"
            prefetch={false}
            scroll={false}
            {...backPrefetch}
            onClick={handleBackClick}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5 sm:size-4"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            {t.projectDetail.backToProjects}
          </Link>

          <div className="flex min-w-0 items-center justify-end gap-2 text-right">
            <span
              className="min-w-0 truncate font-handwritten text-[11px] tracking-tight text-muted-foreground sm:text-sm sm:tracking-normal md:text-[1.1rem] md:tracking-wide"
              title={l(project.category, project.categoryId)}
            >
              {l(project.category, project.categoryId)}
            </span>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <header className="space-y-6 px-4 pt-6 pb-8 md:px-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {project.title}
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl leading-7 text-muted-foreground">
          {l(project.tagline, project.taglineId)}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {project.links.live && isExternalUrl(project.links.live) && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-foreground px-4 py-2 text-sm font-medium text-background shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/85 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:translate-y-0 active:scale-[0.98]"
            >
              <ExternalLinkIcon className="size-4" />
              {t.projectDetail.liveDemo}
            </a>
          )}
          {project.links.prototype &&
            isExternalUrl(project.links.prototype) && (
              <a
                href={project.links.prototype}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-foreground px-4 py-2 text-sm font-medium text-background shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/85 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:translate-y-0 active:scale-[0.98]"
              >
                <Icons.figma className="size-4" />
                {t.projectDetail.livePrototype}
              </a>
            )}
          {project.links.live && !isExternalUrl(project.links.live) && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground">
              <ExternalLinkIcon className="size-4" />
              {project.links.live}
            </span>
          )}
          {project.videoEmbed && (
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-accent hover:text-foreground hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:translate-y-0 active:scale-[0.98]"
            >
              <PlayIcon className="size-4 fill-current text-primary" />
              {t.projectDetail.watchVideo}
            </button>
          )}
          {project.links.repo && isExternalUrl(project.links.repo) && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-accent hover:text-foreground hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:translate-y-0 active:scale-[0.98]"
            >
              <Icons.github className="size-4" />
              {t.projectDetail.sourceCode}
            </a>
          )}
          {project.links.repo && !isExternalUrl(project.links.repo) && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground">
              <Icons.github className="size-4" />
              {project.links.repo}
            </span>
          )}
        </div>
      </header>

      {/* Image / Gallery */}
      <section className="relative border-b border-line px-4 py-6 md:px-8">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0 -z-1 flex items-center justify-center">
          <div className="h-[60%] w-[80%] rounded-[50%] bg-foreground/15 blur-[60px] sm:blur-[80px] dark:bg-white/25" />
        </div>

        {/* Media Switcher when both Gallery and Video are available */}
        {project.gallery &&
          project.gallery.length > 0 &&
          project.videoEmbed && (
            <div className="relative z-10 mb-4 flex items-center justify-end">
              <div className="inline-flex rounded-lg border border-line bg-muted/30 p-1">
                <button
                  type="button"
                  onClick={() => setActiveMedia("gallery")}
                  className={cn(
                    "cursor-pointer rounded-md px-3 py-1 text-xs font-medium transition-colors",
                    activeMedia === "gallery"
                      ? "bg-card font-semibold text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t.projectDetail.images}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMedia("video")}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors",
                    activeMedia === "video"
                      ? "bg-card font-semibold text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <PlayIcon className="size-3 fill-current text-primary" />
                  {t.projectDetail.videoDemo}
                </button>
              </div>
            </div>
          )}

        {activeMedia === "video" && project.videoEmbed ? (
          <figure className="relative aspect-video overflow-hidden rounded-xl border border-line bg-card shadow-sm">
            {project.videoEmbed.src.endsWith(".mp4") ? (
              <video
                src={project.videoEmbed.src}
                controls
                autoPlay
                className="size-full object-contain"
              >
                <track kind="captions" />
              </video>
            ) : (
              <iframe
                src={`${project.videoEmbed.src}${project.videoEmbed.src.includes("?") ? "&" : "?"}autoplay=1`}
                title={project.videoEmbed.title ?? project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full"
              />
            )}
          </figure>
        ) : project.gallery && project.gallery.length > 0 ? (
          <ProjectGallery
            images={project.gallery}
            title={project.title}
            layout={project.layout}
          />
        ) : project.videoEmbed ? (
          <figure className="relative aspect-video overflow-hidden rounded-xl border border-line bg-card shadow-sm">
            {project.videoEmbed.src.endsWith(".mp4") ? (
              <video
                src={project.videoEmbed.src}
                controls
                className="size-full object-contain"
              >
                <track kind="captions" />
              </video>
            ) : (
              <iframe
                src={project.videoEmbed.src}
                title={project.videoEmbed.title ?? project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full"
              />
            )}
          </figure>
        ) : project.layout === "phone" ? (
          <div className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-muted p-6 shadow-sm select-none sm:min-h-[580px] sm:p-10">
            {/* Background: /card-bg.webp */}
            <Image
              src="/card-bg.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="pointer-events-none object-cover select-none"
              priority
            />

            {/* Smartphone device mockup frame */}
            <div className="relative z-10 flex aspect-[9/19.5] h-[430px] items-center justify-center overflow-hidden rounded-[2.2rem] border-[6px] border-neutral-900 bg-neutral-950 shadow-2xl ring-1 shadow-black/70 ring-white/15 sm:h-[500px] sm:rounded-[2.6rem]">
              <div className="absolute top-2.5 z-20 h-3.5 w-20 rounded-full bg-neutral-900 ring-1 ring-neutral-700/60 sm:w-24" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 320px, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          <figure className="relative aspect-video overflow-hidden rounded-xl border border-line bg-card shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
              priority
            />
          </figure>
        )}
      </section>

      {/* Project metadata grid */}
      <section className="relative grid gap-px border-b border-line bg-line sm:grid-cols-3">
        <MetaCard
          label={t.projectDetail.ownership}
          value={l(
            project.collaboration.ownership,
            project.collaboration.ownershipId
          )}
        />
        <MetaCard
          label={t.projectDetail.role}
          value={l(project.collaboration.role, project.collaboration.roleId)}
        />
        <MetaCard
          label={t.projectDetail.team}
          value={project.collaboration.team}
        />
      </section>

      {/* My contributions */}
      <Section title={t.projectDetail.myRole}>
        <ul className="space-y-3">
          {l(
            project.collaboration.contributions,
            project.collaboration.contributionsId
          ).map((item, i) => (
            <li key={i} className="flex items-baseline gap-3 text-sm leading-7">
              <span className="mt-0.5 shrink-0 font-handwritten text-[1.1rem] tracking-wide text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Features */}
      <Section title={t.projectDetail.features}>
        <ul className="space-y-3">
          {l(project.features, project.featuresId).map((item, i) => (
            <li key={i} className="flex items-baseline gap-3 text-sm leading-7">
              <span className="mt-0.5 shrink-0 font-handwritten text-[1.1rem] tracking-wide text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Impact */}
      <Section title={t.projectDetail.impact}>
        <ul className="space-y-3">
          {l(project.impact, project.impactId).map((item, i) => (
            <li key={i} className="flex items-baseline gap-3 text-sm leading-7">
              <span className="mt-0.5 shrink-0 font-handwritten text-[1.1rem] tracking-wide text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Tech Stack */}
      <Section title={t.projectDetail.stack}>
        <div className="flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <Tag key={skill} className="px-2.5 py-1 text-xs">
              {skill}
            </Tag>
          ))}
        </div>
      </Section>

      {/* Notes */}
      {project.notes && (
        <Section title={t.projectDetail.notes}>
          <Prose className="text-sm leading-7 text-muted-foreground">
            <Markdown>{l(project.notes, project.notesId)}</Markdown>
          </Prose>
        </Section>
      )}

      {/* Section separator */}
      <SectionSeparator />

      {/* Video Modal Overlay */}
      {isVideoModalOpen && project.videoEmbed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex animate-in items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200 fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-2">
                <PlayIcon className="size-4 fill-current text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {project.videoEmbed.title ?? project.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close modal"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              {project.videoEmbed.src.endsWith(".mp4") ? (
                <video
                  src={project.videoEmbed.src}
                  controls
                  autoPlay
                  className="size-full object-contain"
                >
                  <track kind="captions" />
                </video>
              ) : (
                <iframe
                  src={`${project.videoEmbed.src}${project.videoEmbed.src.includes("?") ? "&" : "?"}autoplay=1`}
                  title={project.videoEmbed.title ?? project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full border-0"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-b border-line px-4 py-8 md:px-8">
      <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-4 py-5 md:px-6">
      <dt className="mb-1 font-handwritten text-[1rem] tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-xs font-medium text-foreground">{value}</dd>
    </div>
  )
}
