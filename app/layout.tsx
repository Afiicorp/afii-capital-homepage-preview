import AfiiCookieConsent from "@/components/afii-cookie-consent";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afii.eu"),
  title: { default: "AFII | Structured Finance & Infrastructure Advisory", template: "%s" },
  description: "AFII advises companies, institutions and project sponsors on structured finance, infrastructure investment, cross-border transactions, project development and capital solutions.",
  applicationName: "AFII",
  keywords: ["AFII", "structured finance", "project finance", "infrastructure advisory", "trade finance", "investment banking", "ECA financing"],
  authors: [{ name: "AFII", url: "https://www.afii.eu" }],
  category: "finance",
  icons: { icon: [{ url: "/afii-favicon.png", type: "image/png", sizes: "512x512" }], shortcut: "/favicon.ico", apple: "/afii-favicon.png" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", url: "https://www.afii.eu", siteName: "AFII", locale: "en_GB", title: "AFII | Finance For What Comes Next", description: "Structured finance, infrastructure and cross-border advisory shaped around the realities of each project.", images: [{url: "/afii-favicon.png", width:512,height:512,alt:"AFII"}] },
  twitter: { card: "summary", title: "AFII | Structured Finance & Infrastructure Advisory", description: "Structured finance and international infrastructure advisory.", images: ["/afii-favicon.png"] }
};
const schema = {
  "@context": "https://schema.org", "@type": "Organization", name: "AFII",
  url: "https://www.afii.eu", logo: "https://www.afii.eu/afii-favicon.png",
  foundingDate: "1996", description: "Structured finance, infrastructure and investment advisory network.",
  sameAs: ["https://www.afiicorp.com/", "https://www.linkedin.com/company/afii-corporate-advisors-ltd-/", "https://www.facebook.com/afiicapitalgmbh/"]
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}<AfiiCookieConsent /></body></html>;
}
// AFII_PRODUCTION_POLISH_V3_0
