import type { Metadata } from "next";

const TITLE = "Shopify Marketing & Advertising Services";
const DESC = "Grow your Shopify store with full-funnel marketing: SEO, Google Ads, Meta & TikTok Ads, email and SMS automation. Clients average 3-5x ROAS. No long-term contracts.";
const URL = "/services/shopify-marketing";

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
