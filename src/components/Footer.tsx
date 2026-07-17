import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container-dmr section-pad grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-white p-1.5">
              <Image
                src="/images/logo.jpg"
                alt="DMR Mechanical, LLC"
                width={64}
                height={57}
                className="h-10 w-auto"
              />
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Full-service HVAC, plumbing, and mechanical — Shreveport since {site.founded}. Craft
            with receipts.
          </p>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-red-500 transition hover:text-red-600"
          >
            Facebook ↗
          </a>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Navigate
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={site.phoneHref} className="font-semibold text-white hover:text-red-500">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.address.full}
              </a>
            </li>
            <li className="pt-1 text-white/50">{site.hours.weekday}</li>
            <li className="font-semibold text-red-500">{site.hours.emergency}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Licenses
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {site.licenses.map((lic) => (
              <li key={lic.label}>
                <span className="text-white/45">{lic.label} </span>
                <span className="text-white/85">{lic.number}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40 sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="mt-1">
          {site.address.full} · {site.phone}
        </p>
      </div>
    </footer>
  );
}
