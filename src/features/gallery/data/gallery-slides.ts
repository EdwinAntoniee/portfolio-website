export interface GallerySlide {
  id: string
  category: string
  categoryColor: string
  accentColor: string
  title: string
  subtitle: string
  src: string
  themeColor: string
  date: string
}

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: "bncc-team",
    category: "Organization",
    categoryColor: "#2A9D8F",
    accentColor: "#5CE1E6",
    title: "BNCC Learning & Training Team",
    subtitle: "Campus Technology Organization",
    src: "/image/gallery/bncc-team.webp",
    themeColor: "#1d3557",
    date: "2025",
  },
  {
    id: "first-freshmen-meetup",
    category: "Mentorship",
    categoryColor: "#F77F00",
    accentColor: "#F39C12",
    title: "First Meetup with the Freshmen",
    subtitle: "Freshmen Partner @ Binus University",
    src: "/image/gallery/first-freshmen-meetup.webp",
    themeColor: "#264653",
    date: "2025",
  },
  {
    id: "first-year-program-wrapup",
    category: "Mentorship",
    categoryColor: "#E63946",
    accentColor: "#EF233C",
    title: "Wrapping Up the First-Year Program",
    subtitle: "Campus Transition Mentorship",
    src: "/image/gallery/first-year-program-wrapup.webp",
    themeColor: "#2b2d42",
    date: "2026",
  },
  {
    id: "phinla-waste-sorting",
    category: "Volunteer",
    categoryColor: "#43AA8B",
    accentColor: "#90E0EF",
    title: "Earth Day Waste-Sorting Campaign",
    subtitle: "Educator Volunteer @ Phinla",
    src: "/image/gallery/phinla-waste-sorting.webp",
    themeColor: "#05668d",
    date: "2026",
  },
  {
    id: "bncc-activist-mentor",
    category: "Mentorship",
    categoryColor: "#7209B7",
    accentColor: "#A370F7",
    title: "BNCC Activist Mentor",
    subtitle: "Guiding Leadership Project Development",
    src: "/image/gallery/bncc-activist-mentor.webp",
    themeColor: "#3a0ca3",
    date: "2026",
  },
  {
    id: "academic-research-presentation",
    category: "Academics",
    categoryColor: "#028090",
    accentColor: "#00A896",
    title: "Academic Research Presentation",
    subtitle: "Collaborative College Course Project",
    src: "/image/gallery/academic-research-presentation.webp",
    themeColor: "#2b1b3d",
    date: "2026",
  },
  {
    id: "liaison-officer-lyt",
    category: "Teamwork",
    categoryColor: "#D90429",
    accentColor: "#F4A261",
    title: "Liaison Officer @ LYT",
    subtitle: "Event Coordination & Quick Thinking",
    src: "/image/gallery/liaison-officer-lyt.webp",
    themeColor: "#1f2937",
    date: "2024",
  },
]
