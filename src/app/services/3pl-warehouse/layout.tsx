import type { Metadata } from "next";

const TITLE = "3PL Warehouse & Fulfillment Across 3 US Locations";
const DESC =
  "EcomGarden runs our own US warehouses in 3 locations — receiving, storage, prep, and shipping handled in-house. Flat-rate fulfillment, no hidden fees, full visibility.";
const URL = "/services/3pl-warehouse";

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
