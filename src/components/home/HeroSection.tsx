"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaBoxOpen,
  FaFlag,
  FaCheckSquare,
  FaHome,
  FaTags,
  FaClock,
} from "react-icons/fa";

const highlights = [
  { icon: FaBoxOpen, text: "70% cost saving & 80% ROI" },
  { icon: FaFlag, text: "No more account suspend" },
  { icon: FaCheckSquare, text: "Approved Brand" },
  { icon: FaHome, text: "3 own warehouse in US" },
  { icon: FaTags, text: "Flat rate discount shipping label" },
  { icon: FaClock, text: "24/7 dedicated VA support" },
];

export default function HeroSection() {
  return (
    <section
      className="relative"
      style={{
        backgroundColor: "#272f3d",
        backgroundImage: "url(/images/hero/hero-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 0 125px",
      }}
    >
      {/* White gradient overlay at 93% opacity - matches original */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(131deg, rgb(250, 250, 250) 17%, rgb(243, 243, 243) 100%)",
          opacity: 0.93,
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3
              className="font-medium mb-2"
              style={{
                fontSize: "18px",
                lineHeight: "26px",
                color: "#000",
              }}
            >
              Start, Grow &amp; Scale Your eCommerce Businesses with our
            </h3>
            <h2
              className="font-extrabold mb-3"
              style={{
                fontSize: "40px",
                lineHeight: "44px",
                color: "#000",
              }}
            >
              All-in-one Automated Ecommerce Management Services
            </h2>
            <h3
              className="font-medium mb-6"
              style={{
                fontSize: "22px",
                lineHeight: "1.4",
                color: "#000",
              }}
            >
              Scale your Amazon Walmart eBay Etsy Meta &amp; Shopify store upto
              80% ROI with us
            </h3>

            {/* Icon list - vertical single column with different icons */}
            <div className="flex flex-col gap-[10px] mb-6">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon
                    className="flex-shrink-0"
                    style={{ fontSize: "16px", color: "#333" }}
                  />
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#405e13" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <h3
              className="font-extrabold mb-6"
              style={{
                fontSize: "20px",
                lineHeight: "20px",
                color: "#000",
              }}
            >
              PAY ONLY ONCE YOU SEE PROFIT*
            </h3>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/success-story"
                className="inline-flex items-center justify-center whitespace-nowrap"
                style={{
                  backgroundColor: "#86af51",
                  color: "#fff",
                  padding: "16px 40px",
                  borderRadius: "3px",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "1px",
                  lineHeight: "1",
                  textDecoration: "none",
                }}
              >
                Read More
              </Link>
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap"
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  padding: "13px 20px",
                  borderRadius: "3px",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "1px",
                  lineHeight: "1",
                  textDecoration: "none",
                  border: "3px solid #86af51",
                }}
              >
                <FaWhatsapp style={{ fontSize: "18px" }} />
                Quick Whatsapp
              </a>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/hero/hero-illustration.webp"
              alt="Ecommerce Management"
              width={473}
              height={435}
              className="w-full max-w-[473px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
