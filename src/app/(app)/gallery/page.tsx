import Script from "next/script"

import { SectionSeparator } from "@/components/section-separator"
import { SITE_INFO } from "@/config/site"
import { ExpandingCardsGallery } from "@/features/gallery/components/expanding-cards-gallery"
import { GALLERY_SLIDES } from "@/features/gallery/data/gallery-slides"
import { createPageMetadata } from "@/lib/seo"

const title = "AI & Software Project Gallery"
const description =
  "An interactive visual showcase of AI systems, hackathons, engineering workflows, and technical breakthroughs."
const keywords = [
  "Edwin Antonie gallery",
  "Edwin Antonie portfolio gallery",
  "AI project showcase",
  "machine learning project gallery",
  "software engineering portfolio",
]

export const metadata = createPageMetadata({
  title,
  description,
  path: "/gallery",
  keywords,
})

function getGalleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${SITE_INFO.url}/gallery#gallery`,
    url: `${SITE_INFO.url}/gallery`,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${SITE_INFO.url}/#website`,
    },
    associatedMedia: GALLERY_SLIDES.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      description: `${item.title} - ${item.subtitle}`,
      contentUrl: item.src.startsWith("http")
        ? item.src
        : `${SITE_INFO.url}${item.src}`,
      uploadDate: item.date,
    })),
  }
}

export default function GalleryPage() {
  return (
    <>
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getGalleryJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative z-1 bg-card">
        {/* Expanding Cards Gallery */}
        <ExpandingCardsGallery />

        {/* Section Separator */}
        <SectionSeparator />
      </div>
    </>
  )
}
