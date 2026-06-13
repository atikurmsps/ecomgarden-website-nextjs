import type { Metadata } from "next";

const TITLE = "Custom Shopify Theme Development Service";
const DESC = "Get a 100% unique, pixel-perfect Shopify 2.0 theme built from Figma or PSD. Custom sections, sub-2s load times, SEO-friendly code, and no monthly theme app fees.";
const URL = "/services/shopify-theme-development";

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
