import { About } from "@/components/About";
import { Company } from "@/components/Company";
import { ContactSection } from "@/components/ContactSection";
import { DmrStandard } from "@/components/DmrStandard";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { ProvenWork } from "@/components/ProvenWork";
import { ServiceEngines } from "@/components/ServiceEngines";
import { StatsReceipts } from "@/components/StatsReceipts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsReceipts />
      <About />
      <ServiceEngines />
      <DmrStandard />
      <ProvenWork />
      <HowWeWork />
      <Company />
      <ContactSection />
    </>
  );
}
