import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import SiteChrome from "@/components/SiteChrome";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecomgarden.com"),
  title: {
    default: "EcomGarden — All-in-One Ecommerce Management for Amazon, Walmart & Shopify",
    template: "%s | EcomGarden",
  },
  description:
    "Start, grow & scale your eCommerce business with EcomGarden's done-for-you management. Amazon, Walmart, eBay & Shopify stores run by a 50+ person team and 3 US warehouses — $12M+ generated for 250+ clients.",
  keywords:
    "ecommerce management, amazon wholesale, amazon arbitrage, amazon dropshipping, walmart management, walmart wfs, shopify development, 3pl warehouse, fba prep",
  applicationName: "EcomGarden",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "EcomGarden",
    locale: "en_US",
    url: "/",
    title: "EcomGarden — All-in-One Ecommerce Management for Amazon, Walmart & Shopify",
    description:
      "Done-for-you Amazon, Walmart, eBay & Shopify store management. $12M+ generated for 250+ clients by a 50+ person team and 3 US warehouses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcomGarden — All-in-One Ecommerce Management",
    description:
      "Done-for-you Amazon, Walmart, eBay & Shopify store management. $12M+ generated for 250+ clients.",
  },
  icons: {
    icon: "/images/favicon.webp",
    apple: "/images/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${roboto.variable} antialiased`} style={{ fontFamily: "var(--font-roboto)" }}>
        <ScrollToTop />
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main>{children}</main>
        <SiteChrome>
          <Footer />
        </SiteChrome>
        <WhatsAppButton />
      </body>
    </html>
  );
}
