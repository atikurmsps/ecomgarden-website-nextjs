"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearch, FaGoogle, FaFacebookF, FaEnvelope, FaPenFancy, FaChartLine, FaClock, FaBullhorn } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Shopify-specific expertise", us: true, them: "Generic" },
  { feature: "Full-funnel strategy (SEO + Ads + Email)", us: true, them: "Single channel" },
  { feature: "Shopify analytics & pixel setup", us: true, them: "Basic setup" },
  { feature: "Ad creative design included", us: true, them: "Extra cost" },
  { feature: "Email automation flows", us: true, them: false },
  { feature: "Conversion rate optimization", us: true, them: false },
  { feature: "Results timeline", us: "Week 1 (paid)", them: "Months" },
  { feature: "Transparent ROAS reporting", us: true, them: "Vanity metrics" },
  { feature: "No long-term contracts", us: true, them: "6-12 mo lock-in" },
];

const faqs = [
  {
    q: "Which marketing channel is best for my Shopify store?",
    a: "It depends on your product type, audience, and budget. Facebook and Instagram Ads work great for visual products and impulse purchases. Google Ads captures high-intent shoppers actively searching. SEO provides long-term organic growth. We analyze your business and recommend the optimal channel mix for maximum ROI.",
  },
  {
    q: "How much should I spend on marketing?",
    a: "We recommend starting with a minimum ad spend of $500-1,000 per month per channel to gather enough data for optimization. As we identify winning campaigns, we scale budgets for maximum profitability. Our management fees are separate from ad spend.",
  },
  {
    q: "How long does it take to see results?",
    a: "Paid advertising (Facebook, Google Ads) can generate results within the first week. SEO typically takes 3-6 months for significant organic traffic growth. Email marketing shows results quickly once flows are set up. We set realistic expectations and provide regular progress updates.",
  },
  {
    q: "Do you create ad creatives and copy?",
    a: "Yes. Our team handles everything — ad creative design, video production, copywriting, and A/B testing. We create multiple variations for testing and continuously optimize based on performance data to find the best-performing combinations.",
  },
  {
    q: "How do you track and measure performance?",
    a: "We set up comprehensive tracking using Facebook Pixel, Google Analytics 4, Google Tag Manager, and Shopify analytics. We track ROAS, CPA, conversion rate, CLV, and attribution across all channels. You receive detailed monthly reports with actionable insights.",
  },
  {
    q: "Can you help with email marketing automation?",
    a: "Yes. We set up complete email automation using Klaviyo or your preferred platform — welcome series, abandoned cart flows, post-purchase sequences, win-back campaigns, browse abandonment, and promotional campaigns with segmented audiences.",
  },
  {
    q: "Do you offer Shopify-specific SEO?",
    a: "Yes. Shopify SEO has unique considerations. We handle technical SEO (canonical tags, site speed, structured data, URL structure), on-page SEO (keyword-optimized product descriptions, collection pages, blog content), and meta tag optimization specific to the Shopify platform.",
  },
  {
    q: "What ROAS can I expect from paid advertising?",
    a: "ROAS varies by industry and product. On average, our clients achieve 3-5x ROAS on Facebook Ads and 4-8x ROAS on Google Shopping. We set ROAS targets based on your profit margins and continuously optimize campaigns to improve profitability.",
  },
];

export default function ShopifyMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY MARKETING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Drive Traffic, Sales &amp; Revenue to Your Shopify Store
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            Our clients average <strong>3-5x ROAS on paid ads</strong> and <strong>300% organic traffic growth</strong>. SEO, Google Ads, Meta Ads, email marketing — all under one roof.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            No long-term contracts. Transparent reporting. Real ROI.
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
              Get Free Marketing Audit
            </a>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            {[
              { icon: <FaBullhorn />, text: "$2M+ Ad Spend Managed" },
              { icon: <FaChartLine />, text: "3-5x Avg ROAS" },
              { icon: <FaClock />, text: "Results in Week 1" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Full-Funnel Marketing for Shopify Stores</h2>
            <p className="typo-subtext">Multi-channel marketing strategy customized to your products, audience, and goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaSearch />, title: "Shopify SEO", desc: "On-page and technical SEO including keyword research, meta tags, site structure, schema markup, content strategy, and Core Web Vitals optimization for sustainable organic traffic growth." },
              { icon: <FaGoogle />, title: "Google Ads & Shopping", desc: "Search, Shopping, Display, and Performance Max campaigns with keyword bidding, negative keywords, product feed optimization, and continuous ROAS improvement." },
              { icon: <FaFacebookF />, title: "Facebook & Meta Ads", desc: "Data-driven Facebook and Instagram ad campaigns with audience targeting, creative testing, retargeting funnels, and conversion tracking for maximum return on ad spend." },
              { icon: <FaEnvelope />, title: "Email Marketing", desc: "Automated email flows — welcome series, abandoned cart recovery, post-purchase upsells, win-back campaigns, and promotional newsletters using Klaviyo or your preferred platform." },
              { icon: <FaPenFancy />, title: "Content Marketing", desc: "Blog content strategy, product descriptions, landing pages, and brand storytelling that drives organic traffic and positions your store as an authority in your niche." },
              { icon: <FaChartLine />, title: "Analytics & CRO", desc: "Comprehensive tracking setup, A/B testing, landing page optimization, checkout improvements, and user behavior analysis to maximize revenue from existing traffic." },
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
            <h2 className="typo-h2">From Audit to Revenue Growth in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Audit & Strategy", desc: "Analyze your current marketing, competitors, and target audience to build a custom growth strategy." },
              { step: "02", title: "Channel Setup", desc: "Set up and configure all marketing channels, tracking pixels, analytics, and attribution tools." },
              { step: "03", title: "Launch & Optimize", desc: "Launch campaigns with targeted audiences, compelling creatives, and daily performance monitoring." },
              { step: "04", title: "Scale & Report", desc: "Scale winning campaigns, cut underperformers, and deliver detailed monthly performance reports." },
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
            <h2 className="typo-h2">EcomGarden vs Generic Marketing Agencies</h2>
            <p className="typo-subtext">We don&apos;t just run ads. We understand Shopify and ecommerce funnels.</p>
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

      {/* ── WHY ECOMGARDEN ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why Shopify Brands Choose Our Marketing Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Ecommerce-Native Team", desc: "We only market ecommerce stores. We understand purchase intent, product-market fit, ROAS targets, and Shopify-specific conversion funnels. No generic digital marketing fluff." },
              { title: "Full-Funnel Approach", desc: "SEO, paid ads, email, and content working together — not siloed. Top-of-funnel awareness feeds mid-funnel retargeting feeds bottom-funnel conversions. Every channel reinforces the others." },
              { title: "Transparent Reporting", desc: "No vanity metrics. We report on revenue, ROAS, CPA, and customer lifetime value. You know exactly what every marketing dollar returns. Monthly reports with actionable recommendations." },
              { title: "No Long-Term Contracts", desc: "Month-to-month engagement. If we are not delivering results, you can leave. We earn your business every month with performance, not contracts." },
              { title: "Creative Team Included", desc: "Ad creative design, video production, and copywriting included. No extra agency fees for creative work. We test multiple variations and scale what works." },
              { title: "Shopify Analytics Setup", desc: "Proper tracking is everything. We set up Facebook Pixel, GA4, GTM, server-side tracking, and Shopify attribution correctly from day one. No data gaps, no attribution guessing." },
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
