"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaChartLine, FaBoxes, FaShoppingCart, FaTags, FaCogs, FaHeadset } from "react-icons/fa";
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

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Sell Items",
    description: "List catalog on Walmart and start selling items",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Buy Items",
    description:
      "Purchase items from supplier thats customer ordered and shipping to warehouse",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Shipping",
    description:
      "Warehouse will remove supplier branding and repackaging Walmart branding and ship to customer",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer will receive Walmart branded parcel and Walmart invoice. Happy with their order",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Get Payout",
    description:
      "Walmart sends payout every 14 days of order delivery. Get funds directly in your bank account",
  },
];

export default function WalmartManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART MANAGEMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Complete Walmart Store Management &mdash; From Listings to Profits
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            We&apos;ve managed <strong>200+ Walmart stores</strong> with an average 30-40% profit margin using our proven 2-step dropshipping system.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Profit within the first week. 100% money-back guarantee if we don&apos;t deliver.
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
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="Walmart 2 Step Dropshipping"
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
            <h2 className="typo-h2">How 2 Step Dropshipping Works</h2>
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
                alt="Manage Walmart Seller Account With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
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
              { icon: <FaChartLine />, title: "Winning Product Research", desc: "Data-driven product selection focusing on high-demand, high-margin items. We analyze competition, sales velocity, and profitability before listing anything." },
              { icon: <FaTags />, title: "Listing & SEO Optimization", desc: "Optimized titles, descriptions, and keywords that rank higher in Walmart search. Enhanced content and competitive pricing to win the Buy Box." },
              { icon: <FaShoppingCart />, title: "Order & Purchase Management", desc: "Automated order processing with same-day purchase from source retailers. Zero missed orders, zero late shipments, 100% accuracy guaranteed." },
              { icon: <FaBoxes />, title: "Warehouse & Shipping", desc: "Full warehouse coordination for Walmart-compliant repackaging. Products arrive in Walmart branding with proper invoicing and tracking." },
              { icon: <FaCogs />, title: "Returns & Customer Support", desc: "We handle all customer inquiries, returns, and refund requests. Maintaining your seller metrics and account health is our top priority." },
              { icon: <FaHeadset />, title: "24/7 Dedicated VA Support", desc: "Your own dedicated virtual assistant available around the clock. Direct WhatsApp access for real-time updates and questions about your store." },
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
