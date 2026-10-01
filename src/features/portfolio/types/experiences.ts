export type ExperiencePosition = {
  id: string
  title: string
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
    /** Optional custom display string (e.g., "06.2024 & 06.2025"). */
    display?: string
    /** Set false for completed single-date roles so it doesn't show "- Present". */
    isOngoing?: boolean
    /** Set true to hide the calculated duration tag for awkward/short time stamps. */
    hideDuration?: boolean
  }
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string
  description?: string
  /** Indonesian translation of `description`; supports Markdown */
  descriptionId?: string
  /** UI icon to represent the role type. */
  icon?: React.ReactElement
  skills?: string[]
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean
}

export type Experience = {
  id: string
  companyName: string
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string
  /** URL to the company's website. */
  companyWebsite?: string
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[]
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean
}
