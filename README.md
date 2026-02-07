# Tech Lead Portfolio

A modern, professional portfolio website for a Software Engineer & Tech Lead. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- **Home** – Headline, intro, and CTAs
- **About** – Career summary and approach to building software
- **Skills** – Categorised tech stack (Android, Web, Backend, Leadership)
- **Projects** – Project cards with problem, solution, tech stack, and outcomes
- **Experience** – Professional timeline at OCBC Bank
- **Contact** – Contact form and social links

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
/app           – App Router pages (layout, page, about, skills, projects, experience, contact)
/components    – Reusable UI components (Navbar, Footer, Hero, Section, etc.)
/data          – Content and data models (projects, experience, socials, skills)
/lib           – Utilities (SEO, constants)
/styles        – Global CSS (Tailwind)
```

## Customisation

### Content

- **`data/projects.ts`** – Add or edit project cards
- **`data/experience.ts`** – Update work experience
- **`data/socials.ts`** – Change GitHub, LinkedIn, email links
- **`data/skills.ts`** – Adjust skill categories and items
- **`lib/constants.ts`** – Site name, title, description, URL

### Design

- **`tailwind.config.ts`** – Colors (including `accent`), typography
- **`styles/globals.css`** – Base styles, dark mode variables

## Extending

This project is designed to scale. You can add:

- **API routes** – e.g. `/app/api/contact/route.ts` for form submissions
- **Blog** – New `/app/blog` route and dynamic routes
- **Auth** – NextAuth.js, Supabase Auth, etc.
- **Dashboard** – Protected routes for admin or analytics

## Deploy to production

CI runs on every push/PR (see `.github/workflows/ci.yml`). For deployment, see **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step guides:

- **Vercel** (recommended for Next.js) – connect repo, auto-deploy
- **Netlify** – connect repo, set build command
- **Cloudflare Pages** – connect repo, use Next.js adapter

## SEO

Each page has metadata via `lib/seo.ts`. Update `SITE_CONFIG.url` in `lib/constants.ts` for production.

## License

MIT
