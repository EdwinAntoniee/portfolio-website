# 📋 Portfolio Content Preparation Guide & Master Content Record

**For:** Edwin Antonie (Portfolio Personalization)  
**Target Repository:** `zickriann` Next.js Portfolio (`C:\Users\VICTUS\OneDrive\Documents\Edwin's_Project\Firdausy\zickriann`)  
**Status:** Synchronized with `CV_EdwinAntonie.pdf`, your codebase, and latest requirements.

---

## 🧭 Executive Summary: What’s Pre-Filled vs. What Needs Your Choice

| Category                                                |             Status             | Details                                                                                                                                                                                    |
| :------------------------------------------------------ | :----------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Profile & Identity**                               |     🟢 **100% Pre-Filled**     | Name, handles, email (`edwin.xw23@gmail.com`), GPA (3.97), bilingual bio & about, SEO tags, and social URLs. Phone & flip-sentences discarded as requested.                                |
| **2. Projects (`projects.ts`)**                         | 🟢 **Pre-Filled (8 Projects)** | Moofy updated with guest/auth watchlist & mood history feature; InForm updated highlighting frontend bridging role; all 8 projects fully detailed with bilingual copy.                     |
| **3. Experiences (`experiences.tsx`)**                  |  🟢 **Pre-Filled (6 Roles)**   | Ordered exactly as in your new CV: Math Tutor, Liaison Officer, Paid Educator Volunteer, Promotion & Event Part Time, BNCC Learning & Training Staff, Freshmen Partner.                    |
| **4. Visual Gallery (`gallery-slides.ts`)**             |     🟢 **100% Completed**      | 7 active gallery slides configured with photos in `/public/image/gallery/` (BNCC Team, Freshmen Partner, Phinla Volunteer, Academic Presentation, LYT, etc.).                              |
| **5. Bootcamps & Certifications (`certifications.ts`)** |  🟢 **Pre-Filled (7 Certs)**   | Ordered exactly as in your new CV: Nvidia Deep Learning, BNCC Front-End, Skill Academy AI Python, Skill Academy AI Application, Taalenta N8N, Microsoft Azure AI-900, Hacktiv8/Google.org. |
| **6. Competitions / Awards (`awards.ts`)**              |  🟢 **Pre-Filled (3 Awards)**  | Ordered exactly as in your new CV: SPARC 2026 Finalist, Find IT! 2026 UGM 11th Place, and COMPFEST 18 AIC Top 50.                                                                          |
| **7. Publications (`publications.ts`)**                 |       🟢 **Pre-Filled**        | Cleared / set to empty `[]` (academic preprints/concept papers documented in projects).                                                                                                    |
| **8. AI Chatbot (`portfolio-chat-prompt.ts`)**          |     🟢 **100% Pre-Filled**     | Full persona prompt, bilingual tone, and technical FAQ configured for Edwin Antonie.                                                                                                       |
| **9. API Keys (`.env.local`)**                          |          🟢 **Ready**          | Groq & Resend API keys provided.                                                                                                                                                           |

---

## 1. 👤 Profile & Personal Information

### File Locations:

- `src/features/portfolio/data/user.ts`
- `src/config/site.ts`
- `src/features/portfolio/components/profile-header.tsx`
- `src/components/site-footer.tsx`

### Verified Information:

- **First Name**: `Edwin`
- **Last Name**: `Antonie`
- **Display Name**: `Edwin Antonie`
- **Username**: `Winnieee`
- **Headline**: `Undergraduate Student @ Binus University`
- **Education**: `Bina Nusantara University (2024-2028) [Expected], Computer Science Major, Streaming in Intelligent Systems`
- **Current GPA**: `3.97`
- **Gender**: `male`
- **Pronouns**: `he/him`
- **Address / Location**: `Palmerah, Jakarta Barat, Indonesia`
- **Contact Email**: `edwin.xw23@gmail.com`
- **Academic Email**: `edwin.antonie@binus.ac.id`
- **Email Base64 (for anti-spam link)**: `ZWR3aW4ueHcyM0BnbWFpbC5jb20=`
- **Phone Number**: _Discarded per user instruction._
- **Personal Domain / Target URL**: `https://edwinantonie.vercel.app`
- **Resume / CV Link**: `https://drive.google.com/file/d/10aZdCQvhw1_KWDKIamThMpxvR5nYRCua/view`

### Bilingual Biographies:

- **`bio` (English)**:
  > A 5th-semester Computer Science student specializing in Intelligent Systems, passionate about building practical, user-friendly software with real-world impact.
- **`bioId` (Indonesian)**:
  > Mahasiswa Ilmu Komputer semester 5 dengan spesialisasi Sistem Cerdas yang berdedikasi membangun perangkat lunak praktis, ramah pengguna, dan berdampak nyata.
- **`about` (English)**:
  > I’m a 5th-semester Computer Science student specializing in Intelligent Systems, passionate about turning ideas into practical, user-friendly software. I enjoy learning, adapting, and collaborating with others to build reliable solutions that make everyday life a little easier. I’m always looking to grow as an engineer and create technology with real impact.
- **`aboutId` (Indonesian)**:
  > Saya adalah mahasiswa Ilmu Komputer semester 5 dengan spesialisasi di bidang Sistem Cerdas (Intelligent Systems). Saya memiliki minat besar dalam mewujudkan sebuah ide menjadi perangkat lunak yang praktis dan ramah pengguna. Saya senang belajar, beradaptasi, dan berkolaborasi dengan tim untuk membangun solusi yang dapat memudahkan kehidupan sehari-hari. Saya selalu bersemangat untuk terus berkembang sebagai seorang engineer dan menciptakan teknologi yang memberikan dampak nyata.

### Rotating Subtitles (`flipSentences`):

_Discarded per user instruction._

### Social Media Links:

- **GitHub Profile**: `https://github.com/EdwinAntoniee`
- **LinkedIn Profile**: `https://www.linkedin.com/in/edwin-antonie-171016326`
- **Instagram Profile**: `https://www.instagram.com/edwin_.a/`
- **GitHub Contributions Map**: _Discarded per user instruction._
- **GitHub Star Badge**: _Discarded per user instruction._

### SEO & Metadata:

- **`seoTitle`**: `Edwin Antonie | Intelligent Systems & Full-Stack AI Engineer`
- **`seoDescription`**: `Edwin Antonie is an undergraduate Computer Science student at Binus University specializing in Intelligent Systems, Machine Learning pipelines, and modern full-stack web applications.`
- **`keywords`**:
  `Edwin Antonie, Edwin Antonie Binus, Intelligent Systems, Machine Learning Engineer, NLP, Computer Vision, Full Stack AI, Moofy, InForm, Binus University, Jakarta Developer, Deep Learning`

---

## 2. 🚀 Projects Master Data

---

### Project 1: Moofy — Emotion-Aware Cinema Recommendation Platform

- **Project ID (URL Slug):** `moofy`
- **Title:** `Moofy: Emotion-Aware Cinema Recommendation Platform`
- **Category:** `Natural Language Processing / Recommender Systems`
- **Category (Indonesian):** `Natural Language Processing / Sistem Rekomendasi`
- **Year:** `2026`
- **Period:** `01.2026 - Present`
- **Tagline (English):** An emotion-aware recommendation engine that interprets natural-language user stories to generate personalized film suggestions tailored to current emotional states.
- **Tagline (Indonesian):** Mesin rekomendasi berbasis emosi yang memahami cerita bahasa alami pengguna untuk menghasilkan rekomendasi film yang dipersonalisasi sesuai suasana hati.
- **SEO Description:** Hybrid NLP movie recommendation system combining DistilBERT emotion classification and Sentence-BERT semantic search on ChromaDB.
- **Badge:** `Featured Project`

#### Collaboration & Role

- **Ownership:** `Personal Project` (Self-Initiated Academic Evolution)
- **Ownership (Indonesian):** `Proyek Mandiri`
- **Team:** `Solo Developer`
- **My Role:** `Full-Stack AI Engineer & System Architect`
- **My Role (Indonesian):** `Full-Stack AI Engineer & Arsitek Sistem`
- **Role Contributions (English):**
  - Combined DistilBERT emotion classification with Sentence-BERT semantic plot retrieval to deliver accurate, mood-tailored movie recommendations from natural-language user stories.
  - Deployed a responsive full-stack platform using FastAPI and React on Vercel, delivering real-time recommendations with interactive mood-tuning controls.
  - Built an embedding and vector search pipeline using ChromaDB to retrieve semantically relevant films across 10,000+ TMDB movie plots in under 120ms.
- **Role Contributions (Indonesian):**
  - Menggabungkan klasifikasi emosi DistilBERT dengan pencarian semantik Sentence-BERT untuk menghasilkan rekomendasi film yang sesuai cerita dan suasana hati pengguna.
  - Menerapkan platform full-stack responsif menggunakan FastAPI dan React di Vercel dengan latensi rekomendasi real-time dan slider pembobotan emosi interaktif.
  - Membangun pipeline embedding dan vector database menggunakan ChromaDB untuk menelusuri 10.000+ sinopsis film TMDB dalam waktu di bawah 120ms.

#### Features

- **English:**
  - Natural-language narrative input (users describe their day in plain text instead of selecting static genre tags).
  - Fine-tuned 6-class DistilBERT emotion classification (Joy, Sadness, Anger, Fear, Love, Surprise).
  - Sentence-BERT 384-dimensional dense semantic embedding search over TMDB cinematic records.
  - Dynamic alpha slider allowing users to balance mood resonance versus strict narrative plot relevance.
  - Dual user modes supporting instant guest exploration as well as authorized user accounts with personalized watchlists, persistent mood & query history, and saved recommendation archives.
  - Fast, asynchronous REST API built with FastAPI and hosted with a clean, responsive web interface.
- **Indonesian:**
  - Input narasi bahasa alami di mana pengguna menceritakan harinya tanpa harus memilih tag genre statis.
  - Klasifikasi 6 kelas emosi menggunakan model DistilBERT yang di-fine-tune.
  - Pencarian semantik 384-dimensi berbasis Sentence-BERT pada database film TMDB.
  - Pengatur bobot alpha dinamis untuk menyeimbangkan kecocokan emosi versus relevansi plot cerita.
  - Pengalaman pengguna ganda yang mendukung akses instan tamu (guest) serta akun terautentikasi dengan fitur watchlist pribadi, riwayat suasana hati & pencarian, dan arsip rekomendasi tersimpan.
  - REST API asinkronus berbasis FastAPI dengan antarmuka web modern yang cepat dan responsif.

#### Impact & Results

- **English:**
  - Sub-150ms end-to-end inference latency achieved through vector indexing and quantized model pipelines.
  - Successfully transitioned a theoretical NLP course assignment into a publicly deployed, production-grade web application.
  - Over 10,000 film entries indexed and queryable in real-time.
- **Indonesian:**
  - Latensi inferensi end-to-end di bawah 150ms melalui pengindeksan vektor dan pipeline model teroptimasi.
  - Berhasil mengubah tugas teori NLP kampus menjadi aplikasi web skala produksi yang live dan dapat diakses publik.
  - Lebih dari 10.000 entri film terindeks dan dapat ditelusuri secara real-time.

#### Tech Stack

- **Full Stack Skills:** `Python`, `PyTorch`, `DistilBERT`, `Sentence-Transformers`, `ChromaDB`, `FastAPI`, `React`, `Vite`, `Tailwind CSS`, `Uvicorn`
- **Cover Highlights:** `NLP`, `PyTorch`, `ChromaDB`, `React`
- **Live Demo:** `https://moofy-five.vercel.app`
- **Source Code Repo:** `https://github.com/EdwinAntoniee/Moofy-Emotion-Aware-Movie-Recommendation`

---

### Project 2: InForm — Multimodal Precision Nutrition & Corrective Fitness (CERA)

- **Project ID (URL Slug):** `inform`
- **Title:** `InForm: Multimodal Health Intelligence & Corrective Fitness`
- **Category:** `Document AI / Healthcare AI`
- **Category (Indonesian):** `Document AI / AI Kesehatan`
- **Year:** `2026`
- **Period:** `06.2026 - Present`
- **Tagline (English):** A multimodal fitness intelligence platform that extracts physical InBody scan sheets via OCR to generate validated, personalized daily nutrition and corrective exercise plans.
- **Tagline (Indonesian):** Platform kecerdasan kebugaran multimodal yang mengekstrak lembar pemindaian InBody via OCR untuk menghasilkan rencana nutrisi dan latihan korektif yang tervalidasi.
- **SEO Description:** End-to-end healthcare AI platform combining on-device Donut OCR with deterministic medical validation and LLM synthesis.
- **Badge:** `Collaborative Passion Project`

#### Collaboration & Role

- **Ownership:** `Group Project` (Cross-Border Collaborative Team)
- **Team:** `Edwin Antonie, Clairine Angie, Cliff Owen, Reinhart Gautama`
- **My Role:** `Frontend Developer & Cross-Functional Bridge`
- **My Role (Indonesian):** `Frontend Developer & Jembatan Lintas Fungsi`
- **Role Contributions (English):**
  - Served as the frontend developer, bridging communication between the UI/UX designer, backend engineers, and other developers to translate complex clinical health calculations into an intuitive, responsive user interface.
  - Connected backend logic with UI/UX development, translating raw clinical outputs and algorithmic exercise filters into an accessible frontend experience.
  - Engineered an automated dual-validation safety guard on the client-server bridge that strictly verifies LLM-generated coaching output against raw calculated medical baselines, preventing numerical hallucinations across 88+ passing automated tests.
- **Role Contributions (Indonesian):**
  - Berperan sebagai frontend developer yang menjembatani komunikasi antara UI/UX designer, developer backend, dan anggota tim lainnya untuk menerjemahkan kalkulasi klinis yang kompleks menjadi antarmuka yang intuitif dan responsif.
  - Menghubungkan logika backend dengan pengembangan UI/UX, menerjemahkan keluaran klinis mentah dan filter latihan ke dalam pengalaman pengguna yang mudah diakses.
  - Merancang sistem keamanan validasi ganda pada komunikasi client-server untuk memastikan saran gaya hidup dari LLM tidak memanipulasi angka nutrisi medis dengan 88+ tes otomatis yang lulus.

#### Features

- **English:**
  - Automated OCR pipeline for InBody body composition scan sheets using Donut document transformer.
  - Synthetic data generation using HTML layouts to train models without exposing sensitive user medical records.
  - Deterministic clinical engine computing Katch-McArdle BMR, TDEE, and bilateral muscular asymmetry (>5% imbalance triggers).
  - Context-aware LLM daily planner synthesizing supportive nutrition advice and corrective exercise routines.
  - Fail-closed dual-validation safety layer ensuring zero numerical hallucinations.
- **Indonesian:**
  - Pipeline OCR otomatis untuk lembar pemindaian komposisi tubuh InBody menggunakan Donut transformer.
  - Pembuatan data latih sintetis berbasis HTML untuk menjaga privasi data kesehatan pengguna.
  - Mesin kalkulasi medis deterministik untuk BMR Katch-McArdle, TDEE, dan asimetri otot bilateral (>5%).
  - Generator rencana harian berbasis LLM untuk rekomendasi nutrisi dan panduan latihan korektif.
  - Lapisan keamanan validasi ganda (fail-closed) untuk mencegah halusinasi numerik pada saran medis.

#### Impact & Results

- **English:**
  - 88+ automated unit and contract tests passing across core computation and API contracts.
  - Zero-hallucination compliance achieved on all caloric, macronutrient, and water intake recommendations.
  - Authored comprehensive architectural decision records (ADRs) and academic concept paper.
- **Indonesian:**
  - 88+ tes otomatis (unit & contract tests) lulus pada seluruh modul kalkulasi inti dan API.
  - Menjamin zero-hallucination pada seluruh rekomendasi kalori, makronutrien, dan asupan cairan.
  - Menyusun dokumen spesifikasi arsitektur (ADR) dan concept paper formal.

#### Tech Stack

- **Full Stack Skills:** `TypeScript`, `Next.js`, `React`, `Tailwind CSS`, `Python`, `FastAPI`, `PostgreSQL`, `SQLAlchemy`, `Alembic`, `PyTorch`
- **Cover Highlights:** `Next.js`, `FastAPI`, `Healthcare AI`, `TypeScript`
- **Live Demo:** None _(Repository showcase only)_
- **Source Code Repo:** `https://github.com/QeekOw/CERA`

---

### Project 3: Online Shopper Behavior Analyzer — E-Commerce Purchase Intent

- **Project ID (URL Slug):** `users-behaviour-analyzer`
- **Title:** `Online Shoppers Prediction Engine: Purchase Intention Analysis`
- **Category:** `Predictive Modeling / E-Commerce Analytics`
- **Category (Indonesian):** `Pemodelan Prediktif / Analitik E-Commerce`
- **Year:** `2026`
- **Period:** `05.2026 - 06.2026`
- **Tagline (English):** An interactive machine learning web application that predicts e-commerce shoppers' purchasing intention from clickstream navigation patterns.
- **Tagline (Indonesian):** Aplikasi web machine learning interaktif yang memprediksi niat belanja pengunjung e-commerce berdasarkan pola navigasi clickstream.
- **SEO Description:** End-to-end machine learning web application predicting online shopper purchasing intent across 12,330 sessions.
- **Badge:** `Academic Final Project (Top Score)`

#### Collaboration & Role

- **Ownership:** `Academic Group Project` (Binus University — Machine Learning LC01)
- **Team:** `Team of 3 (Kelompok 1)`
- **My Role:** `Team Leader & Pipeline Engineer`
- **My Role (Indonesian):** `Ketua Tim & Pipeline Engineer`
- **Role Contributions (English):**
  - Led a 3-member engineering team through roadmapping, model development, and final delivery.
  - Built an accessible, end-to-end predictive pipeline on Streamlit for real-time shopper intent forecasting.
  - Mitigated severe 84.5% class imbalance using SMOTE and Yeo-Johnson transformations across 12,330 session records.
- **Role Contributions (Indonesian):**
  - Memimpin tim 3 orang dalam perancangan roadmap proyek, pengembangan model, hingga penyerahan akhir.
  - Membangun pipeline prediktif end-to-end yang interaktif menggunakan Streamlit untuk inferensi niat beli secara real-time.
  - Mengatasi ketimpangan kelas 84.5% menggunakan SMOTE dan transformasi Yeo-Johnson pada 12.330 data sesi belanja.

#### Features

- **English:**
  - Multi-stage sequential workflow: Dataset exploration, preprocessing, model configuration, and real-time prediction.
  - Multi-model evaluation benchmarking Logistic Regression, Random Forest, and XGBoost.
  - Dynamic interactive UI allowing users to tune scaling techniques (Standard, MinMax, Robust) and hyperparameters on the fly.
  - Distinctive Neo-Brutalist visual interface with high-contrast accessibility.
  - Comprehensive user evaluation with 5-point Likert usability questionnaires and confusion matrix diagnostics.
- **Indonesian:**
  - Alur kerja sekuensial multi-tahap: Eksplorasi dataset, preprocessing, konfigurasi model, dan prediksi real-time.
  - Evaluasi multi-model membandingkan Logistic Regression, Random Forest, dan XGBoost.
  - UI interaktif yang memungkinkan pengguna memilih metode scaling dan hyperparameter secara langsung.
  - Desain visual Neo-Brutalist yang unik dengan keterbacaan tinggi.
  - Evaluasi pengguna komprehensif menggunakan kuesioner Likert 5 poin dan diagnostik confusion matrix.

#### Impact & Results

- **English:**
  - 0.8713 ROC-AUC achieved on imbalanced session classification.
  - 4.5 / 5.0 overall user satisfaction score achieved during empirical user acceptance testing.
  - Fully deployed and operational on Streamlit Cloud with public web accessibility.
- **Indonesian:**
  - Skor ROC-AUC 0.8713 pada klasifikasi data sesi yang tidak seimbang.
  - Skor kepuasan pengguna 4.5 / 5.0 pada pengujian empiris pengguna.
  - Live dan dapat diakses publik di Streamlit Cloud.

#### Tech Stack

- **Full Stack Skills:** `Python`, `Scikit-Learn`, `XGBoost`, `Pandas`, `NumPy`, `Streamlit`, `Matplotlib`, `Seaborn`
- **Cover Highlights:** `Streamlit`, `Scikit-Learn`, `XGBoost`, `Pandas`
- **Live Demo:** `https://users-behaviour-analyzer.streamlit.app/`
- **Source Code Repo:** `https://github.com/EdwinAntoniee/users-behaviour-analyzer`

---

### Project 4: Maintain — Dual-AI Industrial Prescriptive Maintenance

- **Project ID (URL Slug):** `maintain`
- **Title:** `Maintain: Dual-AI Prescriptive Maintenance & Generative SOP Copilot`
- **Category:** `Industrial AI / Predictive Maintenance`
- **Category (Indonesian):** `AI Industri / Pemeliharaan Prediktif`
- **Year:** `2026`
- **Period:** `07.2026 - 09.2026`
- **Tagline (English):** An industrial prescriptive maintenance platform that analyzes factory sensor telemetry to predict machine breakdowns and generate step-by-step repair guidance for frontline technicians.
- **Tagline (Indonesian):** Platform pemeliharaan preskriptif industri yang menganalisis telemetri sensor pabrik untuk memprediksi kerusakan mesin dan menghasilkan panduan perbaikan bertahap bagi teknisi.
- **SEO Description:** Dual-AI predictive maintenance platform powered by LightGBM telemetry triage and an on-premise Qwen2.5-7B QLoRA SOP assistant.
- **Badge:** `Featured Project (Homepage) — COMPFEST 18 AIC`

#### Collaboration & Role

- **Ownership:** `Competition Project` (COMPFEST 18 Artificial Intelligence Competition)
- **Team:** `Team Prompt & Pray (Team of 3)`
- **My Role:** `EDA Lead & Data Preprocessing Specialist`
- **My Role (Indonesian):** `Lead EDA & Spesialis Preprocessing Data`
- **Role Contributions (English):**
  - As data lead, ran EDA on sensor telemetry and engineered physics-based features to flag early mechanical strain.
  - Engineered physics-informed domain features (`temp_diff`, `power_w`, `tool_wear_torque`) enabling 100% precision in detecting Heat Dissipation and Overstrain failures.
  - Built a standardized, leak-free Scikit-Learn transformation pipeline feeding downstream LightGBM classifiers and local LLM context.
  - Became the on-screen presenter for our project trailer, writing the script and narrating the product vision.
- **Role Contributions (Indonesian):**
  - Sebagai data lead, melakukan EDA pada telemetri sensor dan merekayasa fitur berbasis fisika untuk mendeteksi beban mekanis sejak dini.
  - Mereka fitur berbasis hukum fisika (`temp_diff`, `power_w`, `tool_wear_torque`) yang menghasilkan presisi 100% pada kegagalan disipasi panas dan overstrain.
  - Merancang pipeline transformasi Scikit-Learn tanpa kebocoran data untuk model LightGBM dan konteks LLM lokal.
  - Menjadi presenter di layar untuk trailer proyek, menulis naskah, dan menarasikan visi produk.

#### Features

- **English:**
  - Stage 1 Predictive Gatekeeper: Binary LightGBM classifier catching imminent machine breakdowns (0.9850 ROC-AUC).
  - Stage 2 Root Cause Diagnostics: Multi-label classifier isolating HDF, PWF, OSF, TWF, and RNF failure modes.
  - Stage 3 Local Generative AI Copilot: Fine-tuned Qwen2.5-7B (QLoRA) generating safety-first Indonesian repair procedures.
  - Interactive technician web dashboard with operational gauge visualizers and conversational troubleshooting chat.
  - Containerized deployment using Docker Compose for private, air-gapped on-premise manufacturing environments.
- **Indonesian:**
  - Stage 1 Gatekeeper Prediktif: Klasifikasi biner LightGBM pendeteksi kegagalan mesin (0.9850 ROC-AUC).
  - Stage 2 Diagnostik Akar Masalah: Klasifikasi multi-label untuk HDF, PWF, OSF, TWF, dan RNF.
  - Stage 3 Copilot Generatif Lokal: Model Qwen2.5-7B (QLoRA) yang menyusun SOP perbaikan berbahasa Indonesia berstandar K3.
  - Dashboard web interaktif dengan visualisasi gauge telemetri dan chatbot troubleshooting teknisi lapangan.
  - Kontainerisasi penuh dengan Docker Compose untuk implementasi on-premise tanpa ketergantungan cloud.

#### Impact & Results

- **English:**
  - 0.9850 ROC-AUC and 86.76% Recall on primary failure detection.
  - 100% Recall achieved on Heat Dissipation Failure (HDF), Power Failure (PWF), and Overstrain Failure (OSF).
  - Zero cloud dependency, guaranteeing enterprise telemetry data remains strictly within factory firewalls.
- **Indonesian:**
  - Skor ROC-AUC 0.9850 dan Recall 86.76% pada pendeteksian kegagalan mesin utama.
  - Recall 100% pada Heat Dissipation Failure (HDF), Power Failure (PWF), dan Overstrain Failure (OSF).
  - Nol ketergantungan cloud, menjaga keamanan data telemetri pabrik di jaringan lokal.

#### Tech Stack

- **Full Stack Skills:** `Python`, `LightGBM`, `Scikit-Learn`, `Pandas`, `NumPy`, `Qwen2.5-7B (QLoRA)`, `Ollama`, `FastAPI`, `Docker`, `Docker Compose`
- **Cover Highlights:** `LightGBM`, `FastAPI`, `Ollama (LLM)`, `Docker`
- **Live Demo Video:** `https://youtu.be/...` _(YouTube Trailer Video)_
- **Source Code Repo:** `https://github.com/EdwinAntoniee/Maintain-Dual-AI-Prescriptive-Maintenance`

---

### Project 5: Repeat Order Prediction — Cost-Sensitive Customer Retention (SPARC 2026)

- **Project ID (URL Slug):** `repeat-order-prediction`
- **Title:** `Repeat Order Prediction: Cost-Sensitive Automotive Retention Modeling`
- **Category:** `Machine Learning / Financial Analytics`
- **Category (Indonesian):** `Machine Learning / Analitik Finansial`
- **Year:** `2026`
- **Period:** `02.2026`
- **Tagline (English):** A cost-sensitive machine learning pipeline that analyzes over 300,000 automotive financing records under severe class imbalance to forecast customer repeat vehicle purchases.
- **Tagline (Indonesian):** Pipeline machine learning cost-sensitive yang menganalisis 300.000+ data pembiayaan otomotif dengan ketimpangan kelas ekstrem untuk memprediksi pembelian kembali kendaraan.
- **SEO Description:** Cost-sensitive LightGBM retention prediction pipeline developed for SPARC 2026 National Competition.
- **Badge:** `🏆 National Finalist — SPARC 2026`

#### Collaboration & Role

- **Ownership:** `Competition Project` (SPARC 2026 Data Science Competition — Universitas Ciputra)
- **Team:** `Team Strive: Edwin Antonie, Michelle Pricillia Sutanto, Yosuke Yung`
- **My Role:** `Team Leader & Data Engineering Specialist`
- **My Role (Indonesian):** `Ketua Tim & Spesialis Data Engineering`
- **Role Contributions (English):**
  - Cleaned and engineered features on 319K+ automotive financing records, tackling 87.5% class imbalance with cost-sensitive LightGBM to reach 0.70 ROC-AUC.
  - Co-presented the team's modeling framework to a judge panel, defending threshold tuning and trade-off decisions in live technical Q&A.
  - Engineered domain-specific features (DP Ratio, Tenor grouping) and implemented two-tier outlier bounds with zero data leakage.
- **Role Contributions (Indonesian):**
  - Membersihkan dan merekayasa fitur pada 319K+ data pembiayaan otomotif, mengatasi ketimpangan kelas 87.5% dengan LightGBM cost-sensitive hingga mencapai 0.70 ROC-AUC.
  - Mempresentasikan kerangka pemodelan tim di hadapan dewan juri, mempertahankan penyesuaian threshold dan keputusan kompromi dalam sesi tanya jawab teknis.
  - Merekayasa fitur logika bisnis (Rasio DP, pengelompokan tenor) dan menerapkan pembersihan outlier dua lapis tanpa kebocoran data.

#### Features

- **English:**
  - Two-layer outlier handling combining domain-range business rules and percentile capping.
  - Leak-free Scikit-Learn `ColumnTransformer` pipeline with frequency encoding for high-cardinality categories.
  - Cost-sensitive LightGBM model utilizing `scale_pos_weight` penalties to prioritize minority repeat buyers.
  - Strategic threshold calibration shifted from 0.50 to 0.55 to minimize false positives and marketing budget waste.
- **Indonesian:**
  - Penanganan outlier dua lapis memadukan batas logika bisnis dan pemotongan persentil.
  - Pipeline `ColumnTransformer` Scikit-Learn tanpa kebocoran data dengan frequency encoding untuk fitur berkardinalitas tinggi.
  - Model LightGBM cost-sensitive dengan penalti `scale_pos_weight` untuk memprioritaskan kelas minoritas pembeli setia.
  - Kalibrasi ambang batas prediksi dari 0.50 ke 0.55 guna menekan false positives dan mencegah pemborosan biaya promosi.

#### Impact & Results

- **English:**
  - Qualified as **National Finalist** among universities across Indonesia at SPARC 2026.
  - Achieved **0.7014 ROC-AUC** and **62% Recall** on returning customer detection under severe noise.
  - Delivered actionable business intelligence optimizing marketing follow-up prioritization.
- **Indonesian:**
  - Lolos sebagai **Finalis Nasional** bersaing dengan berbagai universitas di Indonesia pada SPARC 2026.
  - Mencapai skor **ROC-AUC 0.7014** dan **Recall 62%** pada deteksi repeat order di tengah noise data ekstrem.
  - Memberikan rekomendasi bisnis terukur untuk mengoptimalkan efisiensi anggaran tim pemasaran.

#### Tech Stack

- **Full Stack Skills:** `Python`, `LightGBM`, `Scikit-Learn`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Jupyter`
- **Cover Highlights:** `LightGBM`, `Scikit-Learn`, `Pandas`, `EDA`
- **Source Code Repo:** `https://github.com/EdwinAntoniee/Repeat-Order-Prediction`

---

### Project 6: En Garde — Explainable Government Tender Anomaly Detection

- **Project ID (URL Slug):** `en-garde`
- **Title:** `En Garde: Explainable Procurement Fraud Detection via Isolation Forest & SHAP`
- **Category:** `Explainable AI / Anomaly Detection`
- **Category (Indonesian):** `Explainable AI / Deteksi Anomali`
- **Year:** `2026`
- **Period:** `05.2026`
- **Tagline (English):** An unsupervised anomaly detection and Explainable AI platform uncovering corruption, bid-rigging, and price inflation in public procurement data.
- **Tagline (Indonesian):** Platform deteksi anomali tanpa supervisi dan Explainable AI untuk membongkar indikasi korupsi dan mark-up harga pada data pengadaan tender publik.
- **SEO Description:** Unsupervised tender fraud detection using Isolation Forest and SHAP explainable waterfall attributions on OCDS public data.
- **Badge:** `🏅 Top 11 Nationwide — Find IT! 2026 UGM`

#### Collaboration & Role

- **Ownership:** `Hackathon Project` (Find IT! 2026 — Universitas Gadjah Mada)
- **Team:** `Team LABUBU: Anabelle Gabriella, Edwin Antonie, Yosuke Yung, Michelle Pricillia, Sandro Mahesa`
- **My Role:** `Data Engineering & Anomaly Modeling Specialist`
- **My Role (Indonesian):** `Spesialis Data Engineering & Pemodelan Anomali`
- **Role Contributions (English):**
  - Audited thousands of procurement records to resolve data anomalies and engineer fraud-risk signals for an Isolation Forest model.
  - Applied TreeSHAP to translate black-box predictions into top fraud indicators for government audit teams.
  - Implemented entity isolation (Drop-at-the-Last-Second technique) to ensure algorithms evaluate behavioral patterns rather than discriminating against vendor names.
- **Role Contributions (Indonesian):**
  - Mengaudit ribuan data pengadaan untuk mengatasi anomali data dan merekayasa sinyal risiko kecurangan untuk model Isolation Forest.
  - Menerapkan TreeSHAP untuk menerjemahkan prediksi black-box menjadi indikator kecurangan teratas bagi tim auditor pemerintah.
  - Menerapkan isolasi entitas (teknik Drop-at-the-Last-Second) agar model hanya menilai perilaku anomali tanpa diskriminasi profil vendor.

#### Features

- **English:**
  - Robust anomaly detection on massive Open Contracting Data Standard (OCDS) procurement records.
  - Mathematical contamination tuning using the Elbow Method on anomaly score curves.
  - Explainable Oracle layer powered by SHAP decomposing black-box decisions into human-auditable risk factors.
  - Top-K Expert Review prioritization module ranking high-risk tenders for targeted investigation.
- **Indonesian:**
  - Deteksi anomali tangguh pada data pengadaan berskala besar berstandar OCDS.
  - Penentuan nilai kontaminasi secara matematis menggunakan Elbow Method pada kurva skor anomali.
  - Lapisan Explainable Oracle berbasis SHAP yang menerjemahkan model black-box menjadi faktor risiko yang dapat diaudit manusia.
  - Modul laporan Top-K Expert Review untuk memprioritaskan tender berisiko tinggi bagi tim auditor.

#### Impact & Results

- **English:**
  - Awarded **11th Place Nationwide** at Find IT! 2026 UGM National Hackathon.
  - Strong empirical correlation between algorithmic risk scores and traditional investigative red flags.
  - Provides clear visual waterfall explanations for every flagged tender to assist human auditors.
- **Indonesian:**
  - Meraih **Peringkat 11 Nasional** pada Hackathon Nasional Find IT! 2026 UGM.
  - Korelasi empiris yang kuat antara skor risiko AI dengan indikator kecurangan konvensional auditor.
  - Memberikan eksplanasi visual waterfall pada setiap tender yang terindikasi anomali.

#### Tech Stack

- **Full Stack Skills:** `Python`, `Scikit-Learn (Isolation Forest)`, `SHAP`, `RobustScaler`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Plotly`
- **Cover Highlights:** `Isolation Forest`, `SHAP (XAI)`, `Pandas`, `Plotly`
- **Source Code Repo:** `https://github.com/EdwinAntoniee/FindIT_LABUBU`

---

### Project 7: Robust FAS — Two-Stage Biometric Authentication & Liveness Gate

- **Project ID (URL Slug):** `robust-fas`
- **Title:** `Robust FAS: Two-Stage Biometric Verification & Liveness Safeguard`
- **Category:** `Computer Vision / Biometrics`
- **Category (Indonesian):** `Computer Vision / Biometrik`
- **Year:** `2026`
- **Period:** `03.2026 - 06.2026`
- **Tagline (English):** An edge-efficient biometric verification framework that couples deep pixel-wise presentation attack detection with facial recognition to resist spoof attacks across extreme lighting.
- **Tagline (Indonesian):** Kerangka verifikasi biometrik hemat daya yang menggabungkan deteksi serangan liveness berbasis piksel dengan pengenalan wajah untuk menangkal serangan spoofing.
- **SEO Description:** Lightweight two-stage biometric security combining MobileNetV2 liveness detection with ArcFace on OULU-NPU datasets.
- **Badge:** `University Research Project`

#### Collaboration & Role

- **Ownership:** `Academic Research Project` (Binus University SOCS)
- **Team:** `Trio Maut: David Golden, Edwin Antonie, Hasan`
- **My Role:** `Team Leader & Research Supervisor`
- **My Role (Indonesian):** `Ketua Tim & Supervisor Riset`
- **Role Contributions (English):**
  - Secured official academic licensing for the benchmark OULU-NPU video dataset from the University of Oulu, Finland.
  - Supervised pipeline integration connecting a lightweight MobileNetV2 liveness gate with ArcFace 512-dimensional cosine feature verification.
  - Authored the comprehensive academic research paper evaluating ACER metrics under varying mobile illumination environments.
- **Role Contributions (Indonesian):**
  - Mengambil inisiatif mengurus lisensi akademik resmi dataset video OULU-NPU dari University of Oulu, Finlandia.
  - Mensupervisi integrasi pipeline antara gerbang liveness MobileNetV2 dengan verifikasi fitur ArcFace 512-dimensi.
  - Menyusun naskah riset akademis yang mengevaluasi performa metrik ACER pada berbagai kondisi pencahayaan ekstrem.

#### Features

- **English:**
  - Lightweight two-stage architecture: Liveness authentication gate followed by ArcFace feature extraction.
  - Resists print, video-replay, and screen spoofing attacks under challenging mobile lighting conditions.
  - Edge-optimized execution running smoothly on commodity laptop webcams without dedicated GPU accelerators.
  - Evaluated on official 4-protocol OULU-NPU benchmark test datasets.
- **Indonesian:**
  - Arsitektur dua tahap: Gerbang liveness mendeteksi keaslian fisik sebelum proses verifikasi identitas ArcFace.
  - Menangkal serangan spoofing foto, video replay, dan layar ponsel pada variasi pencahayaan ekstrem.
  - Optimal untuk perangkat edge hardware/webcam standar tanpa akselerator GPU berdaya tinggi.
  - Dievaluasi menggunakan 4 protokol pengujian standar OULU-NPU.

#### Impact & Results

- **English:**
  - Achieved a **3% Attack Classification Error Rate (ACER)** on edge hardware.
  - Official research code published and demonstrated with live video verification.
  - Deepened team resilience in academic paper writing and multi-model debugging.
- **Indonesian:**
  - Meraih **3% Attack Classification Error Rate (ACER)** pada perangkat edge hardware.
  - Kode riset terpublikasi dengan demonstrasi video verifikasi langsung.
  - Mengembangkan resiliensi tim dalam sinkronisasi riset akademis dan implementasi kode.

#### Tech Stack

- **Full Stack Skills:** `Python`, `PyTorch`, `MobileNetV2`, `ArcFace`, `InsightFace`, `OpenCV`, `NumPy`, `ONNX Runtime`
- **Cover Highlights:** `PyTorch`, `OpenCV`, `ArcFace`, `InsightFace`
- **Live Demo Video:** `https://youtu.be/I_Dk0_qvTJ4`
- **Source Code Repo:** `https://github.com/EdwinAntoniee/Research_FAS`

---

## 3. 💼 Experiences (Ordered exactly as in your new CV)

### File Locations:

- `src/features/portfolio/data/experiences.tsx`
- Logos in: `public/logos/`

---

### Work Experience 1: Math Tutor

- **Company / Organization Name:** `Fun n Smart Course`
- **Website:** `https://funnsmart.com` _(or leave blank)_
- **Logo Image:** `/logos/funnsmart.webp`
- **Is Current Position:** `false`
- **Position Title:** `Math Tutor`
- **Employment Period:** `04.2024`
- **Employment Type:** `Part-time`
- **Key Skills Used:** `Teaching`, `Mathematics`, `Physics`, `Adaptive Pedagogy`
- **Description / Responsibilities (English):**
  - Tutored 8 Junior High students in math and physics, adapting lessons to each student's pace.
  - Simplified complex concepts into clear explanations, helping students walk into exams prepared.
- **Description / Responsibilities (Indonesian):**
  - Membimbing 8 siswa SMP pada mata pelajaran matematika dan fisika, menyesuaikan materi dengan kecepatan belajar tiap siswa.
  - Menyederhanakan konsep-konsep rumit menjadi penjelasan yang jelas, membantu siswa menghadapi ujian dengan percaya diri.

---

### Work Experience 2: Liaison Officer

- **Company / Organization Name:** `The Lion Youth Tournament`
- **Website:** `https://theliontournament.com` _(or leave blank)_
- **Logo Image:** `/logos/lion-tournament.webp`
- **Is Current Position:** `false`
- **Position Title:** `Liaison Officer`
- **Employment Period:** `06.2024 & 06.2025`
- **Employment Type:** `Contract / Event Operations`
- **Key Skills Used:** `Crisis Management`, `Logistics Coordination`, `Communication`
- **Description / Responsibilities (English):**
  - Acted as communication bridge between 20+ teams and the organizing committee.
  - Resolved on-the-spot issues by coordinating directly with teams and committee members, keeping the event on schedule.
- **Description / Responsibilities (Indonesian):**
  - Bertindak sebagai jembatan komunikasi antara 20+ tim dan panitia penyelenggara.
  - Menyelesaikan masalah operasional secara cepat di lapangan melalui koordinasi langsung dengan tim dan panitia agar acara tetap berjalan sesuai jadwal.

---

### Work Experience 3: Paid Educator Volunteer

- **Company / Organization Name:** `Phinla Earth Day 2026`
- **Website:** `https://phinla.org`
- **Logo Image:** `/logos/phinla.webp`
- **Is Current Position:** `false`
- **Position Title:** `Paid Educator Volunteer`
- **Employment Period:** `05.2026`
- **Employment Type:** `Volunteer`
- **Key Skills Used:** `Public Engagement`, `Environmental Education`, `Communication`
- **Description / Responsibilities (English):**
  - Engaged 50+ passersby directly, adapting the campaign message to different audiences.
  - Designed interactive moments for participants, turning passive bystanders into active learners.
- **Description / Responsibilities (Indonesian):**
  - Berinteraksi langsung dengan 50+ masyarakat umum, mengadaptasi pesan kampanye kelestarian lingkungan untuk beragam audiens.
  - Merancang momen interaktif bagi para peserta, mengubah pejalan kaki pasif menjadi pembelajar yang aktif.

---

### Work Experience 4: Promotion and Event Part Time

- **Company / Organization Name:** `Bina Nusantara University`
- **Website:** `https://binus.ac.id`
- **Logo Image:** `/logos/binus.webp`
- **Is Current Position:** `true`
- **Position Title:** `Promotion and Event Part Time`
- **Employment Period:** `06.2026` – `Present`
- **Employment Type:** `Part-time`
- **Key Skills Used:** `Public Speaking`, `Audience Engagement`, `Event Promotion`, `Collaboration`
- **Description / Responsibilities (English):**
  - Conducted campus tours for 3 different high schools, presenting programs persuasively.
  - Sharpened public speaking and audience-engagement skills through repeated live presentations.
  - Collaborated within a team to plan and execute promotional events successfully.
- **Description / Responsibilities (Indonesian):**
  - Memandu tur kampus untuk 3 sekolah menengah atas yang berbeda, mempresentasikan program akademik secara persuasif.
  - Mengasah kemampuan public speaking dan interaksi audiens melalui serangkaian presentasi tatap muka langsung.
  - Berkolaborasi dalam tim untuk merencanakan dan mengeksekusi acara promosi kampus dengan sukses.

---

### Organizational Experience 1: Learning and Training Staff

- **Company / Organization Name:** `Bina Nusantara Computer Club (BNCC)`
- **Website:** `https://bncc.net`
- **Logo Image:** `/logos/bncc.webp`
- **Is Current Position:** `true`
- **Position Title:** `Learning and Training Staff`
- **Employment Period:** `12.2025` – `12.2026`
- **Employment Type:** `Organization`
- **Key Skills Used:** `Team Leadership`, `Curriculum Design`, `Technical Training`, `Cross-Division Coordination`
- **Description / Responsibilities (English):**
  - Led weekly classes as PIC for 25+ members, ensuring sessions ran smoothly and on schedule.
  - Co-developed structured learning modules and coordinated 8 fellow activists to support cross-division events like study visits.
- **Description / Responsibilities (Indonesian):**
  - Memimpin kelas mingguan sebagai PIC untuk 25+ anggota, memastikan seluruh sesi berjalan lancar dan tepat waktu.
  - Bersama tim mengembangkan modul pembelajaran terstruktur dan mengoordinasikan 8 rekan aktivis untuk mendukung kegiatan lintas divisi seperti kunjungan studi.

---

### Organizational Experience 2: Freshmen Partner

- **Company / Organization Name:** `Bina Nusantara University`
- **Website:** `https://binus.ac.id`
- **Logo Image:** `/logos/binus.webp`
- **Is Current Position:** `false`
- **Position Title:** `Freshmen Partner`
- **Employment Period:** `09.2025` – `06.2026`
- **Employment Type:** `Mentorship / Campus Leadership`
- **Key Skills Used:** `Mentorship`, `Community Leadership`, `Empathy`, `Interpersonal Communication`
- **Description / Responsibilities (English):**
  - Guiding 8 freshmen through their academic and personal transition into university.
  - Contributed to volunteering initiatives impacting local communities in Malang.
- **Description / Responsibilities (Indonesian):**
  - Membimbing 8 mahasiswa baru dalam proses adaptasi akademik dan personal selama tahun pertama perkuliahan.
  - Berkontribusi dalam inisiatif pengabdian masyarakat yang berdampak bagi komunitas lokal di Malang.

---

## 4. 🖼️ Visual Gallery (`/gallery`) Suggestions

### Proposed Slides for `src/features/gallery/data/gallery-slides.ts`:

1. **Slide 1: SPARC 2026 National Competition Final Defense**

   - **Category:** `Data Science Competition`
   - **Category Color:** `#F77F00` (Orange)
   - **Title:** `SPARC 2026 National Finals Defense`
   - **Subtitle:** `Cost-Sensitive Automotive Repeat Order Prediction`
   - **Description:** Defending our LightGBM machine learning pipeline and business justification before expert judges at Universitas Ciputra.
   - **Image:** `/image/gallery-sparc-finals.webp`
   - **Year:** `2026`

2. **Slide 2: Find IT! 2026 UGM National Hackathon**

   - **Category:** `National Hackathon`
   - **Category Color:** `#2A9D8F` (Teal)
   - **Title:** `Find IT! 2026 Hackathon Sprint`
   - **Subtitle:** `En Garde: Explainable Tender Fraud Detection`
   - **Description:** Collaborating with Team LABUBU to engineer an unsupervised anomaly detection platform, finishing 11th nationwide.
   - **Image:** `/image/gallery-findit-ugm.webp`
   - **Year:** `2026`

3. **Slide 3: Research FAS Biometric Liveness Verification**

   - **Category:** `Academic Research`
   - **Category Color:** `#7209B7` (Purple)
   - **Title:** `Two-Stage Face Anti-Spoofing Benchmark`
   - **Subtitle:** `OULU-NPU Presentation Attack Testing`
   - **Description:** Benchmarking edge MobileNetV2 and ArcFace facial recognition models under variable mobile lighting environments.
   - **Image:** `/image/gallery-research-fas.webp`
   - **Year:** `2026`

4. **Slide 4: BNCC Learning and Training Sessions**

   - **Category:** `Tech Leadership`
   - **Category Color:** `#2563EB` (Blue)
   - **Title:** `BNCC Regular Class Mentorship`
   - **Subtitle:** `Empowering Junior Activists in Web & AI`
   - **Description:** Facilitating hands-on curriculum modules and coding classes for fellow student software developers.
   - **Image:** `/image/gallery-bncc-training.webp`
   - **Year:** `2026`

5. **Slide 5: Engineering & Vibe Coding Workspace**
   - **Category:** `Engineering Craft`
   - **Category Color:** `#10B981` (Emerald)
   - **Title:** `Deep Focus Engineering Setup`
   - **Subtitle:** `Building Intelligent Systems from Scratch`
   - **Description:** Building full-stack AI applications, exploring local LLM agents, and testing deployment workflows.
   - **Image:** `/image/gallery-workspace.webp`
   - **Year:** `2026`

---

## 5. 📜 Bootcamps & Certifications (Ordered exactly as in your new CV)

### File Locations:

- `src/features/portfolio/data/certifications.ts`
- Logos in: `public/logos/`

---

### Certification 1: Fundamentals of Deep Learning

- **Title:** `Fundamentals of Deep Learning`
- **Issuer:** `Nvidia`
- **Issuer Icon:** `nvidia` _(or image in /public/logos/nvidia.webp)_
- **Issue Date:** `2024-10`
- **Verification URL:** *https://drive.google.com/file/d/12LPBRd-cNAwhsJTRAo2SnVhkPB__tJyZ/view*

### Certification 2: AI Python Bootcamp

- **Title:** `AI Python Bootcamp`
- **Issuer:** `Skill Academy by Ruangguru`
- **Issuer Icon:** `skillacademy` _(or image in /public/logos/skillacademy.webp)_
- **Issue Date:** `2025-05`
- **Verification URL:** *https://drive.google.com/file/d/1V1ctQHEKK0jLcENLM7IWwBln5F9ZJY_z/view*

### Certification 3: AI Application Bootcamp

- **Title:** `AI Application Bootcamp`
- **Issuer:** `Skill Academy by Ruangguru`
- **Issuer Icon:** `ruangguru` _(or image in /public/logos/ruangguru.webp)_
- **Issue Date:** `2025-08`
- **Verification URL:** *https://drive.google.com/file/d/1IwsiMOdCyhRQ42IqAIk4jTpVrE7sB1Xr/view*

### Certification 4: N8N and AI Integration

- **Title:** `N8N and AI Integration`
- **Issuer:** `Taalenta`
- **Issuer Icon:** `taalenta` _(or image in /public/logos/taalenta.webp)_
- **Issue Date:** `2026-05`
- **Verification URL:** *https://drive.google.com/file/d/18qMdLD2lnbcB2AYF6Qr-8Y-58XJmY4eh/view*

### Certification 5: Microsoft Azure AI Fundamentals (AI-900)

- **Title:** `Microsoft Elevate AI: Pelatihan Azure AI Fundamentals (AI-900T00-A)`
- **Issuer:** `Microsoft & GreatNusa by BINA NUSANTARA`
- **Issuer Icon:** `microsoft` _(or image in /public/logos/azure.webp)_
- **Issue Date:** `2026-02-22`
- **Credential ID:** `111541121766280/GreatNusa/II/2026`
- **Verification URL:** `https://drive.google.com/file/d/1xcYWrDV3zv0YYgn_ICsZPAcildU6o4m8/view?usp=sharing`

### Certification 6: LLM-Based Tools & Gemini API Integration

- **Title:** `Maju Bareng AI: LLM-Based Tools & Gemini API Integration for Data Scientists`
- **Issuer:** `Hacktiv8 Indonesia`
- **Issuer Icon:** `Hacktiv8` _(or image in /public/logos/hacktiv8.webp)_
- **Issue Date:** `2026-05-15`
- **Credential ID:** `03693/H8/CSR/MBA2/V/2026`
- **Verification URL:** `https://drive.google.com/file/d/1K1DJhhPuD0vtUuqBlqeyeSLomvIqXkSV/view?usp=sharing`

### Certification 7: Front-End Course

- **Title:** `Front-End Course`
- **Issuer:** `Bina Nusantara Computer Club (BNCC)`
- **Issuer Icon:** `bncc` _(or image in /public/logos/bncc.webp)_
- **Issue Date:** `2024-12`
- **Verification URL:** *https://drive.google.com/file/d/1JB4342F-n3i3L397ZwoqwMevi6o1mMad/view*

---

## 6. 🏆 Competitions & Awards (Ordered exactly as in your new CV)

### File Location:

- `src/features/portfolio/data/awards.ts`

---

### Award 1: SPARC 2026 Data Science Competition

- **Prize:** `Finalist 🏆`
- **Title:** `SPARC 2026 Data Science Competition`
- **Organization / Issuer:** `Universitas Ciputra (Surabaya) — Team Strive`
- **Date:** `2026-02`
- **Grade / Level:** `National`
- **Description (English):**
  - Cleaned and engineered features on 319K+ automotive financing records, tackling 87.5% class imbalance with cost-sensitive LightGBM to reach 0.70 ROC-AUC.
  - Co-presented the team's modeling framework to a judge panel, defending threshold tuning and trade-off decisions in live technical Q&A.
- **Description (Indonesian):**
  - Membersihkan dan merekayasa fitur pada 319K+ data pembiayaan otomotif, mengatasi ketimpangan kelas 87.5% dengan LightGBM cost-sensitive hingga mencapai 0.70 ROC-AUC.
  - Mempresentasikan kerangka pemodelan tim di hadapan dewan juri, mempertahankan penyesuaian threshold dan keputusan kompromi dalam sesi tanya jawab teknis.

### Award 2: Find IT! 2026 Hackathon

- **Prize:** `11th Place 🏅`
- **Title:** `Find IT! 2026 Hackathon (Information Technology Competition)`
- **Organization / Issuer:** `Universitas Gadjah Mada (UGM) — Team LABUBU`
- **Date:** `2026-05`
- **Grade / Level:** `National`
- **Description (English):**
  - Audited thousands of procurement records to resolve data anomalies and engineer fraud-risk signals for an Isolation Forest model.
  - Applied TreeSHAP to translate black-box predictions into top fraud indicators for government audit teams.
- **Description (Indonesian):**
  - Mengaudit ribuan data pengadaan untuk mengatasi anomali data dan merekayasa sinyal risiko kecurangan untuk model Isolation Forest.
  - Menerapkan TreeSHAP untuk menerjemahkan prediksi black-box menjadi indikator kecurangan teratas bagi tim auditor pemerintah.

### Award 3: AI Innovation Challenge - COMPFEST 18

- **Prize:** `Top 50 🌟`
- **Title:** `AI Innovation Challenge — COMPFEST 18`
- **Organization / Issuer:** `COMPFEST — Team Prompt & Pray`
- **Date:** `2026-08`
- **Grade / Level:** `National`
- **Description (English):**
  - As data lead, ran EDA on sensor telemetry and engineered physics-based features to flag early mechanical strain.
  - Became the on-screen presenter for our project trailer, writing the script and narrating the product vision.
- **Description (Indonesian):**
  - Sebagai data lead, melakukan EDA pada telemetri sensor dan merekayasa fitur berbasis fisika untuk mendeteksi beban mekanis sejak dini.
  - Menjadi presenter di layar untuk trailer proyek, menulis naskah, dan menarasikan visi produk.

---

## 8. 🤖 AI Chatbot Knowledge Base & Persona

### Configured for `src/lib/portfolio-chat-prompt.ts`:

- **Identity:** You are the AI portfolio persona of **Edwin Antonie**, a 5th-semester Computer Science undergraduate at Bina Nusantara University specializing in Intelligent Systems (GPA 3.97).
- **Tone:** Humble, highly competent, thoughtful, friendly, and practical. Speaks in first person ("I", "my projects").
- **Language:** Responds fluently in English or Indonesian, matching the visitor's language.
- **Core Knowledge:**
  - Explains Moofy (hybrid DistilBERT + Sentence-BERT recommendation platform with guest/user watchlist and mood history).
  - Explains InForm (frontend development bridging UI/UX and backend clinical computation).
  - Explains Online Shopper Behavior Analyzer (Streamlit, XGBoost, SMOTE).
  - Explains Maintain (Dual-AI predictive maintenance with Qwen2.5 local LLM).
  - Explains leadership at BNCC (Learning and Training Staff) and campus promotion/mentorship roles.
  - Open to internships, collaborative AI research, and impactful full-stack roles.

---

## 9. 🔑 API Keys in `.env.local`

- **`GROQ_API_KEY`**: Set in your private `.env.local`
- **`RESEND_API_KEY`**: Set in your private `.env.local`
