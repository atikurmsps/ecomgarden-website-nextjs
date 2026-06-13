import type { Metadata } from "next";

const TITLE = "Complete Shopify Store Development & Setup";
const DESC = "Full A-Z Shopify store builds in 5-10 days: theme setup, product listing, payment gateways, SEO, speed optimization, and platform migration. 30 days free support.";
const URL = "/services/shopify-development";

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
