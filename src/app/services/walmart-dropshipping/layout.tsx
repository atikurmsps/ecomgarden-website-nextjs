import type { Metadata } from "next";

const TITLE = "Walmart Dropshipping Management Services";
const DESC = "Done-for-you Walmart dropshipping: daily product sourcing, listing optimization, order fulfillment & PPC. EcomGarden runs your store hands-free, you keep the profit.";
const URL = "/services/walmart-dropshipping";

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
