"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { offices, networkLocations, type MapPlace } from "@/data/leadership-v17";

const allLocations: MapPlace[] = [...offices, ...networkLocations];

// AFII_MAP_CALIBRATED_V4_0_2
// Micro-calibrated against the current widened home mini-map so pins sit more
// to the left and slightly upward versus v4.0.1, especially around Dubai.
const exactPlots: Record<string, { x: number; y: number }> = {
  eschbornfrankfurt: { x: 47.8, y: 34.0 },
  frankfurt: { x: 47.8, y: 34.0 },
  eschborn: { x: 47.8, y: 34.0 },
  germany: { x: 47.8, y: 34.0 },

  london: { x: 44.0, y: 33.1 },
  uk: { x: 44.0, y: 33.1 },
  unitedkingdom: { x: 44.0, y: 33.1 },

  zug: { x: 47.1, y: 36.7 },
  switzerland: { x: 47.1, y: 36.7 },

  romania: { x: 53.2, y: 38.0 },

  telaviv: { x: 57.4, y: 43.8 },
  israel: { x: 57.4, y: 43.8 },

  dubai: { x: 61.0, y: 47.0 },
  uae: { x: 61.0, y: 47.0 },

  newdelhi: { x: 68.8, y: 45.0 },
  delhi: { x: 68.8, y: 45.0 },

  mumbai: { x: 66.6, y: 51.3 },

  singapore: { x: 78.3, y: 60.0 },

  hochiminhcity: { x: 81.8, y: 56.2 },
  hochiminh: { x: 81.8, y: 56.2 },
  vietnam: { x: 81.8, y: 56.2 },
};

const mapX = (longitude: number) => ((longitude + 180) / 360) * 100;
const mapY = (latitude: number) => ((85 - latitude) / 145) * 100;

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function resolvePlot(place: MapPlace) {
  const candidates = [place.id, place.city, place.region, `${place.city}${place.region}`]
    .filter(Boolean)
    .map(normalize);

  for (const key of candidates) {
    if (exactPlots[key]) return exactPlots[key];
  }

  return { x: mapX(place.lng), y: mapY(place.lat) };
}

export default function AfiiMiniMap() {
  const viewport = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(offices[0]?.id ?? allLocations[0]?.id ?? "");
  const [showType, setShowType] = useState<"all" | "office" | "network">("all");
  const selected = useMemo(() => allLocations.find((place) => place.id === selectedId) ?? allLocations[0], [selectedId]);

  function centreLocation(place: MapPlace, smooth = true) {
    const outer = viewport.current;
    const inner = canvas.current;
    if (!outer || !inner) return;
    const plot = resolvePlot(place);
    const pixel = (plot.x / 100) * inner.offsetWidth;
    const left = inner.offsetLeft + pixel - outer.clientWidth / 2;
    outer.scrollTo({ left: Math.max(0, left), behavior: smooth ? "smooth" : "instant" });
  }

  useEffect(() => {
    if (selected) centreLocation(selected, false);
  }, []);

  function choose(place: MapPlace) {
    setSelectedId(place.id);
    centreLocation(place);
  }

  function pan(direction: number) {
    viewport.current?.scrollBy({ left: direction * 245, behavior: "smooth" });
  }

  function changeType(kind: "all" | "office" | "network") {
    setShowType(kind);
    if (kind !== "all" && selected?.kind !== kind) {
      const first = allLocations.find((place) => place.kind === kind);
      if (first) choose(first);
    }
  }

  const visibleLocations = allLocations.filter((place) => showType === "all" || place.kind === showType);

  return (
    <section className="af-mini-map af-mini-map--v38" aria-labelledby="af-mini-map-heading">
      <div className="af-mini-map-top">
        <div>
          <span>AFII · INTERNATIONAL PRESENCE</span>
          <h3 id="af-mini-map-heading">Connected Across Markets.</h3>
        </div>
        <a className="af-mini-map-full" href="/leadership-offices#global-map">View office directory <span aria-hidden="true">↗</span></a>
      </div>

      <div className="af-mini-map-filter" role="group" aria-label="Filter map locations">
        <button type="button" className={showType === "all" ? "is-current" : ""} aria-pressed={showType === "all"} onClick={() => changeType("all")}>All locations</button>
        <button type="button" className={showType === "office" ? "is-current" : ""} aria-pressed={showType === "office"} onClick={() => changeType("office")}>Offices &amp; group entities <span>{offices.length}</span></button>
        <button type="button" className={showType === "network" ? "is-current" : ""} aria-pressed={showType === "network"} onClick={() => changeType("network")}>Partner network <span>{networkLocations.length}</span></button>
      </div>

      <p className="af-mini-map-hint">Select a map pin or a location chip below. On smaller screens the map can be swiped horizontally.</p>
      <div className="af-mini-map-viewport" ref={viewport} tabIndex={0} aria-label="World map with AFII offices and partner-network locations; horizontally scrollable on mobile">
        <div className="af-mini-map-world" ref={canvas}>
          <img src="/afii-world-land.svg" alt="" aria-hidden="true" draggable={false} />
          {visibleLocations.map((place) => {
            const plot = resolvePlot(place);
            return (
              <button
                key={place.id}
                type="button"
                title={`${place.city}, ${place.region} · ${place.category}`}
                aria-label={`${place.category}: ${place.city}, ${place.region}`}
                aria-pressed={selectedId === place.id}
                data-label={place.city}
                className={`af-mini-pin af-mini-pin--v38 af-mini-pin--${place.kind} ${selectedId === place.id ? "is-active" : ""}`}
                style={{ left: `${plot.x}%`, top: `${plot.y}%` }}
                onClick={() => choose(place)}
              >
                <svg viewBox="0 0 34 48" width="34" height="48" aria-hidden="true" fill="none">
                  <path d="M17 2C8 2 2 8.6 2 17.1C2 29.7 17 45.2 17 45.2S32 29.7 32 17.1C32 8.6 26 2 17 2Z" />
                  <circle cx="17" cy="17" r="6.1" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      <div className="af-mini-map-location-strip" aria-label="Choose an AFII location">
        {visibleLocations.map((place) => (
          <button type="button" key={place.id} onClick={() => choose(place)} aria-pressed={selectedId === place.id} className={selectedId === place.id ? "is-active" : ""}>
            <span className={`af-mini-location-indicator af-mini-location-indicator--${place.kind}`} />
            <span>{place.city}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="af-mini-map-foot" aria-live="polite">
          <div className="af-mini-map-selection">
            <span className="af-mini-map-kind">{selected.category} · {selected.region}</span>
            <strong>{selected.city}</strong>
            <span>{selected.label}</span>
          </div>
          <div className="af-mini-map-foot-actions">
            <a href={`/leadership-offices/${selected.id}`}>Location details <span aria-hidden="true">↗</span></a>
            <div className="af-mini-map-pan">
              <button type="button" aria-label="Move map left" onClick={() => pan(-1)}>‹</button>
              <button type="button" aria-label="Move map right" onClick={() => pan(1)}>›</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
