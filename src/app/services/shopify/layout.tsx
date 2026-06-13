import type { Metadata } from "next";

const TITLE = "Shopify Development & Marketing Services";
const DESC = "Done-for-you Shopify services: dropshipping store setup, custom theme & app development, store redesign, and full-funnel marketing to grow your sales.";
const URL = "/services/shopify";

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
