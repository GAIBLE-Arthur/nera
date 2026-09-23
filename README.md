# NERA — website

Marketing website for **NERA**, an independent Data, Software & Private AI
engineering practice. Built with Next.js (App Router), TypeScript and
Tailwind CSS, with French and English locales, momentum scrolling (Lenis),
and a working contact form (Resend).

## Architecture

```
app/
  [locale]/                   Routes, one segment per locale ("en" | "fr")
    layout.tsx                 Fonts, <Navbar>, <Footer>, metadata, SmoothScrollProvider
    page.tsx                   Home — composes the section components below
    solutions/<slug>/page.tsx  One route per solution page
  api/contact/route.ts        Contact form backend (sends via Resend)
  globals.css                 Design tokens (CSS variables) + base styles
  robots.ts / sitemap.ts      Generated SEO files (both locales)
middleware.ts                 Locale detection/redirect (/ → /en or /fr)

components/
  Navbar.tsx, Footer.tsx, CTAButton.tsx, SectionHeader.tsx,
  SolutionCard.tsx, TechnologyItem.tsx, ContactForm.tsx
  sections/                  Home-page sections (Hero, Solutions, Approach, …)
  solutions/                 Shared building blocks for the 4 solution pages
  diagrams/                  SVG/HTML/CSS architecture diagrams
  ui/                        Small primitives (scroll-reveal wrapper, smooth-scroll provider)

data/                        All editorial content — see below (bilingual: en/fr)
lib/                         Framework-agnostic logic (validation, contact service, i18n)
public/                      Static assets (founder photo, favicon)
```

The routing structure supports adding more solutions, more locales, and
later a Projects/Case Studies or Blog/Insights section, without
restructuring — new routes are just new folders under `app/[locale]/`.

## Local development

Requires **Node.js 18.18+** (Next.js 14 requirement) and npm.

```bash
npm install
npm run dev       # http://localhost:3000
```

Before shipping any change, run all of these and fix what they report:

```bash
npm run lint       # ESLint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit, strict mode
npm run build      # production build
```

## Editing content

Almost all copy lives in `data/`, not inside components — component files
should rarely need to change just because text changes.

| What | File |
|---|---|
| Site title/description, hero copy | `data/site.ts` |
| The 4 homepage solution cards | `data/solutions.ts` |
| Each solution page's full content (hero, problem, deliverables, tech, CTA…) | `data/solution-pages.ts` |
| Navbar / footer links | `data/navigation.ts` |
| Technology section entries | `data/technologies.ts` |
| Approach steps + comparison | `data/approach.ts` |
| Contact form project types | `data/contact.ts` |

## Adding a new solution

1. Add an entry to the `solutions` array in `data/solutions.ts` (id, title,
   tagline, description, `href`, image).
2. Add matching editorial content to `solutionPages` in
   `data/solution-pages.ts`.
3. Create `app/[locale]/solutions/<slug>/page.tsx`. Copy the structure of an existing
   one (e.g. `app/[locale]/solutions/digital-platforms/page.tsx`) and swap in the
   right diagram component — build a new one under `components/diagrams/`
   if the architecture doesn't fit an existing diagram.

The homepage grid, sitemap and footer links update automatically from the
`solutions` array — nothing else needs to change.

## Images

Card and hero imagery is centralized as remote URLs on the `image` field of
each entry in `data/solutions.ts` (currently pointing at Unsplash as
clearly-temporary placeholders). To replace them:

1. Either point `image.src` at a new remote URL (add the host to
   `images.remotePatterns` in `next.config.mjs` if it isn't `images.unsplash.com`),
   or drop a file into `public/` and reference it as `/your-file.jpg`.
2. Update `image.alt` to match.

The About section's founder placeholder (`components/sections/AboutSection.tsx`)
is a plain CSS block, not an image — swap it for a real `<Image>` once a
photo exists.

## Colors & design tokens

The entire visual identity is CSS variables in `app/globals.css` under
`:root`, mapped to Tailwind color names in `tailwind.config.ts`:

- `--color-ink`, `--color-graphite`, `--color-muted` — text
- `--color-surface`, `--color-surface-alt`, `--color-paper` — backgrounds
- `--color-accent`, `--color-accent-strong` — the single accent color
- `--color-border`, `--color-border-dark` — hairline borders

Change the accent (or any token) in one place and it propagates everywhere
(`bg-accent`, `text-accent`, `border-accent/40`, etc.).

## Connecting the contact form

The contact form (`components/ContactForm.tsx`) validates input on the
client (`lib/validation.ts`), then posts to `app/api/contact/route.ts`,
which sends the message by email via [Resend](https://resend.com)'s HTTP
API. If the message can't actually be sent, the form shows the real error
instead of pretending it worked.

To make it live:

1. Create a free Resend account (3,000 emails/month, 100/day on the free
   tier) and generate an API key.
2. Copy `.env.example` to `.env.local` and set:
   - `RESEND_API_KEY` — the key from step 1.
   - `CONTACT_TO_EMAIL` — optional, the inbox that should receive
     submissions (defaults to `site.email` in `data/site.ts`).
   - `CONTACT_FROM_EMAIL` — optional. Until you verify your own domain in
     Resend, leave this unset — it falls back to Resend's shared sandbox
     sender (`onboarding@resend.dev`), which works immediately but is
     meant for testing. Verify a domain in Resend, then set this to an
     address on it (e.g. `contact@yourdomain.com`) for production.
3. Set the same variables in your hosting platform (see Deployment below)
   so the form works in production too — `.env.local` only applies locally.

Restart `npm run dev` after changing `.env.local`.

## Deployment

The project is a standard Next.js app. The quickest path to a live URL,
with a working contact form and zero cost:

1. **Push this repo to GitHub.** If it isn't a git repo yet:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
   Create an empty repository on GitHub (via the website, or `gh repo create`
   if you have the GitHub CLI), then:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on [Vercel](https://vercel.com)** (made by the Next.js team —
   free tier, no credit card required):
   - Sign up/log in with your GitHub account.
   - "Add New… → Project", pick this repository. Vercel auto-detects
     Next.js — no config needed.
   - Under **Environment Variables**, add `RESEND_API_KEY` (and
     `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` if you set them) before the
     first deploy, or add them after and redeploy.
   - Deploy. You get a free URL immediately: `your-project-name.vercel.app`
     — pick the project name during import to control that subdomain
     (e.g. `nera.vercel.app`, if available).

3. **Custom domain (optional, not free):** if you later buy a domain
   (e.g. `nera.com`) from any registrar, add it under the Vercel project's
   **Domains** tab and follow the DNS instructions it gives you — HTTPS is
   configured automatically. Until then, the `.vercel.app` URL is
   permanent and free.

4. Update `site.url` in `data/site.ts` to your real domain (the `.vercel.app`
   one, or your custom domain) — it feeds page metadata, the sitemap and
   `robots.ts`. Redeploy after changing it (Vercel redeploys automatically
   on every push to the connected branch).

Every subsequent `git push` redeploys automatically. For any other host
that supports Next.js (a VPS, Docker, etc.), the equivalent is
`npm run build && npm run start`, with the same environment variables set.
