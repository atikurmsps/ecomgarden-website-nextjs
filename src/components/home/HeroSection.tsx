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
      style={{
        position: "relative",
        backgroundColor: "var(--color-dark)",
        backgroundImage: "url(/images/hero/hero-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "36px 0 60px",
        fontFamily: "var(--font-roboto)",
      }}
    >
      {/* Light gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(135deg, rgba(250,250,250,0.95) 20%, rgba(243,243,243,0.92) 100%)",
        }}
      />

      <div
        className="container-main"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {/* Two-column layout via inline media-query-free approach: stacks on mobile */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--color-text-light)",
                  marginBottom: "4px",
                  fontFamily: "var(--font-roboto)",
                  fontWeight: 500,
                }}
              >
                Start, Grow &amp; Scale Your eCommerce Businesses with our
              </p>
              <h1
                style={{
                  fontSize: "28px",
                  lineHeight: "1.25",
                  color: "var(--color-dark)",
                  fontWeight: 800,
                  marginBottom: "8px",
                  fontFamily: "var(--font-roboto)",
                  letterSpacing: "-0.3px",
                }}
              >
                All-in-one Automated Ecommerce Management Services
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "var(--color-text)",
                  fontWeight: 500,
                  marginBottom: "16px",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Scale your Amazon Walmart eBay Etsy Meta &amp; Shopify store upto
                80% ROI with us
              </p>

              {/* Highlight pills - compact inline badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "16px",
                }}
              >
                {highlights.map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "rgba(40,167,69,0.08)",
                      border: "1px solid rgba(40,167,69,0.18)",
                      borderRadius: "20px",
                      padding: "4px 12px",
                    }}
                  >
                    <item.icon
                      style={{
                        fontSize: "11px",
                        color: "var(--color-primary)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "11.5px",
                        lineHeight: "1.4",
                        color: "var(--color-primary-dark)",
                        fontWeight: 600,
                        fontFamily: "var(--font-roboto)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1",
                  color: "var(--color-dark)",
                  fontWeight: 800,
                  marginBottom: "18px",
                  fontFamily: "var(--font-roboto)",
                  letterSpacing: "0.5px",
                }}
              >
                PAY ONLY ONCE YOU SEE PROFIT*
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Link
                  href="/success-story"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                    padding: "11px 28px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                    lineHeight: "1",
                    textDecoration: "none",
                    fontFamily: "var(--font-roboto)",
                    transition: "background-color 0.2s",
                  }}
                >
                  Read More
                </Link>
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    backgroundColor: "transparent",
                    color: "var(--color-dark)",
                    padding: "9px 20px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                    lineHeight: "1",
                    textDecoration: "none",
                    border: "2px solid var(--color-primary)",
                    fontFamily: "var(--font-roboto)",
                    transition: "all 0.2s",
                  }}
                >
                  <FaWhatsapp style={{ fontSize: "16px" }} />
                  Quick Whatsapp
                </a>
              </div>
            </div>

            {/* Right - Illustration */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/hero/hero-illustration.webp"
                alt="Ecommerce Management"
                width={473}
                height={435}
                style={{ width: "100%", maxWidth: "440px", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
