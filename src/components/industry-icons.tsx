import type { Industry } from "@/data/industries-v20";

type Props = { type: Industry["icon"]; size?: number; className?: string };
export default function IndustryIcon({ type, size = 32, className = "" }: Props) {
  const basic = { stroke: "currentColor", strokeWidth: 1.55, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const shapes: Record<Industry["icon"], React.ReactNode> = {
    infrastructure: <><path d="M4 25V13l12-7 12 7v12M8 25V15l8-4 8 4v10M16 10V4M4 25h24"/><path d="M11 25v-6h10v6"/></>,
    "real-estate": <><path d="M4 27V12l12-8 12 8v15H4ZM10 27V14h12v13"/><path d="M14 17h4M14 21h4"/></>,
    industrial: <><path d="M3 27V13l8 5v-6l8 6v-9l10-5v23H3Z"/><path d="M7 23h3m4 0h3m4 0h3M7 8V4h5v9"/></>,
    trade: <><path d="M3 10h26v17H3V10ZM9 10V6h14v4M3 18h26M12 18v9M20 18v9"/><path d="M8 4h16"/></>,
    enterprise: <><path d="M6 28V11l10-6 10 6v17M3 28h26M12 28v-9h8v9"/><circle cx="11" cy="15" r="1"/><circle cx="21" cy="15" r="1"/></>,
    investment: <><path d="M4 27h24M6 23V11l10-7 10 7v12M11 23v-9m10 9v-9M4 12h24"/><circle cx="16" cy="9" r="1.3"/></>,
  };
  return <svg className={className} width={size} height={size} viewBox="0 0 32 32" {...basic} aria-hidden="true" focusable="false">{shapes[type]}</svg>;
}
