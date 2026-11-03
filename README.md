# The March Center — Coming Soon

A Next.js / React application for **The March Center**, dedicated to hosting and facilitating safe, compassionate supervised visitation for children and families.

## Quick Customization

Update your city/state, contact email, and copy in one place:
- [`src/config/site.ts`](./src/config/site.ts)

If you have your custom domain name (e.g. `themarchcenter.org` or `themarchcenter.com`), add a `public/CNAME` file containing just your domain name so GitHub Pages preserves it on every deployment.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Static Export (GitHub Pages Ready)

This project is configured with `output: 'export'` in `next.config.mjs` and includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes the static `out/` directory to GitHub Pages whenever you push to `main`.
