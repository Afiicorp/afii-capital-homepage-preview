"use client";

import { industries } from "@/data/industries-v20";
import IndustryIcon from "@/components/industry-icons";

/** Desktop nav flyout opens on hover and keyboard focus; the title itself links to the directory. */
export default function IndustryNavigation() {
  return (
    <div className="afi-ind-nav">
      <a href="/industries" className="afi-ind-nav-main" aria-haspopup="true">Industries</a>
      <div className="afi-ind-flyout">
        <div className="afi-ind-flyout-top"><span>Industries At AFII</span><a href="/industries">All Industries <span aria-hidden="true">↗</span></a></div>
        <div className="afi-ind-flyout-grid">
          {industries.map((item) => (
            <a href={`/industries/${item.slug}`} key={item.slug} className="afi-ind-flyout-link">
              <IndustryIcon type={item.icon} size={27}/><span>{item.menuTitle}</span>
            </a>
          ))}
        </div>
        <div className="afi-ind-flyout-bottom">A focused sector perspective, shaped by our advisory and investment business lines.</div>
      </div>
    </div>
  );
}
