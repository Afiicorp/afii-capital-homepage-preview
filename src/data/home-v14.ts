import { media } from "@/data/site";

export const practices = [
  {
    name: "Investment banking & capital raising",
    detail: "Project and corporate finance, structured debt, equity and refinancing.",
    description: "Capital strategy and transaction preparation for corporations and sponsors, including debt, equity, export credit and structured finance, with lender and investor engagement.",
    image: media.finance,
  },
  {
    name: "Government & infrastructure advisory",
    detail: "Public-sector strategy, infrastructure development, procurement and partnerships.",
    description: "Government-linked project origination, PPP and concession strategy, bid consortia and technical partnerships, with attention to the institutional route to implementation.",
    image: media.eca,
  },
  {
    name: "SME finance & banking distribution",
    detail: "Business credit, working capital, equipment finance and lender coordination.",
    description: "Credit preparation and financing-product coordination for eligible businesses through banks, NBFCs and other financing partners.",
    image: media.trade,
  },
  {
    name: "Asset management & investment platforms",
    detail: "Asset aggregation strategies and investment-platform development.",
    description: "Development of investment theses and platform structures for selected real assets, with attention to governance, operating performance and institutional capital requirements.",
    image: media.bridge,
  },
  {
    name: "Principal investments",
    detail: "Selective proprietary investment and strategic co-investment.",
    description: "Assessment of selected direct investments and co-investments on their individual economics, ownership responsibilities and applicable approvals.",
    image: media.equipment,
  },
];

export const sectors = [
  { title: "Energy & transition", copy: "Generation, renewables, energy networks and operating assets", src: media.energy },
  { title: "Transport & infrastructure", copy: "Rail, roads, aviation, urban transport and logistics", src: media.transport },
  { title: "Industry & international trade", copy: "Industrial facilities, machinery, procurement and international trade", src: media.industry },
];

export const people = [
  { name: "Dr. Mahesh M. Gandhi", role: "Managing Director & President", city: "Frankfurt", initials: "MG", image:"/images/team-mahesh-gandhi.png", linkedin: "https://www.linkedin.com/in/maheshmgandhi/" },
  { name: "Kirti Gulati", role: "Managing Director & Vice President", city: "Frankfurt", initials: "KG", image:"/images/team-kirti-gulati.jpg", linkedin: "https://www.linkedin.com/in/kirtigulati/" },
  { name: "Sidhartha S. Gandhi", role: "Government Advisory & Infrastructure Development", city: "India", initials: "SG", image:"/images/team-sidhartha-gandhi.jpeg", linkedin: "https://www.linkedin.com/in/sidsgandhi/" },
  { name: "Vinit Vidyarthi", role: "Senior Partner — Insurance & Investment Banking", city: "New Delhi", initials: "VV", image:"/images/team-vinit-vidyarthi.jpeg", linkedin: null },
]; // AFII_TEAM_V26
