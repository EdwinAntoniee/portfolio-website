"use client"

import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

import { CollapsibleList } from "@/components/collapsible-list"
import { useIntentPrefetch } from "@/hooks/use-intent-prefetch"
import { useTranslation } from "@/lib/i18n/use-translation"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectItem } from "./project-item"

export function Projects() {
  const { t } = useTranslation()
  const intentPrefetch = useIntentPrefetch("/projects")

  return (
    <Panel id="projects">
      <PanelHeader>
        <div className="relative flex items-center justify-center">
          <PanelTitle>
            {t.projects.title}
            <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          </PanelTitle>

          <Link
            href="/projects"
            prefetch={false}
            {...intentPrefetch}
            className="absolute right-0 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.projects.viewAll}
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
