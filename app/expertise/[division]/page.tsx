/* AFII_EXPERTISE_V24 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { expertise,findDivision } from "@/data/expertise";
import ExpertiseDivisionExperience from "@/components/expertise-division-experience";
export const dynamicParams = false;
export function generateStaticParams(){return expertise.map(d=>({division:d.slug}));}
export async function generateMetadata({params}:{params:Promise<{division:string}>}):Promise<Metadata>{const {division}=await params;const d=findDivision(division);return {title:d?`${d.title} | AFII`:"Expertise | AFII",description:d?.statement}}
export default async function DivisionPage({params}:{params:Promise<{division:string}>}){const {division}=await params;const d=findDivision(division);if(!d)notFound();return <ExpertiseDivisionExperience division={d}/>}
