"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Brand approval handled for you", us: true, diy: false, others: "Limited brands" },
  { feature: "Supplier negotiation & bulk pricing", us: true, diy: "You negotiate", others: "Extra fee" },
  { feature: "FBA prep, labeling & shipment plans", us: true, diy: "You do it all", others: "Partial" },
  { feature: "Automated repricing & Buy Box strategy", us: true, diy: false, others: "Basic tools" },
  { feature: "Inventory forecasting & reorder alerts", us: true, diy: false, others: false },
  { feature: "Account health monitoring 24/7", us: true, diy: "You check daily", others: "Reactive" },
  { feature: "Multi-brand portfolio management", us: true, diy: "Overwhelming", others: "Max 5 brands" },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/personal-manager.png", title: "Brand Approval", desc: "We contact brands and distributors, handle all paperwork, and secure official authorization letters. Gated and restricted brands included." },
  { img: "/images/services/icons/calculation.png", title: "Supplier Negotiation", desc: "Bulk pricing, MOQ negotiation, and payment terms with authorized distributors. We squeeze every point of margin for you." },
  { img: "/images/services/icons/order-fulfillment.png", title: "FBA Prep & Shipping", desc: "Labeling, poly-bagging, bundling, and shipment plan creation. Products arrive at Amazon warehouse ready to sell." },
  { img: "/images/services/icons/inventory.png", title: "Inventory Management", desc: "Real-time stock tracking, reorder alerts, and demand forecasting. Never run out of bestsellers or overstock dead weight." },
  { img: "/images/services/icons/marketing.png", title: "Dynamic Repricing", desc: "24/7 automated repricing monitors competitors and adjusts prices to win Buy Box while maintaining your target profit margins." },
  { img: "/images/services/icons/account-health.png", title: "Account Health", desc: "Proactive monitoring of performance metrics, policy compliance, and IP complaint prevention. Your account stays in excellent standing." },
  { img: "/images/services/icons/customer-support.png", title: "Customer Support", desc: "Every buyer message answered within 4 hours. Returns processed, A-to-Z claims handled, feedback managed. Zero headaches." },
  { img: "/images/services/icons/scalability.png", title: "Growth Strategy", desc: "Started with 5 brands? We scale to 50+. New categories, higher volume, better supplier terms. Your wholesale empire, built." },
];

const faqs = [
  {
    question: "Is Amazon wholesale a safe business model?",
    answer: "Yes, 100% safe. We get official brand approval before purchasing any inventory. Products come from authorized distributors with proper documentation. This means zero IP complaints, zero inauthentic claims, and zero suspension risk. It is the safest model on Amazon.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "Minimum $5,000 to start, though $15,000-$20,000 is ideal for meaningful returns. Wholesale requires purchasing inventory upfront, but the margins are strong — 30-40% ROI after all expenses. The more capital you deploy, the faster you scale.",
  },
  {
    question: "What ROI can I realistically expect?",
    answer: "Our average ROI is 35% after ALL expenses — Amazon fees, product cost, FBA fees, shipping, prep, everything. On a $10,000 inventory investment, that is $3,500 profit per cycle. We only source products that meet our minimum margin threshold before purchasing.",
  },
  {
    question: "How do you get brand approvals?",
    answer: "We have established relationships with hundreds of brands and authorized distributors. Our team handles all outreach, paperwork, and negotiations. We secure official authorization letters that protect your account from IP complaints — including gated and restricted brands most agencies cannot touch.",
  },
  {
    question: "Where do you source products from?",
    answer: "Directly from authorized distributors and brand-approved wholesalers in the US. Every product comes with proper invoices and documentation. We never source from unauthorized channels — your supply chain is clean and Amazon-compliant.",
  },
  {
    question: "Do you handle FBA prep and shipping?",
    answer: "Yes, everything. Labeling, poly-bagging, bundling, shipment plan creation, and freight coordination. Products arrive at Amazon fulfillment centers ready to sell. You never touch a box.",
  },
  {
    question: "What if a product is not profitable?",
    answer: "We validate every product before purchasing — landed cost, FBA fees, competition depth, Buy Box rotation, and sales velocity. If a product does not meet our margin threshold, it does not get ordered. If market conditions change, we adjust pricing or liquidate strategically.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in periods. Our retention rate is over 90% because the results speak for themselves — but you are free to leave whenever you choose. Zero exit fees, zero hassle.",
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
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON WHOLESALE</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Sell Authorized Brands on Amazon. <span style={{ color: "var(--color-primary)" }}>We Handle Everything.</span>
              </h1>
              <p className="typo-body" style={{ marginBottom: "16px", fontSize: "17px" }}>
                We secure brand approvals, source from authorized distributors, prep inventory for FBA, and manage your store daily. You invest. You profit. We do the work.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: "20px" }}>
                {[
                  "30-40% profit margins",
                  "Zero suspension risk",
                  "Brand approvals included",
                  "FBA prep handled",
                  "Pay from profits only",
                  "A-Z store management",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "12px", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#555" }}>{item}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "20px" }}>
                150+ wholesale clients scaled. 500+ brands approved. Your turn.
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
                  Start Earning — Free Consultation
                </a>
                <Link href="/pricing" className="btn-outline">
                  See Pricing
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/svg/wholesale.svg"
                alt="Amazon Wholesale Services"
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY THIS WORKS</span>
            <h2 className="typo-h2">Your Problems. Our Solutions.</h2>
            <p className="typo-subtext">Wholesale is lucrative — but the barriers are real. Here&apos;s how we remove every one of them so you can focus on growing your investment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "Can't get brand approvals?",
                solution: "We have relationships with 500+ brands and distributors. We handle all outreach, paperwork, and negotiations — including gated brands others can't touch.",
              },
              {
                problem: "Distributors won't talk to small sellers?",
                solution: "Our purchasing volume gives you leverage you don't have alone. Better pricing, lower MOQs, and payment terms that protect your cash flow.",
              },
              {
                problem: "$20K+ capital tied up in inventory?",
                solution: "We validate every SKU before you spend a dollar. Demand analysis, margin calculation, competition depth — no dead stock surprises.",
              },
              {
                problem: "FBA prep is a full-time nightmare?",
                solution: "Labeling, poly-bagging, bundling, shipment plans — all handled. Products arrive at Amazon ready to sell. You never touch a box.",
              },
              {
                problem: "Losing the Buy Box to 15 other sellers?",
                solution: "Our repricing runs 24/7. We win the Buy Box while maintaining your margins. Smart pricing, not a race to the bottom.",
              },
              {
                problem: "Managing 20 brands feels impossible?",
                solution: "We track every brand, every SKU, every reorder point. Portfolio management at scale — so you can add brands without adding chaos.",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="card-hover"
                style={{
                  borderRadius: "10px",
                  padding: "22px",
                  backgroundColor: "#f6f7f9",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px", lineHeight: 1.4 }}>
                  <span style={{ color: "#dc2626" }}>✗</span>{" "}{item.problem}
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-text-light)", margin: 0, lineHeight: 1.6, paddingLeft: "2px", borderLeft: "3px solid var(--color-primary)" }}>
                  <span style={{ display: "block", paddingLeft: "12px" }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>→</span>{" "}{item.solution}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">How You Build a Wholesale Empire With Us</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              Buy from authorized distributor at $15. Sell on Amazon for $30. Amazon fees + FBA = $8. <strong>Your profit: $7 per unit</strong>. Sell 100 units/day = <strong>$21,000/month</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Research & Approve", desc: "We identify profitable brands, contact distributors, and secure official authorization letters for your account." },
              { img: "/images/process/get-access.png", title: "Source & Order", desc: "Negotiate bulk pricing, place orders from authorized distributors, and coordinate shipping to FBA warehouses." },
              { img: "/images/process/planning.png", title: "Prep & Launch", desc: "FBA prep, labeling, shipment plans created. Products go live with optimized listings and competitive pricing." },
              { img: "/images/process/growth.png", title: "Scale & Profit", desc: "Repricing wins Buy Box. PPC drives traffic. Inventory auto-reorders. We add more brands. You collect profit." },
            ].map((item, index) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <div style={{ position: "relative" }}>
                    <img src={item.img} alt={item.title} style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                    <div style={{
                      position: "absolute", top: "-4px", right: "-4px",
                      width: "22px", height: "22px", borderRadius: "50%",
                      backgroundColor: "var(--color-primary)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700,
                    }}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FULL SERVICE</span>
            <h2 className="typo-h2">Everything We Handle. Everything You Don&apos;t.</h2>
            <p className="typo-subtext">From brand approvals to customer support — your entire wholesale operation, managed daily by our team.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <img src={item.img} alt={item.title} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFIT SHARING BANNER ── */}
      <section style={{ padding: "45px 0", backgroundColor: "var(--color-dark)" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
            We Don&apos;t Get Paid Until <span style={{ color: "var(--color-primary)" }}>You Get Paid</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "550px", margin: "0 auto 20px" }}>
            Profit sharing model — zero management fees until your wholesale store is profitable. We have skin in the game. No other agency does this.
          </p>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-pulse"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <FaWhatsapp style={{ fontSize: "18px" }} />
            Start Risk-Free Today
          </a>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE HONEST COMPARISON</span>
            <h2 className="typo-h2">Why 150+ Wholesale Sellers Chose Us Over Going Solo</h2>
            <p className="typo-subtext">Wholesale is a capital-intensive business. One wrong brand, one bad supplier, one stockout — and you lose thousands. We prevent all of it.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Do It Yourself</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Other Agencies</th>
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
                      {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.diy}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.others === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.others}</span>}
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
            <span className="typo-label">GOT QUESTIONS?</span>
            <h2 className="typo-h2">Everything You Want to Know Before Starting</h2>
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
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "14px 18px", background: "none", border: "none",
                    cursor: "pointer", fontSize: "15px", fontWeight: 600,
                    color: "var(--color-dark)", textAlign: "left",
                  }}
                >
                  {faq.question}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden", transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
