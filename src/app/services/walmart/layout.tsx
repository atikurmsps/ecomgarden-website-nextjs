import type { Metadata } from "next";

const TITLE = "Walmart Marketplace Management Services";
const DESC = "Full-service Walmart Marketplace management — listings, WFS, wholesale, dropshipping & reinstatement. Done-for-you by EcomGarden, 250+ clients, $12M+ generated.";
const URL = "/services/walmart";

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
