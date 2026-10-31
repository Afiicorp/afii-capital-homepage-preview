/**
 * AFII industries — editorial representation mapped to supplied AFII group/SBU
 * reference and established practice areas. Describes sector relevance; it does
 * not imply a completed transaction, regulatory approval, fund AUM, or office.
 */
export type Industry = {
  slug: string;
  title: string;
  menuTitle: string;
  icon: "infrastructure" | "real-estate" | "industrial" | "trade" | "enterprise" | "investment";
  tint: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  short: string;
  introduction: string;
  pullQuote: string;
  scope: string;
  matters: { title: string; text: string }[];
  approach: { title: string; text: string }[];
  finalThought: string;
};

export const industries: Industry[] = [
  {
    slug: "infrastructure-public-projects",
    title: "Infrastructure & Public Projects",
    menuTitle: "Infrastructure",
    icon: "infrastructure",
    tint: "#e9f0f1",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2100&q=88",
    imageAlt: "Infrastructure construction and project development site",
    eyebrow: "Public Assets / Project Development",
    short: "Financing and institutional advice for assets that serve communities over decades.",
    introduction: "Infrastructure carries obligations that stretch far beyond construction. A financing decision must account for public priorities, delivery risk, operating costs and the people who will ultimately use the asset. AFII's background in government advisory and infrastructure finance informs how these projects are considered.",
    pullQuote: "Good infrastructure finance begins with the obligations of the asset, not just the cost of building it.",
    scope: "Roads, civic infrastructure, public facilities, transport-linked assets and utility-related programmes can all involve different contractual and funding arrangements. AFII's work is centred on the commercial and institutional questions that make infrastructure development possible.",
    matters: [
      { title: "The public purpose", text: "The economic case has to be read alongside service requirements, affordability and the responsibilities of the authorities and operators involved. The way a project benefits its users matters to its funding model." },
      { title: "The delivery structure", text: "Procurement routes, risk allocation, milestones and the capacity of counterparties influence the terms on which capital might be available. Early clarity is particularly important where several public bodies or delivery partners are involved." },
      { title: "The operating life", text: "Capital structure should remain credible once the initial construction phase is over. Maintenance, revenue collection, performance and eventual handover deserve as much attention as financial close." },
    ],
    approach: [
      { title: "Project and institutional assessment", text: "AFII examines the project rationale, participants and practical readiness of an opportunity before considering the financing route. Public-public partnership and coordinated public-enterprise models may be relevant where they suit the mandate." },
      { title: "Funding and capital structure", text: "Advice may consider the appropriate blend of sponsor capital, debt, institutional participation and project-specific arrangements, taking into account implementation risk and the intended duration of the asset." },
      { title: "Coordination through development", text: "The value of finance advice is strongest when it connects the objectives of the project sponsor, public counterparties, technical teams and funding institutions into a workable decision process." },
    ],
    finalThought: "A project can be well designed and still be difficult to finance. Understanding the institutions, the cash flows and the route to operation is what brings those two conversations together.",
  },
  {
    slug: "real-estate-urban-development",
    title: "Real Estate & Urban Development",
    menuTitle: "Real Estate",
    icon: "real-estate",
    tint: "#f1eee8",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2100&q=88",
    imageAlt: "Tall city buildings seen from below",
    eyebrow: "Property / Long-Term Capital",
    short: "Considering property development through land, timing, risk and capital structure.",
    introduction: "Real estate is a long-horizon business in which timing and financing are closely connected. Land position, permissions, construction progress, occupancy and exit arrangements all affect how a project should be funded. AFII's advisory expansion into real estate reflects the need to understand these conditions together.",
    pullQuote: "In property development, the right financing structure has to work before, during and after construction.",
    scope: "The sector includes development and income-producing property, urban regeneration opportunities and real-estate-linked investment structures. It is not a single market: each asset has its own regulatory, commercial and demand context.",
    matters: [
      { title: "Cash flows arrive in stages", text: "A completed, occupied property behaves differently from an early-stage development. Capital commitments, construction expenditure, rental assumptions and receipts need to be considered on their own timelines." },
      { title: "The asset must support the structure", text: "Security, valuation, leasing prospects and legal title are central to evaluating financing terms. Those factors can affect both the amount of capital available and the conditions attached to it." },
      { title: "The exit deserves early attention", text: "Whether a project is to be held, refinanced, sold or transferred to an investment vehicle, the eventual route matters to the original financing decision." },
    ],
    approach: [
      { title: "Evaluate project readiness", text: "AFII considers the commercial proposition, permissions, development timetable and material counterparties, helping clarify the financial questions before potential capital partners are approached." },
      { title: "Assess possible capital structures", text: "Depending on the mandate, discussions may cover equity participation, construction debt, refinancing or property-backed investment arrangements, with their different obligations and trade-offs." },
      { title: "Connect property and investment logic", text: "Real-estate proposals are assessed in relation to ownership objectives, operating income and the expectations of investors and lenders rather than on asset value alone." },
    ],
    finalThought: "A well-financed property project is one in which the asset's development, operation and intended ownership outcome have been considered as one commercial story.",
  },
  {
    slug: "industrial-assets-equipment",
    title: "Industrial Assets & Equipment",
    menuTitle: "Industry & Equipment",
    icon: "industrial",
    tint: "#e9eff3",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2100&q=88",
    imageAlt: "Engineer working with industrial machinery",
    eyebrow: "Manufacturing / Productive Assets",
    short: "Asset-backed and equipment funding considered in the context of operating businesses.",
    introduction: "Industrial businesses invest in plant and machinery to create capacity, improve efficiency or enter new markets. That investment often arrives before the additional cash flow does. Financing decisions should therefore be made with a clear view of how the equipment will be procured, installed, used and paid for.",
    pullQuote: "Financing equipment is ultimately a question about the business that will put it to work.",
    scope: "Plant and machinery, specialised industrial equipment, production assets and selected lease-based arrangements may call for structured funding. AFII's experience in equipment and project finance brings attention to the underlying assets as well as the borrower.",
    matters: [
      { title: "Asset utility and life", text: "Useful life, residual value, maintenance responsibilities and the ability to redeploy an asset are relevant to financing and leasing decisions. Equipment should be understood as a productive system, not simply as collateral." },
      { title: "Procurement and delivery", text: "Supplier contracts, warranties, imported components, delivery schedules and commissioning create practical obligations that can shape drawdowns and financing milestones." },
      { title: "Operating capacity", text: "The financial case depends on production demand, operating costs and cash-generation capacity. Financing that looks affordable in a forecast must also withstand a reasonable period of underperformance." },
    ],
    approach: [
      { title: "Connect procurement to funding", text: "AFII considers how the acquisition contract, equipment delivery and intended funding source fit together. International procurement may also raise questions about export-credit agency participation." },
      { title: "Consider ownership and lease options", text: "Where appropriate, a mandate may compare direct acquisition, secured borrowing and leasing arrangements, including dry or wet lease concepts where commercially relevant." },
      { title: "Structure around operating reality", text: "Advice addresses tenor, repayment capacity, security expectations and the effect of the proposed funding arrangement on the wider business." },
    ],
    finalThought: "A useful financing arrangement should help an industrial asset become productive without placing a disproportionate burden on the business using it.",
  },
  {
    slug: "trade-logistics",
    title: "Trade & Logistics",
    menuTitle: "Trade & Logistics",
    icon: "trade",
    tint: "#edf0e8",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2100&q=88",
    imageAlt: "Logistics warehouse with shelves and shipments",
    eyebrow: "International Trade / Working Capital",
    short: "Commercial funding around the movement of goods, payments and counterparties.",
    introduction: "Trade transactions bring several commercial risks into one agreement. Goods may cross borders before payment is received, suppliers may require advances and counterparties may operate under different banking practices. AFII's structured trade finance background places those practical questions at the centre of the funding conversation.",
    pullQuote: "Trade finance works best when the financing follows the commercial transaction, rather than the other way around.",
    scope: "Import and export activity, equipment procurement, receivables, trade-linked working capital and cross-border supply chains can involve structured instruments. The right approach depends on the goods, the jurisdictions and the credit standing of the parties involved.",
    matters: [
      { title: "Payment and performance", text: "Delivery, inspection, acceptance and payment do not always happen together. The resulting exposure has to be understood before a financing or credit-support arrangement is proposed." },
      { title: "Different jurisdictions", text: "Currency, documentation, trade rules and local practices can affect the practicality of a proposed structure. Legal, tax and regulatory advice may be required from appropriately qualified advisers." },
      { title: "Working-capital pressure", text: "The time between paying suppliers and collecting from customers can strain an otherwise viable business. Cash conversion therefore matters as much as the value of a shipment." },
    ],
    approach: [
      { title: "Review the underlying transaction", text: "AFII begins with the commercial contract and the obligations of each party, including shipment, payment terms, recourse and credit risks." },
      { title: "Consider structured instruments", text: "Depending on requirements and suitability, options may include receivables-based funding, bank-supported arrangements, export credit or other structured trade mechanisms." },
      { title: "Coordinate counterparties", text: "A workable outcome may require alignment between suppliers, buyers, financing institutions and specialist advisers. The structure is assessed against the real transaction and its documentation." },
    ],
    finalThought: "Well-structured trade finance does more than release liquidity; it helps each party understand when value moves and who carries the risk along the way.",
  },
  {
    slug: "sme-enterprises",
    title: "SMEs & Growing Enterprises",
    menuTitle: "SMEs & Enterprises",
    icon: "enterprise",
    tint: "#f1eaf0",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2100&q=88",
    imageAlt: "Modern office and enterprise workspace",
    eyebrow: "Business Finance / Banking Distribution",
    short: "Practical funding discussions for operating businesses and their next stage of growth.",
    introduction: "For a small or medium-sized enterprise, capital is rarely an abstract figure. It may be needed to buy equipment, take on a larger order, expand capacity or bridge a period of uneven receipts. The relevant financing decision starts with what the business is trying to accomplish and how it expects to repay the funds.",
    pullQuote: "The most useful business financing starts with the cash cycle of the enterprise.",
    scope: "AFII's SME finance and banking distribution activity connects enterprise funding requirements with the realities of business operation. The work may involve debt, asset-backed structures, equipment funding or introductions to suitable financial institutions, subject to mandate and eligibility.",
    matters: [
      { title: "Working capital is not expansion capital", text: "Short-term operating needs and long-term investment plans usually require different repayment schedules. Treating them alike can create avoidable pressure on the business." },
      { title: "Credit readiness matters", text: "Financial records, receivables, governance, collateral and the quality of projections can all affect how prospective funding institutions assess an enterprise." },
      { title: "The founder's choices matter", text: "Owners may have to weigh borrowing against potential equity dilution, personal guarantees and the flexibility needed to operate the business." },
    ],
    approach: [
      { title: "Understand the enterprise", text: "AFII reviews the proposed use of funds, operating cycle and business model before discussing appropriate financing options." },
      { title: "Consider available funding routes", text: "The relevant route may be traditional bank financing, equipment funding or another structure designed around the commercial requirement and the eligibility of the enterprise." },
      { title: "Support credible preparation", text: "Clear assumptions, understandable forecasts and coherent supporting documentation make conversations with capital providers more productive." },
    ],
    finalThought: "A financing solution should leave a business better equipped to operate, not simply increase its borrowing capacity on paper.",
  },
  {
    slug: "financial-services-investment",
    title: "Financial Services & Investment",
    menuTitle: "Financial Services",
    icon: "investment",
    tint: "#ececf3",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2100&q=88",
    imageAlt: "Financial district skyline and commercial buildings",
    eyebrow: "Capital Markets / Investment Structures",
    short: "Investment, asset and capital structures considered with a long-term commercial perspective.",
    introduction: "Investment structures are shaped by the assets they hold, the rights they create and the expectations of the parties providing capital. AFII began with proprietary investments and subsequently expanded into structured finance, asset management concepts and investment platforms. The relevant work is therefore about understanding the structure as much as the investment thesis.",
    pullQuote: "Investment decisions become more useful when their economic logic and governance are equally clear.",
    scope: "This area reflects the group's experience in investment banking and capital raising, structured investment arrangements, asset strategies and principal investments. A specific engagement may require licensed or regulated service providers; availability of any product is subject to the relevant entity and jurisdiction.",
    matters: [
      { title: "Rights and obligations", text: "Equity, debt and hybrid instruments allocate returns, control and risk differently. Those consequences deserve attention before a capital structure is recommended." },
      { title: "Liquidity and duration", text: "Investors and underlying assets may have very different time horizons. A structure should make those differences visible, especially where assets are illiquid." },
      { title: "Governance and reporting", text: "Investment vehicles and asset-holding arrangements require transparency around oversight, valuation, distributions and the responsibilities of the entities involved." },
    ],
    approach: [
      { title: "Assess the investment proposition", text: "AFII considers the underlying commercial opportunity, asset profile and prospective sources of return, with attention to risk and execution assumptions." },
      { title: "Explore structural options", text: "Depending on the mandate, the conversation may cover equity, mezzanine, debt, trust or asset-backed structures, including practical considerations around capital raising and investor alignment." },
      { title: "Connect structure and stewardship", text: "The longer-term implications of ownership, reporting and capital deployment remain part of the assessment, rather than being treated as an afterthought." },
    ],
    finalThought: "A disciplined capital structure makes the relationship between assets, risks and investors easier to understand—and the long-term responsibilities easier to manage.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
