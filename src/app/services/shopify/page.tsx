"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
  FaShopify,
  FaShoppingCart,
  FaPaintBrush,
  FaCode,
  FaCogs,
  FaBullhorn,
  FaGlobeAmericas,
  FaUsers,
  FaChartLine,
  FaTrophy,
  FaDatabase,
} from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const stats = [
  { value: "4.4M+", label: "Stores Worldwide", icon: <FaGlobeAmericas /> },
  { value: "$444B+", label: "Total GMV", icon: <FaChartLine /> },
  { value: "100%", label: "Customizable Platform", icon: <FaCogs /> },
  { value: "Own", label: "Your Customer Data", icon: <FaDatabase /> },
];

const services = [
  {
    icon: <FaShoppingCart />,
    title: "Shopify Dropshipping Store",
    desc: "Complete done-for-you Shopify dropshipping store setup. We handle niche research, supplier sourcing, product importing, store design, and launch-ready configuration.",
    href: "/services/shopify-dropshipping",
  },
  {
    icon: <FaPaintBrush />,
    title: "Shopify Store Redesign",
    desc: "Transform your existing Shopify store with a professional redesign. Improved UX, faster load times, better conversion rates, and a modern look that builds trust.",
    href: "/services/shopify-redesign",
  },
  {
    icon: <FaCode />,
    title: "Shopify Theme Development",
    desc: "Custom Shopify theme built from scratch to match your brand identity. Fully responsive, optimized for speed, and designed to convert visitors into customers.",
    href: "/services/shopify-theme-development",
  },
  {
    icon: <FaCogs />,
    title: "Shopify App Development",
    desc: "Custom Shopify apps to extend your store's functionality. From inventory management to custom checkout flows, we build exactly what your business needs.",
    href: "/services/shopify-app-development",
  },
  {
    icon: <FaBullhorn />,
    title: "Shopify Store Marketing",
    desc: "Drive traffic and sales with our comprehensive Shopify marketing services. Facebook Ads, Google Ads, SEO, email marketing, and social media management.",
    href: "/services/shopify-marketing",
  },
];

const comparisonData = [
  { feature: "Ecommerce-focused design expertise", us: true, them: false },
  { feature: "Conversion-optimized store builds", us: true, them: false },
  { feature: "Complete store setup (not just theme)", us: true, them: false },
  { feature: "Product research & sourcing support", us: true, them: false },
  { feature: "Ongoing marketing & growth support", us: true, them: false },
  { feature: "Custom app development", us: true, them: "Extra fees" },
  { feature: "Turnaround time", us: "5-10 days", them: "2-6 weeks" },
  { feature: "Post-launch support included", us: true, them: false },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How long does it take to build a Shopify store?",
    a: "A standard dropshipping store takes 5-7 business days. Custom theme development takes 10-15 days. Store redesigns typically take 7-10 days. We provide a clear timeline during your consultation based on your specific requirements.",
  },
  {
    q: "Do you help with product sourcing and niche selection?",
    a: "Yes. For dropshipping stores, we conduct thorough niche and product research to identify profitable opportunities. We analyze competition, profit margins, and market trends before recommending products for your store.",
  },
  {
    q: "Can you redesign my existing Shopify store?",
    a: "Absolutely. We audit your current store, identify conversion bottlenecks, and create a redesign plan. We improve your store's visual design, user experience, page speed, and mobile responsiveness while preserving your existing products and data.",
  },
  {
    q: "What makes a custom Shopify theme worth it?",
    a: "A custom theme gives you complete control over your brand presentation, loads faster than bloated pre-made themes, and is built specifically for your target audience. Custom themes typically see 20-40% higher conversion rates compared to free themes.",
  },
  {
    q: "Do you offer ongoing Shopify store management?",
    a: "Yes. We offer ongoing marketing, advertising management, SEO, content creation, and store maintenance packages. Many clients start with a store build and continue with our monthly marketing services to drive traffic and sales.",
  },
  {
    q: "Why Shopify over other platforms like WooCommerce or BigCommerce?",
    a: "Shopify offers the best balance of ease of use, scalability, and ecosystem. With 4.4M+ stores, it has the largest app marketplace, most payment integrations, and strongest infrastructure. You own your customer data and brand — unlike selling on Amazon or Walmart.",
  },
];

export default function ShopifyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Shopify Development &amp; Marketing Services
          </h1>
          <p className="typo-body" style={{ maxWidth: "620px", margin: "0 auto 12px", fontSize: "17px" }}>
            Build, design, and grow your <strong>own ecommerce brand</strong> on the world&apos;s most popular ecommerce platform. From store setup to driving sales — we handle it all.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Own your store. Own your data. Own your brand.
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
              { icon: <FaShopify />, text: "Shopify Experts" },
              { icon: <FaTrophy />, text: "400+ Stores Built" },
              { icon: <FaUsers />, text: "Dedicated Design Team" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE SHOPIFY ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY SHOPIFY</span>
            <h2 className="typo-h2">Why Choose Shopify?</h2>
            <p className="typo-subtext">The world&apos;s leading ecommerce platform powering millions of businesses.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "12px",
                  padding: "28px 20px",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "24px", color: "var(--color-primary)", marginBottom: "12px" }}>{stat.icon}</div>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1, marginBottom: "6px" }}>{stat.value}</div>
                <p className="typo-small" style={{ fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SHOPIFY SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Our Shopify Services</h2>
            <p className="typo-subtext">Everything you need to build and grow a successful Shopify business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card-hover"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "28px 24px",
                    border: "1px solid rgba(0,0,0,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "24px", color: "var(--color-primary)", marginBottom: "14px" }}>{service.icon}</div>
                  <h3 className="typo-h3" style={{ marginBottom: "8px" }}>{service.title}</h3>
                  <p className="typo-body" style={{ marginBottom: "16px", flex: 1 }}>{service.desc}</p>
                  <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "14px" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ECOMGARDEN ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Other Shopify Agencies</h2>
            <p className="typo-subtext">We don&apos;t just build stores — we build profitable ecommerce businesses.</p>
          </div>

          <div style={{ maxWidth: "700px", margin: "32px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>Others</div>

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
