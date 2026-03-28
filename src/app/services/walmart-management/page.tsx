"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaChartLine, FaBoxes, FaShoppingCart, FaTags, FaCogs, FaHeadset, FaListAlt, FaTruck, FaSmile, FaMoneyBillWave } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Dedicated Walmart account manager", us: true, self: false, others: "Shared VA" },
  { feature: "Product research & winning items", us: true, self: "Trial & error", others: "Basic only" },
  { feature: "Buy Box winning strategies", us: true, self: false, others: false },
  { feature: "Listing SEO optimization", us: true, self: false, others: "Extra fee" },
  { feature: "Order & purchase automation", us: true, self: "Manual", others: "Partial" },
  { feature: "Warehouse coordination", us: true, self: "You manage", others: "Extra fee" },
  { feature: "Return & refund handling", us: true, self: "You handle", others: "Extra fee" },
  { feature: "Profit guarantee", us: true, self: false, others: false },
  { feature: "WhatsApp direct support", us: true, self: "N/A", others: "Email only" },
  { feature: "Average profit margin", us: "30-40%", self: "10-15%", others: "15-20%" },
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
      "Its 100% safe business model. Walmart required sending products with Walmart's branded packaging or white branding. As well, no 3rd party retailer invoice into the parcel. Our warehouse will remove the 3rd party invoice and repackaging products with Walmart branded box.",
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
      "Good question. Walmart will send you payout after 14 days of order delivery. So you need purchase products using your own funds. Then you will get payment from Walmart. So you need capital to purchase products when customer will order.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We use authentic products sources only and use sourcing where its cheapest. We use Amazon Prime, Sams Club, Target, Home Depot, Costco Wholesale.",
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


export default function WalmartManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART MANAGEMENT</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Complete Walmart Store Management &mdash; From Listings to Profits
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                We&apos;ve managed <strong>200+ Walmart stores</strong> with an average 30-40% profit margin using our proven 2-step dropshipping system.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Profit within the first week. 100% money-back guarantee if we don&apos;t deliver.
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
                  { icon: <FaChartLine />, text: "200+ Stores Managed" },
                  { icon: <FaBoxes />, text: "30-40% Avg. Profit Margin" },
                  { icon: <FaHeadset />, text: "24/7 Dedicated Support" },
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
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)" }}>A-Z MANAGED</span>
                </div>
                <FaCogs style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.9 }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  200+ Stores Managed
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  Complete store management with profit guarantee
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "35%", label: "Avg ROI" },
                    { val: "200+", label: "Stores" },
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
                Walmart 2-step dropshipping, is the most popular business
                model. In this model, no upfront inventory is required.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                The inventory is acquired only when a customer places an
                order. This is a zero-risk and quickly profitable business
                model. On average, a store starts generating a profit within a
                week.
              </p>
              <p className="typo-body">
                We purchase a product from supplier for $10 and sell it on
                Walmart for $30. However, there are $4 warehouse fees for
                re-boxing with Walmart branding and a $6 shipping charge. In
                the end, the profit margin is $10. Imagine if this product
                sells 30 units a day. OMG, it creates $300 in profit per day
                and $9,000 in profit in a month!
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
                    "200+ stores managed successfully",
                    "100% money-back profit guarantee",
                    "24/7 dedicated VA support",
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
            <h2 className="typo-h2">How 2 Step Dropshipping Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaListAlt style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Sell Items", desc: "List catalog on Walmart and start selling items" },
              { step: "02", icon: <FaShoppingCart style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Buy Items", desc: "Purchase items from supplier thats customer ordered and shipping to warehouse" },
              { step: "03", icon: <FaTruck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Shipping", desc: "Warehouse will remove supplier branding and repackaging Walmart branding and ship to customer" },
              { step: "04", icon: <FaSmile style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Happy Customer", desc: "Customer will receive Walmart branded parcel and Walmart invoice. Happy with their order" },
              { step: "05", icon: <FaMoneyBillWave style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Get Payout", desc: "Walmart sends payout every 14 days of order delivery. Get funds directly in your bank account" },
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
                  Our Management Covers
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Winning product research & sourcing",
                    "Listing creation & SEO optimization",
                    "Order management & daily purchasing",
                    "Warehouse coordination & reboxing",
                    "Customer support & returns handling",
                    "Shipping tracking & management",
                    "Account health monitoring",
                    "PPC advertising & promotions",
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
                Manage Walmart Seller Account With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, you will get complete service of fully account
                management. Our automation tools will ensure 100% accuracy and
                zero inventory loss. Our dedicated Virtual Assistant will
                provide you 24/7 support, quick order response, customers
                inquire.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Get experienced highly skilled Walmart 2 step dropshipping
                virtual assistant for your store and get cost-effective and
                seamless support and run your the business successfully. We
                provide complete solutions of store management including wining
                products research, products listing, SEO optimizations, order
                management, purchase management, customer support, shipping and
                return handling, inventory management, PPC and marketing.
              </p>
              <p className="typo-body">
                Our service is 100% transparent and we do not have any hidden
                charge and do not have any hidden terms &amp; conditions. Get
                our service until you want and cancel contract anytime.
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
            <h2 className="typo-h2">Complete Walmart Store Management</h2>
            <p className="typo-subtext">Everything handled by our expert team so you can focus on profits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/services/icons/product-research.png", title: "Winning Product Research", desc: "Data-driven product selection focusing on high-demand, high-margin items. We analyze competition, sales velocity, and profitability before listing anything." },
              { img: "/images/services/icons/marketing.png", title: "Listing & SEO Optimization", desc: "Optimized titles, descriptions, and keywords that rank higher in Walmart search. Enhanced content and competitive pricing to win the Buy Box." },
              { img: "/images/services/icons/order-fulfillment.png", title: "Order & Purchase Management", desc: "Automated order processing with same-day purchase from source retailers. Zero missed orders, zero late shipments, 100% accuracy guaranteed." },
              { img: "/images/services/icons/inventory.png", title: "Warehouse & Shipping", desc: "Full warehouse coordination for Walmart-compliant repackaging. Products arrive in Walmart branding with proper invoicing and tracking." },
              { img: "/images/services/icons/return-handling.png", title: "Returns & Customer Support", desc: "We handle all customer inquiries, returns, and refund requests. Maintaining your seller metrics and account health is our top priority." },
              { img: "/images/services/icons/customer-support.png", title: "24/7 Dedicated VA Support", desc: "Your own dedicated virtual assistant available around the clock. Direct WhatsApp access for real-time updates and questions about your store." },
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
                <img src={item.img} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "12px" }} />
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
            <p className="typo-subtext">See why 200+ sellers trust EcomGarden to manage their Walmart stores.</p>
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
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why Sellers Choose EcomGarden</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Profit Guarantee", desc: "100% money-back if we don't generate profit for your store. We put our money where our mouth is." },
              { step: "02", title: "Proven 30-40% ROI", desc: "Our product research team only picks winners. Average 35% profit margin after all expenses." },
              { step: "03", title: "Zero Hidden Fees", desc: "Transparent pricing, no lock-in contracts, no surprise charges. Cancel anytime with no penalty." },
              { step: "04", title: "A-Z Management", desc: "From product research to customer support, we handle everything. You just watch profits grow." },
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
