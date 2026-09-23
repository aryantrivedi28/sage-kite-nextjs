# Sage Kite website

Marketing website for Sage Kite, a business growth consultancy —
[www.sagekite.com](https://www.sagekite.com). Built with Next.js (App Router),
React and TypeScript. All pages are static.

Working on the code with an AI assistant? Point it to [AGENTS.md](AGENTS.md)
first. It has the project map, conventions and rules.

## Run it locally

1. Install the current Node.js LTS release.
2. In the project folder, run:

```bash
npm install
npm run dev
```

3. Open `http://localhost:3000`.

Before committing, check that the site builds:

```bash
npx tsc --noEmit
npm run build
```

## Common tasks

- **Add a blog post:** copy `content/blog/posts/_template.tsx`, fill it in,
  and register it in `content/blog/index.tsx`. Step-by-step instructions are
  at the top of that file.
- **Add a platform page:** copy an existing folder in `app/platforms/`, then
  add the new slug to `app/sitemap.ts`.
- **Change site-wide styles:** `app/globals.css`.
- **Change site-wide SEO / schema:** `app/layout.tsx`.

## Deployment

The site deploys on Vercel. Every push to `main` updates the live site.

### Connect a Hostinger domain

1. In Vercel, open the project and go to **Settings → Domains**.
2. Add both `yourdomain.com` and `www.yourdomain.com`.
3. Vercel will display the exact DNS records it needs.
4. In Hostinger hPanel, open **Domains → DNS** and select the domain.
5. Replace only the conflicting website A/CNAME records with the values Vercel gives you.
6. Do not delete MX, SPF, DKIM or other email records.
7. Return to Vercel and wait for both domains to show as configured.
