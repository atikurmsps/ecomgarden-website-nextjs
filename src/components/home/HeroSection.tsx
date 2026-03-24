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
  FaTimes,
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

const barData = [
  { x: 35, h: 60, color: "#dcfce7", label: "Jan" },
  { x: 78, h: 90, color: "#dcfce7", label: "Feb" },
  { x: 121, h: 120, color: "#dcfce7", label: "Mar" },
  { x: 164, h: 100, color: "#dcfce7", label: "Apr" },
  { x: 207, h: 135, color: "#16a34a", label: "May" },
  { x: 250, h: 110, color: "#dcfce7", label: "Jun" },
  { x: 293, h: 150, color: "#16a34a", label: "Jul" },
  { x: 336, h: 165, color: "#16a34a", label: "Aug" },
  { x: 379, h: 155, color: "#dcfce7", label: "Sep" },
];

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
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

              {/* Highlight pills */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
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

            {/* Right — Animated SVG with click-to-popup video */}
            <div
              className="hidden lg:flex items-center justify-center"
              style={{ position: "relative", minHeight: "100%", paddingTop: "40px", paddingBottom: "40px" }}
            >
              <div
                onClick={() => setShowVideo(true)}
                style={{ width: "100%", maxWidth: "440px", cursor: "pointer", position: "relative" }}
              >
                <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                  <defs>
                    <style>{`
                      /* 6s total cycle: grow in 0-1.5s, hold 1.5-4s, fade out 4-5s, pause 5-6s */
                      @keyframes barLoop {
                        0% { transform: scaleY(0); }
                        15% { transform: scaleY(1); }
                        70% { transform: scaleY(1); }
                        85% { transform: scaleY(0); }
                        100% { transform: scaleY(0); }
                      }
                      @keyframes fadeLoop {
                        0% { opacity: 0; transform: translateY(8px); }
                        15% { opacity: 1; transform: translateY(0); }
                        70% { opacity: 1; transform: translateY(0); }
                        85% { opacity: 0; transform: translateY(-4px); }
                        100% { opacity: 0; transform: translateY(8px); }
                      }
                      @keyframes revenueLoop {
                        0% { opacity: 0; }
                        12% { opacity: 1; }
                        70% { opacity: 1; }
                        85% { opacity: 0; }
                        100% { opacity: 0; }
                      }
                      @keyframes pulseGlow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }

                      .bar { transform-origin: bottom; animation: barLoop 6s ease-in-out infinite; }
                      .bar-1 { animation-delay: 0s; }
                      .bar-2 { animation-delay: 0.08s; }
                      .bar-3 { animation-delay: 0.16s; }
                      .bar-4 { animation-delay: 0.24s; }
                      .bar-5 { animation-delay: 0.32s; }
                      .bar-6 { animation-delay: 0.4s; }
                      .bar-7 { animation-delay: 0.48s; }
                      .bar-8 { animation-delay: 0.56s; }
                      .bar-9 { animation-delay: 0.64s; }
                      .stat-card { animation: fadeLoop 6s ease-in-out infinite; }
                      .stat-1 { animation-delay: 0.1s; }
                      .stat-2 { animation-delay: 0.25s; }
                      .stat-3 { animation-delay: 0.4s; }
                      .revenue-text { animation: revenueLoop 6s ease-in-out infinite; animation-delay: 0.15s; }
                      .roi-badge { animation: pulseGlow 2s ease-in-out infinite; }
                    `}</style>
                  </defs>

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

                  {/* Revenue — animated */}
                  <text x="30" y="80" fill="#999" fontSize="11" fontFamily="Roboto, sans-serif">TOTAL REVENUE</text>
                  <text className="revenue-text" x="30" y="108" fill="#1a1a2e" fontSize="28" fontWeight="800" fontFamily="Roboto, sans-serif">$691,224</text>
                  <rect className="roi-badge" x="195" y="90" width="72" height="24" rx="12" fill="rgba(22,163,74,0.1)" />
                  <text className="roi-badge" x="231" y="106" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="700" fontFamily="Roboto, sans-serif">+35% ROI</text>

                  {/* Mini stat cards — animated */}
                  <g className="stat-card stat-1">
                    <rect x="30" y="130" width="115" height="55" rx="8" fill="#f6f7f9" />
                    <text x="42" y="152" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Orders</text>
                    <text x="42" y="172" fill="#1a1a2e" fontSize="17" fontWeight="700" fontFamily="Roboto, sans-serif">20,768</text>
                  </g>
                  <g className="stat-card stat-2">
                    <rect x="160" y="130" width="115" height="55" rx="8" fill="#f6f7f9" />
                    <text x="172" y="152" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Profit</text>
                    <text x="172" y="172" fill="#16a34a" fontSize="17" fontWeight="700" fontFamily="Roboto, sans-serif">$241,928</text>
                  </g>
                  <g className="stat-card stat-3">
                    <rect x="290" y="130" width="120" height="55" rx="8" fill="#f6f7f9" />
                    <text x="302" y="152" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Active Stores</text>
                    <text x="302" y="172" fill="#1a1a2e" fontSize="17" fontWeight="700" fontFamily="Roboto, sans-serif">55+</text>
                  </g>

                  {/* Chart label */}
                  <text x="30" y="215" fill="#999" fontSize="11" fontFamily="Roboto, sans-serif">MONTHLY REVENUE</text>
                  <line x1="30" y1="225" x2="410" y2="225" stroke="#f0f0f0" strokeWidth="1" />

                  {/* Animated chart bars */}
                  {barData.map((bar, i) => (
                    <rect
                      key={bar.label}
                      className={`bar bar-${i + 1}`}
                      x={bar.x}
                      y={400 - bar.h}
                      width="32"
                      height={bar.h}
                      rx="4"
                      fill={bar.color}
                    />
                  ))}

                  {/* Chart labels */}
                  {barData.map((bar) => (
                    <text
                      key={`label-${bar.label}`}
                      x={bar.x + 16}
                      y="420"
                      fill="#bbb"
                      fontSize="10"
                      textAnchor="middle"
                      fontFamily="Roboto, sans-serif"
                    >
                      {bar.label}
                    </text>
                  ))}
                </svg>

                {/* Play button overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.08)"; }}
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
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p style={{
                    marginTop: "10px",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                  }}>
                    Watch Client Results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "900px",
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaTimes />
              <span style={{ fontSize: "14px", fontWeight: 600 }}>Close</span>
            </button>
            <div style={{ position: "relative", paddingBottom: "56.25%" }}>
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
          </div>
        </div>
      )}
    </>
  );
}
