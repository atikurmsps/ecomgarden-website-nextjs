import type { Metadata } from "next";

const TITLE = "eBay Dropshipping & Store Management Services";
const DESC =
  "Done-for-you eBay store management: listing optimization, Cassini SEO, order fulfillment, and Top Rated Seller status. EcomGarden scales your eBay sales for you.";
const URL = "/services/ebay-dropshipping";

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
