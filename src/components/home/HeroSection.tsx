"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPlayCircle,
  FaBoxOpen,
  FaShieldAlt,
  FaWarehouse,
  FaHeadset,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaBoxOpen,
    title: "Up to 80% ROI",
    desc: "Proven profit across 55+ stores",
  },
  {
    icon: FaShieldAlt,
    title: "Zero Risk Model",
    desc: "Pay only once you see profit",
  },
  {
    icon: FaWarehouse,
    title: "3 US Warehouses",
    desc: "NY, FL & CT — same-day prep",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Dedicated VA for your store",
  },
];

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section style={{ backgroundColor: "#f6f7f9", position: "relative", overflow: "hidden" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Content */}
          <div style={{ padding: "55px 0 110px" }}>
            <span className="typo-label" style={{ display: "block", marginBottom: "10px" }}>
              #1 Ecommerce Management Agency
            </span>

            <h1 className="typo-h1" style={{ marginBottom: "6px" }}>
              All-in-one Automated Ecommerce Management Services
            </h1>
            <p className="typo-body" style={{ color: "var(--color-primary)", fontWeight: 600, marginBottom: "6px", fontSize: "16px" }}>
              Fully managed Amazon, Walmart, eBay &amp; Shopify stores
            </p>
            <p className="typo-h3" style={{ color: "var(--color-accent)", marginBottom: "12px" }}>
              100% Risk Free. Pay only once you see profit.
            </p>
            <p className="typo-body" style={{ marginBottom: "20px", maxWidth: "480px" }}>
              Start, grow &amp; scale your ecommerce business with our expert team.
              We handle everything from product research to fulfillment — you just collect profits.
            </p>

            {/* Highlight pills — 2x2 grid like pricing page */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "7px",
                      backgroundColor: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                  </span>
                  <div>
                    <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-text)", lineHeight: 1.2 }}>
                      {item.title}
                    </p>
                    <p className="typo-small" style={{ color: "#999", marginTop: "1px" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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

          {/* Right — SVG illustration with play-to-video */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{ position: "relative", minHeight: "100%", paddingTop: "40px", paddingBottom: "40px" }}
          >
            {playing ? (
              <div
                style={{
                  width: "100%",
                  maxWidth: "440px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  position: "relative",
                  paddingBottom: "100%",
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
                  src="https://www.youtube.com/embed/9DqDFAGLPrc?autoplay=1"
                  title="EcomGarden - Client Results"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                onClick={() => setPlaying(true)}
                style={{
                  width: "100%",
                  maxWidth: "440px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {/* Dashboard-style SVG illustration — 1:1 ratio */}
                <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                  {/* Background card */}
                  <rect x="0" y="0" width="440" height="440" rx="16" fill="white" />
                  <rect x="0" y="0" width="440" height="440" rx="16" stroke="#e8e8ee" strokeWidth="1" />

                  {/* Header bar */}
                  <rect x="0" y="0" width="440" height="48" rx="16" fill="#1a1a2e" />
                  <rect x="0" y="16" width="440" height="32" fill="#1a1a2e" />
                  <circle cx="24" cy="24" r="5" fill="#e74c3c" />
                  <circle cx="42" cy="24" r="5" fill="#f59e0b" />
                  <circle cx="60" cy="24" r="5" fill="#16a34a" />
                  <text x="220" y="28" textAnchor="middle" fill="#9494ac" fontSize="12" fontFamily="Roboto, sans-serif">EcomGarden Dashboard</text>

                  {/* Revenue label */}
                  <text x="30" y="80" fill="#999" fontSize="11" fontFamily="Roboto, sans-serif">TOTAL REVENUE</text>
                  <text x="30" y="105" fill="#1a1a2e" fontSize="26" fontWeight="800" fontFamily="Roboto, sans-serif">$691,224</text>
                  <text x="195" y="105" fill="#16a34a" fontSize="13" fontWeight="600" fontFamily="Roboto, sans-serif">+35% ROI</text>

                  {/* Mini stat cards */}
                  <rect x="30" y="125" width="115" height="50" rx="8" fill="#f6f7f9" />
                  <text x="42" y="145" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Orders</text>
                  <text x="42" y="165" fill="#1a1a2e" fontSize="16" fontWeight="700" fontFamily="Roboto, sans-serif">20,768</text>

                  <rect x="160" y="125" width="115" height="50" rx="8" fill="#f6f7f9" />
                  <text x="172" y="145" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Profit</text>
                  <text x="172" y="165" fill="#16a34a" fontSize="16" fontWeight="700" fontFamily="Roboto, sans-serif">$241,928</text>

                  <rect x="290" y="125" width="120" height="50" rx="8" fill="#f6f7f9" />
                  <text x="302" y="145" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Active Stores</text>
                  <text x="302" y="165" fill="#1a1a2e" fontSize="16" fontWeight="700" fontFamily="Roboto, sans-serif">55+</text>

                  {/* Chart section label */}
                  <text x="30" y="210" fill="#999" fontSize="11" fontFamily="Roboto, sans-serif">MONTHLY REVENUE</text>
                  <line x1="30" y1="220" x2="410" y2="220" stroke="#f0f0f0" strokeWidth="1" />

                  {/* Chart bars — taller for 1:1 ratio */}
                  <rect x="35" y="340" width="32" height="60" rx="4" fill="#dcfce7" />
                  <rect x="78" y="310" width="32" height="90" rx="4" fill="#dcfce7" />
                  <rect x="121" y="280" width="32" height="120" rx="4" fill="#dcfce7" />
                  <rect x="164" y="300" width="32" height="100" rx="4" fill="#dcfce7" />
                  <rect x="207" y="265" width="32" height="135" rx="4" fill="#16a34a" />
                  <rect x="250" y="290" width="32" height="110" rx="4" fill="#dcfce7" />
                  <rect x="293" y="250" width="32" height="150" rx="4" fill="#16a34a" />
                  <rect x="336" y="235" width="32" height="165" rx="4" fill="#16a34a" />
                  <rect x="379" y="245" width="32" height="155" rx="4" fill="#dcfce7" />

                  {/* Chart labels */}
                  <text x="51" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Jan</text>
                  <text x="94" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Feb</text>
                  <text x="137" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Mar</text>
                  <text x="180" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Apr</text>
                  <text x="223" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">May</text>
                  <text x="266" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Jun</text>
                  <text x="309" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Jul</text>
                  <text x="352" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Aug</text>
                  <text x="395" y="415" fill="#bbb" fontSize="10" textAnchor="middle" fontFamily="Roboto, sans-serif">Sep</text>
                </svg>

                {/* Play button overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.15)",
                    borderRadius: "16px",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.25)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.15)"; }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(22,163,74,0.4)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p style={{
                    position: "absolute",
                    bottom: "20px",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }}>
                    Watch Client Results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
