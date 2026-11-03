/* AFII_EXPERTISE_V24 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allExpertisePaths,findDivision,findService } from "@/data/expertise";
import ExpertiseServiceExperience from "@/components/expertise-service-experience";
export const dynamicParams = false;
export function generateStaticParams(){return allExpertisePaths();}
export async function generateMetadata({params}:{params:Promise<{division:string;service:string}>}):Promise<Metadata>{const {division,service}=await params;const s=findService(division,service);return {title:s?`${s.title} | AFII Expertise`:"Expertise | AFII",description:s?.summary}}
export default async function ServicePage({params}:{params:Promise<{division:string;service:string}>}){const {division,service}=await params;const d=findDivision(division),s=findService(division,service);if(!d||!s)notFound();return <ExpertiseServiceExperience division={d} service={s}/>}
