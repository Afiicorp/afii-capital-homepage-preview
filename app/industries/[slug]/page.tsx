// AFII_INDUSTRIES_V20_DETAIL_PAGE
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailExperience from "@/components/industry-detail-experience";
import { industries, getIndustry } from "@/data/industries-v20";

export function generateStaticParams() {
  return industries.map(({slug})=>({slug}));
}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const industry=getIndustry(slug);
  if(!industry) return {title:"Industry Not Found | AFII"};
  return {title:`${industry.title} | AFII Industries`,description:industry.short};
}
export default async function IndustryDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const industry=getIndustry(slug);
  if(!industry) notFound();
  return <IndustryDetailExperience industry={industry}/>;
}
