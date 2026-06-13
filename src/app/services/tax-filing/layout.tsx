import type { Metadata } from "next";

const TITLE = "Business Tax Filing for Ecommerce Sellers from $100";
const DESC =
  "Specialist ecommerce tax filing starting at $100. EcomGarden acts as your Amazon CPA — sales tax, returns, and non-resident seller compliance, not a generic preparer.";
const URL = "/services/tax-filing";

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
