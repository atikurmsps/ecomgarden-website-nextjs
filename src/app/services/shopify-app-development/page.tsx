"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaLock, FaGlobe, FaPlug, FaCogs, FaShoppingCart, FaChartBar, FaClock, FaCode } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Shopify API specialists", us: true, them: "Generalists" },
  { feature: "Shopify 2.0 & Checkout extensions", us: true, them: false },
  { feature: "Full lifecycle (design to deploy)", us: true, them: "Code only" },
  { feature: "App Store submission support", us: true, them: "Extra cost" },
  { feature: "Security best practices (OAuth, HMAC)", us: true, them: "Basic" },
  { feature: "Post-launch monitoring", us: true, them: false },
  { feature: "Turnaround time", us: "2-8 weeks", them: "2-6 months" },
  { feature: "Ongoing maintenance plans", us: true, them: "Hourly billing" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "What types of Shopify apps can you build?",
    a: "We build all types — private custom apps, public apps for the App Store, embedded admin apps, checkout extensions, theme app extensions, and headless commerce solutions using the Storefront API. If Shopify supports it, we can build it.",
  },
  {
    q: "What technologies do you use for Shopify app development?",
    a: "We use the official Shopify tech stack: Node.js with Express or Remix, React for frontend, Prisma for database, and Shopify API libraries. We work with both REST Admin API and GraphQL Admin API, plus the Storefront API for headless solutions.",
  },
  {
    q: "How long does it take to develop a custom Shopify app?",
    a: "Simple apps with basic functionality take 2-4 weeks. Medium-complexity apps with integrations and custom UI take 4-8 weeks. Complex enterprise-grade apps with multiple integrations may take 8-16 weeks. We provide accurate estimates after understanding your requirements.",
  },
  {
    q: "Can you integrate Shopify with my existing systems?",
    a: "Yes. We specialize in integrations with ERPs like NetSuite and SAP, CRMs like Salesforce and HubSpot, shipping carriers, accounting software like QuickBooks, and custom internal tools via APIs and webhooks.",
  },
  {
    q: "Do you help with Shopify App Store submission?",
    a: "Yes. We handle the entire submission process — meeting Shopify review requirements, creating app listing content, screenshots, demo stores, and responding to reviewer feedback until your app is approved and published.",
  },
  {
    q: "How do you handle app security and data privacy?",
    a: "Security is built into our process. We implement OAuth 2.0 authentication, HMAC verification, encrypted data storage, rate limiting, and follow Shopify security best practices. We ensure GDPR and CCPA compliance for user data handling.",
  },
  {
    q: "Can you maintain and update the app after launch?",
    a: "Yes. We offer maintenance packages that include API version updates when Shopify releases new versions, bug fixes, performance optimization, new feature development, and 24/7 monitoring with alert-based incident response.",
  },
  {
    q: "What is the cost of custom Shopify app development?",
    a: "Simple apps start around $2,000-5,000, medium-complexity apps range from $5,000-15,000, and enterprise solutions can be $15,000+. We provide detailed quotes after understanding your specific requirements and scope.",
  },
];

export default function ShopifyAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY APP DEVELOPMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Custom Shopify Apps That Solve Real Business Problems
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            When off-the-shelf apps fall short, we build <strong>custom solutions</strong>. Private apps, public apps, API integrations, and checkout extensions by Shopify specialists.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Scalable. Secure. Built to grow with your business.
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
              Discuss Your App Idea
            </a>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            {[
              { icon: <FaCode />, text: "50+ Apps Developed" },
              { icon: <FaPlug />, text: "REST & GraphQL APIs" },
              { icon: <FaClock />, text: "2-8 Week Delivery" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT WE BUILD</span>
            <h2 className="typo-h2">Custom App Development Services</h2>
            <p className="typo-subtext">From simple integrations to complex enterprise solutions — we build it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaLock />, title: "Private App Development", desc: "Custom private apps tailored to your specific business needs with secure API access and seamless Shopify admin integration. Built exclusively for your store." },
              { icon: <FaGlobe />, title: "Public App Development", desc: "Develop and launch apps on the Shopify App Store with complete submission support, listing optimization, and monetization strategy. Reach millions of merchants." },
              { icon: <FaPlug />, title: "API Integration", desc: "Connect Shopify with ERPs, CRMs, shipping carriers, accounting software, and custom backends via REST and GraphQL APIs. Real-time data sync across your stack." },
              { icon: <FaShoppingCart />, title: "Checkout Extensions", desc: "Custom checkout UI extensions for personalized checkout experiences — custom fields, post-purchase upsells, payment customizations, and loyalty integrations." },
              { icon: <FaCogs />, title: "Workflow Automation", desc: "Automate repetitive processes — order routing, inventory sync, customer tagging, email triggers, report generation, and complex business logic." },
              { icon: <FaChartBar />, title: "Custom Dashboards", desc: "Custom analytics dashboards and reporting tools that give you deeper insights into store performance, customer behavior, and business metrics." },
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
            <h2 className="typo-h2">From Idea to Deployed App in 5 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Discovery", desc: "Understand your business requirements, technical needs, and define app scope and architecture." },
              { step: "02", title: "Architecture", desc: "Design app architecture, database schema, API endpoints, and user interface wireframes." },
              { step: "03", title: "Development", desc: "Agile development with regular demos using Node.js, React, and Shopify API best practices." },
              { step: "04", title: "Testing & QA", desc: "Unit tests, integration tests, security audit, and real-store testing environments." },
              { step: "05", title: "Deploy & Monitor", desc: "Deploy the app, set up monitoring and alerts, provide documentation and training." },
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
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Generic Developers</h2>
            <p className="typo-subtext">Shopify app development requires Shopify expertise, not just coding skills.</p>
          </div>

          <div style={{ maxWidth: "700px", margin: "32px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "120px" }}>Generic Devs</div>

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
            <h2 className="typo-h2">Why Merchants Trust Us With Custom Apps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Shopify API Experts", desc: "We do not dabble in Shopify — we specialize in it. Our team knows the Admin API, Storefront API, webhooks, and checkout extensibility inside out. No learning curve on your project." },
              { title: "Security First", desc: "OAuth 2.0, HMAC verification, encrypted storage, rate limiting, and GDPR compliance built into every app. Your data and your customers' data are protected by design." },
              { title: "Eliminate App Subscription Fees", desc: "A custom app replaces multiple monthly subscriptions. One-time investment, zero recurring app costs. Most clients save $200-500/month in app fees." },
              { title: "Agile Development", desc: "Regular demos, transparent progress updates, and iterative development. You see your app taking shape every sprint and can provide feedback before it is too late to change." },
              { title: "App Store Expertise", desc: "If you are building a public app, we handle the entire App Store submission, review process, listing optimization, and launch strategy. We know what Shopify reviewers look for." },
              { title: "Long-Term Support", desc: "Apps need maintenance — API version updates, bug fixes, performance tuning. Our maintenance plans keep your app running smoothly as Shopify evolves." },
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
