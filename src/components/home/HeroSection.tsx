"use client";

import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaPlayCircle } from "react-icons/fa";

const highlights = [
  "70% cost saving & 80% ROI",
  "No more account suspend",
  "Approved Brand",
  "3 own warehouse in US",
  "Flat rate discount shipping",
  "24/7 dedicated VA support",
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
        padding: "60px 0 90px",
      }}
    >
      {/* Light overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "#f6f7f9",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(22,163,74,0.1)",
                border: "1px solid rgba(22,163,74,0.2)",
                borderRadius: "4px",
                padding: "3px 10px",
                marginBottom: "12px",
              }}
            >
              <span className="typo-small" style={{ color: "var(--color-primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                #1 Ecommerce Management Agency
              </span>
            </div>

            <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
              All-in-one Automated Ecommerce Management Services
            </h1>

            <p className="typo-body" style={{ color: "var(--color-text)", fontWeight: 500, marginBottom: "16px", fontSize: "16px" }}>
              Start, Grow &amp; Scale your Amazon, Walmart, eBay, Etsy, Meta &amp; Shopify store up to <strong style={{ color: "var(--color-primary)" }}>80% ROI</strong> with our fully managed services.
            </p>

            {/* Trust checkmarks - 2 columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 16px",
                marginBottom: "16px",
              }}
            >
              {highlights.map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <FaCheckCircle style={{ fontSize: "12px", color: "var(--color-primary)", flexShrink: 0 }} />
                  <span className="typo-small" style={{ fontWeight: 600, color: "var(--color-text)" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Highlight text */}
            <p style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "15px",
                  color: "var(--color-primary-dark)",
                  borderBottom: "2px solid var(--color-primary)",
                  paddingBottom: "2px",
                  letterSpacing: "0.3px",
                }}
              >
                PAY ONLY ONCE YOU SEE PROFIT*
              </span>
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <Link
                href="/success-story"
                className="btn-primary btn-primary-pulse"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <FaPlayCircle style={{ fontSize: "14px" }} />
                See Our Results
              </Link>
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}
              >
                <FaWhatsapp style={{ fontSize: "18px", color: "#25d366" }} />
                Quick Whatsapp
              </a>
            </div>
          </div>

          {/* Right - Video */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "480px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/9DqDFAGLPrc"
                title="EcomGarden - Ecommerce Management Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
