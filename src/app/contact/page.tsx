import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Conversation / Request a Quote",
  description: `Contact DMR Mechanical in Shreveport for HVAC, plumbing, and mechanical service. Call ${site.phone} or request a quote. 24/7 emergency available.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-ice-50">
      <div className="border-b border-ice-100 bg-navy-950 text-white">
        <div className="container-dmr section-pad py-16 sm:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
            Contact
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tell us what needs fixing — or building.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70">
            {site.hours.weekday}. {site.hours.emergency}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              Call {site.phone}
            </a>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </div>

      <div className="container-dmr section-pad grid gap-10 lg:grid-cols-5">
        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-ice-100 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-navy-950">Shop info</h2>
            <dl className="mt-4 space-y-3 text-sm text-steel-700">
              <div>
                <dt className="font-semibold text-navy-950">Address</dt>
                <dd>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {site.address.full}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-950">Phone</dt>
                <dd>
                  <a href={site.phoneHref} className="font-semibold text-red-600">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-950">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ice-100">
            <iframe
              title="DMR Mechanical location map"
              src={site.mapsEmbed}
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </aside>
        <div className="rounded-2xl border border-ice-100 bg-white p-6 sm:p-8 lg:col-span-3">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
