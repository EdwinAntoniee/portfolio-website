import { SITE_INFO } from "@/config/site"
import { AWARDS } from "@/features/portfolio/data/awards"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { PUBLICATIONS } from "@/features/portfolio/data/publications"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

export const dynamic = "force-static"
export const revalidate = false

function buildLlmsFullTxt(): string {
  const email = decodeEmail(USER.email)
  const baseUrl = SITE_INFO.url

  const projectSections = PROJECTS.map((project) => {
    const periodStr = `${project.period.start}${project.period.end ? ` – ${project.period.end}` : " – Present"}`
    const lines = [
      `### ${project.title} (${project.category.toUpperCase()})`,
      `- **URL**: ${baseUrl}/projects/${project.id}`,
      project.links.live ? `- **Live Demo**: ${project.links.live}` : null,
      project.links.repo ? `- **Repository**: ${project.links.repo}` : null,
      `- **Period**: ${periodStr}`,
      `- **Role / Ownership**: ${project.collaboration.role} (${project.collaboration.ownership})`,
      `- **Tagline / Summary**: ${project.tagline}`,
      project.description
        ? `- **Description**: ${project.description.replace(/\n+/g, " ")}`
        : null,
      project.features?.length
        ? `- **Key Features**:\n${project.features.map((f) => `  * ${f}`).join("\n")}`
        : null,
      project.impact?.length
        ? `- **Impact & Metrics**:\n${project.impact.map((m) => `  * ${m}`).join("\n")}`
        : null,
      project.collaboration.contributions?.length
        ? `- **Detailed Contributions**:\n${project.collaboration.contributions.map((c) => `  * ${c}`).join("\n")}`
        : null,
      `- **Technologies / Skills**: ${project.skills.join(", ")}`,
      project.coverSkills?.length
        ? `- **Core Stack**: ${project.coverSkills.join(" · ")}`
        : null,
    ].filter(Boolean)

    return lines.join("\n")
  }).join("\n\n")

  const experienceSections = EXPERIENCES.map((exp) => {
    const posLines = exp.positions
      .map((pos) => {
        const skillsStr = pos.skills?.length
          ? `\n- **Skills**: ${pos.skills.join(", ")}`
          : ""
        const periodStr =
          pos.employmentPeriod.display ??
          (pos.employmentPeriod.isOngoing === false
            ? pos.employmentPeriod.end &&
              pos.employmentPeriod.end !== pos.employmentPeriod.start
              ? `${pos.employmentPeriod.start} – ${pos.employmentPeriod.end}`
              : pos.employmentPeriod.start
            : `${pos.employmentPeriod.start} – ${pos.employmentPeriod.end ?? "Present"}`)
        return `#### ${pos.title} | ${pos.employmentType} (${periodStr})\n${pos.description}${skillsStr}`
      })
      .join("\n\n")

    return `### ${exp.companyName}\n${posLines}`
  }).join("\n\n")

  const certSections = CERTIFICATIONS.map((cert) => {
    return `- **${cert.title}**\n  * Issuer: ${cert.issuer}\n  * Date: ${cert.issueDate}\n  * Credential ID: ${cert.credentialID || "N/A"}\n  * Verification URL: ${cert.credentialURL}`
  }).join("\n\n")

  const awardSections = AWARDS.map((award) => {
    return `- **${award.title}** (${award.grade})\n  * Prize: ${award.prize}\n  * Date: ${award.date}\n  * Details: ${(award.description ?? "").replace(/\n+/g, " ")}`
  }).join("\n\n")

  const publicationSections = PUBLICATIONS.length
    ? PUBLICATIONS.map((pub) => {
        return `- **${pub.title}**\n  * Journal: ${pub.journal}\n  * Date: ${pub.date}\n  * URL: ${pub.url}\n  * Summary: ${pub.description}`
      }).join("\n\n")
    : "No standalone publications currently listed."

  const techCategories = Array.from(
    new Set(TECH_STACK.flatMap((item) => item.categories))
  )
  const techStackSections = techCategories
    .map((cat) => {
      const items = TECH_STACK.filter((item) => item.categories.includes(cat))
        .map((i) => i.title)
        .join(", ")
      return `- **${cat}**: ${items}`
    })
    .join("\n")

  return `# Complete Knowledge Base — Edwin Antonie

> Edwin Antonie is an undergraduate Computer Science student at Bina Nusantara University (Binus) specializing in Intelligent Systems (GPA 3.97/4.00) based in Jakarta, Indonesia. He builds practical machine learning systems, computer vision frameworks, and modern full-stack web applications designed for real-world impact.

---

## 1. Executive Summary & Profile

- **Full Name**: Edwin Antonie
- **Role**: Intelligent Systems & Full-Stack AI Engineer
- **Location**: Palmerah, Jakarta Barat, Indonesia (Timezone: Asia/Jakarta, UTC+7)
- **Email**: ${email}
- **Website**: ${baseUrl}
- **LinkedIn**: https://www.linkedin.com/in/edwin-antonie-171016326
- **GitHub**: https://github.com/EdwinAntoniee
- **Instagram**: https://www.instagram.com/edwin_.a/
- **Bio**: ${USER.bio}
- **About**: ${USER.about}

---

## 2. Education & Academic Background

- **Institution**: Bina Nusantara University (Binus), Jakarta, Indonesia
- **Degree**: Bachelor of Computer Science (S.Kom)
- **Specialization**: Intelligent Systems (Streaming)
- **Period**: 2024 – Present (Expected Graduation: 2028)
- **Cumulative GPA**: **3.97 / 4.00**
- **Key Focus Areas**:
  - Machine Learning & Deep Learning
  - Natural Language Processing (NLP)
  - Computer Vision & Biometrics
  - Explainable AI (XAI) & Anomaly Detection
  - Full-Stack Web Development & API Architecture

---

## 3. Quantified Professional Experience & Leadership

${experienceSections}

---

## 4. In-Depth Project Case Studies & Technical Architecture

${projectSections}

---

## 5. Technical Skillset & Taxonomy

${techStackSections}

---

## 6. Honors & Competition Awards

${awardSections}

---

## 7. Verified Certifications & Credentials

${certSections}

---

## 8. Academic Research & Publications

${publicationSections}
`
}

export function GET(): Response {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
