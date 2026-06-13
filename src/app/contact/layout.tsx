import type { Metadata } from "next";

const TITLE = "Contact EcomGarden — Talk to an Ecommerce Specialist";
const DESC =
  "Get in touch with EcomGarden to discuss done-for-you Amazon, Walmart, eBay, and Shopify management. Talk to a specialist about scaling your ecommerce business today.";
const URL = "/contact";

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
