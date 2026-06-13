import type { Metadata } from "next";

const TITLE = "Walmart WFS Prep & Fulfillment Services";
const DESC = "Walmart Fulfillment Services done right — WFS-compliant prep, inbound shipping, inventory planning & storage optimization. EcomGarden lets Walmart ship for you.";
const URL = "/services/walmart-wfs";

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
