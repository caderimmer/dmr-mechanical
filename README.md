# DMR Mechanical — Progressive Web App

Professional marketing PWA for **DMR Mechanical LLC** (Shreveport, LA / Ark-La-Tex).

Live: https://dmr-mechanical.vercel.app

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Progressive Web App (manifest, service worker, offline)
- SEO: metadata, Open Graph, JSON-LD
- Lead capture Server Action + optional Resend

## Develop

```bash
npm install && npm run dev
```

## Production

```bash
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` for production canonicals.

Optional lead email: `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`.
