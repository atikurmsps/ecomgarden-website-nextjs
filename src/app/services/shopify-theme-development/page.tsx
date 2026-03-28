"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "100% unique to your brand", us: true, them: false },
  { feature: "Shopify 2.0 architecture", us: true, them: "Some themes" },
  { feature: "Custom sections & blocks", us: "Unlimited", them: "Limited" },
  { feature: "No unused bloated code", us: true, them: false },
  { feature: "Performance optimized", us: "Sub-2s loads", them: "3-5s loads" },
  { feature: "No monthly theme app fees", us: true, them: "$50-200/mo in apps" },
  { feature: "Ongoing support", us: "30 days free", them: "Forum only" },
  { feature: "Design-to-code accuracy", us: "Pixel-perfect", them: "Close enough" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "Why should I get a custom theme instead of a pre-built one?",
    a: "A custom theme gives you a unique brand identity that stands out from thousands of competitors using the same templates. It is built specifically for your products and customers, offers better performance with no unused code, and provides exactly the features you need without relying on monthly app subscriptions.",
  },
  {
    q: "How long does custom Shopify theme development take?",
    a: "A custom theme typically takes 4-8 weeks depending on complexity. Simple themes with standard layouts can be done in 3-4 weeks, while complex themes with custom features, animations, and multiple templates may take 6-8 weeks. We provide a detailed timeline after understanding your requirements.",
  },
  {
    q: "Do you build themes using Shopify 2.0 architecture?",
    a: "Yes. All our custom themes use Shopify Online Store 2.0 architecture with JSON templates, app blocks, and flexible sections on every page. This gives you maximum flexibility to customize your store directly from the theme editor without touching code.",
  },
  {
    q: "Can I customize the theme myself after development?",
    a: "Absolutely. We build themes with the Shopify theme editor in mind — intuitive section settings, block configurations, and clear labels. We also provide comprehensive documentation and training so you can make changes without developer help.",
  },
  {
    q: "Will the custom theme be fast and SEO-friendly?",
    a: "Performance and SEO are core priorities. We write clean, minimal code, optimize all assets, implement proper semantic HTML, add structured data markup, and ensure excellent Core Web Vitals scores. No bloated frameworks or unnecessary scripts.",
  },
  {
    q: "Do you convert Figma or PSD designs to Shopify themes?",
    a: "Yes. We specialize in converting design files from Figma, Adobe XD, Sketch, or PSD into fully functional Shopify themes. We ensure pixel-perfect accuracy while maintaining responsive behavior and Shopify best practices.",
  },
  {
    q: "What about ongoing support after the theme is delivered?",
    a: "We provide 30 days of free bug-fix support after delivery. For ongoing needs, we offer monthly maintenance packages that include theme updates, new feature additions, performance monitoring, and priority support.",
  },
  {
    q: "Can you add custom features not available in standard themes?",
    a: "Yes — that is the biggest advantage of a custom theme. We can build product configurators, advanced filtering systems, loyalty point displays, subscription flows, mega menus, or any unique functionality specific to your business.",
  },
];

export default function ShopifyThemeDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY THEME DEVELOPMENT</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Custom Shopify Themes Built From Scratch
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                Stop looking like every other Shopify store. Get a <strong>unique, brand-matching theme</strong> with Shopify 2.0 architecture and blazing-fast performance.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Pixel-perfect. Performance-first. Built to convert.
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
              <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap" }}>
                {["80+ Custom Themes Built", "Shopify 2.0 Experts", "4-8 Week Delivery"].map((text) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div style={{
                width: "100%", maxWidth: "460px", aspectRatio: "1/1",
                borderRadius: "16px",
                background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-light) 100%)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "40px", color: "#fff", textAlign: "center",
              }}>
                <img src="/images/services/icons/marketing.png" alt="Theme Development" style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "24px" }} />
                <div style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1, marginBottom: "8px" }}>80+</div>
                <div style={{ fontSize: "16px", opacity: 0.85, marginBottom: "16px" }}>Custom Themes Built</div>
                <div style={{ fontSize: "14px", opacity: 0.7, maxWidth: "280px" }}>Unique, pixel-perfect Shopify 2.0 themes that set your brand apart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT WE BUILD</span>
            <h2 className="typo-h2">Custom Theme Development That Sets You Apart</h2>
            <p className="typo-subtext">Every theme is unique — built specifically for your brand, products, and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: "/images/services/icons/scalability.png", title: "Custom Liquid Development", desc: "Expert Liquid template coding for dynamic content, custom sections, blocks, and metafield integration. Clean, maintainable code that follows Shopify best practices." },
              { icon: "/images/services/icons/scalability.png", title: "Shopify 2.0 Sections", desc: "Flexible, reusable sections with JSON templates and app blocks on every page. Drag, drop, and customize directly from the theme editor without touching code." },
              { icon: "/images/services/icons/marketing.png", title: "Responsive Design", desc: "Pixel-perfect responsive layouts that adapt seamlessly across desktop, tablet, and mobile. Consistent brand experience on every device your customers use." },
              { icon: "/images/services/icons/calculation.png", title: "Performance Optimized", desc: "Lightweight, minimal code with no bloated frameworks. Lazy loading, optimized assets, and clean architecture deliver sub-2-second page loads consistently." },
              { icon: "/images/services/icons/scalability.png", title: "Custom Sections & Blocks", desc: "Purpose-built sections for your specific needs — product configurators, lookbooks, size guides, testimonial carousels, and any custom functionality you require." },
              { icon: "/images/services/icons/marketing.png", title: "Brand-Perfect Design", desc: "Custom visual design that matches your brand identity exactly — colors, typography, imagery style, and overall aesthetic. Your store, your way." },
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
                <div style={{ marginBottom: "12px" }}><img src={item.icon} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain" }} /></div>
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
            <span className="typo-label">OUR PROCESS</span>
            <h2 className="typo-h2">From Concept to Custom Theme in 5 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Requirements", desc: "Understand your brand, audience, design preferences, and specific functionality needs." },
              { step: "02", title: "Design", desc: "Create wireframes and high-fidelity mockups for all key pages for your review." },
              { step: "03", title: "Development", desc: "Build the theme with Shopify 2.0 architecture, clean Liquid code, and modular sections." },
              { step: "04", title: "Testing", desc: "Cross-browser and device testing, performance optimization, and quality assurance." },
              { step: "05", title: "Deploy & Train", desc: "Deploy to your live store, provide documentation and training on customization." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 20px",
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
            <span className="typo-label">WHY CUSTOM</span>
            <h2 className="typo-h2">Custom Theme vs Pre-Made Templates</h2>
            <p className="typo-subtext">A custom theme pays for itself by eliminating app fees and outperforming generic themes.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Pre-Made</th>
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
                      {row.them === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.them}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY ECOMGARDEN ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why Brands Choose Us for Custom Themes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Shopify 2.0 Specialists", desc: "We do not build themes the old way. Every theme uses JSON templates, app blocks, and dynamic sections — giving you maximum flexibility in the theme editor." },
              { title: "Performance Obsessed", desc: "Our themes score 90+ on Lighthouse. No bloated CSS frameworks, no jQuery dependencies, no unnecessary JavaScript. Just clean, fast code that loads instantly." },
              { title: "Conversion Built-In", desc: "Sticky add-to-cart, quick view, recently viewed products, smart recommendations — conversion features are built into the theme, not bolted on with apps." },
              { title: "Future-Proof Code", desc: "Clean, documented, modular code that is easy to maintain and extend. When Shopify releases new features, your theme is ready to adopt them." },
              { title: "Figma to Shopify Experts", desc: "We convert Figma, Adobe XD, Sketch, and PSD designs into pixel-perfect Shopify themes. Your designer's vision, perfectly implemented." },
              { title: "Training & Documentation", desc: "Comprehensive documentation and personalized training so your team can confidently manage and update the theme without ongoing developer costs." },
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
