import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

export const dynamic = "force-static"
export const revalidate = false

function buildLlmsTxt(): string {
  const email = decodeEmail(USER.email)
  const baseUrl = SITE_INFO.url

  return `# Edwin Antonie

> Edwin Antonie is an undergraduate Computer Science student at Bina Nusantara University (Binus) specializing in Intelligent Systems (GPA 3.97/4.00) based in Jakarta, Indonesia. He builds practical machine learning systems, computer vision frameworks, and modern full-stack web applications designed for real-world impact.

## Core Projects & Systems
- [Moofy](${baseUrl}/projects/moofy): Emotion-aware cinema recommendation platform interpreting natural language user stories via DistilBERT and Sentence-BERT on ChromaDB.
- [InForm](${baseUrl}/projects/inform): Multimodal fitness & nutrition intelligence platform extracting InBody scan sheets via Donut OCR with deterministic medical validation and LLM synthesis.
- [Online Shoppers Prediction Engine](${baseUrl}/projects/users-behaviour-analyzer): E-commerce purchase intention forecasting engine using XGBoost and SMOTE with a Streamlit interface.
- [Maintain](${baseUrl}/projects/maintain): Dual-AI industrial predictive maintenance platform combining LightGBM telemetry gatekeeping with a local Qwen2.5-7B SOP copilot (COMPFEST 18 Top 50).
- [Repeat Order Prediction](${baseUrl}/projects/repeat-order-prediction): Cost-sensitive automotive retention machine learning pipeline on 319K+ records (SPARC 2026 National Finalist).
- [En Garde](${baseUrl}/projects/en-garde): Unsupervised public procurement fraud detection with Isolation Forest and SHAP explanations (Find IT! 2026 UGM 11th Place).
- [Robust FAS](${baseUrl}/projects/robust-fas): Two-stage biometric verification coupling MobileNetV2 presentation attack detection with ArcFace on OULU-NPU datasets.
- [Air-Writing Hangul Recognition](${baseUrl}/projects/air-writing-hangul-recognition): End-to-end computer vision gesture recognition system classifying 64 Korean Hangul characters via MediaPipe hand tracking and HOG-SVM.

## Professional & Campus Experience
- [Bina Nusantara University](${baseUrl}/#experience): Promotion and Event Part Time (Campus tours, presentations, event planning).
- [Bina Nusantara Computer Club (BNCC)](${baseUrl}/#experience): Learning and Training Staff (Weekly classes, curriculum design, mentorship for 25+ members).
- [Bina Nusantara University](${baseUrl}/#experience): Freshmen Partner (Mentoring freshmen through university transition and community service).
- [Phinla Earth Day 2026](${baseUrl}/#experience): Paid Educator Volunteer (Environmental education and interactive community outreach).
- [The Lion Youth Tournament](${baseUrl}/#experience): Liaison Officer (Team coordination and on-the-spot event operations).
- [Fun n Smart Course](${baseUrl}/#experience): Math Tutor (Junior High math and physics tutoring).

## Competitions & Honors
- **SPARC 2026 Data Science Competition**: National Finalist 🏆 (Universitas Ciputra).
- **Find IT! 2026 Hackathon**: 11th Place Nationwide 🏅 (Universitas Gadjah Mada).
- **COMPFEST 18 AI Innovation Challenge**: Top 50 🌟 (Universitas Indonesia).

## Core Technical Stack
- **AI & Machine Learning**: Python, PyTorch, Scikit-Learn, LightGBM, XGBoost, DistilBERT, Sentence-Transformers, ChromaDB, OpenCV, MediaPipe, ArcFace, Ollama, SHAP.
- **Web & Full-Stack**: TypeScript, React, Next.js, FastAPI, Tailwind CSS, Vite, Streamlit.
- **Tools & DevOps**: Git, GitHub, Docker, Docker Compose, Microsoft Azure, n8n, Claude Code, Antigravity.

## Site Navigation & Resources
- [Home](${baseUrl}/): Main portfolio, profile summary, experiences, and technical overview.
- [All Projects](${baseUrl}/projects): Comprehensive archive of AI/ML, computer vision, and web engineering projects.
- [Visual Gallery](${baseUrl}/gallery): Visual documentation of hackathons, research activities, and project milestones.

## Contact & Profiles
- [Portfolio Website](${baseUrl}): ${baseUrl}
- [GitHub](https://github.com/EdwinAntoniee): @EdwinAntoniee
- [LinkedIn](https://www.linkedin.com/in/edwin-antonie-171016326): Edwin Antonie
- [Instagram](https://www.instagram.com/edwin_.a/): @edwin_.a
- [Email](mailto:${email}): ${email}
`
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
