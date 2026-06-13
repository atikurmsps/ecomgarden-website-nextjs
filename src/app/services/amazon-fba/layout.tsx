import type { Metadata } from "next";

const TITLE = "Amazon FBA Private Label Management — Research to Revenue";
const DESC = "Build a profitable Amazon FBA private label brand done-for-you: validated product research, daily PPC, A+ Content, Brand Registry, and inventory planning. 250+ clients, $12M+ generated.";
const URL = "/services/amazon-fba";

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
