import type { Metadata } from "next";

const TITLE = "Walmart Wholesale Management Services";
const DESC = "Sell branded products on Walmart at wholesale margins. EcomGarden secures brand approvals, sources suppliers, handles WFS prep & pricing — fully done for you.";
const URL = "/services/walmart-wholesale";

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
