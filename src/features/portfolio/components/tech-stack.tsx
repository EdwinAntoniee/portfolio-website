"use client"

import { useTranslation } from "@/lib/i18n/use-translation"

import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

export function TechStack() {
  const { t } = useTranslation()

  const aiMlItems = TECH_STACK.filter((item) =>
    item.categories.includes("AI & ML")
  )
  const webDevItems = TECH_STACK.filter((item) =>
    item.categories.includes("Web Development")
  )
  const toolsItems = TECH_STACK.filter((item) =>
    item.categories.includes("Tools & Technologies")
  )

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>
          {t.techStack.title}
          <PanelTitleSup>({TECH_STACK.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 gap-2.5 p-3.5 sm:grid-cols-2 sm:gap-3 sm:p-4">
        {/* Card 1: 01 AI & ML */}
        <div className="flex flex-col rounded-xl border border-line bg-card/60">
          <div className="flex items-center justify-between border-b border-line px-3.5 py-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground select-none">
                01
              </span>
              <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                AI & ML
              </h3>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground tabular-nums">
              ({aiMlItems.length})
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 p-3">
            {aiMlItems.map((tech) => (
              <TechBadge key={tech.key} tech={tech} />
            ))}
          </div>
        </div>

        {/* Card 2: 02 Web Development */}
        <div className="flex flex-col rounded-xl border border-line bg-card/60">
          <div className="flex items-center justify-between border-b border-line px-3.5 py-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground select-none">
                02
              </span>
              <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                Web Development
              </h3>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground tabular-nums">
              ({webDevItems.length})
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 p-3">
            {webDevItems.map((tech) => (
              <TechBadge key={tech.key} tech={tech} />
            ))}
          </div>
        </div>

        {/* Card 3: 03 Tools & Technologies (Spans full width in Bento) */}
        <div className="flex flex-col rounded-xl border border-line bg-card/60 sm:col-span-2">
          <div className="flex items-center justify-between border-b border-line px-3.5 py-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground select-none">
                03
              </span>
              <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                Tools & Technologies
              </h3>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground tabular-nums">
              ({toolsItems.length})
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 p-3">
            {toolsItems.map((tech) => (
              <TechBadge key={tech.key} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </Panel>
  )
}

function TechBadge({ tech }: { tech: TechStackType }) {
  return (
    <a
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-6 items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-2 text-xs font-medium text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80"
    >
      {tech.iconId ? (
        <svg viewBox="0 0 24 24" aria-hidden>
          <use href={`/icons/tech-stack-v2.svg#${tech.iconId}`} />
        </svg>
      ) : null}
      {tech.title}
    </a>
  )
}
