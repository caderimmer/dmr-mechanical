import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Company() {
  return (
    <section id="company" className="section-pad scroll-mt-20 bg-white">
      <div className="container-dmr grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">The company</p>
          <h2 className="headline mt-4">
            Privately held.
            <br />
            Product of the field.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-8" delayMs={60}>
          <p className="body-lg measure-wide">
            DMR Mechanical LLC was founded by {site.founders.join(", ")} in {site.address.city},{" "}
            {site.address.state}. The company is privately held and crew-led: every capability on this
            page is running on real jobs for paying customers — residential, commercial, and
            industrial — built against operational need rather than theory.
          </p>
          <p className="body-lg measure-wide mt-5">
            The stack is ours end to end — trucks, tools, licenses, and technicians. Support from{" "}
            {site.locations.join(", ")}. Service across Louisiana, East Texas, and South Arkansas.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-ice-100 bg-ice-50 px-3 py-1.5 text-xs font-medium text-steel-700"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
