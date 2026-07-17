export const site = {
  name: "DMR Mechanical LLC",
  shortName: "DMR Mechanical",
  tagline: "HVAC, Plumbing & Mechanical Services",
  description:
    "Full-service HVAC, plumbing, and mechanical contractor serving the Ark-La-Tex since 2004. 24/7 emergency service from Shreveport, LA — licensed, EPA-certified, built on craft.",
  phone: "(318) 629-6800",
  phoneHref: "tel:+13186296800",
  email: "info@dmrmechanical.com",
  address: {
    street: "6150 Bert Kouns Industrial Loop",
    city: "Shreveport",
    state: "LA",
    zip: "71129",
    full: "6150 Bert Kouns Industrial Loop, Shreveport, LA 71129",
  },
  geo: {
    lat: 32.4039269,
    lng: -93.8666307,
  },
  hours: {
    weekday: "Monday–Friday 7:30 AM – 4:30 PM",
    emergency: "24/7 Emergency Service",
    openingHours: ["Mo-Fr 07:30-16:30"],
  },
  founded: 2004,
  stats: {
    employees: "85+",
    experienceYears: "500+",
    trucks: "60+",
  },
  founders: ["Danny Gilcrease", "Mark Ross", "Rick Barr"],
  locations: ["Shreveport", "Bossier", "Ruston", "Monroe"],
  serviceAreas: [
    "Shreveport",
    "Bossier City",
    "Haughton",
    "Ruston",
    "Monroe",
    "East Texas",
    "South Arkansas",
    "Ark-La-Tex",
  ],
  licenses: [
    { label: "Louisiana Mechanical License", number: "#42461" },
    { label: "Louisiana Boiler License", number: "#B10000259" },
    { label: "NBBI R Stamp", number: "#R-8152" },
    { label: "Louisiana Gas License", number: "#LMNGF8253" },
    { label: "Plumbing (LA / AR / TX)", number: "Licensed" },
  ],
  social: {
    facebook: "https://www.facebook.com/DMRMechanical",
  },
  mapsEmbed:
    "https://maps.google.com/maps?q=6150+Bert+Kouns+Industrial+Loop,+Shreveport,+LA+71129&z=15&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/DMR+Mechanical/@32.4039269,-93.8666307,17z",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmrmechanical.com",
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#standard", label: "Standard" },
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Interactive stats with “receipts” — runtalon-style provenance for trade facts */
export const receipts = [
  {
    id: "founded",
    value: "2004",
    label: "Founded in Shreveport",
    receipt:
      "DMR Mechanical LLC launched in May 2004 by Danny Gilcrease, Mark Ross, and Rick Barr — three tradesmen with decades already on the tools.",
  },
  {
    id: "employees",
    value: "85+",
    label: "Employees",
    receipt:
      "A multi-location workforce across Shreveport, Bossier, Ruston, and Monroe — EPA-certified technicians, licensed plumbers, and mechanical specialists under one roof.",
  },
  {
    id: "trucks",
    value: "60+",
    label: "Service trucks",
    receipt:
      "A rolling fleet stocked for HVAC, plumbing, and commercial mechanical calls — so the right tools and parts arrive with the first truck.",
  },
  {
    id: "experience",
    value: "500+",
    label: "Years combined experience",
    receipt:
      "Combined mechanical expertise across the company — not a marketing estimate, but the depth of a team that has lived the trades for decades.",
  },
  {
    id: "emergency",
    value: "24/7",
    label: "Emergency coverage",
    receipt:
      "Business hours Monday–Friday 7:30–4:30. When cooling fails in a heat wave or a line breaks after dark, emergency crews stay on call across the Ark-La-Tex.",
  },
] as const;

export const engines = [
  {
    number: "01",
    id: "hvac",
    title: "Heating, air & refrigeration",
    description:
      "Repair, replacement, and service for all major AC and heating brands. EPA-certified technicians ready for Louisiana heat and winter cold snaps.",
    image: "/images/service-hvac.jpg",
    badge: "In the field",
  },
  {
    number: "02",
    id: "plumbing",
    title: "Plumbing",
    description:
      "Leaks, fixtures, pipe repair, water heaters, and full residential or commercial plumbing — licensed plumbers, no hand-off to a second shop.",
    image: "/images/service-plumbing.jpg",
    badge: "In the field",
  },
  {
    number: "03",
    id: "boilers",
    title: "Boilers & commercial mechanical",
    description:
      "Boiler installation and replacement, industrial process piping, and plant mechanical work with NBBI R Stamp capability.",
    image: "/images/service-boiler.jpg",
    badge: "In the field",
  },
  {
    number: "04",
    id: "gas",
    title: "Gas lines & water heaters",
    description:
      "Gas line repair and installation under Louisiana Gas License #LMNGF8253. Tank and tankless water heater work for homes and facilities.",
    image: "/images/gallery-06.jpg",
    badge: null,
  },
  {
    number: "05",
    id: "drain",
    title: "Drain & sewer diagnostics",
    description:
      "Complete drain cleaning with video camera inspection — diagnose the line before you open the wrong wall.",
    image: "/images/gallery-05.jpg",
    badge: null,
  },
  {
    number: "06",
    id: "maintenance",
    title: "Maintenance & 24/7 emergency",
    description:
      "Preventative programs with parts and labor discounts. When systems fail after hours, we answer.",
    image: "/images/service-emergency.jpg",
    badge: "Always on",
  },
] as const;

export const principles = [
  {
    title: "License first",
    body: "Mechanical, plumbing, gas, and boiler credentials are on the truck — not in a brochure. Work that requires a stamp gets a stamped crew.",
  },
  {
    title: "Show the work",
    body: "Clear diagnosis, plain-language options, and no mystery line items. We would rather walk you through the fix than ask for blind trust.",
  },
  {
    title: "Multi-trade, one crew",
    body: "HVAC and plumbing under one roof means one schedule, one accountability, and fewer subcontractors between you and the result.",
  },
  {
    title: "Ready when systems fail",
    body: "Comfort and operations do not wait for business hours. Emergency coverage is part of the standard, not an upsell.",
  },
] as const;

export const howWeWork = [
  {
    title: "Diagnose",
    body: "We start with the system, not the invoice. Proper inspection, camera when needed, and a clear read on what failed and why.",
  },
  {
    title: "Quote clearly",
    body: "Options you can compare — repair vs. replace, parts vs. labor — so the decision is yours with eyes open.",
  },
  {
    title: "Execute to code",
    body: "Installations and repairs to license and manufacturer standard. Commercial work that holds up under inspection.",
  },
  {
    title: "Maintain",
    body: "Preventative programs that keep equipment reliable and emergencies rare — with parts and labor discounts for members.",
  },
] as const;

export const fieldCases = [
  {
    tag: "In the field",
    title: "Commercial boiler replacement",
    body: "Removing aging steam equipment and standing up a new boiler plant with feed water — the kind of mechanical room work that keeps a facility online.",
  },
  {
    tag: "In the field",
    title: "Same-day heat-wave response",
    body: "Cooling failures in Shreveport summer are not optional tickets. Emergency crews prioritize restoring livable conditions when outdoor temperatures leave no margin.",
  },
  {
    tag: "In the field",
    title: "Multi-trade commercial property",
    body: "HVAC and plumbing on one site, one contractor, one schedule — so property managers are not coordinating three specialty shops.",
  },
] as const;

export const gallery = [
  {
    src: "/images/gallery-01.jpg",
    alt: "Commercial boiler and mechanical room project",
    caption: "Commercial boiler replacement",
  },
  {
    src: "/images/gallery-02.jpg",
    alt: "Rooftop commercial HVAC package unit",
    caption: "Rooftop HVAC installation",
  },
  {
    src: "/images/gallery-03.jpg",
    alt: "Residential air conditioning outdoor unit install",
    caption: "Residential AC installation",
  },
  {
    src: "/images/gallery-04.jpg",
    alt: "Industrial process piping",
    caption: "Industrial process piping",
  },
  {
    src: "/images/gallery-05.jpg",
    alt: "Drain and sewer inspection equipment",
    caption: "Drain & sewer diagnostics",
  },
  {
    src: "/images/gallery-06.jpg",
    alt: "Tankless water heater installation",
    caption: "Water heater installation",
  },
] as const;

export const serviceOptions = [
  "Heating & Air Conditioning",
  "Plumbing",
  "Boilers & Commercial Mechanical",
  "Water Heater",
  "Drain & Sewer",
  "Gas Line",
  "Preventative Maintenance",
  "24/7 Emergency",
  "Other / Not Sure",
] as const;

/** @deprecated use engines — kept for LocalBusinessJsonLd service list */
export const services = engines.map((e) => ({
  id: e.id,
  title: e.title,
  description: e.description,
  image: e.image,
  icon: "wrench" as const,
}));
