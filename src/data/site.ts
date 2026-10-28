/**
 * AFII Capital homepage editorial content.
 * Copy is written for the prototype; verify regulatory disclosures, locations,
 * leadership titles and any deal references with AFII before public release.
 * Media are temporary remotely hosted stock assets; see MEDIA_CREDITS.md.
 */
export const media = {
  hero: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?auto=format&fit=crop&w=2400&q=88",
  heroFallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85",
  finance: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  trade: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  equipment: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
  eca: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
  advisory: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
  energy: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1300&q=85",
  transport: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1300&q=85",
  industry: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1300&q=85",
  approach: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  bridge: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85",
  filmPoster: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=85",
  // Pexels sample urban infrastructure / movement footage. The poster remains if blocked.
  filmVideo: "https://videos.pexels.com/video-files/10433645/10433645-hd_1920_1080_25fps.mp4",
};

export type Capability = {
  no: string;
  title: string;
  short: string;
  description: string;
  image: string;
  note: string;
};

export const capabilities: Capability[] = [
  {
    no: "01",
    title: "Project finance",
    short: "Capital structures for major projects.",
    description:
      "Greenfield developments, expansion programmes and operating infrastructure require financing that works across long horizons. We advise sponsors on capital structures, funding pathways and the commercial questions behind a financeable project.",
    image: media.finance,
    note: "Greenfield / Brownfield / Refinancing",
  },
  {
    no: "02",
    title: "Trade finance",
    short: "Financing the movement of goods and value.",
    description:
      "Cross-border trade brings payment, delivery and counterparty considerations together. Our work addresses structured trade arrangements, receivables and liquidity solutions in the context of the underlying commercial transaction.",
    image: media.trade,
    note: "Cross-border trade / Receivables / Liquidity",
  },
  {
    no: "03",
    title: "Equipment finance",
    short: "Making productive assets possible.",
    description:
      "From industrial production lines to specialised transport assets, we assess the nature of the equipment, its use and the cash flows that support financing or leasing structures.",
    image: media.equipment,
    note: "Industrial equipment / Leasing / Asset-backed structures",
  },
  {
    no: "04",
    title: "ECA-backed finance",
    short: "Connecting procurement with export credit.",
    description:
      "International procurement can benefit from a structured approach to export credit agencies, lenders and suppliers. We help evaluate potential arrangements and the requirements that shape their feasibility.",
    image: media.eca,
    note: "Export credit / Supplier contracts / Lender coordination",
  },
  {
    no: "05",
    title: "Strategic advisory",
    short: "Independent thinking around financial decisions.",
    description:
      "Transactions are rarely just about obtaining capital. We consider stakeholder alignment, funding terms, project risk and the strategic consequences of each available route.",
    image: media.advisory,
    note: "Capital strategy / Structuring / Stakeholder alignment",
  },
];

export const industries = [
  {
    index: "01 / 03",
    title: "Energy & transition",
    label: "Generation, renewables and energy systems",
    image: media.energy,
    capabilityIndex: 0,
  },
  {
    index: "02 / 03",
    title: "Transport & infrastructure",
    label: "Aviation, rail, roads and logistics",
    image: media.transport,
    capabilityIndex: 2,
  },
  {
    index: "03 / 03",
    title: "Industry & trade",
    label: "Manufacturing, equipment and supply chains",
    image: media.industry,
    capabilityIndex: 1,
  },
];

export const focusThemes = [
  {
    number: "01",
    title: "Structure before scale",
    description:
      "A practical financing strategy begins with the project, its stakeholders and the actual risks being taken.",
  },
  {
    number: "02",
    title: "Cross-border perspective",
    description:
      "Different jurisdictions and counterparties call for careful coordination, not a one-size-fits-all model.",
  },
  {
    number: "03",
    title: "Decisions that hold up",
    description:
      "Sound advice should remain useful beyond the transaction and through the life of an asset.",
  },
];

export const email = "reachus@afiicapital.com";
