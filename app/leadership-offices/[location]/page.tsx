// AFII v2.2: individual location route. Source of truth: existing published AFII location directory.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { offices, networkLocations } from "@/data/leadership-v17";
import LocationDetailExperience from "@/components/location-detail-experience";

const locations = [...offices, ...networkLocations];
export const dynamicParams = false;
export function generateStaticParams() {
  return locations.map((place) => ({ location: place.id }));
}
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params;
  const place = locations.find((entry) => entry.id === location);
  if (!place) return { title: "Location Not Found | AFII" };
  return {
    title: `${place.city} · ${place.category} | AFII`,
    description: `${place.category} information for ${place.city}, ${place.region}. ${place.label}.`,
  };
}
export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const place = locations.find((entry) => entry.id === location);
  if (!place) notFound();
  return <LocationDetailExperience place={place} />;
}
