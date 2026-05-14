# Germán Ruiz Cabello — Portfolio

An editorial, minimalist portfolio built with **React 18 + Vite + Tailwind CSS** and animated with **Framer Motion**. Deep-navy accent on warm off-white. All content lives in a single file (`src/data.js`).

---

## Table of contents

1. [What you get](#what-you-get)
2. [Prerequisites](#prerequisites)
3. [Local setup (5 minutes)](#local-setup-5-minutes)
4. [How to edit your content](#how-to-edit-your-content)
5. [Deployment](#deployment)
   - [Option A — Vercel (easiest)](#option-a--vercel-easiest)
   - [Option B — Netlify](#option-b--netlify)
   - [Option C — GitHub Pages (free, with custom domain)](#option-c--github-pages-free-with-custom-domain)
   - [Option D — AWS S3 + CloudFront (resume-ready)](#option-d--aws-s3--cloudfront-resume-ready)
6. [Custom domain](#custom-domain)
7. [Troubleshooting](#troubleshooting)

---

## What you get

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── me.jpg              ← ADD your photo here
│   └── CV.pdf              ← ADD your CV here (optional, enables "Download CV")
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx        ← simple: name, subtitle, descriptor, 2 CTAs, square portrait
│   │   ├── About.jsx
│   │   ├── Experience.jsx  ← numbered list with company-initials chips
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css           ← .eyebrow / .section-title / .card / .chip utilities
│   └── data.js             ← edit your CV content here
├── .github/workflows/
│   └── deploy.yml          ← auto-deploys to GitHub Pages
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

A single-page portfolio with: Navbar, Hero, About, Experience (Avalohost + freelance + La Terraza), Projects, Skills, Education, Contact, Footer. Editorial monteiro.ai-inspired layout: small uppercase "eyebrow" labels above statement headlines, warm stone-50 background, deep-navy `#1e3a8a` accent.

---

## Prerequisites

- **Node.js 18+** (20 LTS recommended). Check with `node -v`. Install from <https://nodejs.org>.
- **Git**. Check with `git --version`.
- A **GitHub account** (free).

---

## Local setup (5 minutes)

```bash
cd portfolio
npm install
npm run dev
```

Open <http://localhost:5173>. Edits hot-reload instantly.

To build for production:

```bash
npm run build      # outputs to ./dist
npm run preview    # serves ./dist at http://localhost:4173
```

---

## How to edit your content

Almost everything lives in **`src/data.js`**. Open it and edit:

- `profile` — name, hero subtitle, tagline, meta line, current role, email, phone, GitHub URL, LinkedIn URL, CV path, photo path
- `about` — your bio (paragraphs separated by blank lines)
- `education` — schools, degrees, dates, course highlights
- `experience` — roles, dates, locations, bullet achievements, tech stack chips, optional `status`
- `projects` — name, role, year, status, description, stack, optional link
- `skills` — grouped by category
- `certifications`, `languages`

**Add your profile photo (required for a good-looking Hero):**
1. Save your photo as `public/me.jpg` (square, e.g. 800×800px).
2. The Hero renders it as a rounded square with subtle ring + shadow.
3. If the file is missing, the Hero falls back to your initials "GR" on a navy background — no broken-image icon.
4. To use a different filename or format, edit `profile.photoUrl` in `src/data.js`.

**Add your CV:**
1. Drop `CV.pdf` into the `public/` folder.
2. The Hero "Download CV" button is already wired to `/CV.pdf`.

**Change the accent color:**
- Edit `tailwind.config.js` → `theme.extend.colors.accent`. Default is deep navy `#1e3a8a`. Buttons, links, company names, and initials chips all pick this up.

---

## Deployment

You only need one of the options below. Start with Vercel — it's the fastest.

### Option A — Vercel (easiest)

1. Push the project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/geermanruuiz/portfolio.git
   git push -u origin main
   ```
2. Go to <https://vercel.com> → **Add New… → Project** → import the repo.
3. Vercel auto-detects Vite. Keep defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. ~30 seconds later you'll get a `https://<name>.vercel.app` URL. Every push to `main` auto-redeploys.

### Option B — Netlify

1. Push to GitHub (same as Vercel step 1).
2. Go to <https://app.netlify.com> → **Add new site → Import an existing project** → pick the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

### Option C — GitHub Pages (free, with custom domain)

The repo already includes `.github/workflows/deploy.yml`.

1. Create a public repo on GitHub (e.g. `portfolio`).
2. **Important** — set the Vite `base` correctly in `vite.config.js`:
   - Repo named `portfolio` and username `geermanruuiz` → URL is `https://geermanruuiz.github.io/portfolio/`. Set `base: '/portfolio/'`.
   - Repo named `geermanruuiz.github.io` → URL is `https://geermanruuiz.github.io/`. Keep `base: '/'`.
3. Push:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/geermanruuiz/portfolio.git
   git push -u origin main
   ```
4. In the repo on GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. After ~1 minute the site is live.

### Option D — AWS S3 + CloudFront (resume-ready)

A great talking point given your AWS certification.

```bash
npm run build

# Create bucket
aws s3 mb s3://BUCKET-NAME --region eu-west-1

# Upload
aws s3 sync ./dist s3://BUCKET-NAME --delete

# Enable static hosting
aws s3 website s3://BUCKET-NAME --index-document index.html --error-document index.html
```

Then:
1. Use **CloudFront with Origin Access Control (OAC)** in front of a private bucket.
2. CloudFront settings:
   - Default root object: `index.html`
   - Redirect HTTP → HTTPS
   - Custom error response: 403/404 → `/index.html` with status 200 (SPA fallback)
3. Add ACM cert in `us-east-1` + Route 53 record for a custom domain.

Re-deploy:
```bash
npm run build
aws s3 sync ./dist s3://BUCKET-NAME --delete
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

---

## Custom domain

After deploying:

1. Buy a domain (Namecheap, Cloudflare Registrar, OVH, etc.).
2. In your hosting dashboard → **Domains → Add domain** → enter your domain.
3. Add the DNS records the dashboard shows at your registrar.
4. SSL is auto-provisioned. Wait 5–60 minutes.

---

## Troubleshooting

**Blank page on GitHub Pages.** Set `base` in `vite.config.js` to `/<repo-name>/`.

**Photo shows "GR" instead of my picture.** `public/me.jpg` is missing or named differently. Add it, or update `profile.photoUrl` in `src/data.js`.

**Tailwind classes not applying.** `src/index.css` must contain `@tailwind base/components/utilities` and `main.jsx` must import it.

**Node 16 errors on install.** Upgrade to Node 18+ ([nvm](https://github.com/nvm-sh/nvm) is easiest).

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start dev server at <http://localhost:5173> |
| `npm run build` | Build production bundle to `./dist` |
| `npm run preview` | Preview the production bundle |
| `npm run deploy` | Push `./dist` to a `gh-pages` branch |
