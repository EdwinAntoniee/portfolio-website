import {
  FlaskConicalIcon,
  GraduationCapIcon,
  NetworkIcon,
  SchoolIcon,
  UsersIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "binus-promotion",
    companyName: "Bina Nusantara University",
    companyLogo: "/logos/binus.webp",
    companyWebsite: "https://binus.ac.id",
    positions: [
      {
        id: "binus-promotion-1",
        title: "Promotion and Event Part Time",
        employmentPeriod: {
          start: "06.2026",
        },
        employmentType: "Part-time",
        icon: <UsersIcon />,
        description: `- Conducted campus tours for 3 different high schools, presenting programs persuasively.
- Sharpened public speaking and audience-engagement skills through repeated live presentations.
- Collaborated within a team to plan and execute promotional events successfully.`,
        descriptionId: `- Memandu tur kampus untuk 3 sekolah menengah atas yang berbeda, mempresentasikan program akademik secara persuasif.
- Mengasah kemampuan public speaking dan interaksi audiens melalui serangkaian presentasi tatap muka langsung.
- Berkolaborasi dalam tim untuk merencanakan dan mengeksekusi acara promosi kampus dengan sukses.`,
        skills: [
          "Public Speaking",
          "Audience Engagement",
          "Event Promotion",
          "Collaboration",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "bncc-staff",
    companyName: "Bina Nusantara Computer Club (BNCC)",
    companyLogo: "/logos/bncc.webp",
    companyWebsite: "https://bncc.net",
    positions: [
      {
        id: "bncc-staff-1",
        title: "Learning and Training Staff",
        employmentPeriod: {
          start: "12.2025",
          end: "12.2026",
        },
        employmentType: "Organization",
        icon: <GraduationCapIcon />,
        description: `- Led weekly classes as PIC for 25+ members, ensuring sessions ran smoothly and on schedule.
- Co-developed structured learning modules and coordinated 8 fellow activists to support cross-division events like study visits.`,
        descriptionId: `- Memimpin kelas mingguan sebagai PIC untuk 25+ anggota, memastikan seluruh sesi berjalan lancar dan tepat waktu.
- Bersama tim mengembangkan modul pembelajaran terstruktur dan mengoordinasikan 8 rekan aktivis untuk mendukung kegiatan lintas divisi seperti kunjungan studi.`,
        skills: [
          "Team Leadership",
          "Curriculum Design",
          "Technical Training",
          "Cross-Division Coordination",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "binus-freshmen-partner",
    companyName: "Bina Nusantara University",
    companyLogo: "/logos/binus.webp",
    companyWebsite: "https://binus.ac.id",
    positions: [
      {
        id: "binus-freshmen-partner-1",
        title: "Freshmen Partner",
        employmentPeriod: {
          start: "09.2025",
          end: "06.2026",
        },
        employmentType: "Mentorship / Campus Leadership",
        icon: <UsersIcon />,
        description: `- Guiding 8 freshmen through their academic and personal transition into university.
- Contributed to volunteering initiatives impacting local communities in Malang.`,
        descriptionId: `- Membimbing 8 mahasiswa baru dalam proses adaptasi akademik dan personal selama tahun pertama perkuliahan.
- Berkontribusi dalam inisiatif pengabdian masyarakat yang berdampak bagi komunitas lokal di Malang.`,
        skills: [
          "Mentorship",
          "Community Leadership",
          "Empathy",
          "Interpersonal Communication",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "phinla-educator",
    companyName: "Phinla Earth Day 2026",
    companyLogo: "/logos/phinla.webp",
    companyWebsite: "https://phinla.org",
    positions: [
      {
        id: "phinla-educator-1",
        title: "Paid Educator Volunteer",
        employmentPeriod: {
          start: "05.2026",
          isOngoing: false,
          hideDuration: true,
        },
        employmentType: "Volunteer",
        icon: <SchoolIcon />,
        description: `- Engaged 50+ passersby directly, adapting the campaign message to different audiences.
- Designed interactive moments for participants, turning passive bystanders into active learners.`,
        descriptionId: `- Berinteraksi langsung dengan 50+ masyarakat umum, mengadaptasi pesan kampanye kelestarian lingkungan untuk beragam audiens.
- Merancang momen interaktif bagi para peserta, mengubah pejalan kaki pasif menjadi pembelajar yang aktif.`,
        skills: [
          "Public Engagement",
          "Environmental Education",
          "Communication",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "lion-tournament",
    companyName: "The Lion Youth Tournament",
    companyWebsite: "https://theliontournament.com",
    positions: [
      {
        id: "lion-tournament-1",
        title: "Liaison Officer",
        employmentPeriod: {
          start: "06.2024",
          end: "06.2025",
          display: "06.2024 & 06.2025",
          isOngoing: false,
          hideDuration: true,
        },
        employmentType: "Contract / Event Operations",
        icon: <NetworkIcon />,
        description: `- Acted as communication bridge between 20+ teams and the organizing committee.
- Resolved on-the-spot issues by coordinating directly with teams and committee members, keeping the event on schedule.`,
        descriptionId: `- Bertindak sebagai jembatan komunikasi antara 20+ tim dan panitia penyelenggara.
- Menyelesaikan masalah operasional secara cepat di lapangan melalui koordinasi langsung dengan tim dan panitia agar acara tetap berjalan sesuai jadwal.`,
        skills: [
          "Crisis Management",
          "Logistics Coordination",
          "Communication",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "fun-n-smart",
    companyName: "Fun n Smart Course",
    companyWebsite: "https://funnsmart.com",
    positions: [
      {
        id: "fun-n-smart-1",
        title: "Math Tutor",
        employmentPeriod: {
          start: "04.2024",
          isOngoing: false,
          hideDuration: true,
        },
        employmentType: "Part-time",
        icon: <FlaskConicalIcon />,
        description: `- Tutored 8 Junior High students in math and physics, adapting lessons to each student's pace.
- Simplified complex concepts into clear explanations, helping students walk into exams prepared.`,
        descriptionId: `- Membimbing 8 siswa SMP pada mata pelajaran matematika dan fisika, menyesuaikan materi dengan kecepatan belajar tiap siswa.
- Menyederhanakan konsep-konsep rumit menjadi penjelasan yang jelas, membantu siswa menghadapi ujian dengan percaya diri.`,
        skills: ["Teaching", "Mathematics", "Physics", "Adaptive Pedagogy"],
      },
    ],
    isCurrentEmployer: false,
  },
]
