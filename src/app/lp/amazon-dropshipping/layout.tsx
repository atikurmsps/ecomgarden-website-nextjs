import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Done-For-You Amazon Dropshipping — Pay Only From Profit | EcomGarden",
  description:
    "We build and run your Amazon 2-step dropshipping store A-Z. 30-40% profit margin after all expenses, $0 upfront management fee — you pay only from profit. $12M+ generated for 250+ clients.",
  robots: { index: false, follow: false },
};

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${jakarta.variable} ${inter.variable}`}>{children}</div>;
}
