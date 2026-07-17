import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[min(92vh,780px)] overflow-hidden bg-navy-950 text-white">
      <Image
        src="/images/hero.jpg"
        alt="Commercial mechanical boiler room — DMR Mechanical craft"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/75 to-navy-950"
        aria-hidden
      />
      <div className="grid-engine absolute inset-0 opacity-40" aria-hidden />

      <div className="relative container-dmr flex min-h-[min(92vh,780px)] flex-col justify-end section-pad pb-16 pt-28 sm:pb-24 sm:pt-32">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
          DMR Mechanical · Shreveport, Louisiana
        </p>
        <h1 className="headline-xl max-w-4xl">
          We keep the systems
          <br />
          <span className="text-white/90">the Ark-La-Tex </span>
          <em className="not-italic text-red-500">runs on</em>.
        </h1>
        <p className="measure mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
          HVAC, plumbing, boilers, and commercial mechanical — one licensed house, in production
          for homes and facilities since {site.founded}. Craft you can verify. Coverage when systems
          fail.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-red-700"
          >
            Call {site.phone}
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-center text-[15px] font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </section>
  );
}
