"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaWarehouse, FaTruck, FaBarcode, FaChartBar, FaSyncAlt, FaShieldAlt, FaSearch, FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "WFS inbound shipment creation", us: true, self: false, others: "Extra fee" },
  { feature: "Product prep & labeling", us: true, self: "You handle", others: "Extra fee" },
  { feature: "Inventory replenishment planning", us: true, self: "Manual tracking", others: "Basic alerts" },
  { feature: "Listing optimization for WFS", us: true, self: false, others: "Generic" },
  { feature: "Buy Box strategy with WFS badge", us: true, self: false, others: false },
  { feature: "Storage fee optimization", us: true, self: false, others: false },
  { feature: "Return rate monitoring", us: true, self: false, others: "Extra fee" },
  { feature: "Carrier coordination", us: true, self: "You arrange", others: "Partial" },
  { feature: "Account health management", us: true, self: "You monitor", others: "Basic" },
  { feature: "WhatsApp direct support", us: true, self: "N/A", others: "Email only" },
];

const faqs = [
  {
    question: "What is Walmart Fulfillment Services (WFS)?",
    answer:
      "Walmart Fulfillment Services (WFS) is Walmart's own fulfillment program where sellers ship inventory to Walmart warehouses, and Walmart handles storage, picking, packing, shipping, and customer returns on your behalf. Products fulfilled by WFS earn the W+ tag and faster delivery badges.",
  },
  {
    question: "How does WFS differ from self-fulfillment on Walmart?",
    answer:
      "With WFS, Walmart stores and ships your products from their fulfillment centers, giving you access to 2-day shipping badges, higher search rankings, and better Buy Box placement. Self-fulfillment requires you to handle storage, packing, and shipping yourself.",
  },
  {
    question: "What are the costs associated with WFS?",
    answer:
      "WFS charges fulfillment fees based on product weight and dimensions, plus monthly storage fees. These fees are competitive and often lower than comparable services. Our team optimizes your packaging dimensions to minimize fees and maximize profitability.",
  },
  {
    question: "How do you prepare products for WFS warehouses?",
    answer:
      "We handle complete product prep including labeling with Walmart barcodes, poly-bagging fragile items, bundling multi-packs, and ensuring all packaging meets Walmart's strict receiving guidelines. Proper prep prevents rejections and delays.",
  },
  {
    question: "Can WFS help improve my product rankings on Walmart?",
    answer:
      "Yes, WFS products receive priority in Walmart search results and are more likely to win the Buy Box. The 2-day delivery badge and Walmart+ eligibility significantly increase conversion rates and organic visibility.",
  },
  {
    question: "What happens if a customer returns a WFS product?",
    answer:
      "Walmart handles all returns for WFS orders. Returned items in sellable condition are restocked automatically. Damaged items are disposed of or returned to you based on your preference. Our team monitors return rates and takes action to minimize them.",
  },
  {
    question: "How long does it take to get started with WFS?",
    answer:
      "Once your Walmart seller account is approved, we can have your first WFS shipment prepared and sent within 5-7 business days. Products typically become active within 2-3 days after Walmart receives and processes your inventory.",
  },
  {
    question: "Do you handle inventory replenishment for WFS?",
    answer:
      "Yes, we continuously monitor your WFS inventory levels and create replenishment shipments before stock runs out. Our forecasting tools analyze sales velocity to ensure optimal inventory levels without overstocking.",
  },
];


export default function WalmartWFSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART WFS</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Walmart WFS Management &mdash; 2-Day Delivery Badge That Sells
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Sellers using WFS see <strong>30-50% more sales</strong> with 2-day shipping badges, Walmart+ eligibility, and higher search rankings.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            First WFS shipment ready in 5-7 days. We handle prep, shipping &amp; replenishment.
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
              { icon: <FaWarehouse />, text: "WFS Certified Experts" },
              { icon: <FaTruck />, text: "30-50% Sales Increase" },
              { icon: <FaSyncAlt />, text: "Auto-Replenishment" },
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
                Walmart Fulfillment Services (WFS) is the fastest-growing
                fulfillment program for Walmart marketplace sellers. By storing
                your products in Walmart&apos;s own warehouses, you gain access to
                2-day shipping, Walmart+ eligibility, and significantly higher
                search rankings.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our WFS management service handles everything from product
                preparation and labeling to creating inbound shipments, tracking
                inventory levels, and ensuring your listings are fully optimized
                for maximum visibility and conversions.
              </p>
              <p className="typo-body">
                Sellers using WFS typically see a 30-50% increase in sales
                compared to self-fulfilled listings. With our expert management,
                you can focus on growing your product catalog while we handle the
                logistics and optimization that drive results.
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
                    "2-day delivery badge for all products",
                    "Walmart+ eligibility for premium shoppers",
                    "30-50% sales increase with WFS",
                    "Higher search rankings on Walmart",
                    "Walmart handles returns & customer service",
                    "First shipment ready in 5-7 days",
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
            <h2 className="typo-h2">How WFS Management Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaSearch style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Product Sourcing", desc: "Source profitable products and prepare optimized listings for Walmart marketplace" },
              { step: "02", icon: <FaBarcode style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Product Prep", desc: "Label, poly-bag, and package products to meet Walmart WFS receiving requirements" },
              { step: "03", icon: <FaTruck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Ship to WFS", desc: "Create inbound shipments and ship inventory to Walmart fulfillment centers" },
              { step: "04", icon: <FaBoxOpen style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Walmart Fulfills", desc: "Walmart stores, picks, packs, and ships orders with 2-day delivery to customers" },
              { step: "05", icon: <FaMoneyBillWave style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Get Paid", desc: "Receive payouts from Walmart while we manage inventory replenishment and optimization" },
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

      {/* ── MANAGEMENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
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
                  Our WFS Management Covers
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Product prep, labeling & packaging",
                    "Inbound shipment creation & tracking",
                    "Inventory replenishment automation",
                    "Listing optimization & enhanced content",
                    "Storage fee optimization",
                    "Carrier coordination & logistics",
                    "Account health monitoring",
                    "Performance reporting & analytics",
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
                Complete WFS Inventory Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Managing WFS inventory requires precision and constant attention.
                Our team monitors stock levels in real-time, creates optimized
                replenishment plans, and ensures your products never go out of
                stock at Walmart&apos;s fulfillment centers.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We handle every aspect of WFS operations including inbound
                shipment creation, carrier coordination, product prep compliance,
                listing optimization with enhanced content, and ongoing
                performance monitoring to maintain your account health.
              </p>
              <p className="typo-body">
                Our service is fully transparent with no hidden fees. You
                maintain complete control of your Walmart seller account while we
                handle the day-to-day WFS operations that drive growth and
                profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Full-Service WFS Management</h2>
            <p className="typo-subtext">Every aspect of WFS handled by our specialist team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaBarcode />, title: "Product Prep & Labeling", desc: "Walmart barcode labeling, poly-bagging, bundling, and packaging that meets WFS receiving guidelines. Zero rejections, zero delays." },
              { icon: <FaTruck />, title: "Inbound Shipment Management", desc: "We create shipment plans, coordinate carriers, and track every shipment until it is received and checked in at Walmart warehouses." },
              { icon: <FaSyncAlt />, title: "Inventory Replenishment", desc: "Real-time inventory monitoring with automated replenishment triggers. Sales velocity forecasting ensures you never run out of stock." },
              { icon: <FaChartBar />, title: "Listing Optimization", desc: "SEO-optimized titles, descriptions, and keywords plus enhanced content. WFS badge + optimized listing = maximum conversions." },
              { icon: <FaWarehouse />, title: "Storage Fee Optimization", desc: "We optimize packaging dimensions to minimize WFS storage and fulfillment fees. Smart inventory planning avoids long-term storage charges." },
              { icon: <FaShieldAlt />, title: "Account Health Monitoring", desc: "Continuous monitoring of seller metrics, return rates, and compliance. Proactive issue resolution keeps your account in top standing." },
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
                <div style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "12px" }}>{item.icon}</div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Self-Managing vs Other Agencies</h2>
            <p className="typo-subtext">WFS requires precision. See who handles it best.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", minWidth: "600px" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>Self-Managing</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>Other Agencies</div>

              {comparisonData.map((row) => (
                <React.Fragment key={row.feature}>
                  <div style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f5f5f5" }}>{row.feature}</div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5", backgroundColor: "rgba(22,163,74,0.03)" }}>
                    {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.self === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.self}</span>}
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
            <span className="typo-label">THE WFS ADVANTAGE</span>
            <h2 className="typo-h2">Why WFS With EcomGarden Wins</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "2-Day Delivery Badge", desc: "WFS products earn Walmart's 2-day delivery badge, dramatically increasing click-through and conversion rates." },
              { step: "02", title: "Higher Search Rankings", desc: "Walmart prioritizes WFS listings in search results. More visibility means more sales without extra ad spend." },
              { step: "03", title: "Walmart+ Eligibility", desc: "WFS products qualify for Walmart+ free shipping, giving you access to millions of premium shoppers." },
              { step: "04", title: "Hassle-Free Returns", desc: "Walmart handles all returns and customer service for WFS orders. You focus on sourcing and scaling." },
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

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Benefits Section */}
      <ServiceBenefits />

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

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
