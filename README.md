# Sage Kite website

A standard Next.js project ready for local editing, GitHub and Vercel.

## Run it in VS Code

1. Install the current Node.js LTS release if Node is not already installed.
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open `http://localhost:3000` in your browser.

## Main files

- `app/page.tsx` contains the homepage content and carousel.
- `app/globals.css` contains the complete visual design and responsive styles.
- `app/layout.tsx` contains the SEO title, description and favicon settings.
- `public/` contains the Sage Kite logo assets.

## Publish through GitHub and Vercel

1. Create an empty GitHub repository named `sage-kite-website`.
2. In the VS Code terminal, run:

```bash
git init
git add .
git commit -m "Initial Sage Kite website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

3. Sign in to Vercel with GitHub.
4. Choose **Add New → Project** and import the repository.
5. Vercel will detect Next.js. Keep the default settings and click **Deploy**.

## Connect a Hostinger domain

1. In Vercel, open the project and go to **Settings → Domains**.
2. Add both `yourdomain.com` and `www.yourdomain.com`.
3. Vercel will display the exact DNS records it needs.
4. In Hostinger hPanel, open **Domains → DNS** and select the domain.
5. Replace only the conflicting website A/CNAME records with the values Vercel gives you.
6. Do not delete MX, SPF, DKIM or other email records.
7. Return to Vercel and wait for both domains to show as configured.

Every future push to the `main` branch will update the live website automatically.
