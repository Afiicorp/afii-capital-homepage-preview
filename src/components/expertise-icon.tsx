/* AFII_EXPERTISE_V24 */
import type { SVGProps } from "react";

const symbols:Record<string,string[]> = {
  capital:["M3 21h18","M5 21V9h14v12","M3 9 12 3l9 6","M8 13h3m2 0h3M8 17h3m2 0h3"],
  public:["M3 21h18","M4 10 12 4l8 6","M6 10v10m4-10v10m4-10v10m4-10v10","M3 10h18"],
  sme:["M4 21V8l8-4 8 4v13","M8 12h2m4 0h2M8 16h2m4 0h2","M10 21v-3h4v3"],
  platform:["M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z","M14 16h7m-3.5-3.5v7"],
  principal:["M12 3 3 7v5c0 5.5 3.6 8.8 9 10 5.4-1.2 9-4.5 9-10V7L12 3Z","M9 12l2 2 4-4"],
};
export default function ExpertiseIcon({type,size=32,...rest}:{type:string;size?:number}&SVGProps<SVGSVGElement>){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>{(symbols[type]||symbols.capital).map((path,i)=><path key={i} d={path}/>)}</svg>}
