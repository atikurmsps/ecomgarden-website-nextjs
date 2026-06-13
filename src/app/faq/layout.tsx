import type { Metadata } from "next";

const TITLE = "Ecommerce Management FAQs — Answers from EcomGarden";
const DESC =
  "Answers to common questions about EcomGarden's done-for-you Amazon, Walmart, eBay, and Shopify services — pricing, fulfillment, onboarding, and how we scale your store.";
const URL = "/faq";

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
