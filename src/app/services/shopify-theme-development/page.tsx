"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaCode, FaCubes, FaMobileAlt, FaTachometerAlt, FaPuzzlePiece, FaPaintBrush, FaClock, FaStore } from "react-icons/fa";
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
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY THEME DEVELOPMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Custom Shopify Themes Built From Scratch
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Stop looking like every other Shopify store. Get a <strong>unique, brand-matching theme</strong> with Shopify 2.0 architecture and blazing-fast performance.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Pixel-perfect. Performance-first. Built to convert.
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
              { icon: <FaStore />, text: "80+ Custom Themes Built" },
              { icon: <FaCode />, text: "Shopify 2.0 Experts" },
              { icon: <FaClock />, text: "4-8 Week Delivery" },
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
            <span className="typo-label">WHAT WE BUILD</span>
            <h2 className="typo-h2">Custom Theme Development That Sets You Apart</h2>
            <p className="typo-subtext">Every theme is unique — built specifically for your brand, products, and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaCode />, title: "Custom Liquid Development", desc: "Expert Liquid template coding for dynamic content, custom sections, blocks, and metafield integration. Clean, maintainable code that follows Shopify best practices." },
              { icon: <FaCubes />, title: "Shopify 2.0 Sections", desc: "Flexible, reusable sections with JSON templates and app blocks on every page. Drag, drop, and customize directly from the theme editor without touching code." },
              { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Pixel-perfect responsive layouts that adapt seamlessly across desktop, tablet, and mobile. Consistent brand experience on every device your customers use." },
              { icon: <FaTachometerAlt />, title: "Performance Optimized", desc: "Lightweight, minimal code with no bloated frameworks. Lazy loading, optimized assets, and clean architecture deliver sub-2-second page loads consistently." },
              { icon: <FaPuzzlePiece />, title: "Custom Sections & Blocks", desc: "Purpose-built sections for your specific needs — product configurators, lookbooks, size guides, testimonial carousels, and any custom functionality you require." },
              { icon: <FaPaintBrush />, title: "Brand-Perfect Design", desc: "Custom visual design that matches your brand identity exactly — colors, typography, imagery style, and overall aesthetic. Your store, your way." },
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

          <div style={{ maxWidth: "700px", margin: "32px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>Pre-Made</div>

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
