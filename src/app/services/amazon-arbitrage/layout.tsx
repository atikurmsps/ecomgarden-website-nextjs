import type { Metadata } from "next";

const TITLE = "Amazon 2-Step Dropshipping — Done-For-You Management";
const DESC = "Profit-share Amazon 2-step dropshipping with daily sourcing, same-day fulfillment, and warehouse reboxing from our US facilities. 30-40% average ROI, account-safe, pay from profits only.";
const URL = "/services/amazon-arbitrage";

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
