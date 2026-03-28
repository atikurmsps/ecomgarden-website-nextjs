"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaBoxes, FaHandshake, FaChartLine, FaShieldAlt, FaTags, FaWarehouse, FaShoppingCart, FaTruck, FaSmile, FaMoneyBillWave } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Brand approval handled for you", us: true, diy: false, others: "Limited" },
  { feature: "Supplier negotiation & pricing", us: true, diy: "You do it", others: "Extra fee" },
  { feature: "FBA prep & shipment planning", us: true, diy: "You do it", others: "Partial" },
  { feature: "Automated repricing strategy", us: true, diy: false, others: "Basic" },
  { feature: "Inventory forecasting & reorder alerts", us: true, diy: false, others: false },
  { feature: "Account health monitoring", us: true, diy: "You do it", others: "Reactive" },
  { feature: "Dedicated wholesale VA", us: true, diy: false, others: "Shared team" },
  { feature: "Profit sharing model available", us: true, diy: "N/A", others: false },
  { feature: "Transparent reporting", us: true, diy: "You track", others: "Monthly only" },
];

const whatYouGet = [
  { img: "/images/services/icons/personal-manager.png", title: "Brand Approval Process", desc: "We contact brands and distributors on your behalf, handle all paperwork, and secure official authorization letters so you can sell without IP complaints." },
  { img: "/images/services/icons/calculation.png", title: "Supplier Negotiations", desc: "Our team negotiates wholesale pricing, minimum order quantities, and payment terms with authorized distributors to maximize your profit margins." },
  { img: "/images/services/icons/order-fulfillment.png", title: "FBA Prep & Shipment", desc: "Complete FBA preparation including labeling, poly-bagging, bundling, and shipment plan creation. Products arrive at Amazon ready to sell." },
  { img: "/images/services/icons/inventory.png", title: "Inventory Management", desc: "Real-time stock tracking, reorder point alerts, and demand forecasting so you never run out of your best sellers or overstock slow movers." },
  { img: "/images/services/icons/marketing.png", title: "Dynamic Repricing", desc: "Automated repricing tools monitor competitor prices 24/7 and adjust your prices to win the Buy Box while maintaining target profit margins." },
  { img: "/images/services/icons/account-health.png", title: "Account Health Protection", desc: "Proactive monitoring of performance metrics, policy compliance, and IP complaint prevention. We keep your account in excellent standing." },
];

const faqs = [
  {
    question: "How Safe Amazon Wholesale Business?",
    answer:
      "Its 100% safe business model. We will get approval from brand first and then get inventory from official distributor.",
  },
  {
    question:
      "Does wholesale profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question: "How much inventory do i need to start?",
    answer:
      "Wholesale business required purchasing inventory before. Based on your budget, we will purchase SKU quantity. A average good budgets is $20k. For a minimum start, its required $5k.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We will get approval from brand first. Based on brand, we will get inventory from their authorised distributor.",
  },
  {
    question: "Will you guys manage my whole business?",
    answer:
      "Yes, We provide A-Z management including products research, sourcing, order management, shipping, return handling, customer support, promotion.",
  },
  {
    question: "What if I can not create any profit?",
    answer:
      "Our working method is 100% profit guarantee. You will get full refund of any charge with no question ask.",
  },
];


export default function AmazonWholesalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON WHOLESALE</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Build a Scalable Amazon Business With Authorized Wholesale Products
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                Authentic branded products from official distributors. <strong>100% suspension risk-free</strong> with 30-40% profit margins.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Brand approvals, supplier sourcing, FBA prep, repricing — all handled by our team.
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
                  { icon: <FaBoxes />, text: "35% Avg. ROI" },
                  { icon: <FaShieldAlt />, text: "Zero Suspension Risk" },
                  { icon: <FaHandshake />, text: "150+ Happy Clients" },
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
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)" }}>VERIFIED</span>
                </div>
                <FaHandshake style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.9 }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  30-40% Profit Margins
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  Official brand approvals &amp; authorized distributors
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "150+", label: "Clients" },
                    { val: "35%", label: "Avg ROI" },
                    { val: "500+", label: "Brands" },
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
                Amazon Wholesale is a popular business model where you sell authentic branded products purchased directly from authorized distributors. Brand approval is required before purchasing inventory and listing on Amazon.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                After brand approval, sellers receive a wholesale account for official authenticated products with an approval letter. This model is 100% suspension risk-free and suitable for long-term operations with scalable growth.
              </p>
              <p className="typo-body">
                Our team handles the entire process — from finding profitable brands and securing approvals to managing inventory, repricing, and account health — so you can focus on growing your investment.
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
                    "100% authentic branded products",
                    "Official distributor authorization",
                    "30-40% average profit margins",
                    "Zero suspension risk with brand approvals",
                    "Scalable long-term business model",
                    "Complete A-Z account management",
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
            <h2 className="typo-h2">How Amazon Wholesale Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaShoppingCart style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Buy Inventory", desc: "Purchase inventory from official brand or distributor and send to FBA or 3rd party warehouse" },
              { step: "02", icon: <FaTags style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Sell Items", desc: "List inventory on Amazon and start selling inventory" },
              { step: "03", icon: <FaTruck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Shipping", desc: "Your warehouse or FBA will process the product and shipping to customer" },
              { step: "04", icon: <FaSmile style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Happy Customer", desc: "Customer will receive product from you. Happy with their order" },
              { step: "05", icon: <FaMoneyBillWave style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Get Payout", desc: "Amazon sends payout every 14 days of order delivery. Get funds directly in your bank account" },
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
            <h2 className="typo-h2">Complete Wholesale Management Under One Roof</h2>
            <p className="typo-subtext">Every aspect of your wholesale business handled by specialists — not generic VAs.</p>
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
                  Our Management Covers
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Winning product research & sourcing",
                    "Brand approvals & supplier negotiations",
                    "FBA prep, labeling & shipment planning",
                    "Listing optimization & SEO",
                    "Dynamic repricing & Buy Box strategy",
                    "Order management & customer support",
                    "Return handling & inventory tracking",
                    "PPC advertising & marketing",
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
                Manage Amazon Seller Account With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, you get complete wholesale account management. Our automation tools ensure 100% accuracy and zero inventory loss. Your dedicated manager provides ongoing support, quick responses, and proactive account monitoring.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our experienced wholesale specialists handle winning product research, brand approvals, product listing, SEO optimization, order management, purchase management, customer support, shipping, return handling, inventory management, PPC, and marketing.
              </p>
              <p className="typo-body">
                Our service is 100% transparent — no hidden charges, no hidden terms and conditions. Use our service as long as you want and cancel anytime.
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
            <h2 className="typo-h2">EcomGarden vs DIY vs Other Agencies</h2>
            <p className="typo-subtext">See why sellers choose us over managing wholesale themselves or hiring generic agencies.</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "32px auto 0", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>DIY</div>
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
            <h2 className="typo-h2">Why Wholesale Sellers Choose EcomGarden</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { title: "We Get Brand Approvals Others Can't", desc: "Our established relationships with distributors and proven approval process means we secure brand authorization faster — including restricted and gated brands that most agencies won't touch." },
              { title: "Profit-First Product Research", desc: "We don't just find products. We analyze landed cost, FBA fees, competition depth, Buy Box rotation, and sales velocity to ensure every SKU we source delivers 30-40% ROI after all expenses." },
              { title: "Real Wholesale Experience, Not Guesswork", desc: "Our team has managed over $10M in wholesale inventory across 15+ active stores. We know which distributors are reliable, which brands convert, and which categories to avoid." },
              { title: "Your Money Stays in Your Account", desc: "We never handle your funds. All purchases go through your accounts. Full transparency with real-time P&L tracking on every single SKU — no fake numbers, no hidden costs." },
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
