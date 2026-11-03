import type { Deal } from "@/data/transactions";

type Gallery = Record<string, string[]>;

const GALLERY: Gallery = {
  rail: [
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=85",
    "https://images.pexels.com/photos/17066745/pexels-photo-17066745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/17621944/pexels-photo-17621944.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1516908205727-40afad9449a0?auto=format&fit=crop&w=1600&q=85"
  ],
  road: [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=85"
  ],
  water: [
    "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=85"
  ],
  renewable: [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=85"
  ],
  power: [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1600&q=85"
  ],
  industrial: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=85"
  ],
  logistics: [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85"
  ],
  aviation: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=85"
  ],
  housing: [
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85"
  ],
  finance: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85"
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=85"
  ],
  leisure: [
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85"
  ],
  urban: [
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=85"
  ]
};

function normalise(input: Deal | string): string {
  return (typeof input === "string"
    ? input
    : `${input.title} ${input.sector} ${input.partner} ${input.country} ${input.value ?? ""}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function seedValue(input: string | number): number {
  const s = String(input);
  let hash = 0;
  for (let i = 0; i < s.length; i += 1) hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  return hash;
}

function pick(category: keyof typeof GALLERY, seed: string | number) {
  const list = GALLERY[category];
  return list[seedValue(seed) % list.length];
}

function categoryFor(input: Deal | string): keyof typeof GALLERY {
  const key = normalise(input);
  if (/(aviation|aircraft|helicopter|gulfstream|medivac|airport|jet)/.test(key)) return "aviation";
  if (/(metro|rail|station|railway|dfcc|dmrc|rolling stock)/.test(key)) return "rail";
  if (/(road|highway|expressway|corridor|bridge|nhai|ring road)/.test(key)) return "road";
  if (/(water|wastewater|desal|sewage|supply|river)/.test(key)) return "water";
  if (/(solar|wind|renewable|biogas|geothermal|fuel cell)/.test(key)) return "renewable";
  if (/(thermal|power|energy|grid|gas|romania|hydrogen)/.test(key)) return "power";
  if (/(housing|apartment|residential|rehabilitation|urban development|real estate)/.test(key)) return "housing";
  if (/(hospital|medical|health|pharma)/.test(key)) return "healthcare";
  if (/(expo|amusement|leisure|entertainment)/.test(key)) return "leisure";
  if (/(consumer|industrial|manufacturing|equipment|paper|packaging|mining|textile|factory|durables|cylinders)/.test(key)) return "industrial";
  if (/(warehouse|logistics|distribution|working capital|trade|receivable|cargo)/.test(key)) return "logistics";
  if (/(finance|liquidity|securitization|advisory|portfolio|invest|fund|credit)/.test(key)) return "finance";
  return "urban";
}

export function transactionFallbackImage(input: Deal | string): string {
  const category = categoryFor(input);
  return pick(category, typeof input === "string" ? input : input.id);
}

const SPECIAL: Partial<Record<number, string>> = {
  16: GALLERY.aviation[0],
  27: GALLERY.aviation[1],
  40: GALLERY.aviation[2],
  44: GALLERY.finance[0],
  47: GALLERY.finance[1],
  48: GALLERY.finance[2],
  54: GALLERY.housing[0],
  55: GALLERY.renewable[0],
};

export function transactionImage(input: Deal | string): string {
  if (typeof input === "string") return transactionFallbackImage(input);
  return SPECIAL[input.id] ?? transactionFallbackImage(input);
}

export const TRANSACTION_HERO_PHOTO =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=88";
