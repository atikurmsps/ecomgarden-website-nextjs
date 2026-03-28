"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaSearch, FaShieldAlt, FaStar, FaSyncAlt, FaChartLine, FaHeadset, FaClipboardList, FaListAlt, FaTruck, FaSmile } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Cassini search engine optimization", us: true, diy: false, others: "Basic" },
  { feature: "Automated repricing tools", us: true, diy: "Manual", others: "Limited" },
  { feature: "Top Rated Seller achievement strategy", us: true, diy: "Self-managed", others: "Partial" },
  { feature: "eBay policy compliance monitoring", us: true, diy: "Self-managed", others: false },
  { feature: "Feedback & defect rate management", us: true, diy: "Your time", others: "Extra fee" },
  { feature: "Account health daily monitoring", us: true, diy: false, others: "Weekly" },
  { feature: "Multi-marketplace management (US, UK, AU)", us: true, diy: false, others: "Extra cost" },
  { feature: "Account restriction prevention", us: true, diy: false, others: false },
  { feature: "Dedicated eBay account manager", us: true, diy: false, others: false },
  { feature: "WhatsApp direct support", us: true, diy: false, others: false },
];

const whatYouGet = [
  { icon: <FaSearch />, title: "Cassini SEO Optimization", desc: "We optimize every listing for eBay's Cassini search engine — keyword-rich titles, detailed item specifics, proper categorization, and competitive pricing that ranks your products higher." },
  { icon: <FaSyncAlt />, title: "Automated Repricing", desc: "Real-time repricing tools that automatically adjust your prices to stay competitive while protecting profit margins. Win the Buy Box without constant manual monitoring." },
  { icon: <FaStar />, title: "Top Rated Seller Strategy", desc: "We manage your account metrics to achieve and maintain Top Rated Seller status — 20% fee discount, priority search placement, and the trust badge that converts browsers into buyers." },
  { icon: <FaShieldAlt />, title: "Account Health Management", desc: "Daily monitoring of defect rates, late shipment rates, cases closed without resolution, and policy compliance. We prevent issues before they become account restrictions." },
  { icon: <FaChartLine />, title: "Product Research & Sourcing", desc: "Data-driven product research to find high-demand, profitable items from verified wholesale suppliers. We analyze sell-through rates, competition levels, and margin potential." },
  { icon: <FaHeadset />, title: "Customer Service & Returns", desc: "Professional buyer communication within hours, return processing, refund management, and proactive feedback requests to build and maintain your seller reputation." },
];

const faqs = [
  {
    question: "Is dropshipping allowed on eBay?",
    answer:
      "Yes, eBay allows dropshipping as long as you source products from legitimate wholesale suppliers. eBay's policy permits listing items from suppliers who ship directly to customers, provided you are the seller of record and handle customer service.",
  },
  {
    question: "How do you maintain eBay account health?",
    answer:
      "We monitor your account health daily, ensuring all performance metrics stay within eBay's standards. This includes maintaining high seller ratings, fast shipping times, low defect rates, and prompt customer communication to achieve and maintain Top Rated Seller status.",
  },
  {
    question: "What products do you source for eBay dropshipping?",
    answer:
      "We source products from trusted wholesale suppliers and authorized distributors. Our product research team identifies high-demand, profitable items across categories like electronics, home and garden, fashion, and automotive parts with strong profit margins.",
  },
  {
    question: "How much profit can I expect from eBay dropshipping?",
    answer:
      "Average profit margins range from 15-30% depending on the product category and sourcing strategy. Our team focuses on finding items with healthy margins after accounting for eBay fees, shipping costs, and supplier pricing.",
  },
  {
    question: "Do you handle eBay returns and refunds?",
    answer:
      "Yes, our team manages the entire returns process including communicating with buyers, processing refunds, coordinating with suppliers for return shipments, and ensuring your account metrics remain in good standing throughout.",
  },
  {
    question: "How do you optimize eBay listings for more sales?",
    answer:
      "We optimize listings with keyword-rich titles, detailed item descriptions, high-quality images, competitive pricing using repricing tools, promoted listings campaigns, and item specifics that improve search visibility through eBay's Cassini search engine.",
  },
  {
    question: "Can you manage multiple eBay accounts?",
    answer:
      "Yes, we can manage multiple eBay accounts across different marketplaces including eBay US, UK, Australia, Canada, and Germany. Each account gets a dedicated manager who understands the specific marketplace requirements and buyer behavior.",
  },
  {
    question: "What if my eBay account gets restricted?",
    answer:
      "Our account health team proactively monitors for potential issues to prevent restrictions. If a restriction occurs, we work immediately to identify the cause, submit proper appeals, and implement corrective measures to restore your account to full functionality.",
  },
];


export default function EbayDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>EBAY DROPSHIPPING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Build a Profitable eBay Business With Expert Management
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            <strong>130+ million active buyers</strong> on eBay. We handle Cassini SEO, repricing, account health, and daily operations so you can focus on scaling — not firefighting.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Policy-compliant. Top Rated Seller focused. Full account management.
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
              { icon: <FaShieldAlt />, text: "Account Health Experts" },
              { icon: <FaStar />, text: "Top Rated Seller Strategy" },
              { icon: <FaSyncAlt />, text: "Automated Repricing" },
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
                eBay remains one of the world&apos;s largest online marketplaces
                with over 130 million active buyers globally. eBay dropshipping
                is a proven business model where you list products from
                wholesale suppliers and fulfill orders directly to customers
                without holding inventory. It&apos;s a low-risk way to build a
                profitable ecommerce business.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our eBay management service covers everything from product
                sourcing and listing creation to order processing and account
                health management. We use advanced repricing tools and data
                analytics to ensure your products are competitively priced and
                your listings rank high in eBay search results.
              </p>
              <p className="typo-body">
                Whether you are a new seller looking to launch your first eBay
                store or an established seller wanting to scale operations, our
                experienced team provides the expertise and daily management
                needed to maximize your sales and profits on eBay.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-dark) 0%, #1a2332 100%)",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  maxWidth: "440px",
                  width: "100%",
                }}
              >
                <h3 style={{ color: "#fff", fontSize: "17px", fontWeight: 700, marginBottom: "18px" }}>
                  Why eBay Dropshipping Works
                </h3>
                {[
                  "130+ million active buyers globally",
                  "No inventory — suppliers ship direct",
                  "Multiple marketplaces (US, UK, AU)",
                  "Cassini SEO for maximum visibility",
                  "Automated repricing tools",
                  "Top Rated Seller fee discounts",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SIMPLE PROCESS</span>
            <h2 className="typo-h2">How eBay Dropshipping Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaClipboardList style={{ fontSize: "28px", color: "var(--color-primary)" }} />, title: "Product Research", desc: "Find high-demand profitable products from trusted wholesale suppliers" },
              { step: "02", icon: <FaListAlt style={{ fontSize: "28px", color: "var(--color-primary)" }} />, title: "List & Optimize", desc: "Create optimized eBay listings with SEO titles, descriptions, and competitive pricing" },
              { step: "03", icon: <FaTruck style={{ fontSize: "28px", color: "var(--color-primary)" }} />, title: "Order Processing", desc: "Process orders immediately through suppliers with fast shipping and tracking updates" },
              { step: "04", icon: <FaSmile style={{ fontSize: "28px", color: "var(--color-primary)" }} />, title: "Happy Customer", desc: "Customer receives quality product on time and your seller ratings stay excellent" },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 24px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--color-primary)", opacity: 0.15, lineHeight: 1 }}>
                  {item.step}
                </div>
                <div style={{ margin: "10px 0 8px" }}>{item.icon}</div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Complete eBay Store Management</h2>
            <p className="typo-subtext">Everything you need to run a profitable eBay dropshipping business — managed by eBay specialists.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
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

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-dark) 0%, #1a2332 100%)",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  width: "100%",
                }}
              >
                <h3 style={{ color: "#fff", fontSize: "17px", fontWeight: 700, marginBottom: "18px" }}>
                  Our eBay Compliance Edge
                </h3>
                {[
                  "Daily account health monitoring",
                  "Defect rate & late shipment tracking",
                  "VeRO strike prevention",
                  "Cassini algorithm optimization",
                  "24/7 automated repricing",
                  "Top Rated Seller badge strategy",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                eBay Policy Compliance Is Our Specialty
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                The number one reason eBay sellers fail is account health issues. Late shipments, high defect rates, policy violations, and VeRO strikes can shut down a profitable business overnight. We prevent that.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our team monitors your account health metrics daily — not weekly, not monthly. We track defect rates, late shipment percentages, cases closed without seller resolution, and transaction defects in real time.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We understand eBay&apos;s Cassini search algorithm and how it rewards sellers with fast handling times, competitive pricing, free shipping, and strong feedback scores. Every listing we create is optimized for maximum Cassini visibility.
              </p>
              <p className="typo-body">
                Our repricing tools run 24/7, automatically adjusting prices to stay competitive while protecting your margins. Combined with promoted listings management and store marketing, we drive consistent traffic and sales growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Self-Managing vs Other Agencies</h2>
            <p className="typo-subtext">See why serious eBay sellers trust EcomGarden with their accounts.</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "32px auto 0", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>DIY</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>Others</div>

              {comparisonData.map((row) => (
                <React.Fragment key={row.feature}>
                  <div style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f5f5f5" }}>{row.feature}</div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5", backgroundColor: "rgba(22,163,74,0.03)" }}>
                    {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.diy}</span>}
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

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
