import { USER } from "@/features/portfolio/data/user"

const DEFAULT_SITE_URL = "https://edwinantonie.vercel.app"

function normalizeSiteUrl(value?: string) {
  if (!value) return DEFAULT_SITE_URL

  const url = value.startsWith("http") ? value : `https://${value}`
  return url.replace(/\/+$/, "")
}

export const SITE_INFO = {
  name: USER.displayName,
  url: normalizeSiteUrl(process.env.APP_URL),
  ogImage: USER.ogImage,
  description: USER.seoDescription ?? USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#91C8E4",
  dark: "#91C8E4",
}

export const GITHUB_USERNAME = "EdwinAntoniee"
export const UTM_PARAMS = {
  utm_source: "edwinantonie",
}
