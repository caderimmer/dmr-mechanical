# DMR Mechanical — Progressive Web App

Professional marketing PWA for **DMR Mechanical LLC** (Shreveport, LA / Ark-La-Tex): HVAC, plumbing, boilers, and mechanical services.

**Production:** [https://dmr-mechanical.vercel.app](https://dmr-mechanical.vercel.app)

**GitHub:** [https://github.com/caderimmer/dmr-mechanical](https://github.com/caderimmer/dmr-mechanical)

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Progressive Web App: web app manifest, service worker, offline page, install prompt
- SEO: metadata, Open Graph, JSON-LD (`HVACBusiness` / `Plumber` / `LocalBusiness`)
- Lead capture: Server Action + optional Resend email

## Develop

```bash
cd dmr-mechanical
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

Deploy to Vercel (or any Node host). Set `NEXT_PUBLIC_SITE_URL` to the live origin for correct canonicals, sitemap, and JSON-LD.

### Lead email (optional)

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key |
| `LEAD_TO_EMAIL` | Inbox for quote requests |
| `LEAD_FROM_EMAIL` | Verified from-address in Resend |

Without these, the form still validates and succeeds; leads are logged server-side.

## PWA features

- **Installable** standalone app (`display: standalone`)
- **Shortcuts:** Call, Request Quote, Emergency offline page
- **Service worker** (`public/sw.js`): precaches shell + key assets; offline fallback at `/offline`
- **Install prompt** when the browser fires `beforeinstallprompt`
- **Icons:** 192 / 512 / maskable under `public/images/`

## Business content source

NAP, licenses, stats, and services are centralized in `src/lib/site.ts`.

- Phone: (318) 629-6800  
- Address: 6150 Bert Kouns Industrial Loop, Shreveport, LA 71129  
- Facebook: https://www.facebook.com/DMRMechanical  

## License

Private project for DMR Mechanical LLC.
