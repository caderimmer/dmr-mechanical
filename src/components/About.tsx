import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20 bg-white">
      <div className="container-dmr grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Who we are</p>
          <h2 className="headline mt-4">
            Built from the trades.
            <br />
            Still run by them.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delayMs={80}>
          <p className="body-lg measure-wide">
            Founded in May {site.founded} by {site.founders.join(", ")}, DMR Mechanical started with
            decades of hands-on HVAC, plumbing, and piping experience already on the tools. Today we
            operate a multi-location mechanical contractor — {site.stats.employees} employees,{" "}
            {site.stats.trucks} service trucks, and {site.stats.experienceYears} years of combined
            expertise serving homes, businesses, and industrial facilities across the Ark-La-Tex.
          </p>
          <p className="body-lg measure-wide mt-5">
            What distinguishes the house is multi-trade scale under one roof: heating and air,
            plumbing, boilers, gas lines, drains, and commercial mechanical without coordinating
            separate specialists. EPA-certified technicians. Preventative maintenance that includes
            parts and labor discounts. Licensing that holds up when the inspector walks in.
          </p>
          <blockquote className="mt-10 border-l-2 border-red-600 pl-5">
            <p className="font-display text-xl font-semibold leading-snug text-navy-950 sm:text-2xl">
              “Built from operational reality — crews on the road before it was ever a pitch.”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
