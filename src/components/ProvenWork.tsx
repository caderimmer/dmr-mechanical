import Image from "next/image";
import { fieldCases, gallery } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ProvenWork() {
  return (
    <section id="work" className="section-pad scroll-mt-20 bg-white">
      <div className="container-dmr">
        <Reveal>
          <p className="eyebrow">Proven work</p>
          <h2 className="headline mt-4 max-w-2xl">
            Tested where the margin is thinnest: the job site.
          </h2>
          <p className="body-lg measure mt-5">
            Representative project types and field work — residential installs to commercial plant
            equipment. Client names stay in conversation when confidentiality applies.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <li key={item.src}>
              <Reveal delayMs={i * 40}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-900">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-4 pt-14">
                    <span className="font-display text-sm font-semibold text-white">
                      {item.caption}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {fieldCases.map((c, i) => (
            <li key={c.title}>
              <Reveal delayMs={i * 50}>
                <article className="flex h-full flex-col rounded-xl border border-ice-100 bg-ice-50 p-6 transition hover:border-red-600/20">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-600">
                    {c.tag}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-semibold tracking-tight text-navy-950">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-700">{c.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
