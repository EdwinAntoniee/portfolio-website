import type { Award } from "../types/awards"

export const AWARDS: Award[] = [
  {
    id: "compfest-18-aic",
    prize: "Top 50 🌟",
    title: "AI Innovation Challenge — COMPFEST 18",
    date: "2026-08",
    grade: "National",
    description: `Recognized as Top 50 nationwide at the COMPFEST 18 AI Innovation Challenge with Maintain, a prescriptive industrial maintenance copilot.

- As data lead, ran EDA on sensor telemetry and engineered physics-based features to flag early mechanical strain.
- Became the on-screen presenter for our project trailer, writing the script and narrating the product vision.`,
    descriptionId: `Meraih Top 50 nasional pada kompetisi AI Innovation Challenge COMPFEST 18 bersama proyek Maintain, copilot pemeliharaan preskriptif industri.

- Sebagai data lead, melakukan EDA pada telemetri sensor dan merekayasa fitur berbasis fisika untuk mendeteksi beban mekanis sejak dini.
- Menjadi presenter di layar untuk trailer proyek, menulis naskah, dan menarasikan visi produk.`,
  },
  {
    id: "find-it-2026-hackathon",
    prize: "11th Place 🏅",
    title: "Find IT! 2026 Hackathon — Universitas Gadjah Mada (UGM)",
    date: "2026-05",
    grade: "National",
    description: `Awarded 11th Place Nationwide at the Find IT! 2026 UGM National Hackathon with En Garde, an unsupervised public tender anomaly detection platform.

- Audited thousands of procurement records to resolve data anomalies and engineer fraud-risk signals for an Isolation Forest model.
- Applied TreeSHAP to translate black-box predictions into top fraud indicators for government audit teams.`,
    descriptionId: `Meraih Peringkat 11 Nasional pada Hackathon Nasional Find IT! 2026 UGM bersama proyek En Garde, platform deteksi anomali tender pengadaan publik tanpa supervisi.

- Mengaudit ribuan data pengadaan untuk mengatasi anomali data dan merekayasa sinyal risiko kecurangan untuk model Isolation Forest.
- Menerapkan TreeSHAP untuk menerjemahkan prediksi black-box menjadi indikator kecurangan teratas bagi tim auditor pemerintah.`,
  },
  {
    id: "sparc-2026-data-science",
    prize: "Finalist 🏆",
    title: "SPARC 2026 Data Science Competition — Universitas Ciputra",
    date: "2026-02",
    grade: "National",
    description: `Recognized as a National Finalist at the SPARC 2026 Data Science Competition with Team Strive, predicting automotive repeat financing retention.

- Cleaned and engineered features on 319K+ automotive financing records, tackling 87.5% class imbalance with cost-sensitive LightGBM to reach 0.70 ROC-AUC.
- Co-presented the team's modeling framework to a judge panel, defending threshold tuning and trade-off decisions in live technical Q&A.`,
    descriptionId: `Lolos sebagai Finalis Nasional pada Kompetisi Sains Data SPARC 2026 bersama Tim Strive, memprediksi retensi pembiayaan kembali kendaraan bermotor.

- Membersihkan dan merekayasa fitur pada 319K+ data pembiayaan otomotif, mengatasi ketimpangan kelas 87.5% dengan LightGBM cost-sensitive hingga mencapai 0.70 ROC-AUC.
- Mempresentasikan kerangka pemodelan tim di hadapan dewan juri, mempertahankan penyesuaian threshold dan keputusan kompromi dalam sesi tanya jawab teknis.`,
  },
]
