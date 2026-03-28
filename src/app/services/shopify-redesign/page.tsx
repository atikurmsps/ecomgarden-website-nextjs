"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearchPlus, FaChartLine, FaTachometerAlt, FaMobileAlt, FaPalette, FaShoppingCart, FaClock, FaStore } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Data-driven UX audit first", us: true, them: false },
  { feature: "Conversion optimization focus", us: true, them: "Design only" },
  { feature: "Speed optimization included", us: true, them: "Extra cost" },
  { feature: "Mobile-first approach", us: true, them: "Desktop-first" },
  { feature: "SEO preservation during redesign", us: true, them: false },
  { feature: "Zero downtime migration", us: true, them: "Hours of downtime" },
  { feature: "Turnaround time", us: "2-4 weeks", them: "6-12 weeks" },
  { feature: "Post-launch A/B testing", us: true, them: false },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How long does a Shopify store redesign take?",
    a: "A typical redesign takes 2-4 weeks depending on scope. Simple theme-based redesigns can be done in 1-2 weeks, while custom redesigns with unique layouts and features may take 3-4 weeks. We provide a detailed timeline after the initial audit.",
  },
  {
    q: "Will I lose my existing SEO rankings during the redesign?",
    a: "No. We take great care to preserve your SEO. We maintain all existing URLs, set up proper redirects where needed, preserve meta data, and ensure all on-page SEO elements are carried over or improved. Your organic traffic is protected.",
  },
  {
    q: "Can you redesign my store without changing the theme?",
    a: "Yes. We can work within your existing theme by customizing the CSS, Liquid templates, and section configurations. However, if your current theme is outdated or limiting performance, we may recommend switching to a modern, optimized theme.",
  },
  {
    q: "How do you ensure the redesign improves conversions?",
    a: "We start with a data-driven audit using analytics, heatmaps, and user behavior data. Every design decision is based on conversion best practices — strategic CTA placement, simplified navigation, trust signals, and mobile optimization.",
  },
  {
    q: "Will my store have downtime during the redesign?",
    a: "No. We work on a development or duplicate theme so your live store continues operating normally. Once the redesign is approved, we publish the new design in minutes with zero downtime.",
  },
  {
    q: "Do you provide mobile-responsive designs?",
    a: "All our redesigns follow a mobile-first approach since over 70% of ecommerce traffic comes from mobile devices. We test on multiple devices and screen sizes to ensure a seamless shopping experience everywhere.",
  },
  {
    q: "What if I do not like the redesign?",
    a: "We involve you at every stage with design mockups and revisions before any development. We offer up to 3 rounds of revisions on the design phase. Your existing store remains untouched until you approve the final redesign.",
  },
  {
    q: "Can you also improve my store speed during the redesign?",
    a: "Speed optimization is a core part of our redesign process. We optimize images, minimize code, implement lazy loading, audit third-party apps, and ensure your redesigned store loads in under 3 seconds on mobile.",
  },
];

export default function ShopifyRedesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY REDESIGN</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Transform Your Shopify Store Into a Conversion Machine
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Our redesigns deliver an average <strong>40% increase in conversion rate</strong>. Data-driven UX, modern design, and mobile-first approach.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Zero downtime. SEO preserved. Results in 2-4 weeks.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-pulse"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Get Free Store Audit
            </a>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            {[
              { icon: <FaStore />, text: "100+ Stores Redesigned" },
              { icon: <FaChartLine />, text: "40% Avg Conversion Lift" },
              { icon: <FaClock />, text: "2-4 Week Turnaround" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT&apos;S INCLUDED</span>
            <h2 className="typo-h2">Complete Redesign That Drives Revenue</h2>
            <p className="typo-subtext">Every redesign decision is backed by data, not guesswork.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaSearchPlus />, title: "UX Audit & Analysis", desc: "Deep-dive audit of your current store using analytics, heatmaps, session recordings, and user flow analysis to identify exactly where you are losing sales." },
              { icon: <FaChartLine />, title: "Conversion Optimization", desc: "Strategic placement of CTAs, trust signals, social proof, urgency elements, and simplified checkout flow. Every element is positioned to maximize revenue." },
              { icon: <FaTachometerAlt />, title: "Speed Optimization", desc: "Comprehensive performance tuning — image compression, code minification, lazy loading, app audit, and third-party script cleanup for sub-3-second load times." },
              { icon: <FaMobileAlt />, title: "Mobile-First Design", desc: "Responsive design that prioritizes the mobile shopping experience. 70%+ of your traffic is mobile — your store needs to perform perfectly on every screen size." },
              { icon: <FaPalette />, title: "Brand Alignment", desc: "Unified visual identity across every page — consistent typography, colors, imagery, and brand voice. Your redesigned store reflects your brand at its best." },
              { icon: <FaShoppingCart />, title: "Product & Checkout Pages", desc: "Enhanced product pages with better galleries, compelling copy, and cross-sell recommendations. Streamlined checkout with fewer steps and trust elements." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "12px" }}>{item.icon}</div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SIMPLE PROCESS</span>
            <h2 className="typo-h2">From Audit to Launch in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "UX Audit", desc: "We audit your current store design, analytics, heatmaps, and user flow to identify every conversion bottleneck." },
              { step: "02", title: "Strategy & Mockups", desc: "Create a redesign strategy with wireframes, mood boards, and high-fidelity mockups for your approval." },
              { step: "03", title: "Development", desc: "Implement approved designs with clean code, responsive layouts, and performance optimization on a staging theme." },
              { step: "04", title: "Launch & Optimize", desc: "Go live with zero downtime, monitor key metrics, and A/B test to continuously improve conversions." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 24px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  opacity: 0.15,
                  marginBottom: "8px",
                  lineHeight: 1,
                }}>
                  {item.step}
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Other Redesign Services</h2>
            <p className="typo-subtext">We don&apos;t just make stores pretty. We make them profitable.</p>
          </div>

          <div style={{ maxWidth: "700px", margin: "32px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>Others</div>

              {comparisonData.map((row) => (
                <React.Fragment key={row.feature}>
                  <div style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f5f5f5" }}>{row.feature}</div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5", backgroundColor: "rgba(22,163,74,0.03)" }}>
                    {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.them === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.them}</span>}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ECOMGARDEN ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why Our Redesigns Outperform the Competition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Data Before Design", desc: "We never redesign based on opinion. Every change is backed by analytics, heatmap data, and user behavior insights. The result is a store that converts, not just one that looks different." },
              { title: "Conversion-First Mindset", desc: "Pretty designs are everywhere. We focus on designs that sell. Strategic CTA placement, trust signal positioning, and friction reduction throughout the buying journey." },
              { title: "SEO-Safe Process", desc: "Your organic traffic is an asset. We preserve all URLs, implement redirects, maintain structured data, and protect your search rankings throughout the entire redesign process." },
              { title: "Zero Downtime Launch", desc: "We build on a staging theme while your live store runs normally. The switchover happens in minutes — your customers never experience any disruption." },
              { title: "Mobile-First Always", desc: "70%+ of ecommerce traffic is mobile. We design for mobile first and scale up to desktop, ensuring the majority of your customers get the best possible experience." },
              { title: "Satisfaction Guaranteed", desc: "Up to 3 rounds of design revisions before development begins. Your existing store stays untouched until you approve the final design. No risk, no surprises." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FAQ</span>
            <h2 className="typo-h2">Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: "750px", margin: "24px auto 0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "14px 18px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    textAlign: "left",
                  }}
                >
                  {faq.q}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
