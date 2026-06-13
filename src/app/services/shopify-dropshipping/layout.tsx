import type { Metadata } from "next";

const TITLE = "Shopify Dropshipping Store Setup Service";
const DESC = "Launch a profitable Shopify dropshipping store in 5-10 days with winning product research, vetted suppliers, branded design, and automated fulfillment. Zero inventory.";
const URL = "/services/shopify-dropshipping";

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
