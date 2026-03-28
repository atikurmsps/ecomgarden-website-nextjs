"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
  FaAmazon,
  FaShoppingCart,
  FaGlobeAmericas,
  FaUsers,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const stats = [
  { value: "300M+", label: "Active Customers", icon: <FaUsers /> },
  { value: "$600B+", label: "Annual Sales", icon: <FaChartLine /> },
  { value: "60%+", label: "Sales from 3rd Party Sellers", icon: <FaShoppingCart /> },
  { value: "200+", label: "Countries Reach", icon: <FaGlobeAmericas /> },
];

const services = [
  {
    img: "/images/services/icons/order-fulfillment.png",
    title: "Amazon FBA",
    desc: "Fulfillment by Amazon — we set up and manage your FBA business from product sourcing to inventory management, letting Amazon handle storage, packing, and shipping.",
    href: "/services/amazon-fba",
  },
  {
    img: "/images/services/icons/inventory.png",
    title: "Amazon Wholesale",
    desc: "Buy branded products in bulk directly from manufacturers and distributors, then sell on Amazon at a profit. We handle supplier sourcing, negotiations, and account management.",
    href: "/services/amazon-wholesale",
  },
  {
    img: "/images/services/icons/product-research.png",
    title: "2 Step Amazon Dropshipping",
    desc: "Source products from retailers, ship to a prep center, then send to customers or Amazon warehouses. Lower risk, no large inventory investment required.",
    href: "/services/amazon-arbitrage",
  },
  {
    img: "/images/services/icons/account-health.png",
    title: "Amazon Account Reinstatement",
    desc: "Suspended or deactivated Amazon account? We craft professional appeals, address root causes, and work to get your selling privileges restored quickly.",
    href: "/services/amazon-reinstatement",
  },
];

const comparisonData = [
  { feature: "Dedicated Amazon account managers", us: true, them: false },
  { feature: "Product research & sourcing included", us: true, them: false },
  { feature: "Complete A-Z store setup", us: true, them: false },
  { feature: "Suspension prevention strategies", us: true, them: false },
  { feature: "Transparent pricing, no hidden fees", us: true, them: false },
  { feature: "PPC & advertising management", us: true, them: "Extra fees" },
  { feature: "Response time", us: "Within 2 hours", them: "24-72 hours" },
  { feature: "Proven seller track record", us: true, them: false },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How much does it cost to start selling on Amazon?",
    a: "Amazon Professional seller plan costs $39.99/month. Beyond that, you need inventory capital (varies by model), and our service fees. We offer packages for every budget — contact us for a custom quote based on your business model.",
  },
  {
    q: "Which Amazon business model is best for beginners?",
    a: "For beginners, we typically recommend either Amazon FBA Wholesale or 2-Step Dropshipping. Wholesale offers more predictable margins with established brands, while dropshipping requires less upfront capital. We help you choose based on your budget and goals.",
  },
  {
    q: "Do I need a US LLC to sell on Amazon?",
    a: "While you can sell on Amazon as an individual or with a foreign entity, having a US LLC provides significant advantages: easier tax compliance, professional credibility, access to US bank accounts, and better protection. We offer complete LLC formation services.",
  },
  {
    q: "How long does it take to set up an Amazon store?",
    a: "Account registration takes 1-3 days. Full store setup with product listings, optimization, and brand registry (if applicable) takes 7-14 days. First sales typically come within 2-4 weeks of launch depending on the business model.",
  },
  {
    q: "Can you help if my Amazon account is suspended?",
    a: "Yes. Our Amazon Account Reinstatement service has a high success rate. We analyze the suspension reason, create a comprehensive Plan of Action (POA), submit the appeal, and follow up until your account is reinstated.",
  },
  {
    q: "What kind of results can I expect?",
    a: "Results vary by model and investment. Our FBA wholesale clients typically see 15-25% ROI, while dropshipping clients can start generating revenue within the first month. We provide realistic projections during your free consultation.",
  },
];

export default function AmazonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON SELLER SERVICES</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Amazon Seller Services — Complete Store Management
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                Amazon is the world&apos;s <strong>#1 marketplace</strong> with over 300 million active customers. We help you launch, manage, and scale your Amazon business with proven strategies.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                From store setup to daily management — your complete Amazon growth partner.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
              <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap" }}>
                {[
                  { icon: <FaAmazon />, text: "Amazon Verified Partner" },
                  { icon: <FaTrophy />, text: "500+ Stores Launched" },
                  { icon: <FaUsers />, text: "Dedicated Account Managers" },
                ].map((badge) => (
                  <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                    <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Branded illustration card */}
            <div className="hidden lg:flex items-center justify-center">
              <div style={{
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "1/1",
                borderRadius: "16px",
                background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-light) 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "rgba(22,163,74,0.2)", borderRadius: "12px", padding: "6px 14px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)" }}>VERIFIED</span>
                </div>
                <FaAmazon style={{ fontSize: "56px", marginBottom: "16px", opacity: 0.9 }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  300M+ Customers
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  The World&apos;s #1 Marketplace
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "500+", label: "Stores" },
                    { val: "$600B+", label: "Annual Sales" },
                    { val: "200+", label: "Countries" },
                  ].map((s) => (
                    <div key={s.label} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-primary)" }}>{s.val}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SELL ON AMAZON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY AMAZON</span>
            <h2 className="typo-h2">Why Sell on Amazon?</h2>
            <p className="typo-subtext">Amazon dominates global ecommerce — and the opportunity for sellers has never been bigger.</p>
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

      {/* ── OUR AMAZON SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Our Amazon Services</h2>
            <p className="typo-subtext">End-to-end Amazon solutions tailored to your business goals and budget.</p>
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
                  <img src={service.img} alt={service.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "14px" }} />
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
            <h2 className="typo-h2">EcomGarden vs Other Amazon Agencies</h2>
            <p className="typo-subtext">We don&apos;t just manage accounts — we build profitable Amazon businesses.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                    <td style={{ padding: "12px 20px", fontSize: "13px", fontWeight: 500, textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>{row.feature}</td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", backgroundColor: i % 2 === 0 ? "rgba(22,163,74,0.04)" : "rgba(22,163,74,0.07)", verticalAlign: "middle" }}>
                      {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.them === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.them}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
