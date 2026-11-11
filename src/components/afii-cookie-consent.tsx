"use client";
import { useEffect, useState } from "react";
const KEY = "afii-cookie-preference-v1";
type Preference = "all" | "necessary";
export default function AfiiCookieConsent() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let value = "";
    try { value = localStorage.getItem(KEY) || ""; } catch {}
    setVisible(value !== "all" && value !== "necessary");
    setReady(true);
    const onManage = () => setVisible(true);
    window.addEventListener("afii:manage-cookies", onManage);
    return () => window.removeEventListener("afii:manage-cookies", onManage);
  }, []);
  function choose(pref: Preference) {
    try { localStorage.setItem(KEY, pref); } catch {}
    setVisible(false);
    window.dispatchEvent(new CustomEvent("afii:consent-updated", { detail: pref }));
  }
  if (!ready || !visible) return null;
  return (
    <aside className="af-consent-panel" aria-label="Cookie choices">
      <div className="af-consent-text">
        <strong>Privacy &amp; cookie choices</strong>
        <p>
          This website remembers your choice locally. Essential website features remain available.
          Optional third-party media or analytics should only be used with your permission.
          <a href="/cookies">Cookie information</a>
          <span aria-hidden="true"> · </span>
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
      <div className="af-consent-actions">
        <button type="button" onClick={() => choose("necessary")}>Reject</button>
        <button className="af-consent-accept" type="button" onClick={() => choose("all")}>Allow</button>
      </div>
    </aside>
  );
}
export function openCookiePreferences() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event("afii:manage-cookies"));
}
