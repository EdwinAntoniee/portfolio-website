"use client"

import { ArrowUpRightIcon, FolderBookmarkIcon } from "lucide-react"
import Link from "next/link"

import type { Project } from "@/features/portfolio/types/projects"
import { useIntentPrefetch } from "@/hooks/use-intent-prefetch"
import { cn } from "@/lib/utils"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const href = `/projects/${project.id}`
  const intentPrefetch = useIntentPrefetch(href)

  return (
    <Link
      className={cn(
        "flex items-center pr-2 transition-colors duration-200 ease-out hover:bg-accent-muted",
        className
      )}
      href={href}
      prefetch={false}
      {...intentPrefetch}
    >
      <div className="flex w-15 shrink-0 items-center justify-center self-stretch">
        <div className="flex size-6 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
          <FolderBookmarkIcon className="size-4" aria-hidden />
        </div>
      </div>

      <div className="flex-1 self-stretch border-l border-dashed border-line p-4 pr-2">
        <p className="mb-1 leading-snug font-medium text-balance">
          {project.title}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-sm text-muted-foreground">{project.year}</span>
          {project.status === "in-progress" && (
            <span className="py-0.2 inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 text-[10px] font-medium text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400">
              <span className="size-1 animate-pulse rounded-full bg-amber-500" />
              In Progress
            </span>
          )}
        </div>
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </Link>
  )
}
