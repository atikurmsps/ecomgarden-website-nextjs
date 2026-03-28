"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaShieldAlt, FaWarehouse, FaShoppingCart, FaSearchDollar, FaExchangeAlt, FaHeadset } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Compliant 2-step warehouse routing", us: true, self: false, others: "Basic" },
  { feature: "Product research with profit validation", us: true, self: "Trial & error", others: "Generic lists" },
  { feature: "Walmart-branded repackaging", us: true, self: "You manage", others: "Extra fee" },
  { feature: "Source removal (invoices/branding)", us: true, self: "You handle", others: "Partial" },
  { feature: "Multi-source procurement", us: true, self: "Limited", others: "1-2 sources" },
  { feature: "Same-day order processing", us: true, self: "You process", others: "Next day" },
  { feature: "Return handling & coordination", us: true, self: "You handle", others: "Extra fee" },
  { feature: "Profit guarantee", us: true, self: false, others: false },
  { feature: "WhatsApp direct support", us: true, self: "N/A", others: "Email only" },
  { feature: "Average profit margin", us: "30-40%", self: "10-20%", others: "15-25%" },
];

const faqs = [
  {
    question: "What is 2 Step Walmart Dropshipping?",
    answer:
      "2 Step Walmart Dropshipping is a business model where you list products on Walmart, and when a customer orders, you purchase the item from a retailer (like Amazon, Target, or Costco) and have it shipped to a warehouse. The warehouse removes the original branding, repackages it with Walmart-branded packaging, and ships it to the customer.",
  },
  {
    question: "Is 2 Step Dropshipping legal on Walmart?",
    answer:
      "Yes, 2 step dropshipping is completely legal. The key difference from traditional dropshipping (which Walmart prohibits) is that products go through a warehouse for repackaging with Walmart branding. This ensures customers receive packages that meet Walmart's packaging requirements.",
  },
  {
    question: "How much investment do I need to start?",
    answer:
      "You can start with as little as $1,000-$3,000 in working capital. Since you only purchase products after a customer orders, there is no upfront inventory cost. The capital is needed to cover the gap between purchasing products and receiving Walmart payouts (which come 14 days after delivery).",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "Our average ROI is 35%. After all expenses including product cost, warehouse fees for repackaging, and shipping charges, you can expect 30-40% profit margin. We only select products with proven profit margins during our research process.",
  },
  {
    question: "Where do you source products from?",
    answer:
      "We source from authentic, reputable retailers including Amazon Prime, Sam's Club, Target, Home Depot, Costco Wholesale, and other authorized retailers. We always use legitimate sourcing channels to ensure product authenticity and quality.",
  },
  {
    question: "Why do I need a warehouse for dropshipping?",
    answer:
      "Walmart requires products to arrive in Walmart-branded packaging or white-label packaging with no third-party retailer invoices or branding. The warehouse removes the original packaging and invoices, then repackages items in Walmart-compliant boxes before shipping to customers.",
  },
  {
    question: "How quickly can I start making profit?",
    answer:
      "Most stores start generating profit within the first week of operation. Once products are listed and orders start coming in, the profit cycle begins immediately. Our team focuses on finding high-demand products with proven profit margins.",
  },
  {
    question: "What happens if I want to stop the business?",
    answer:
      "Since there is no upfront inventory, you can stop anytime with zero loss. There are no unsold products to worry about. Simply stop listing products and fulfill any remaining orders. Our management contract can be cancelled at any time.",
  },
  {
    question: "Will you manage my entire store?",
    answer:
      "Yes, we provide complete A-Z management including product research, listing creation, order management, purchasing, warehouse coordination, shipping, return handling, customer support, and promotional activities. You simply monitor profits.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "List Products",
    description: "Research and list profitable products on your Walmart seller account",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Customer Orders",
    description:
      "When a customer orders, purchase the product from a retail source at a lower price",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Ship to Warehouse",
    description:
      "Product ships to warehouse for repackaging with Walmart-branded packaging",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Deliver to Customer",
    description:
      "Warehouse ships the repackaged product directly to the customer with Walmart branding",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Collect Profit",
    description:
      "Walmart sends payout every 14 days after delivery. Profit goes directly to your bank",
  },
];

export default function WalmartDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART DROPSHIPPING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            2-Step Walmart Dropshipping &mdash; Zero Inventory, Maximum Profit
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Start with as little as <strong>$1,000</strong>. No upfront inventory. Our sellers average <strong>30-40% profit margins</strong> with compliant warehouse routing.
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
              { icon: <FaShieldAlt />, text: "100% Walmart Compliant" },
              { icon: <FaSearchDollar />, text: "30-40% Avg. Profit" },
              { icon: <FaWarehouse />, text: "Managed Warehouse Routing" },
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
                2 Step Walmart Dropshipping is the most popular and accessible
                e-commerce business model for Walmart sellers. Unlike traditional
                dropshipping, the 2-step method routes products through a
                warehouse for compliant repackaging before delivery to customers.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                The beauty of this model is that no upfront inventory is required.
                You only purchase products after a customer places an order on
                your Walmart store. This makes it a zero-risk business that
                generates profit from day one.
              </p>
              <p className="typo-body">
                Here&apos;s a real example: We purchase a product from Amazon for
                $10 and sell it on Walmart for $30. The warehouse charges $4 for
                repackaging with Walmart branding, and shipping costs $6. That
                leaves a $10 profit per unit. If this product sells 30 units per
                day, that&apos;s $300 in daily profit and $9,000 per month from just
                one product.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="2 Step Walmart Dropshipping"
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
                alt="Dropshipping Store Management With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
            </div>
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Complete Dropshipping Store Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, we provide complete A-Z management of your 2 Step
                Dropshipping business. Our automation tools ensure 100% accuracy
                in order processing, and our dedicated virtual assistant provides
                24/7 support for your store.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our team handles winning product research, listing creation, SEO
                optimization, order management, purchasing from source retailers,
                warehouse coordination, customer support, shipping tracking,
                return handling, and promotional campaigns to maximize your sales.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges or hidden
                terms and conditions. We offer a profit guarantee &mdash; if we
                cannot generate profit for your store, you receive a full refund
                of all management fees with no questions asked.
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
            <h2 className="typo-h2">Complete 2-Step Dropshipping Service</h2>
            <p className="typo-subtext">Every step of the dropshipping process managed by our expert team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaSearchDollar />, title: "Profit-Validated Product Research", desc: "We only list products with proven 30%+ margins after warehouse and shipping costs. Every item is profit-validated before listing." },
              { icon: <FaShoppingCart />, title: "Multi-Source Procurement", desc: "We source from Amazon Prime, Sam's Club, Target, Home Depot, and Costco. Multiple sources means better pricing and availability." },
              { icon: <FaWarehouse />, title: "Compliant Warehouse Routing", desc: "Products routed through our warehouse for Walmart-branded repackaging. All source invoices and branding removed for full compliance." },
              { icon: <FaExchangeAlt />, title: "Same-Day Order Processing", desc: "Orders processed and purchased the same day they come in. No delays, no late shipments, no account health issues." },
              { icon: <FaShieldAlt />, title: "Return & Refund Management", desc: "We handle all customer returns, refunds, and disputes. Our team manages the full reverse logistics process seamlessly." },
              { icon: <FaHeadset />, title: "24/7 Dedicated Support", desc: "Your own virtual assistant available around the clock via WhatsApp. Real-time order updates and profit reports at your fingertips." },
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
            <p className="typo-subtext">2-step dropshipping requires compliance expertise. Here&apos;s who does it right.</p>
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
            <span className="typo-label">THE DROPSHIPPING ADVANTAGE</span>
            <h2 className="typo-h2">Why 2-Step Dropshipping With EcomGarden</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Zero Inventory Risk", desc: "No upfront stock purchase. You only buy after a customer orders. Stop anytime with zero unsold inventory loss." },
              { step: "02", title: "100% Compliant Process", desc: "Our warehouse removes all source branding and repackages with Walmart-compliant packaging. Zero policy violation risk." },
              { step: "03", title: "Profit Guaranteed", desc: "If we cannot generate profit for your store, you get a full refund of all management fees. No questions asked." },
              { step: "04", title: "Start in Days, Not Months", desc: "Your store can be listing products within 48 hours and generating profit within the first week of operations." },
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
