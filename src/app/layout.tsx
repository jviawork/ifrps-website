import type { Metadata } from "next";
import { FederationTicker } from "@/components/ticker/FederationTicker";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ifrps.org"),
  title: {
    default: "IFRPS | International Federation of Rock Paper Scissors",
    template: "%s | IFRPS",
  },
  description:
    "International rules, rankings, tournaments, organizations and competition for Rock Paper Scissors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <FederationTicker />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
