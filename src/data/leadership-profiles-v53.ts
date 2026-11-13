/**
 * AFII GROUP V5.3: researched editorial biographies.
 * Reuses the EXISTING photo, display name, role and location from leadership-v17.ts.
 * Public contact links are only included where the AFII public directory identifies them.
 * Partial public information intentionally results in a shorter biography; no invented career claims.
 */
export type LeaderProfile = {
  paragraphs: readonly string[];
  milestones?: readonly { period: string; heading: string; description: string }[];
  publicEmail?: string;
  reference?: { label: string; url: string };
  extraReference?: { label: string; url: string };
};

export const leaderProfiles: Readonly<Record<string, LeaderProfile>> = {
  "Dr. Mahesh M. Gandhi": {
    paragraphs: [
      "Dr. Mahesh M. Gandhi has been associated with AFII's corporate advisory and investment activities since its early development. The firm's published history traces its origins to 1996 and its expansion into infrastructure and real-estate financial advisory to 2001.",
      "His work has encompassed structured trade and project finance, capital structuring for infrastructure businesses, international counterparties and the development of public-public cooperation models. His professional profile also records his qualification as a Chartered Accountant."
    ],
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/maheshmgandhi/" },
    extraReference: { label: "AFII corporate history", url: "https://www.afiicorp.com/about/" },
    milestones: [
          {
                "period": "1994",
                "heading": "Chartered Accountant",
                "description": "His public professional profile records an ICAI chartered-accountancy qualification issued in January 1994."
          },
          {
                "period": "1996",
                "heading": "AFII's origins",
                "description": "AFII's published company history dates its establishment as a proprietary-investment business to 1996. This is a corporate milestone, not a claim that every present legal entity existed then."
          },
          {
                "period": "2001",
                "heading": "Infrastructure advisory expansion",
                "description": "AFII states that its business was reorganised to provide infrastructure and real-estate financial advisory services."
          }
    ]
  },
  "Kirti Gulati": {
    paragraphs: [
      "Kirti Gulati is identified in AFII's published leadership directory as Managing Director and Vice President. Her work is associated with financing strategy, capital raising and institutional engagement across AFII's corporate and project-finance activities.",
      "Her public professional updates discuss infrastructure incubation, aviation finance and export-credit-backed funding. She is based in the Frankfurt region and works with AFII's international financing and commercial network."
    ],
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/kirtigulati/" },
    milestones: [
          {
                "period": "2022",
                "heading": "Executive education",
                "description": "Her publicly accessible LinkedIn education record lists studies at Frankfurt School of Finance & Management in 2022."
          },
          {
                "period": "2025",
                "heading": "International advisory activity",
                "description": "Her public professional updates refer to AFII work across infrastructure incubation, aviation finance and export-credit-backed funding."
          }
    ]
  },
  "Sidhartha S. Gandhi": {
    paragraphs: [
      "Sidhartha Singh Gandhi works across structured finance, international relations and government-linked infrastructure development. His public professional profile describes an analytical focus on international affairs and financial structures.",
      "Within AFII's government and infrastructure practice, his work relates to institutional engagement, project origination and the development of international commercial and implementation partnerships."
    ],
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/sidsgandhi/" }
  },
  "Vinit Vidyarthi": {
    paragraphs: [
      "Vinit Vidyarthi is a senior professional associated with AFII's insurance, investment-banking and business-finance activities. His public profile identifies him as a Fellow Chartered Accountant and records executive education at the Indian Institute of Management Ahmedabad.",
      "His work includes transaction and financing discussions, lender relationships and advisory support for corporate and business clients. AFII's published directory lists him as a senior partner in New Delhi."
    ],
    publicEmail: "vinit.vidyarthi@afiicorp.com",
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/vinitvidyarthi/" },
    milestones: [
          {
                "period": "1996",
                "heading": "Management education",
                "description": "His public LinkedIn education record lists a programme at the Indian Institute of Management Ahmedabad in 1996."
          },
          {
                "period": "2013–2022",
                "heading": "Community service",
                "description": "His professional record lists Rotary International district-grants responsibilities during this period."
          }
    ]
  },
  "Abhijit Avarsekar": {
    paragraphs: [
      "Abhijit Avarsekar advises on infrastructure business and commercial development. His professional profile describes more than three decades of involvement in the construction and infrastructure sector, including leadership, negotiation and strategic planning.",
      "He is listed in AFII's published leadership directory as a senior adviser for infrastructure business in Mumbai. His experience informs commercial assessments and relationships with delivery-sector counterparties."
    ],
    publicEmail: "aka@afiicapital.com",
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/abhijit-avarrsekar/" },
    milestones: [
          {
                "period": "1991–1995",
                "heading": "Engineering education",
                "description": "His publicly accessible LinkedIn record lists Father Agnel College of Engineering, Vashi, for this period."
          },
          {
                "period": "2008–2011",
                "heading": "Industry recognition",
                "description": "His public professional profile includes construction-industry recognition during this period, including Infrastructure Excellence and entrepreneurship awards."
          }
    ]
  },
  "Lt. Gen. (Retd.) Rafi Peled": {
    paragraphs: [
      "Lt. Gen. (Retd.) Rafi Peled is listed in AFII Capital's published leadership directory as a senior partner responsible for Israel business.",
      "His directory role is associated with Israel-facing relationships and the assessment of relevant cross-border commercial opportunities. Individual mandates and responsibilities are established by the relevant AFII entity and counterparties."
    ],
    reference: { label: "AFII published leadership directory", url: "https://afiicapital.com/team/" }
  },
  "Nguyen Thi Thanh Nga": {
    paragraphs: [
      "Nguyen Thi Thanh Nga is listed in AFII's published directory as Head of Vietnam Business. Her role provides a point of contact for business and professional relationships relevant to the Vietnamese market.",
      "AFII's Vietnam activities are part of its wider cross-border network. The local scope of any engagement is confirmed with the participating legal entities and professional partners."
    ],
    reference: { label: "AFII published leadership directory", url: "https://afiicapital.com/team/" }
  },
  "K. Aakash": {
    paragraphs: [
      "Kumar Aakash is identified in AFII's public directory as a director of AFII Corporate Advisors in New Delhi. He supports the firm's India-facing business representation and contact with corporate and institutional counterparties.",
      "His professional profile is linked to AFII Capital Partners, and his published role connects local representation with the Group's broader advisory network."
    ],
    publicEmail: "k.aakash@afiicapital.com",
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/kumar-aakash/" }
  },
  "Swapnil Gandhi": {
    paragraphs: [
      "Swapnil Gandhi is associated with AFII's Government Advisory & Infrastructure Development practice, as identified in its current team directory.",
      "The practice works on public-sector opportunities, commercial project development, consortium strategy and institutional partnerships. Specific responsibilities are determined by each assignment."
    ]
  },
  "Michel Buffat": {
    paragraphs: [
      "Michel Buffat is a member of the board of AGENOVA AG in Zug, Switzerland, according to published Swiss commercial-register information. His earlier career includes senior leadership in aviation and yacht finance at Credit Suisse.",
      "Public industry speaker biographies describe his experience in aircraft and yacht financing, transaction oversight, and portfolio management. His engineering and finance background brings an asset-focused perspective to cross-border commercial work."
    ],
    reference: { label: "Public industry biography", url: "https://www.corporatejetinvestor.com/event/asia-2021/" },
    extraReference: { label: "AGENOVA register summary", url: "https://onlineinfo.ch/firma/agenova-ag---che-166-363-445" },
    milestones: [
          {
                "period": "2001",
                "heading": "Joined Credit Suisse",
                "description": "An industry speaker biography records that he joined Credit Suisse following eight years at a Swiss engineering company."
          },
          {
                "period": "2005",
                "heading": "Aviation and yacht finance",
                "description": "He joined the bank's aircraft and yacht finance business, later working across transactions, portfolio management and recoveries."
          },
          {
                "period": "2018",
                "heading": "Global business leadership",
                "description": "By 2018 he was leading Credit Suisse's global aviation and yacht finance team, according to his 2021 industry biography."
          },
          {
                "period": "2026",
                "heading": "JetOcean Advisors",
                "description": "A 2026 Corporate Jet Investor speaker profile identifies him as founder and managing partner of JetOcean Advisors."
          }
    ]
  },
  "Vikram Kaushal": {
    paragraphs: [
      "Vikram Kaushal is identified in AFII's five-practice organisation with Asset Management & Investment Platforms. His remit concerns investment theses, asset aggregation and the commercial groundwork for proposed investment vehicles.",
      "The work addresses ownership and governance structure, underlying asset performance and potential capital-provider requirements. A platform under assessment should not be interpreted as an existing regulated fund or a statement of assets under management."
    ]
  },
  "Johann Mair": {
    paragraphs: [
      "Johann Mair is an engineering professional and shareholder representative at K3M Consult. K3M's published biography identifies him as responsible for technical engineering and records his work in energy engineering since the 1970s.",
      "He founded the Munich engineering office PALA GmbH in 1985. His work has included electrical power systems, photovoltaic projects, wind farms and combined heat-and-power installations, bringing technical project experience to international development discussions."
    ],
    reference: { label: "K3M professional biography", url: "https://k3m.eu/en/about-k3m/our-team/johann-mair/" },
    milestones: [
          {
                "period": "1972",
                "heading": "Energy engineering",
                "description": "K3M's published biography records the start of his work in the energy-engineering sector."
          },
          {
                "period": "1985",
                "heading": "Founded PALA GmbH",
                "description": "He founded a Munich engineering practice specialising in electrical power, renewable-energy plants and technical project services."
          }
    ]
  },
  "Arun Lohiya": {
    paragraphs: [
      "Arun Lohiya is listed in AFII's published leadership directory as senior adviser for aviation business. His professional activity has included commentary on aircraft finance and the commercial case for business aviation in India.",
      "He supports the discussion of aviation-sector opportunities, where asset use, acquisition structure, operating economics and financing conditions require sector-specific assessment."
    ],
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/14111960" }
  },
  "Punam Bhasin": {
    paragraphs: [
      "Punam Bhasin is identified in AFII Capital's published leadership directory as a director of AFII Corporate Advisors in India.",
      "Her listed position forms part of AFII's India-based business network and local corporate representation. Enquiries are directed through the relevant AFII office pending confirmation of an individual public contact route."
    ],
    reference: { label: "AFII published leadership directory", url: "https://afiicapital.com/team/" }
  },
  "Ralph Ketelhut": {
    paragraphs: [
      "Ralph Ketelhut is an architect and managing director and shareholder of K3M Consult. According to K3M's professional biography, he qualified in architecture in 1996 and later registered with the Bavarian Chamber of Architects.",
      "His work spans commercial property development, site and concept evaluation, contract negotiation, and coordination between occupiers, developers and construction teams. He also established an independent project-development and consulting practice."
    ],
    reference: { label: "K3M professional biography", url: "https://k3m.eu/en/about-k3m/our-team/ralph-ketelhut/" },
    milestones: [
          {
                "period": "1996",
                "heading": "Architecture diploma",
                "description": "Completed his architecture diploma following studies in Munich and Regensburg, according to K3M."
          },
          {
                "period": "2000",
                "heading": "Professional registration",
                "description": "Registered as an architect with the Bavarian Chamber of Architects."
          },
          {
                "period": "Until 2009",
                "heading": "MediaSaturn property development",
                "description": "Worked on property evaluation, site development and commercial negotiation on behalf of the retail group."
          },
          {
                "period": "Since 2010",
                "heading": "Independent project-development practice",
                "description": "K3M records his own project-development and consulting activity alongside architecture work from 2010."
          }
    ]
  },
  "Matthias Lohmann": {
    paragraphs: [
      "Matthias Lohmann is listed in AFII's published leadership directory as a senior partner associated with K3M in Munich. K3M's corporate imprint also lists him among its shareholders.",
      "His publicly listed professional background includes technical due diligence, engineering-project coordination and infrastructure-related consulting. He contributes a technical and project-development perspective to selected commercial assignments."
    ],
    reference: { label: "K3M corporate imprint", url: "https://k3m.eu/en/impressum-imprint/" },
    extraReference: { label: "Public career listing", url: "https://www.xing.com/profile/Matthias_Lohmann2" }
  },
  "Jonathan Pallares": {
    paragraphs: [
      "Jonathan Pallares is listed in AFII Capital's published leadership directory as a business partner based in Helsinki.",
      "His publicly visible professional activity in Finland includes work related to analytics, technology and financial-sector risk. AFII's listing identifies a business-partner relationship; it does not imply directorship of an AFII entity or an exclusive employment relationship."
    ],
    reference: { label: "Professional profile", url: "https://www.linkedin.com/in/jonathan-pallares-78327436/" }
  }
};
