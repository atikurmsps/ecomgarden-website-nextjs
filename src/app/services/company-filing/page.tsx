"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaBuilding, FaGlobeAmericas, FaClock } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const packages = [
  {
    name: "LLC Formation",
    popular: false,
    features: [
      "Articles of Organization Filing",
      "EIN Application (IRS)",
      "Operating Agreement",
      "Registered Agent (1 Year)",
      "Digital Document Delivery",
    ],
  },
  {
    name: "Complete Business Setup",
    popular: true,
    features: [
      "Everything in LLC Formation",
      "Business Bank Account Setup",
      "Reseller Certificate / Sales Tax Permit",
      "Virtual Business Address",
      "Marketplace Seller Registration Guide",
      "ITIN Application Support",
    ],
  },
  {
    name: "UK LTD Registration",
    popular: false,
    features: [
      "Companies House Filing",
      "Registered Office Address",
      "Company Documents & Certificates",
      "UTR Number Application",
      "VAT Registration Assistance",
    ],
  },
];

const comparisonData = [
  { feature: "Ecommerce-specific expertise", us: true, them: false },
  { feature: "EIN + ITIN handling included", us: true, them: false },
  { feature: "Bank account setup assistance", us: true, them: false },
  { feature: "Marketplace registration guidance", us: true, them: false },
  { feature: "Non-resident friendly process", us: true, them: false },
  { feature: "Registered agent included", us: true, them: "Extra $150+/yr" },
  { feature: "Turnaround time", us: "7-10 days", them: "2-6 weeks" },
  { feature: "Ongoing compliance support", us: true, them: "Extra fees" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "Can a non-US resident form a US LLC?",
    a: "Yes. You do not need US citizenship, green card, or visa. Thousands of international sellers operate US LLCs formed in Wyoming, Delaware, or New Mexico. We handle the entire process remotely — you never need to visit the US.",
  },
  {
    q: "Which state is best for my ecommerce LLC?",
    a: "Wyoming: zero state income tax, strong privacy, $60/year annual fee. Delaware: best business laws, privacy protection, $300/year franchise tax. New Mexico: no annual report, no formation fee — most budget-friendly. We recommend based on your specific situation.",
  },
  {
    q: "What is an EIN and do I need one?",
    a: "An EIN (Employer Identification Number) is like a Social Security Number for your business. You need it to open a bank account, file taxes, and register on Amazon, Walmart, and other marketplaces. We handle the full IRS application.",
  },
  {
    q: "How long does the entire process take?",
    a: "7-10 business days from start to finish. State filing (1-3 days), EIN application (1-5 days), registered agent (same day), operating agreement (1-2 days). Bank account setup runs in parallel and may take 3-7 additional days.",
  },
  {
    q: "Can you help open a US bank account remotely?",
    a: "Yes. We work with ecommerce-friendly banks and fintech platforms like Mercury, Relay, and traditional banks that accept non-resident applications. We prepare all documents and guide you through until your account is active.",
  },
  {
    q: "What is a Reseller Certificate?",
    a: "A Reseller Certificate lets you buy inventory from wholesalers without paying sales tax upfront, since you collect it from end customers. Required for Amazon FBA, Walmart, and most ecommerce models. We handle the application.",
  },
  {
    q: "What ongoing compliance is required?",
    a: "Most states require annual report filing and a small fee. Wyoming: $60/year, Delaware: $300/year franchise tax, New Mexico: no annual report. We send reminders and handle all filings to keep your LLC in good standing.",
  },
  {
    q: "Do you offer ongoing support after formation?",
    a: "Yes. Annual report filing, registered agent renewal, compliance reminders, and any state filings needed. We are your long-term business formation partner, not a one-time filing service.",
  },
];

export default function CompanyFilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>COMPANY FORMATION</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Start Your Ecommerce Business With a Proper US LLC or UK LTD
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                We&apos;ve helped <strong>250+ international sellers</strong> form their companies and start selling on Amazon, Walmart, Shopify, eBay &amp; Etsy.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Complete A-Z setup in 7-10 business days. No paperwork headaches.
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
                  { icon: <FaBuilding />, text: "250+ Companies Formed" },
                  { icon: <FaGlobeAmericas />, text: "30+ Countries Served" },
                  { icon: <FaClock />, text: "7-10 Day Turnaround" },
                ].map((badge) => (
                  <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                    <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Branded illustration card */}
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
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)" }}>TRUSTED</span>
                </div>
                <FaBuilding style={{ fontSize: "56px", marginBottom: "16px", opacity: 0.9 }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  250+ Companies Formed
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  30+ Countries Served
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "7-10", label: "Days" },
                    { val: "US & UK", label: "Formation" },
                    { val: "A-Z", label: "Setup" },
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

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT&apos;S INCLUDED</span>
            <h2 className="typo-h2">Everything You Need to Start Selling</h2>
            <p className="typo-subtext">One service, complete business setup — from LLC filing to marketplace-ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/services/icons/safety.png", title: "LLC / LTD Formation", desc: "Articles of Organization filed with your chosen state. Wyoming, Delaware, or New Mexico for US. Companies House for UK." },
              { img: "/images/services/icons/account-health.png", title: "EIN & ITIN Application", desc: "We apply for your EIN directly with the IRS. For non-residents, we handle ITIN applications with all required documentation." },
              { img: "/images/services/icons/personal-manager.png", title: "Registered Agent", desc: "Required by law — we provide a registered agent with a physical address in your state of formation for all legal correspondence." },
              { img: "/images/services/icons/calculation.png", title: "Business Bank Account", desc: "We connect you with ecommerce-friendly banks (Mercury, Relay) and guide you through opening your US business bank account remotely." },
              { img: "/images/services/icons/order-fulfillment.png", title: "Reseller Certificate", desc: "Sales Tax Permit so you can buy inventory without paying upfront sales tax. Required for Amazon FBA, wholesale, and most models." },
              { img: "/images/services/icons/return-handling.png", title: "Operating Agreement", desc: "Professionally drafted Operating Agreement that establishes your LLC structure, ownership, and operational rules." },
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
                <img src={item.img} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "12px" }} />
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
            <h2 className="typo-h2">From Zero to Marketplace-Ready in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Free Consultation", desc: "We discuss your goals, recommend the best state and entity type, and outline the full roadmap." },
              { step: "02", title: "Submit Documents", desc: "You provide basic ID documents. We prepare all formation paperwork — you just sign." },
              { step: "03", title: "We File Everything", desc: "State filing, EIN application, registered agent, operating agreement — all handled by us." },
              { step: "04", title: "Start Selling", desc: "Company formed, bank account open, reseller certificate ready. You're marketplace-ready." },
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

      {/* ── STATE COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">STATE COMPARISON</span>
            <h2 className="typo-h2">Which State is Right for Your LLC?</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#f6f7f9" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600, color: "var(--color-primary)" }}>Wyoming</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600 }}>Delaware</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600 }}>New Mexico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "State Income Tax", wy: "None", de: "None (for non-residents)", nm: "Yes (4.9%)" },
                  { feature: "Annual Fee", wy: "$60/year", de: "$300/year", nm: "None" },
                  { feature: "Formation Fee", wy: "$100", de: "$90", nm: "$0" },
                  { feature: "Privacy Protection", wy: "Excellent", de: "Excellent", nm: "Excellent" },
                  { feature: "Annual Report", wy: "Required", de: "Required", nm: "Not Required" },
                  { feature: "Asset Protection", wy: "Best in US", de: "Very Strong", nm: "Standard" },
                  { feature: "Best For", wy: "Most sellers", de: "Large businesses", nm: "Budget-friendly" },
                ].map((row) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>{row.wy}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>{row.de}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>{row.nm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── US VS OTHERS COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Generic Filing Services</h2>
            <p className="typo-subtext">We&apos;re not a generic LegalZoom. We&apos;re ecommerce specialists.</p>
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

      {/* ── PACKAGES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR PACKAGES</span>
            <h2 className="typo-h2">Choose Your Formation Package</h2>
            <p className="typo-subtext">Contact us on WhatsApp for exact pricing — no hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="card-hover"
                style={{
                  backgroundColor: pkg.popular ? "var(--color-dark)" : "#f6f7f9",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  position: "relative",
                  border: pkg.popular ? "none" : "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {pkg.popular && (
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "var(--color-accent)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    textTransform: "uppercase",
                  }}>
                    Most Popular
                  </span>
                )}
                <h3 className="typo-h3" style={{ color: pkg.popular ? "#fff" : "var(--color-dark)", marginBottom: "16px" }}>
                  {pkg.name}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {pkg.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", color: pkg.popular ? "rgba(255,255,255,0.85)" : "#666" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pkg.popular ? "btn-primary" : "btn-outline"}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%" }}
                >
                  <FaWhatsapp /> Get Quote
                </a>
              </div>
            ))}
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
