import type { Metadata } from "next";

const TITLE = "Etsy Dropshipping & Shop Management Services";
const DESC =
  "Turn original designs into a profitable Etsy shop without touching inventory. EcomGarden handles listings, Etsy SEO, orders, and fulfillment from design to delivery.";
const URL = "/services/etsy-dropshipping";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", siteName: "EcomGarden", url: URL, title: `${TITLE} | EcomGarden`, description: DESC },
  twitter: { card: "summary_large_image", title: `${TITLE} | EcomGarden`, description: DESC },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
