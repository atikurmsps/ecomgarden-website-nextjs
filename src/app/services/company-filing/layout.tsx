import type { Metadata } from "next";

const TITLE = "US LLC Formation, EIN, ITIN & UK LTD Filing";
const DESC =
  "Complete business setup for online sellers: US LLC formation, EIN, ITIN, and UK LTD filing. EcomGarden gets you marketplace-ready with one done-for-you service.";
const URL = "/services/company-filing";

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
