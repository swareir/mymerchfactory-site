# MyMerchFactory — Full‑Service Website (Next.js + Tailwind)

**Black & white theme.** Uses your provided logo at `public/logo.png`.

## What's inside
- Next.js (App Router) + Tailwind
- Pages: `/`, `/solutions`, `/how-it-works`, `/pricing`, `/portfolio`, `/faq`, `/contact`
- Simple components: `Navbar`, `Footer`
- CTA wired to `/contact` (replace with Cal.com or your form)

## Getting started
```bash
npm i
npm run dev
```

## Customize
- Replace copy directly in each `app/**/page.tsx`.
- Swap imagery in `public/`. Your logo already lives at `public/logo.png`.
- Colors: Site is grayscale; accent via imagery/logo only.

## Deploy
- **Vercel (recommended):**
  1. Push this folder to a new GitHub repo (e.g., `mymerchfactory-site`).
  2. Create a new Vercel Project → Import the repo.
  3. Framework preset: **Next.js**. No special env vars required to start.
- **Netlify:** Use Next adapter. Build command: `next build`. Publish directory: `.next`.

## Share with coworkers
- Zip included by me (download below). Share the zip directly or the GitHub link once you push it.
- For reviews without local dev, deploy to Vercel and share the preview URL.

## Hook up “Book a demo”
- Replace `/contact` buttons with your Cal.com/HubSpot Meetings link, or connect a form provider.
