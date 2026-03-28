"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearchDollar, FaTruckLoading, FaBoxOpen, FaCogs, FaPaintBrush, FaChartLine, FaClock, FaStore } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Niche & product research included", us: true, them: false },
  { feature: "Vetted supplier sourcing", us: true, them: "You find yourself" },
  { feature: "Branded store design", us: true, them: "Generic template" },
  { feature: "Automated fulfillment setup", us: true, them: false },
  { feature: "Conversion-optimized layout", us: true, them: false },
  { feature: "App configuration included", us: true, them: "Extra cost" },
  { feature: "Turnaround time", us: "5-10 days", them: "Weeks of trial & error" },
  { feature: "Post-launch support", us: "30 days free", them: "None" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "What is Shopify dropshipping and how does it work?",
    a: "Shopify dropshipping is a business model where you sell products online without holding inventory. When a customer places an order, the supplier ships the product directly to the customer. You only pay for products after you make a sale, making it a low-risk business model.",
  },
  {
    q: "How long does it take to set up a dropshipping store?",
    a: "A complete dropshipping store setup typically takes 5-10 business days depending on the number of products and customization required. This includes store design, product import, supplier setup, app configuration, and testing.",
  },
  {
    q: "Do you help with finding winning products?",
    a: "Yes. Our product research team uses advanced tools and data analysis to identify trending, high-demand products with good profit margins. We analyze competition, search volume, and market trends to find products with at least 25%+ margins after all costs.",
  },
  {
    q: "Which suppliers do you work with?",
    a: "We work with AliExpress, CJ Dropshipping, Spocket, Zendrop, and US/EU-based suppliers. We vet each supplier for product quality, shipping speed, and reliability before adding them to your store. Fast-shipping suppliers are prioritized.",
  },
  {
    q: "Can I automate the entire order fulfillment process?",
    a: "Yes. We set up fully automated fulfillment using apps like DSers or Zendrop. When a customer orders from your store, the order is automatically sent to the supplier with shipping details. Tracking information is also automatically updated for the customer.",
  },
  {
    q: "What profit margins can I expect with dropshipping?",
    a: "Typical dropshipping profit margins range from 15-40% depending on your niche and product selection. We focus on finding products with at least 25%+ margins after all costs including product cost, shipping, and transaction fees.",
  },
  {
    q: "Do you provide marketing support for the store?",
    a: "While our dropshipping service focuses on store setup and product sourcing, we also offer Facebook Ads, Google Ads, and social media marketing as add-on services to drive traffic to your store from day one.",
  },
  {
    q: "What happens after my store is launched?",
    a: "After launch, we provide 30 days of free support for any issues. We also offer ongoing management packages for order processing, customer support, product updates, and store optimization on a monthly basis.",
  },
];

export default function ShopifyDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY DROPSHIPPING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Launch a Profitable Shopify Dropshipping Store
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Ready-to-sell dropshipping store with <strong>winning products, vetted suppliers, and automated fulfillment</strong>. Start selling from day one with zero inventory risk.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Complete store setup in 5-10 days. No inventory, no warehouse, no hassle.
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
              { icon: <FaStore />, text: "150+ Stores Launched" },
              { icon: <FaBoxOpen />, text: "Zero Inventory Risk" },
              { icon: <FaClock />, text: "5-10 Day Setup" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT&apos;S INCLUDED</span>
            <h2 className="typo-h2">Everything You Need to Start Dropshipping</h2>
            <p className="typo-subtext">From niche research to automated fulfillment — we build your complete dropshipping business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaSearchDollar />, title: "Niche & Product Research", desc: "Data-driven winning product research using trend analysis, competitor study, and profit margin calculations. We find high-demand, low-competition products with 25%+ margins." },
              { icon: <FaTruckLoading />, title: "Supplier Vetting & Sourcing", desc: "We find reliable suppliers from AliExpress, CJ Dropshipping, Spocket, and US-based sources. Each supplier is vetted for quality, shipping speed, and reliability." },
              { icon: <FaBoxOpen />, title: "Product Import & Optimization", desc: "Bulk product import with optimized titles, descriptions, images, and variants. SEO-friendly listings designed to convert visitors into paying customers." },
              { icon: <FaCogs />, title: "Automated Fulfillment", desc: "Set up automated order processing so orders are sent to suppliers instantly. Tracking numbers sync automatically. Zero manual work after a sale." },
              { icon: <FaPaintBrush />, title: "Branded Store Design", desc: "Professional storefront with custom logo, brand colors, trust badges, and conversion-focused layout. Your store looks like a premium brand, not a generic template." },
              { icon: <FaChartLine />, title: "Sales Channel Integration", desc: "Connect your store to Facebook Shop, Instagram Shopping, TikTok, and Google Shopping. Maximize your product visibility across every platform." },
            ].map((item) => (
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

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SIMPLE PROCESS</span>
            <h2 className="typo-h2">From Zero to Selling in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Niche Selection", desc: "We analyze market trends and help you pick a profitable niche with high demand and manageable competition." },
              { step: "02", title: "Store & Supplier Setup", desc: "Build your branded store, source reliable suppliers, import products, and configure all automation." },
              { step: "03", title: "Testing & Optimization", desc: "Test checkout flow, payment processing, fulfillment automation, and mobile experience before launch." },
              { step: "04", title: "Launch & Scale", desc: "Your store goes live. We provide 30 days of support and optional marketing to drive your first sales." },
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

      {/* ── COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Building It Yourself</h2>
            <p className="typo-subtext">Skip months of trial and error. Get a proven, ready-to-sell store.</p>
          </div>

          <div style={{ maxWidth: "700px", margin: "32px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>DIY / Others</div>

              {comparisonData.map((row) => (
                <React.Fragment key={row.feature}>
                  <div style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f5f5f5" }}>{row.feature}</div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5", backgroundColor: "rgba(22,163,74,0.03)" }}>
                    {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.them === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.them}</span>}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ECOMGARDEN ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why Smart Dropshippers Choose EcomGarden</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Proven Product Research", desc: "We do not guess. Our research team uses data tools to find products with proven demand, healthy margins, and low competition. You start with winners, not experiments." },
              { title: "Vetted Suppliers Only", desc: "Every supplier is tested for product quality, shipping speed, and reliability. We order samples, check reviews, and verify processing times before connecting them to your store." },
              { title: "Revenue-Focused Design", desc: "Your store is designed to convert, not just look nice. Trust badges, urgency elements, upsell funnels, and a streamlined checkout — all built to maximize revenue per visitor." },
              { title: "True Automation", desc: "Orders flow to suppliers automatically. Tracking updates sync to customers automatically. You focus on marketing and growth while the backend runs itself." },
              { title: "Zero Risk Launch", desc: "No inventory to buy upfront. No warehouse to rent. You only pay for products after a customer has paid you. The smartest way to start an ecommerce business." },
              { title: "Ongoing Growth Support", desc: "We do not just build and leave. Monthly management, product refresh, supplier updates, and marketing add-ons available to scale your store after launch." },
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
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
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
                  {faq.q}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.a}</p>
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
