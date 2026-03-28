"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
  FaStore,
  FaBoxes,
  FaWarehouse,
  FaShoppingCart,
  FaShieldAlt,
  FaGlobeAmericas,
  FaUsers,
  FaChartLine,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const stats = [
  { value: "120M+", label: "Monthly Visitors", icon: <FaUsers /> },
  { value: "#1", label: "Fastest Growing Marketplace", icon: <FaRocket /> },
  { value: "Lower", label: "Competition Than Amazon", icon: <FaChartLine /> },
  { value: "$0", label: "Monthly Seller Fees", icon: <FaStore /> },
];

const services = [
  {
    icon: <FaWarehouse />,
    title: "Walmart WFS",
    desc: "Walmart Fulfillment Services — similar to Amazon FBA. We set up your WFS account, manage inventory shipments, and optimize your listings for Walmart's fulfillment network.",
    href: "/services/walmart-wfs",
  },
  {
    icon: <FaBoxes />,
    title: "Walmart Wholesale",
    desc: "Source branded products from authorized distributors and sell on Walmart Marketplace. We handle supplier relationships, pricing strategy, and ongoing account management.",
    href: "/services/walmart-wholesale",
  },
  {
    icon: <FaShoppingCart />,
    title: "2 Step Walmart Dropshipping",
    desc: "Source products from retailers, route through a prep center, then fulfill Walmart orders. A lower-risk entry point with no large upfront inventory investment needed.",
    href: "/services/walmart-dropshipping",
  },
  {
    icon: <FaShieldAlt />,
    title: "Walmart Account Reinstatement",
    desc: "Walmart account suspended or deactivated? We analyze the issue, prepare a detailed appeal, and work with Walmart's team to restore your selling privileges.",
    href: "/services/walmart-reinstatement",
  },
];

const comparisonData = [
  { feature: "Dedicated Walmart account managers", us: true, them: false },
  { feature: "Product research & sourcing included", us: true, them: false },
  { feature: "Complete store setup & optimization", us: true, them: false },
  { feature: "Walmart-specific listing optimization", us: true, them: false },
  { feature: "Transparent pricing, no hidden fees", us: true, them: false },
  { feature: "Advertising & sponsored products", us: true, them: "Extra fees" },
  { feature: "Response time", us: "Within 2 hours", them: "24-72 hours" },
  { feature: "Proven Walmart seller experience", us: true, them: false },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How is Walmart Marketplace different from Amazon?",
    a: "Walmart Marketplace has lower competition, no monthly seller fees (only referral fees per sale), and access to Walmart's massive customer base. Unlike Amazon, Walmart is still growing its seller base, meaning early movers have a significant advantage.",
  },
  {
    q: "What are the requirements to sell on Walmart?",
    a: "You need a US business entity (LLC or Corporation), US EIN, US business address, and a track record of ecommerce experience or a strong business plan. Walmart is more selective than Amazon, but we help you build a compelling application.",
  },
  {
    q: "How long does it take to get approved on Walmart?",
    a: "Walmart application review typically takes 2-4 weeks. Store setup and listing optimization takes another 5-7 days. We prepare your application to maximize approval chances and handle the entire onboarding process.",
  },
  {
    q: "What is Walmart Fulfillment Services (WFS)?",
    a: "WFS is Walmart's version of FBA. You ship inventory to Walmart's fulfillment centers, and they handle storage, packing, shipping, and customer service. WFS listings get the 'Fulfilled by Walmart' badge, improving visibility and trust.",
  },
  {
    q: "Can I sell on both Amazon and Walmart?",
    a: "Absolutely. Many of our clients sell on both platforms. We help you diversify across marketplaces to reduce risk and maximize revenue. Different platforms often attract different customer segments.",
  },
  {
    q: "What if my Walmart seller application gets rejected?",
    a: "We have extensive experience with Walmart applications. If your initial application is declined, we analyze the rejection reason, strengthen your profile, and reapply. Our approval rate is significantly higher than self-applications.",
  },
];

export default function WalmartPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART MARKETPLACE SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Walmart Marketplace Services — Complete Store Management
          </h1>
          <p className="typo-body" style={{ maxWidth: "620px", margin: "0 auto 12px", fontSize: "17px" }}>
            Walmart is the <strong>fastest-growing ecommerce marketplace</strong> with 120M+ monthly visitors and significantly lower competition than Amazon. Get in early.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            No monthly seller fees. Lower competition. Massive customer base.
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
              Get Free Consultation
            </a>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            {[
              { icon: <FaStore />, text: "Walmart Approved Sellers" },
              { icon: <FaTrophy />, text: "300+ Walmart Stores Managed" },
              { icon: <FaUsers />, text: "Dedicated Account Managers" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SELL ON WALMART ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY WALMART</span>
            <h2 className="typo-h2">Why Sell on Walmart?</h2>
            <p className="typo-subtext">Walmart Marketplace is the biggest untapped opportunity in ecommerce right now.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "12px",
                  padding: "28px 20px",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "24px", color: "var(--color-primary)", marginBottom: "12px" }}>{stat.icon}</div>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1, marginBottom: "6px" }}>{stat.value}</div>
                <p className="typo-small" style={{ fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WALMART SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Our Walmart Services</h2>
            <p className="typo-subtext">Full-service Walmart Marketplace solutions to help you launch and scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: "32px" }}>
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card-hover"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "28px 24px",
                    border: "1px solid rgba(0,0,0,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "24px", color: "var(--color-primary)", marginBottom: "14px" }}>{service.icon}</div>
                  <h3 className="typo-h3" style={{ marginBottom: "8px" }}>{service.title}</h3>
                  <p className="typo-body" style={{ marginBottom: "16px", flex: 1 }}>{service.desc}</p>
                  <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "14px" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ECOMGARDEN ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Other Walmart Agencies</h2>
            <p className="typo-subtext">Walmart requires specialized expertise — we&apos;ve been there from the start.</p>
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

      {/* ── FAQ ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
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
                  backgroundColor: "#fff",
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
