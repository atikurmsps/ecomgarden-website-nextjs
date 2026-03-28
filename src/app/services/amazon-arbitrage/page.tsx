"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearch, FaListAlt, FaShoppingCart, FaUndoAlt, FaShieldAlt, FaRocket, FaTruck, FaSmile } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Profitable product sourcing done for you", us: true, diy: false, others: "Limited catalog" },
  { feature: "Listing optimization & SEO", us: true, diy: "You do it", others: "Basic" },
  { feature: "Order management & daily purchasing", us: true, diy: "You do it daily", others: "Partial" },
  { feature: "Returns handling & restocking", us: true, diy: "You handle", others: "Extra fee" },
  { feature: "Account safety & compliance", us: true, diy: "High risk", others: "Reactive" },
  { feature: "Warehouse coordination & reboxing", us: true, diy: "You manage", others: "Extra fee" },
  { feature: "Profit sharing model available", us: true, diy: "N/A", others: false },
  { feature: "Profit within first week", us: true, diy: "Uncertain", others: "2-4 weeks" },
  { feature: "24/7 dedicated support", us: true, diy: false, others: "Business hours" },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Product Sourcing & Research", desc: "Our research team finds high-demand, high-margin products daily from Walmart, Target, Costco, and other retailers. Every product is validated for profitability before listing." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Listing Optimization", desc: "Professional listing creation with keyword-optimized titles, bullet points, and competitive pricing. We monitor and adjust listings to maintain Buy Box share." },
  { img: "/images/services/icons/inventory.png", title: "Order Management", desc: "When customers order, our team purchases from the source, coordinates with the warehouse for reboxing, and ensures timely delivery — all within Amazon metrics." },
  { img: "/images/services/icons/return-handling.png", title: "Returns Handling", desc: "Complete return management including warehouse receiving, restocking sellable items, and processing refunds. Every return is tracked and accounted for in your P&L." },
  { img: "/images/services/icons/safety.png", title: "Account Safety", desc: "We follow strict compliance protocols — proper reboxing with Amazon-branded packaging, no third-party invoices, and proactive IP complaint monitoring to keep your account safe." },
  { img: "/images/services/icons/scalability.png", title: "Scaling & Growth", desc: "Once your store is profitable, we scale by adding more SKUs, expanding to new categories, and optimizing pricing to increase daily order volume and profit." },
];

const faqs = [
  {
    question: "Does 2 Step Dropshipping Legal?",
    answer:
      "Yes, 2 step dropshipping is legal. You will never face any legal issue with 2 step dropshipping model.",
  },
  {
    question: "How Safe 2 Step Dropshipping Business?",
    answer:
      "Its 100% safe business model. Amazon required sending products with Amazon's branded packaging or white branding. As well, no 3rd party retailer invoice into the parcel. Our warehouse will remove the walmart invoice and repackaging products with Amazon branded box.",
  },
  {
    question:
      "Does 2 Step Dropshipping profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question:
      "Why I Need Investment Where Dropshipping Not Required any upfront?",
    answer:
      "Good question. Amazon will send you payout after 14 days of order delivery. So you need purchase products using your own funds. Then you will get payment from Amazon. So you need capital to purchase products when customer will order.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We use authentic products sources only and use sourcing where its cheapest. We use Walmart, Amazon Prime, Sams Club, Target, Home Depot, Costco Wholesale.",
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


export default function AmazonArbitragePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON ARBITRAGE</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Start Profiting From Amazon Within Your First Week
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                The most popular zero-inventory model. <strong>No upfront stock needed</strong> — only buy when customers order. Profit from day one with 30-40% margins.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                100% risk-free. Pay only once you see profit with our profit sharing model.
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
                  { icon: <FaRocket />, text: "Profit Within 7 Days" },
                  { icon: <FaShieldAlt />, text: "Zero Inventory Risk" },
                  { icon: <FaCheckCircle />, text: "35% Avg. ROI" },
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
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)" }}>ZERO RISK</span>
                </div>
                <FaRocket style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.9 }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  Profit in 7 Days
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  No inventory needed. Buy only when customers order.
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "35%", label: "Avg ROI" },
                    { val: "$0", label: "Upfront Stock" },
                    { val: "24/7", label: "Support" },
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
                Amazon Arbitrage, also known as 2-step dropshipping, is the most popular business model. No upfront inventory is required — you only purchase items when a customer places an order. On average, a store starts generating profit within a week with zero risk.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Here&apos;s how the math works: We sell an item on Amazon for $40, purchase from Walmart for $20, and deliver to the warehouse for reboxing. The warehouse ships to the customer for $10. Final profit: $10 per unit. If that product sells 50 units daily, that&apos;s $500 profit per day — $15,000 per month.
              </p>
              <p className="typo-body">
                If you are looking for quick growth on eCommerce with minimal risk, 2-step dropshipping is the perfect fit.
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
                    "No upfront inventory required",
                    "Profit within the first week",
                    "30-40% average profit margins",
                    "Zero inventory risk",
                    "Profit sharing model available",
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
            <span className="typo-label">HOW IT WORKS</span>
            <h2 className="typo-h2">How 2 Step Dropshipping Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaListAlt style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Sell Items", desc: "List catalog on Amazon and start selling items" },
              { step: "02", icon: <FaShoppingCart style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Buy Items", desc: "Purchase items from Walmart thats customer ordered and shipping to warehouse" },
              { step: "03", icon: <FaTruck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Shipping", desc: "Warehouse will remove Walmart branding and repackaging Amazon branding and ship to customer" },
              { step: "04", icon: <FaSmile style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Happy Customer", desc: "Customer will receive Amazon branded parcel and Amazon invoice. Happy with their order" },
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
            <h2 className="typo-h2">Complete Arbitrage Management — You Do Nothing</h2>
            <p className="typo-subtext">Every daily task handled by our team so you can focus on what matters to you.</p>
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

      {/* ── PROFIT SHARING ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div
          className="container-main"
          style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}
        >
          <h2 className="typo-h2" style={{ marginBottom: "6px" }}>
            Start Your Unlimited Vacation. Because
          </h2>
          <p className="typo-h3" style={{ color: "var(--color-primary)", marginBottom: "20px" }}>
            We provide service with profit sharing model
          </p>
          <h3 className="typo-h2" style={{ marginBottom: "16px" }}>
            <span style={{ color: "var(--color-primary)" }}>100% Risk Free.</span>{" "}
            Pay only once you see profit.
          </h3>
          <p className="typo-body" style={{ marginBottom: "28px" }}>
            No one will offer profit sharing model and no payment before you get
            profit. Because everyone can not handle risk and recover the dark
            side of eCommerce. Our experienced and highly skilled team will
            start profit within a week.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
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
                  Our Management Covers
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Daily product sourcing & research",
                    "Order processing & purchasing",
                    "Warehouse coordination & reboxing",
                    "Listing optimization & SEO",
                    "Customer support & returns",
                    "Account health monitoring",
                    "Shipping tracking & management",
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
                At EcomGarden, you get complete account management. Our automation tools ensure 100% accuracy and zero inventory loss. Your dedicated Virtual Assistant provides 24/7 support, quick order responses, and customer inquiry handling.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our experienced team handles winning product research, product listing, SEO optimization, order management, purchase management, customer support, shipping, return handling, inventory management, PPC, and marketing.
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
            <p className="typo-subtext">Arbitrage requires daily attention. See why sellers trust us over doing it alone.</p>
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
            <h2 className="typo-h2">Why Arbitrage Sellers Choose EcomGarden</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { title: "Profit Sharing = Zero Risk For You", desc: "We are one of the only agencies offering a profit sharing model. You pay nothing until you see profit. If we don't make you money, you owe us nothing. That's how confident we are." },
              { title: "Daily Product Sourcing Machine", desc: "Our research team sources profitable products every single day from Walmart, Target, Costco, Sam's Club, and Home Depot. We validate margins before listing, not after." },
              { title: "Bulletproof Account Safety", desc: "Amazon's policies around arbitrage are strict. We use proper reboxing with Amazon-branded packaging, remove all third-party invoices, and proactively monitor for IP complaints before they escalate." },
              { title: "We Handle The Daily Grind", desc: "Arbitrage requires daily purchasing, tracking, and coordination. Most sellers burn out doing it themselves. Our team handles every order, every day — weekends and holidays included." },
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
