import type { Metadata } from "next";

const TITLE = "Custom Shopify App Development Services";
const DESC = "Build private & public Shopify apps, checkout extensions, and API integrations (NetSuite, Salesforce, QuickBooks). OAuth-secure, App Store submission included.";
const URL = "/services/shopify-app-development";

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
