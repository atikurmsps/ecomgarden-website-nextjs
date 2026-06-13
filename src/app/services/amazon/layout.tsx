import type { Metadata } from "next";

const TITLE = "Amazon Seller Services — Done-For-You Store Management";
const DESC = "Launch, manage, and scale your Amazon store with our done-for-you seller services. FBA, wholesale, dropshipping, and reinstatement from a team that has generated $12M+ for 250+ clients.";
const URL = "/services/amazon";

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
