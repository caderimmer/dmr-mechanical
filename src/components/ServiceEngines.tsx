import Image from "next/image";
import Link from "next/link";
import { engines } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ServiceEngines() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-ice-50">
      <div className="container-dmr">
        <Reveal>
          <p className="eyebrow">What we build</p>
          <h2 className="headline mt-4 max-w-2xl">
            A full mechanical house.
            <br />
            One standard.
          </h2>
          <p className="body-lg measure mt-5">
            From emergency cooling calls to commercial boiler plants — numbered lines of work, same
            discipline on every job.
          </p>
        </Reveal>

        <ul className="mt-16 space-y-0 divide-y divide-ice-100 border-y border-ice-100 bg-white">
          {engines.map((engine, index) => (
            <li key={engine.id}>
              <Reveal delayMs={index * 40}>
                <article className="group grid gap-6 py-10 sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-12">
                  <div className="sm:col-span-1">
                    <span className="font-display text-sm font-semibold tracking-widest text-red-600">
                      {engine.number}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-navy-900 sm:col-span-4 sm:aspect-[4/3]">
                    <Image
                      src={engine.image}
                      alt={engine.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="sm:col-span-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
                        {engine.title}
                      </h3>
                      {engine.badge && (
                        <span className="rounded-full border border-red-600/25 bg-red-600/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-600">
                          {engine.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-steel-700">
                      {engine.description}
                    </p>
                    <Link
                      href="/#contact"
                      className="mt-5 inline-flex text-sm font-semibold text-navy-950 transition hover:text-red-600"
                    >
                      Start a conversation →
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
