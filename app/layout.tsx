import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFII Capital | Structured Finance & Infrastructure Advisory",
  description:
    "AFII Capital advises on structured project and trade finance, equipment financing and cross-border capital solutions for infrastructure and industry.",
  openGraph: {
    title: "AFII Capital | Finance for the Real Economy",
    description:
      "Structured finance and infrastructure advisory shaped around the realities of each project.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
