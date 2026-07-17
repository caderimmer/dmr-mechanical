import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-20 bg-ice-50">
      <div className="container-dmr grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h2 className="headline mt-4">
            Tell us what needs fixing — or building.
          </h2>
          <p className="body-lg measure mt-5">
            A failed condenser, a boiler plant, a multi-trade commercial property — start with the
            job. We&apos;ll tell you plainly how we can help.
          </p>
          <p className="mt-4 text-sm text-steel-500">
            Serious inquiries move quickly. Emergencies should call first.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-500">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={site.phoneHref}
                  className="font-display text-xl font-semibold text-navy-950 transition hover:text-red-600"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-500">
                Address
              </dt>
              <dd className="mt-1 text-steel-700">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  {site.address.full}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-500">
                Hours
              </dt>
              <dd className="mt-1 text-steel-700">{site.hours.weekday}</dd>
              <dd className="font-semibold text-red-600">{site.hours.emergency}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delayMs={80}>
          <div className="rounded-2xl border border-ice-100 bg-white p-6 shadow-sm sm:p-8">
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
