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
  FaBoxes,
  FaWarehouse,
  FaShoppingCart,
  FaShieldAlt,
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
    icon: <FaWarehouse />,
    title: "Amazon FBA",
    desc: "Fulfillment by Amazon — we set up and manage your FBA business from product sourcing to inventory management, letting Amazon handle storage, packing, and shipping.",
    href: "/services/amazon-fba",
  },
  {
    icon: <FaBoxes />,
    title: "Amazon Wholesale",
    desc: "Buy branded products in bulk directly from manufacturers and distributors, then sell on Amazon at a profit. We handle supplier sourcing, negotiations, and account management.",
    href: "/services/amazon-wholesale",
  },
  {
    icon: <FaShoppingCart />,
    title: "2 Step Amazon Dropshipping",
    desc: "Source products from retailers, ship to a prep center, then send to customers or Amazon warehouses. Lower risk, no large inventory investment required.",
    href: "/services/amazon-arbitrage",
  },
  {
    icon: <FaShieldAlt />,
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
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON SELLER SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Amazon Seller Services — Complete Store Management
          </h1>
          <p className="typo-body" style={{ maxWidth: "620px", margin: "0 auto 12px", fontSize: "17px" }}>
            Amazon is the world&apos;s <strong>#1 marketplace</strong> with over 300 million active customers. We help you launch, manage, and scale your Amazon business with proven strategies.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            From store setup to daily management — your complete Amazon growth partner.
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
            <h2 className="typo-h2">EcomGarden vs Other Amazon Agencies</h2>
            <p className="typo-subtext">We don&apos;t just manage accounts — we build profitable Amazon businesses.</p>
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
