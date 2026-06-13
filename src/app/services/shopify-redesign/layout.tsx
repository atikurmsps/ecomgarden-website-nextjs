import type { Metadata } from "next";

const TITLE = "Shopify Store Redesign & CRO Service";
const DESC = "Redesign your Shopify store for conversions in 2-4 weeks. Data-driven UX audit, mobile-first design, speed optimization, SEO preserved, and zero downtime migration.";
const URL = "/services/shopify-redesign";

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
