import type { Metadata } from "next";

const TITLE = "Amazon FBA Wholesale Management — Brand-Approved Selling";
const DESC = "Done-for-you Amazon wholesale: brand authorization, supplier negotiation, FBA prep at our US warehouses, and 24/7 repricing. Sell trusted brands at 35% average ROI, suspension-safe.";
const URL = "/services/amazon-wholesale";

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
