"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaBoxes, FaHandshake, FaChartLine, FaShieldAlt, FaTags, FaWarehouse } from "react-icons/fa";
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
  { icon: <FaHandshake />, title: "Brand Approval Process", desc: "We contact brands and distributors on your behalf, handle all paperwork, and secure official authorization letters so you can sell without IP complaints." },
  { icon: <FaTags />, title: "Supplier Negotiations", desc: "Our team negotiates wholesale pricing, minimum order quantities, and payment terms with authorized distributors to maximize your profit margins." },
  { icon: <FaWarehouse />, title: "FBA Prep & Shipment", desc: "Complete FBA preparation including labeling, poly-bagging, bundling, and shipment plan creation. Products arrive at Amazon ready to sell." },
  { icon: <FaBoxes />, title: "Inventory Management", desc: "Real-time stock tracking, reorder point alerts, and demand forecasting so you never run out of your best sellers or overstock slow movers." },
  { icon: <FaChartLine />, title: "Dynamic Repricing", desc: "Automated repricing tools monitor competitor prices 24/7 and adjust your prices to win the Buy Box while maintaining target profit margins." },
  { icon: <FaShieldAlt />, title: "Account Health Protection", desc: "Proactive monitoring of performance metrics, policy compliance, and IP complaint prevention. We keep your account in excellent standing." },
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

const processSteps = [
  {
    img: "/images/services/process/buy-items.png",
    title: "Buy Inventory",
    description:
      "Purchase inventory from official brand or distributor and send to FBA or 3rd party warehouse",
  },
  {
    img: "/images/services/process/sell-items.png",
    title: "Sell Items",
    description: "List inventory on Amazon and start selling inventory",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Shipping",
    description:
      "Your warehouse or FBA will process the product and shipping to customer",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer will receive product from you. Happy with their order",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Get Payout",
    description:
      "Amazon sends payout every 14 days of order delivery. Get funds directly in your bank account",
  },
];

export default function AmazonWholesalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON WHOLESALE</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Build a Scalable Amazon Business With Authorized Wholesale Products
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Authentic branded products from official distributors. <strong>100% suspension risk-free</strong> with 30-40% profit margins.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Brand approvals, supplier sourcing, FBA prep, repricing — all handled by our team.
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
              <img
                src="/images/services/hero/wholesale-hero.jpg"
                alt="Build Your Dream with Amazon Wholesale"
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
            <h2 className="typo-h2">How Amazon Wholesale Works</h2>
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
                alt="Manage Amazon Seller Account With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
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
