# Deploying Tech Lead Portfolio to Production

This guide covers CI/CD and deployment options for this Next.js 14 app. The repo already includes **GitHub Actions CI** (lint + build on push/PR).

---

## CI/CD in this repo

| What | Where |
|------|--------|
| **CI (lint + build)** | `.github/workflows/ci.yml` – runs on push/PR to `main` or `master` |

After you push to GitHub, CI will run automatically. For **deployment (CD)**, use one of the options below; each has its own built-in CD when connected to your repo.

---

## Option 1: Vercel (recommended for Next.js)

**Pros:** Zero config for Next.js, preview deployments per PR, serverless, free tier.  
**Cons:** None for this use case.

### Steps

1. **Push your code to GitHub** (if not already):
   ```bash
   git remote -v   # ensure origin points to your GitHub repo
   git push -u origin main
   ```

2. **Sign in to Vercel:**  
   Go to [vercel.com](https://vercel.com) and sign in with **GitHub**.

3. **Import the project:**
   - Click **Add New… → Project**.
   - Select the **tech-lead-portfolio** repository.
   - Vercel will detect Next.js; leave **Framework Preset** as Next.js and **Root Directory** blank.
   - Click **Deploy**.

4. **Result:**  
   You get a production URL (e.g. `tech-lead-portfolio-xxx.vercel.app`) and every push to `main` auto-deploys. Each pull request gets a preview URL.

5. **(Optional) Custom domain:**  
   In the project → **Settings → Domains**, add your domain and follow the DNS instructions.

### Env vars (if you add any later)

In Vercel: **Project → Settings → Environment Variables**. Add variables for Production (and Preview if needed).

---

## Option 2: Netlify

**Pros:** Simple UI, preview deploys, generous free tier.  
**Cons:** Next.js requires the Netlify Next.js runtime (plugin); slightly more config than Vercel.

### Steps

1. **Push your code to GitHub** (same as Option 1).

2. **Sign in to Netlify:**  
   Go to [netlify.com](https://netlify.com) and sign in with **GitHub**.

3. **Add a new site:**
   - **Add new site → Import an existing project**.
   - Choose **GitHub** and authorize Netlify, then select **tech-lead-portfolio**.

4. **Build settings (Netlify will often pre-fill these):**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (Netlify’s Next.js plugin usually handles this; if you see “Next.js” detected, use the suggested settings.)
   - **Base directory:** (leave blank if the repo root is this project)

5. **Deploy:**  
   Click **Deploy site**. Netlify will install deps, run `npm run build`, and deploy.

6. **Optional: `netlify.toml`**  
   You can add a `netlify.toml` at the repo root for clarity:

   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

   Then install the plugin in the Netlify UI (Site settings → Build & deploy → Plugins) or rely on Netlify’s automatic Next.js detection.

7. **Custom domain:**  
   Site settings → Domain management → Add custom domain.

---

## Option 3: Cloudflare Pages

**Pros:** Fast edge, good free tier.  
**Cons:** Next.js on Pages uses `@cloudflare/next-on-pages`; setup is a bit more manual than Vercel.

### Steps

1. **Push your code to GitHub.**

2. **Install the Cloudflare Next.js adapter (one-time):**
   ```bash
   npm install --save-dev @cloudflare/next-on-pages
   ```

3. **Add a build script** in `package.json`:
   ```json
   "scripts": {
     "pages:build": "npx @cloudflare/next-on-pages"
   }
   ```
   Cloudflare’s recommended build is usually `npm run build` then `npx @cloudflare/next-on-pages` (see their docs for the exact sequence).

4. **Sign in to Cloudflare:**  
   [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.

5. **Select repo:**  
   Choose **tech-lead-portfolio** and configure:
   - **Build command:** as per Cloudflare’s Next.js docs (e.g. `npx @cloudflare/next-on-pages` or the two-step build they specify).
   - **Build output directory:** (as specified in their Next.js guide, often something like `.vercel/output/static` or similar for the adapter).

6. **Deploy:**  
   Save and deploy. Subsequent pushes to `main` will trigger new builds.

7. **Custom domain:**  
   In the Pages project → **Custom domains** → Add domain.

---

## Option 4: GitHub Actions only (build artifact, no host)

If you only want CI and will deploy elsewhere (e.g. your own server or another cloud), the existing workflow in `.github/workflows/ci.yml` already:

- Runs on every push/PR to `main` or `master`.
- Installs dependencies, runs `npm run lint`, and `npm run build`.

You can extend it to upload the `.next` (or export) artifact or deploy via SSH/FTP to your server; that would be a separate workflow or job.

---

## Checklist before going live

- [ ] **SEO:** Set `SITE_CONFIG.url` in `lib/constants.ts` to your production URL (e.g. `https://yourdomain.com`).
- [ ] **Contact form:** If you add an API route or third-party service for the contact form, set the required env vars in your host (Vercel/Netlify/Cloudflare).
- [ ] **Custom domain:** Add and verify your domain in your host’s dashboard and point DNS as instructed.
- [ ] **HTTPS:** All options above provide HTTPS by default.

---

## Summary

| Platform     | Best for              | CD (auto deploy) | Setup difficulty |
|-------------|------------------------|------------------|-------------------|
| **Vercel**  | Next.js (recommended) | Yes (Git)        | Easiest           |
| **Netlify** | Static/SSR sites      | Yes (Git)        | Easy              |
| **Cloudflare Pages** | Edge/performance | Yes (Git) | Medium (Next.js adapter) |

**Recommended path:** Use **Vercel** and connect your GitHub repo; you get CI (from this repo’s workflow) plus CD (from Vercel) with minimal setup.
