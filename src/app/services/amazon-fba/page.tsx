"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearch, FaBullhorn, FaListAlt, FaBoxes, FaCopyright, FaChartLine, FaTruck, FaRocket } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Data-driven product research", us: true, diy: "Guesswork", others: "Basic tools" },
  { feature: "PPC campaign management & optimization", us: true, diy: "Trial & error", others: "Extra fee" },
  { feature: "Listing creation with A+ content", us: true, diy: "You do it", others: "Template-based" },
  { feature: "Inventory forecasting & reorder alerts", us: true, diy: false, others: false },
  { feature: "Brand Registry & IP protection", us: true, diy: "You figure out", others: "Not included" },
  { feature: "Supplier sourcing & negotiation", us: true, diy: "You do it", others: "Referrals only" },
  { feature: "Keyword research & SEO optimization", us: true, diy: "Basic", others: "One-time" },
  { feature: "Ongoing performance monitoring", us: true, diy: "You track", others: "Monthly report" },
  { feature: "Transparent P&L reporting", us: true, diy: "You calculate", others: "Limited" },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Product Research & Validation", desc: "Deep market analysis using Helium 10, Jungle Scout, and proprietary data to find products with strong demand, low competition, and healthy margins. Every product is validated before you invest a dollar." },
  { img: "/images/services/icons/marketing.png", title: "PPC Management", desc: "Full Sponsored Products, Sponsored Brands, and Sponsored Display management. Daily bid optimization, keyword discovery, negative keyword pruning, and ACoS tracking to maximize your ad ROI." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Listing Optimization", desc: "Professional listings with keyword-rich titles, compelling bullet points, A+ Enhanced Brand Content, and optimized backend search terms. We continuously test and improve conversion rates." },
  { img: "/images/services/icons/inventory.png", title: "Inventory Planning", desc: "Demand forecasting, reorder point calculations, and lead time tracking so you never run out of stock or tie up cash in excess inventory. We plan around seasonality and trends." },
  { img: "/images/services/icons/safety.png", title: "Brand Registry & Protection", desc: "We help you register your brand with Amazon Brand Registry, set up IP protection, and access exclusive tools like A+ Content, Sponsored Brands, and Brand Analytics." },
  { img: "/images/services/icons/scalability.png", title: "Growth Strategy", desc: "Beyond day-to-day management — we plan product line expansion, international marketplace launches, and long-term brand positioning to build a valuable business asset." },
];

const faqs = [
  {
    question: "What is Amazon FBA and how does it work?",
    answer:
      "FBA stands for Fulfilled by Amazon. You send your products to Amazon's fulfillment centers, and Amazon handles storage, packing, shipping, customer service, and returns. You focus on sourcing products and growing your brand while Amazon handles the logistics.",
  },
  {
    question: "How much investment do I need to start an FBA business?",
    answer:
      "A good starting budget for Amazon FBA is $10,000-$15,000. This covers initial inventory, product photography, listing optimization, and PPC advertising. For a minimum start, you can begin with $5,000 but growth will be slower.",
  },
  {
    question: "How long does it take to see profit with FBA?",
    answer:
      "Most FBA businesses start seeing consistent profit within 3-6 months. The first 1-2 months are typically spent on product research, sourcing, and launch. Once your listings are optimized and PPC campaigns are running, revenue builds steadily.",
  },
  {
    question: "Do you help with private label product development?",
    answer:
      "Yes, we provide end-to-end private label support including market research, competitor analysis, supplier sourcing, sample evaluation, packaging design, and brand registry. We guide you through every step of building your own brand on Amazon.",
  },
  {
    question: "How do you manage PPC advertising for FBA products?",
    answer:
      "We create and optimize Sponsored Products, Sponsored Brands, and Sponsored Display campaigns. Our team monitors ACoS, adjusts bids daily, performs keyword research, and runs A/B tests to maximize your advertising ROI while maintaining profitability.",
  },
  {
    question: "What happens if my inventory runs out of stock?",
    answer:
      "Running out of stock hurts your ranking and sales velocity. Our inventory management system tracks stock levels, forecasts demand, and sends reorder alerts well in advance so you never lose momentum due to stockouts.",
  },
  {
    question: "Will you manage my entire FBA business?",
    answer:
      "Yes, we provide complete A-Z FBA management including product research, supplier negotiation, listing creation, SEO optimization, PPC management, inventory planning, customer support, and performance monitoring.",
  },
  {
    question: "What if my product does not sell well?",
    answer:
      "We conduct thorough market validation before launching any product. If a product underperforms, we analyze the data, optimize the listing and PPC strategy, and pivot if needed. Our goal is always to ensure profitability for your business.",
  },
];


export default function AmazonFBAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON FBA</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Build a Profitable Amazon Brand With Expert FBA Management
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                End-to-end FBA management from product research to scaling. <strong>Private label expertise, PPC optimization, and inventory planning</strong> under one roof.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Data-driven approach. Every decision backed by research, not guesswork.
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
                  { icon: <FaCopyright />, text: "Brand Registry Experts" },
                  { icon: <FaBullhorn />, text: "PPC Optimization Daily" },
                  { icon: <FaChartLine />, text: "$10M+ Revenue Managed" },
                ].map((badge) => (
                  <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                    <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SVG Illustration */}
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
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)" }}>FBA EXPERTS</span>
                </div>
                <FaBoxes style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.9 }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  $10M+ Revenue Managed
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  Private label, PPC &amp; inventory planning under one roof
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "50+", label: "Brands" },
                    { val: "Daily", label: "PPC Optimization" },
                    { val: "A+", label: "Content" },
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

      {/* ── INTRO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Amazon FBA (Fulfilled by Amazon) is one of the most powerful business models for building a scalable eCommerce brand. With FBA, Amazon handles warehousing, packing, shipping, and customer service while you focus on growing your product line and brand presence.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Whether you are launching your first private label product or managing an existing portfolio of FBA SKUs, our team provides the expertise and hands-on management you need to succeed. From identifying winning products to optimizing your PPC spend, we handle every aspect of your FBA operations.
              </p>
              <p className="typo-body">
                Our data-driven approach ensures every decision is backed by market research, competitor analysis, and real performance metrics. We treat your business as our own and work tirelessly to maximize your ROI.
              </p>
            </div>
            <div className="flex justify-center">
              <div style={{
                width: "100%",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--color-dark) 0%, #2d2d3f 100%)",
                padding: "32px",
                color: "#fff",
              }}>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
                  Key Highlights
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Build your own private label brand",
                    "Amazon handles storage & shipping",
                    "Prime-eligible fast delivery",
                    "Data-driven product research",
                    "Professional PPC management",
                    "$10M+ revenue managed by our team",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="typo-label">Process</span>
            <h2 className="typo-h2">How Amazon FBA Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaSearch style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Product Research", desc: "Deep market analysis to find profitable product opportunities with strong demand and low competition" },
              { step: "02", icon: <FaRocket style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Source & Launch", desc: "Source from verified suppliers, create optimized listings, and launch with a proven strategy" },
              { step: "03", icon: <FaTruck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Ship to FBA", desc: "Prepare and ship inventory to Amazon fulfillment centers following all FBA requirements" },
              { step: "04", icon: <FaBoxes style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Amazon Fulfills", desc: "Amazon stores, packs, and ships orders to customers with Prime-eligible fast delivery" },
              { step: "05", icon: <FaChartLine style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Scale & Profit", desc: "Optimize PPC, expand product line, and scale your brand for long-term profitable growth" },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 20px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--color-primary)", opacity: 0.15, marginBottom: "8px", lineHeight: 1 }}>
                  {item.step}
                </div>
                <div style={{ marginBottom: "10px" }}>{item.icon}</div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Full-Service FBA Management</h2>
            <p className="typo-subtext">From product research to brand scaling — every aspect of your FBA business handled by specialists.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
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
                <img src={item.img} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "12px" }} />
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div style={{
                width: "100%",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--color-dark) 0%, #2d2d3f 100%)",
                padding: "32px",
                color: "#fff",
              }}>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
                  Our FBA Management Covers
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Product research & supplier vetting",
                    "Professional listing creation & A+ content",
                    "PPC campaign management & optimization",
                    "Keyword research & SEO optimization",
                    "Inventory forecasting & reorder planning",
                    "Brand Registry & IP protection",
                    "Performance monitoring & reporting",
                    "Product line expansion strategy",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Full-Service FBA Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, we provide comprehensive FBA store management that covers every stage of your product lifecycle. Our team handles product research, supplier vetting, listing creation with professional photography and A+ content, keyword optimization, and launch strategy.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our PPC specialists manage your advertising campaigns with precision — optimizing bids, discovering high-converting keywords, and reducing wasted ad spend. Combined with our inventory forecasting tools, we ensure your products stay in stock and your campaigns never pause due to stockouts.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges and no hidden terms and conditions. Get our service for as long as you want and cancel your contract anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY ECOMGARDEN</span>
            <h2 className="typo-h2">EcomGarden vs Self-Managing vs Other Agencies</h2>
            <p className="typo-subtext">FBA success requires expertise across product research, PPC, listings, and inventory. See the difference.</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "32px auto 0", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>Self-Manage</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>Others</div>

              {comparisonData.map((row) => (
                <React.Fragment key={row.feature}>
                  <div style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f5f5f5" }}>{row.feature}</div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5", backgroundColor: "rgba(22,163,74,0.03)" }}>
                    {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.diy}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.others === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.others}</span>}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why FBA Sellers Choose EcomGarden</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { title: "PPC Specialists, Not Generalists", desc: "Our PPC team manages campaigns daily — not weekly. We optimize bids, discover converting keywords, prune wasted spend, and track ACoS down to the SKU level. Most agencies check in once a week." },
              { title: "We Validate Before You Invest", desc: "Every product goes through our validation framework: demand analysis, competition depth, margin calculation, supplier reliability, and differentiation potential. We don't launch products that won't make money." },
              { title: "Brand Building, Not Just Selling", desc: "We help you build a real brand with Brand Registry, A+ Content, Sponsored Brands, and a product line strategy. A brand is an asset you can sell — a random product listing is not." },
              { title: "Never Run Out of Stock Again", desc: "Our inventory forecasting tracks sales velocity, lead times, and seasonal patterns to calculate exact reorder dates. Stockouts kill rankings and waste PPC spend — we prevent them." },
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
                <h3 className="typo-h4" style={{ marginBottom: "8px", color: "var(--color-primary)" }}>{item.title}</h3>
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
                  {faq.question}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.answer}</p>
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
