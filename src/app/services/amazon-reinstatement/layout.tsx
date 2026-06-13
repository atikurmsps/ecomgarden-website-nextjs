import type { Metadata } from "next";

const TITLE = "Amazon Account Reinstatement & Appeal Experts";
const DESC = "Suspended Amazon account? Our reinstatement experts craft custom Plans of Action, gather evidence, and submit appeals in 48-72 hours. 90%+ success rate, money-back if not reinstated.";
const URL = "/services/amazon-reinstatement";

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
