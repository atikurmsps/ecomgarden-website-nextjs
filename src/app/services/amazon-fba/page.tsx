"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearch, FaBullhorn, FaListAlt, FaBoxes, FaCopyright, FaChartLine } from "react-icons/fa";
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
  { icon: <FaSearch />, title: "Product Research & Validation", desc: "Deep market analysis using Helium 10, Jungle Scout, and proprietary data to find products with strong demand, low competition, and healthy margins. Every product is validated before you invest a dollar." },
  { icon: <FaBullhorn />, title: "PPC Management", desc: "Full Sponsored Products, Sponsored Brands, and Sponsored Display management. Daily bid optimization, keyword discovery, negative keyword pruning, and ACoS tracking to maximize your ad ROI." },
  { icon: <FaListAlt />, title: "Listing Optimization", desc: "Professional listings with keyword-rich titles, compelling bullet points, A+ Enhanced Brand Content, and optimized backend search terms. We continuously test and improve conversion rates." },
  { icon: <FaBoxes />, title: "Inventory Planning", desc: "Demand forecasting, reorder point calculations, and lead time tracking so you never run out of stock or tie up cash in excess inventory. We plan around seasonality and trends." },
  { icon: <FaCopyright />, title: "Brand Registry & Protection", desc: "We help you register your brand with Amazon Brand Registry, set up IP protection, and access exclusive tools like A+ Content, Sponsored Brands, and Brand Analytics." },
  { icon: <FaChartLine />, title: "Growth Strategy", desc: "Beyond day-to-day management — we plan product line expansion, international marketplace launches, and long-term brand positioning to build a valuable business asset." },
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

const processSteps = [
  {
    img: "/images/services/process/buy-items.png",
    title: "Product Research",
    description:
      "Deep market analysis to find profitable product opportunities with strong demand and low competition",
  },
  {
    img: "/images/services/process/sell-items.png",
    title: "Source & Launch",
    description:
      "Source from verified suppliers, create optimized listings, and launch with a proven strategy",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Ship to FBA",
    description:
      "Prepare and ship inventory to Amazon fulfillment centers following all FBA requirements",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Amazon Fulfills",
    description:
      "Amazon stores, packs, and ships orders to customers with Prime-eligible fast delivery",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Scale & Profit",
    description:
      "Optimize PPC, expand product line, and scale your brand for long-term profitable growth",
  },
];

export default function AmazonFBAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON FBA</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Build a Profitable Amazon Brand With Expert FBA Management
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            End-to-end FBA management from product research to scaling. <strong>Private label expertise, PPC optimization, and inventory planning</strong> under one roof.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Data-driven approach. Every decision backed by research, not guesswork.
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
              <img
                src="/images/services/hero/wholesale-hero.jpg"
                alt="Amazon FBA Management Services"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{ width: "70px", height: "70px", objectFit: "contain" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="typo-small" style={{ color: "#ffffff" }}>{index + 1}</span>
                    </div>
                  </div>
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "6px" }}>{step.title}</h3>
                <p className="typo-small">{step.description}</p>
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
                <div style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "12px" }}>{item.icon}</div>
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
            <div className="flex justify-center">
              <img
                src="/images/services/management/ecommerce-fulfilment.jpg"
                alt="Full-Service FBA Management With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
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
