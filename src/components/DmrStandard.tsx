import { principles, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function DmrStandard() {
  return (
    <section id="standard" className="section-pad scroll-mt-20 bg-navy-950 text-white grid-engine">
      <div className="container-dmr">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
            The DMR Standard
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Craft is not a slogan.
            <br />
            It is how the work ships.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We keep the work honest the same way we keep the systems honest — credentials you can
            check, diagnoses you can follow, and a preference for showing rather than telling. Every
            answer carries its receipts: licenses named, scope clear, finish that holds under
            inspection.
          </p>
        </Reveal>

        <Reveal delayMs={60}>
          <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Named credentials
          </p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/65">
            {site.licenses.map((lic, i) => (
              <span key={lic.label}>
                {lic.label} {lic.number}
                {i < site.licenses.length - 1 ? " ·" : ""}
              </span>
            ))}
            <span> · EPA-certified technicians</span>
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li key={p.title}>
              <Reveal delayMs={i * 50}>
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
