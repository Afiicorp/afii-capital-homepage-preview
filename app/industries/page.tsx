// AFII_INDUSTRIES_V20_PAGE
import type { Metadata } from "next";
import IndustriesExperience from "@/components/industries-experience";
export const metadata: Metadata = {
  title: "Industries | AFII",
  description: "Explore AFII's sector perspectives across infrastructure, real estate, industrial assets, trade, enterprise finance and investment.",
};
export default function IndustriesPage() { return <IndustriesExperience />; }
