"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaHandshake, FaFileInvoice, FaBoxes, FaDollarSign, FaSearchDollar, FaClipboardCheck } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Verified supplier sourcing", us: true, self: "You find suppliers", others: "Limited database" },
  { feature: "Brand approval handling", us: true, self: "You negotiate", others: "Extra fee" },
  { feature: "Wholesale pricing negotiation", us: true, self: "No leverage", others: "Basic" },
  { feature: "Invoice & documentation management", us: true, self: "You manage", others: "Partial" },
  { feature: "Bulk inventory forecasting", us: true, self: false, others: false },
  { feature: "Competitive repricing tools", us: true, self: false, others: "Extra fee" },
  { feature: "Buy Box optimization", us: true, self: false, others: "Basic" },
  { feature: "Multi-supplier coordination", us: true, self: "Overwhelming", others: "Extra fee" },
  { feature: "Account health monitoring", us: true, self: "You monitor", others: "Basic" },
  { feature: "Average profit margin", us: "15-35%", self: "5-15%", others: "10-20%" },
];

const faqs = [
  {
    question: "What is Walmart wholesale selling?",
    answer:
      "Walmart wholesale selling involves purchasing products in bulk directly from authorized distributors or brand manufacturers at wholesale prices and reselling them on Walmart's marketplace at retail prices. This model offers higher profit margins and consistent supply compared to retail arbitrage.",
  },
  {
    question: "How do you source wholesale products for Walmart?",
    answer:
      "We source products from authorized distributors, brand manufacturers, and verified wholesale suppliers. Our team negotiates pricing, verifies authenticity, and ensures all products come with proper invoices and documentation required by Walmart.",
  },
  {
    question: "Do I need brand approval to sell wholesale on Walmart?",
    answer:
      "Yes, many brands require approval before you can list their products on Walmart. Our team handles the entire brand approval process including preparing applications, submitting invoices, and following up with brand representatives to secure authorization.",
  },
  {
    question: "How much investment is needed for wholesale on Walmart?",
    answer:
      "The initial investment varies based on your goals, but we recommend starting with $5,000-$10,000 for inventory. Wholesale requires purchasing products in bulk upfront, but the higher margins and consistent supply make it a highly profitable model.",
  },
  {
    question: "What profit margins can I expect with wholesale?",
    answer:
      "Average profit margins for wholesale on Walmart range from 15-35% after all fees and costs. Our team focuses on finding products with strong demand and healthy margins, ensuring your investment generates consistent returns.",
  },
  {
    question: "How do you handle pricing optimization?",
    answer:
      "We use advanced repricing tools and market analysis to keep your products competitively priced. Our team monitors competitor pricing daily, adjusts prices to win the Buy Box, and ensures your margins stay within profitable ranges.",
  },
  {
    question: "Can you manage inventory for multiple wholesale suppliers?",
    answer:
      "Yes, we manage relationships with multiple wholesale suppliers simultaneously. Our inventory management system tracks stock levels across all suppliers, automates reorder points, and ensures you never run out of your best-selling products.",
  },
  {
    question: "What if a product doesn't sell well?",
    answer:
      "Before purchasing any wholesale inventory, our team conducts thorough product research including demand analysis, competition assessment, and profitability calculations. If a product underperforms, we adjust pricing, optimize listings, or pivot to better-performing alternatives.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Product Research",
    description: "Identify high-demand, profitable wholesale products with strong sales potential on Walmart",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Brand Approval",
    description:
      "Secure brand authorizations and establish relationships with authorized distributors",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Bulk Purchase",
    description:
      "Purchase inventory in bulk at wholesale pricing and coordinate shipping to your warehouse or WFS",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "List & Optimize",
    description:
      "Create optimized listings with SEO keywords, competitive pricing, and enhanced content",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Scale & Profit",
    description:
      "Monitor performance, replenish inventory, and scale winning products for maximum profitability",
  },
];

export default function WalmartWholesalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART WHOLESALE</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Walmart Wholesale Management &mdash; Higher Margins, Consistent Supply
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Wholesale sellers earn <strong>15-35% profit margins</strong> with authentic products, brand approvals, and predictable inventory costs.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            We handle supplier sourcing, brand approvals &amp; inventory management. You collect profits.
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
              { icon: <FaHandshake />, text: "50+ Verified Suppliers" },
              { icon: <FaDollarSign />, text: "15-35% Profit Margins" },
              { icon: <FaFileInvoice />, text: "100% Authentic Invoices" },
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
                Wholesale selling on Walmart is one of the most reliable and
                scalable e-commerce business models. By purchasing products in
                bulk from authorized distributors and brand manufacturers, you
                secure lower costs and higher profit margins compared to retail
                arbitrage or dropshipping.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our Walmart wholesale management service covers the entire
                process from product research and brand approvals to inventory
                management and listing optimization. We work with verified
                suppliers to ensure product authenticity and competitive pricing.
              </p>
              <p className="typo-body">
                For example, purchasing a product wholesale at $8 per unit and
                selling it on Walmart for $22 gives you a $14 gross margin.
                After Walmart fees and shipping, you keep $7-9 in profit per
                unit. With products selling 20-50 units daily, the numbers add
                up quickly to substantial monthly revenue.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="Walmart Wholesale Management Services"
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
            <h2 className="typo-h2">How Walmart Wholesale Works</h2>
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

      {/* ── MANAGEMENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-secondary.jpg"
                alt="Wholesale Account Management With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
            </div>
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Wholesale Account Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, our wholesale management team handles everything
                from supplier negotiations and brand approvals to inventory
                forecasting and listing optimization. We build long-term
                relationships with distributors to secure the best wholesale
                pricing for your store.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our dedicated team manages product research, competitive
                analysis, pricing strategy, catalog management, order processing,
                customer support, and account health monitoring. We use
                data-driven tools to identify winning products and optimize your
                wholesale portfolio for maximum returns.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges. You
                maintain full control of your Walmart seller account and
                supplier relationships. Cancel anytime with no long-term
                contracts or commitments.
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
            <h2 className="typo-h2">Complete Wholesale Management</h2>
            <p className="typo-subtext">From supplier sourcing to profit optimization &mdash; we handle everything.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaSearchDollar />, title: "Product Research & Analysis", desc: "Deep market analysis to find wholesale products with strong demand, low competition, and healthy margins. Data-backed decisions, not guesswork." },
              { icon: <FaHandshake />, title: "Supplier Sourcing & Negotiation", desc: "We connect you with verified distributors and negotiate wholesale pricing. All suppliers provide authentic invoices and brand authorization." },
              { icon: <FaClipboardCheck />, title: "Brand Approval Management", desc: "We handle the entire brand approval process: applications, invoice submission, follow-ups, and authorization letters for restricted brands." },
              { icon: <FaBoxes />, title: "Bulk Inventory Management", desc: "Inventory forecasting, reorder point automation, and multi-supplier coordination. Never overstock or run out of your best sellers." },
              { icon: <FaDollarSign />, title: "Pricing & Repricing Strategy", desc: "Advanced repricing tools monitor competitors daily. We adjust prices to win the Buy Box while protecting your profit margins." },
              { icon: <FaFileInvoice />, title: "Compliance & Documentation", desc: "All invoices, brand authorization letters, and product documentation organized and ready for Walmart compliance reviews." },
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
            <p className="typo-subtext">Wholesale requires supplier relationships and expertise. Here&apos;s who delivers.</p>
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
            <span className="typo-label">THE WHOLESALE ADVANTAGE</span>
            <h2 className="typo-h2">Why Wholesale With EcomGarden Wins</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Verified Suppliers Only", desc: "We work with authorized distributors and manufacturers. Every product comes with authentic invoices, eliminating IP complaint risks." },
              { step: "02", title: "Brand Approvals Handled", desc: "Our team secures brand authorization for restricted categories. More approved brands means more products and more revenue." },
              { step: "03", title: "Scalable & Predictable", desc: "Unlike arbitrage, wholesale gives you consistent supply and predictable costs. Scale up winning products without sourcing headaches." },
              { step: "04", title: "Higher Margins, Lower Risk", desc: "Bulk pricing means better margins. Authentic products mean fewer returns and zero risk of counterfeit claims." },
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
