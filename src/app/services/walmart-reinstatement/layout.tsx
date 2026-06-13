import type { Metadata } from "next";

const TITLE = "Walmart Account Reinstatement Services";
const DESC = "Suspended on Walmart? EcomGarden writes winning appeals and plans of action to reinstate your seller account fast. Stop losing sales — get back to selling.";
const URL = "/services/walmart-reinstatement";

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
