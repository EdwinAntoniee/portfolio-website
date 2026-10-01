# Edwin Antonie — Personal Portfolio

> Source code of my personal portfolio. Built with Next.js 16, React 19, and Tailwind CSS v4.

**Live →** [edwinantonie.vercel.app](https://edwinantonie.vercel.app)

---

## Tech Stack

| Layer         | Tech                                               |
| ------------- | -------------------------------------------------- |
| Framework     | Next.js 16 (App Router)                            |
| Language      | TypeScript 5.8                                     |
| Styling       | Tailwind CSS v4                                    |
| UI Primitives | Radix UI                                           |
| AI Chat       | Groq API (streaming), optional OpenRouter fallback |
| Email         | Resend                                             |
| Deployment    | Vercel                                             |

## Features

- **AI Chat Widget** — streaming chat powered by Groq, context-aware about my profile and projects
- **Bilingual** — full Indonesian / English toggle
- **Contact Form** — with AI-assisted email formatting via Groq
- **Projects & Gallery** — project case studies and an activity gallery
- **Sound System** — subtle audio feedback on interactions

## Getting Started

**Prerequisites:** Node.js ≥ 22, pnpm ≥ 9

```bash
git clone https://github.com/EdwinAntoniee/portfolio-website.git
cd portfolio-website
pnpm install
cp .env.example .env.local   # fill in your keys
pnpm dev
```

### Environment Variables

| Variable                              | Required    | Description                                                                          |
| ------------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `GROQ_API_KEY`                        | ✅          | [console.groq.com](https://console.groq.com) — comma-separated list allowed          |
| `GROQ_API_KEY_2`, `GROQ_API_KEY_3`, … | optional    | Backup Groq keys, tried on rate-limit errors                                         |
| `OPENROUTER_API_KEY`                  | optional    | Fallback provider when all Groq models are exhausted                                 |
| `RESEND_API_KEY`                      | ✅          | [resend.com](https://resend.com) — free tier available                               |
| `RESEND_FROM_EMAIL`                   | recommended | Sender on a verified Resend domain (defaults to the `onboarding@resend.dev` sandbox) |
| `APP_URL`                             | optional    | Production URL for SEO/OG metadata                                                   |
| `NEXT_PUBLIC_APP_URL`                 | optional    | Sent as `HTTP-Referer` to OpenRouter                                                 |

## Scripts

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm check-types  # TypeScript check
pnpm lint         # ESLint
pnpm test         # Unit tests (Vitest)
```

## Credits

Based on the open-source portfolio by [Firdaus Khotibul Zickrian](https://www.zickrian.dev).

## License

[MIT](./LICENSE)
