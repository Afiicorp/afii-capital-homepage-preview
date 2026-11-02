import type { Deal } from "@/data/transactions";

/**
 * Curated editorial visuals for AFII transaction references.
 * These are illustrative by sector / deal nature only and are not represented as actual project photographs.
 */
const VISUALS = {
  railA: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=85",
  railB: "https://images.pexels.com/photos/17066745/pexels-photo-17066745.jpeg?auto=compress&cs=tinysrgb&w=1600",
  railC: "https://images.pexels.com/photos/17621944/pexels-photo-17621944.jpeg?auto=compress&cs=tinysrgb&w=1600",
  roadA: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
  roadB: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
  waterA: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1600&q=85",
  waterB: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=85",
  waterC: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85",
  solarA: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85",
  windA: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=85",
  energyA: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85",
  mineA: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85",
  paperA: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=85",
  factoryA: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85",
  factoryB: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=85",
  warehouseA: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
  healthA: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=85",
  aviationA: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=85",
  aviationB: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=85",
  housingA: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
  housingB: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
  housingC: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85",
  leisureA: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",
  financeA: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
  financeB: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
  legalA: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
  realEstateA: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  cityA: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=85",
} as const;

const PROJECT_PHOTOS: Record<number, string> = {
  1: VISUALS.railA,
  2: VISUALS.railB,
  3: VISUALS.railC,
  4: VISUALS.waterA,
  5: VISUALS.roadA,
  6: VISUALS.waterB,
  7: VISUALS.roadB,
  8: VISUALS.waterC,
  9: VISUALS.mineA,
  10: VISUALS.waterB,
  11: VISUALS.waterA,
  12: VISUALS.solarA,
  13: VISUALS.energyA,
  14: VISUALS.railB,
  15: VISUALS.paperA,
  16: VISUALS.aviationA,
  17: VISUALS.windA,
  18: VISUALS.housingB,
  19: VISUALS.housingC,
  20: VISUALS.warehouseA,
  21: VISUALS.paperA,
  22: VISUALS.energyA,
  23: VISUALS.healthA,
  24: VISUALS.leisureA,
  25: VISUALS.waterC,
  26: VISUALS.factoryB,
  27: VISUALS.aviationB,
  28: VISUALS.railC,
  29: VISUALS.windA,
  30: VISUALS.factoryA,
  31: VISUALS.warehouseA,
  32: VISUALS.housingA,
  33: VISUALS.energyA,
  34: VISUALS.railB,
  35: VISUALS.railA,
  36: VISUALS.energyA,
  37: VISUALS.aviationB,
  38: VISUALS.factoryA,
  39: VISUALS.waterA,
  40: VISUALS.aviationA,
  41: VISUALS.factoryB,
  42: VISUALS.housingB,
  43: VISUALS.roadB,
  44: VISUALS.financeA,
  45: VISUALS.paperA,
  46: VISUALS.factoryB,
  47: VISUALS.financeB,
  48: VISUALS.legalA,
  49: VISUALS.housingC,
  50: VISUALS.railC,
  51: VISUALS.waterB,
  52: VISUALS.waterC,
  53: VISUALS.railA,
  54: VISUALS.realEstateA,
  55: VISUALS.solarA,
};

function normalise(deal: Deal | string): string {
  return (typeof deal === "string" ? deal : `${deal.title} ${deal.sector} ${deal.partner} ${deal.country}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const FALLBACK_RULES: Array<[RegExp, string]> = [
  [/rail|metro|station|dfcc|dmrc|nhai/, VISUALS.railA],
  [/road|highway|ring road/, VISUALS.roadA],
  [/water|wastewater|desal|recycl|supply/, VISUALS.waterA],
  [/solar/, VISUALS.solarA],
  [/wind|renewable/, VISUALS.windA],
  [/thermal|power|energy|hydrogen/, VISUALS.energyA],
  [/aviation|aircraft|gulfstream|helicopter|medivac/, VISUALS.aviationA],
  [/health|medical/, VISUALS.healthA],
  [/housing|apartments|residential|rehabilitation|real estate/, VISUALS.housingB],
  [/packaging|consumer|industrial|manufacturing|distribution|equipment|cylinder|paper|mining/, VISUALS.factoryA],
  [/finance|liquidity|crowdfunding|trade|securitization/, VISUALS.financeA],
  [/legal|advisory|structuring/, VISUALS.legalA],
  [/leisure|expo|amusement/, VISUALS.leisureA],
];

export function transactionFallbackImage(deal: Deal | string): string {
  const key = normalise(deal);
  return FALLBACK_RULES.find(([pattern]) => pattern.test(key))?.[1] ?? VISUALS.cityA;
}

/** Use a deal-specific image first, then a title / sector fallback. */
export function transactionImage(deal: Deal | string): string {
  return typeof deal === "string" ? transactionFallbackImage(deal) : (PROJECT_PHOTOS[deal.id] ?? transactionFallbackImage(deal));
}

/** Dedicated listing-page hero, different from industries/about page visuals. */
export const TRANSACTION_HERO_PHOTO =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=88";
