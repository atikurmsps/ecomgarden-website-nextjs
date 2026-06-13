import type { Metadata } from "next";

const TITLE = "Walmart Store Account Management Services";
const DESC = "Expert Walmart account management — listing optimization, Buy Box strategy, repricing, PPC & account health. EcomGarden runs your store while you collect the profit.";
const URL = "/services/walmart-management";

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
