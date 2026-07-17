import { howWeWork } from "@/lib/site";
import { Reveal } from "./Reveal";

export function HowWeWork() {
  return (
    <section id="approach" className="section-pad scroll-mt-20 bg-ice-50">
      <div className="container-dmr">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="headline mt-4 max-w-xl">Craft is the product.</h2>
          <p className="body-lg measure mt-5">
            A simple sequence — diagnose, quote, execute, maintain — so every job is auditable from
            the first call to the final walkthrough.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((step, i) => (
            <li key={step.title}>
              <Reveal delayMs={i * 50}>
                <span className="font-display text-sm font-semibold tracking-widest text-red-600">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
