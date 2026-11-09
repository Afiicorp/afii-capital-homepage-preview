import type { MetadataRoute } from "next";
import { industries } from "@/data/industries-v20";
import { expertise } from "@/data/expertise";
import { transactions } from "@/data/transactions";
import { offices, networkLocations } from "@/data/leadership-v17";
const origin = "https://www.afii.eu";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/industries", "/expertise", "/leadership-offices", "/transactions", "/careers"];
  const detail = [
    ...industries.map(i => "/industries/" + i.slug),
    ...expertise.flatMap(d => ["/expertise/" + d.slug, ...d.services.map(s=>"/expertise/"+d.slug+"/"+s.slug)]),
    ...transactions.map(t=>"/transactions/"+t.slug),
    ...[...offices, ...networkLocations].map(p=>"/leadership-offices/"+p.id)
  ];
  return [...pages,...detail].map(p=>({url: origin+p, changeFrequency:"monthly" as const, priority:p==="/"?1:pages.includes(p)?0.8:0.6}));
}
