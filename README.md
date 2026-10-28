# AFII Capital — Editorial Homepage Prototype v1

A clean Next.js homepage prototype built for **AFII Capital**. Inspired by the restraint, editorial typography and intentional composition of Plesner / Linesight / AVTL — not a recreation of those companies' websites.

## Run (Windows PowerShell)

```powershell
cd D:\Afii_Corporate_web
npm install
npm run dev
```

Open **http://localhost:3000**. If the port is busy, Next.js may use another available port; read the terminal output.

Production check:

```powershell
npm run typecheck
npm run build
```

## What is implemented

- Responsive desktop/tablet/mobile hero with widescreen cinematic photographic composition
- Sticky navigation + accessible full-height mobile menu
- Scroll entrance animations via `IntersectionObserver` (with reduced-motion support)
- Five working selectable expertise rows; selection changes the adjacent visual and explanation
- Three photo-led industry entries: choosing one takes you to the relevant expertise entry
- Quiet infrastructure video interlude with pause / play control and static poster
- Distinct editorial introduction, approach, quote/statement and perspective sections
- Email contact CTA and working enquiry dialog using `mailto:` — no backend required
- Compact footer + dynamic current year and scroll-to-top links
- Content/image config isolated in `src/data/site.ts` for simple updates

## Important edits

| Purpose | Path |
|---|---|
| Homepage elements, section ordering | `src/components/home-experience.tsx` |
| All visual styling + responsive motion | `src/app/globals.css` |
| Content, service detail, imagery, email | `src/data/site.ts` |
| SEO metadata | `src/app/layout.tsx` |
| Temporary source/license notes | `MEDIA_CREDITS.md` |

## Before publishing

1. Replace temporary imagery and video with AFII-approved, appropriately licensed media; confirm that each image is contextually accurate.
2. Replace temporary custom textual wordmark with the original AFII logo asset approved by your team.
3. Verify all copy, legal entity designations, regulated-finance disclosures, contact details, service claims and leadership names with AFII management and legal/compliance.
4. Add approved legal/privacy/imprint pages before enabling external launch. This patch intentionally delivers a working **homepage** only.
5. This demo intentionally avoids fabricated performance metrics, fake client logos, testimonials and unverified transaction claims.

## Content basis

Service categories, sectors and overall positioning were reviewed against https://afiicapital.com/, including its project-finance, equipment-finance and industries pages. Wording is newly written and editable; it should be approved before live publication.
