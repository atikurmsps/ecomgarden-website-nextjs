"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaStore, FaPaintBrush, FaPlug, FaCreditCard, FaSearch, FaShoppingCart, FaClock, FaHeadset } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Ecommerce-specialized team", us: true, them: false },
  { feature: "Shopify Partner certified", us: true, them: "Rarely" },
  { feature: "Full store setup (A-Z)", us: true, them: "Partial" },
  { feature: "Payment gateway configuration", us: true, them: "Extra cost" },
  { feature: "SEO setup included", us: true, them: false },
  { feature: "Speed optimization included", us: true, them: "Extra $500+" },
  { feature: "Turnaround time", us: "5-10 days", them: "2-6 weeks" },
  { feature: "Post-launch support", us: "30 days free", them: "Hourly billing" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How long does it take to build a Shopify store?",
    a: "A complete Shopify store setup takes 5-10 business days depending on complexity. This includes theme setup, product listing, payment gateway, shipping configuration, and SEO basics. Custom features or large product catalogs may extend the timeline by a few days.",
  },
  {
    q: "Do you handle product listing and content?",
    a: "Yes. We handle bulk product import via CSV, manual entry, or data scraping from any source. Each listing gets optimized titles, descriptions, images, and variants. SEO-friendly product content is included in our setup service.",
  },
  {
    q: "Can you migrate my store from another platform to Shopify?",
    a: "Absolutely. We migrate stores from WooCommerce, Magento, BigCommerce, Wix, Squarespace, and any other platform. We transfer products, customers, orders, blog content, and URL redirects to preserve your SEO rankings.",
  },
  {
    q: "What payment gateways do you set up?",
    a: "We configure Shopify Payments, PayPal, Stripe, and any region-specific gateways your business needs. We also set up multi-currency support and tax configurations based on your selling regions.",
  },
  {
    q: "Do you offer ongoing store management?",
    a: "Yes. We offer monthly management packages that include product updates, order processing, customer support, design tweaks, app management, and performance monitoring. Our team acts as your dedicated Shopify operations partner.",
  },
  {
    q: "What is included in the SEO setup?",
    a: "Our SEO setup includes keyword research, meta title and description optimization for all pages, image alt tags, sitemap submission, Google Search Console setup, schema markup, and site speed optimization for Core Web Vitals.",
  },
  {
    q: "Can you integrate third-party apps and tools?",
    a: "Yes. We install, configure, and customize any Shopify app including email marketing (Klaviyo), reviews (Judge.me), upsells, subscriptions, loyalty programs, and custom API integrations with your existing business tools.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every project includes 30 days of free post-launch support for bug fixes, minor adjustments, and questions. After that, we offer affordable monthly retainer packages for ongoing development and management.",
  },
];

export default function ShopifyDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY DEVELOPMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Complete Shopify Store Development &amp; Management
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            We&apos;ve built and managed <strong>200+ Shopify stores</strong> across every niche — from single-product brands to 10,000+ SKU catalogs.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Ready-to-sell store in 5-10 business days. Zero technical headaches.
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
              { icon: <FaStore />, text: "200+ Stores Built" },
              { icon: <FaShoppingCart />, text: "50+ Expert Team" },
              { icon: <FaClock />, text: "5-10 Day Delivery" },
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
            <span className="typo-label">WHAT WE DO</span>
            <h2 className="typo-h2">Complete Shopify Solutions Under One Roof</h2>
            <p className="typo-subtext">From store setup to ongoing management — everything your Shopify business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaStore />, title: "Store Setup & Configuration", desc: "Complete A-Z Shopify store setup including domain, theme installation, navigation, pages, policies, shipping zones, and tax configuration. Ready to accept orders from day one." },
              { icon: <FaPaintBrush />, title: "Theme Customization", desc: "Customize any Shopify theme to match your brand — colors, fonts, layouts, custom sections, and homepage design. Pixel-perfect implementation of your vision." },
              { icon: <FaPlug />, title: "App Integration", desc: "Install and configure essential Shopify apps for email marketing, reviews, upsells, loyalty programs, subscriptions, and any third-party integrations your business needs." },
              { icon: <FaCreditCard />, title: "Payment Gateway Setup", desc: "Configure Shopify Payments, PayPal, Stripe, and region-specific gateways. Multi-currency support, tax setup, and checkout optimization for maximum conversion." },
              { icon: <FaSearch />, title: "SEO & Speed Optimization", desc: "On-page SEO setup with keyword-optimized meta tags, schema markup, image optimization, and Core Web Vitals tuning. Your store loads fast and ranks well from launch." },
              { icon: <FaHeadset />, title: "Ongoing Management", desc: "Monthly store management including product updates, order processing, customer support, design tweaks, app updates, and performance monitoring by our dedicated team." },
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
            <h2 className="typo-h2">From Idea to Live Store in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Free Consultation", desc: "We discuss your goals, niche, target audience, and outline the complete store setup roadmap." },
              { step: "02", title: "Share Requirements", desc: "You provide your brand assets, product details, and preferences. We handle all the technical setup." },
              { step: "03", title: "We Build Everything", desc: "Theme setup, product listing, payment gateway, apps, SEO — all handled by our expert team." },
              { step: "04", title: "Launch & Support", desc: "Your store goes live. We provide 30 days of free support and optional ongoing management." },
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

      {/* ── WHY CHOOSE US / COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Fiverr Freelancers</h2>
            <p className="typo-subtext">We&apos;re not a random freelancer. We&apos;re a dedicated Shopify Partner team.</p>
          </div>

          <div style={{ maxWidth: "700px", margin: "32px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>Freelancers</div>

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
            <h2 className="typo-h2">Why 200+ Brands Trust Us With Their Shopify Stores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Shopify Partner Expertise", desc: "Not generalist web developers. Our team specializes exclusively in Shopify and understands the platform inside out — themes, Liquid, APIs, and the ecosystem." },
              { title: "Ecommerce-First Approach", desc: "Every decision is made to drive sales. We build stores that convert, not just look pretty. From product page layout to checkout flow — revenue is the priority." },
              { title: "Fixed-Price, No Surprises", desc: "Clear pricing agreed upfront. No hourly billing surprises, no scope creep charges. You know exactly what you pay and what you get." },
              { title: "Fast Turnaround", desc: "5-10 business days for a complete store. Our streamlined process and dedicated team mean you launch weeks faster than with freelancers or agencies." },
              { title: "30 Days Free Support", desc: "Every project includes 30 days of post-launch support. Bug fixes, minor adjustments, questions — we are there until you are fully comfortable." },
              { title: "Long-Term Partnership", desc: "We do not disappear after delivery. Monthly management, ongoing optimization, and growth strategy — we scale with your business." },
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
