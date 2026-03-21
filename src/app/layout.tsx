import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "EcomGarden - All-in-one Automated Ecommerce Management Services",
  description:
    "Start, Grow & Scale Your eCommerce Businesses with our All-in-one Automated Ecommerce Management Services. Amazon, Walmart, eBay, Shopify store management.",
  keywords:
    "ecommerce management, amazon wholesale, amazon arbitrage, walmart management, shopify development, 3pl warehouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoSlab.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
