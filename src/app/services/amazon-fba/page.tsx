"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Data-driven product validation", us: true, diy: "Guesswork", others: "Basic tools" },
  { feature: "Daily PPC bid optimization", us: true, diy: "Weekly if lucky", others: "Automated only" },
  { feature: "A+ Content & listing optimization", us: true, diy: "You write it", others: "Template-based" },
  { feature: "Inventory forecasting & reorder alerts", us: true, diy: false, others: false },
  { feature: "Brand Registry setup & protection", us: true, diy: "You figure out", others: "Not included" },
  { feature: "Supplier sourcing & negotiation", us: true, diy: "You do it", others: "Referrals only" },
  { feature: "Account health monitoring 24/7", us: true, diy: "You check daily", others: "Monthly report" },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Product Research", desc: "Deep market analysis using Helium 10, Jungle Scout, and proprietary data. Demand, competition, margins — every product validated before you invest a dollar." },
  { img: "/images/services/icons/marketing.png", title: "PPC Management", desc: "Sponsored Products, Brands, and Display — managed daily. Bid optimization, keyword discovery, negative pruning. We drive traffic, you collect profit." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Listing Optimization", desc: "Keyword-rich titles, compelling bullets, backend search terms, and conversion-focused copy. Continuously tested and improved." },
  { img: "/images/services/icons/return-handling.png", title: "A+ Content", desc: "Enhanced Brand Content that converts browsers into buyers. Professional layouts, comparison charts, and brand storytelling that boost conversion rates 5-10%." },
  { img: "/images/services/icons/inventory.png", title: "Inventory Planning", desc: "Demand forecasting, reorder calculations, lead time tracking. Never run out of stock or tie up cash in excess inventory. We plan around seasonality." },
  { img: "/images/services/icons/safety.png", title: "Brand Registry", desc: "Full Brand Registry setup, IP protection, and access to exclusive tools — A+ Content, Sponsored Brands, Brand Analytics. Your brand, protected." },
  { img: "/images/services/icons/account-health.png", title: "Account Health", desc: "Performance metrics, policy compliance, IP complaint prevention — all monitored proactively. Problems caught and fixed before they become suspensions." },
  { img: "/images/services/icons/scalability.png", title: "Growth Strategy", desc: "Product line expansion, new marketplace launches, and long-term brand positioning. We build you a business asset worth selling." },
];

const faqs = [
  {
    question: "What is Amazon FBA and how does it work?",
    answer: "FBA stands for Fulfilled by Amazon. You send products to Amazon warehouses, and Amazon handles storage, packing, shipping, customer service, and returns. Your products get Prime eligibility and Amazon handles the logistics — you focus on product selection and brand growth.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "A strong starting budget is $10,000-$15,000 covering initial inventory, product photography, listing optimization, and PPC advertising. You can start with $5,000 but growth will be slower. The key is having enough runway to iterate — your first product teaches you, your second product pays you.",
  },
  {
    question: "How long until I see profit?",
    answer: "Most FBA businesses see consistent profit within 3-6 months. The first 1-2 months cover product research, sourcing, and launch. Once listings are optimized and PPC campaigns are dialed in, revenue builds steadily. Our clients typically break even by month 2-3 and profit from month 4.",
  },
  {
    question: "Do you help with private label product development?",
    answer: "Yes, end-to-end. Market research, competitor analysis, supplier sourcing from verified manufacturers, sample evaluation, packaging design, and Brand Registry. We guide you through building a real brand on Amazon — not just listing random products.",
  },
  {
    question: "How do you manage PPC advertising?",
    answer: "Daily — not weekly. We create and optimize Sponsored Products, Sponsored Brands, and Sponsored Display campaigns. Our team monitors ACoS at the SKU level, adjusts bids, discovers high-converting keywords, prunes waste, and runs A/B tests. Most agencies check PPC once a week. We check it every day.",
  },
  {
    question: "What happens if inventory runs out?",
    answer: "Stockouts destroy your ranking and waste PPC spend rebuilding momentum. Our inventory system tracks sales velocity, lead times, and seasonal patterns to calculate exact reorder dates. We send alerts weeks before you run low — stockouts do not happen on our watch.",
  },
  {
    question: "What if my product does not sell well?",
    answer: "We validate thoroughly before launch, but markets shift. If a product underperforms, we analyze the data, optimize listing copy, adjust PPC strategy, and pivot pricing. If needed, we liquidate strategically and redirect capital to stronger opportunities.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in periods. Our retention rate is over 90% because the results speak for themselves — but you are free to leave whenever you choose. Zero exit fees, zero hassle.",
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
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON FBA MANAGEMENT</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Build a Real Amazon Brand. <span style={{ color: "var(--color-primary)" }}>We Run the Entire Operation.</span>
              </h1>
              <p className="typo-body" style={{ marginBottom: "16px", fontSize: "17px" }}>
                Product research, supplier sourcing, listing creation, PPC campaigns, inventory planning, Brand Registry — all handled by our team. You own the brand. We grow it.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: "20px" }}>
                {[
                  "Data-driven research",
                  "Daily PPC optimization",
                  "A+ Content included",
                  "Brand Registry setup",
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
                $10M+ revenue managed across 50+ brands. Your brand could be next.
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
                  Launch Your Brand — Free Consultation
                </a>
                <Link href="/pricing" className="btn-outline">
                  See Pricing
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/svg/dropshipping_hero_v4.svg"
                alt="Amazon FBA Services"
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
            <p className="typo-subtext">FBA is the most powerful business model on Amazon — but most sellers fail because they lack expertise. Here&apos;s how we fix that.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "Picked the wrong product and lost $5K?",
                solution: "Every product goes through our validation framework — demand analysis, competition depth, margin calculation, supplier reliability. We don't launch losers.",
              },
              {
                problem: "PPC eating your profits alive?",
                solution: "Our PPC team optimizes bids daily — not weekly. Keyword discovery, negative pruning, ACoS tracking at SKU level. Average 20-25% ACoS across our portfolio.",
              },
              {
                problem: "Page 5 listing nobody can find?",
                solution: "Keyword-rich titles, compelling bullets, A+ Content, and backend search terms — all optimized for both Amazon algorithm and human buyers. Rankings climb within weeks.",
              },
              {
                problem: "Ran out of stock and lost all momentum?",
                solution: "Our inventory system tracks velocity, lead times, and seasonality. Reorder alerts fire weeks early. Stockouts don't happen on our watch.",
              },
              {
                problem: "Brand Registry feels impossible?",
                solution: "We handle the entire Brand Registry process — trademark guidance, application, verification, and setup of A+ Content, Sponsored Brands, and Brand Analytics.",
              },
              {
                problem: "Account health dashboard is all red?",
                solution: "Proactive monitoring catches problems before they become suspensions. Policy compliance, performance metrics, IP complaints — all handled before Amazon notices.",
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
            <h2 className="typo-h2">How You Build a Profitable FBA Brand With Us</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              Source product at $8. Sell on Amazon for $25. Amazon fees + FBA = $9. <strong>Your profit: $8 per unit</strong>. Sell 80 units/day = <strong>$19,200/month</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Research & Validate", desc: "Deep market analysis finds products with strong demand, low competition, and healthy margins. Every product validated before you invest." },
              { img: "/images/process/get-access.png", title: "Source & Launch", desc: "Verified suppliers, negotiated pricing, optimized listings, professional photography. Your product goes live ready to convert." },
              { img: "/images/process/planning.png", title: "Optimize & Rank", desc: "PPC campaigns drive traffic. A+ Content converts visitors. SEO pushes organic rankings. Your listing climbs page by page." },
              { img: "/images/process/growth.png", title: "Scale & Dominate", desc: "Expand product line, enter new categories, launch on international marketplaces. Build a brand asset worth real money." },
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
            <p className="typo-subtext">From product research to brand scaling — your entire FBA business, managed daily by our team.</p>
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
            Profit sharing model — zero management fees until your FBA brand is profitable. We invest our time and expertise upfront. You pay from results.
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
            <h2 className="typo-h2">Why Smart Sellers Choose Expert Management Over DIY</h2>
            <p className="typo-subtext">FBA looks simple. Then you realize product research, PPC, inventory, listings, and account health is 5 full-time jobs. We do all 5.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Self-Managing</th>
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
