"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Etsy algorithm & SEO expertise", us: true, diy: false, others: "Basic" },
  { feature: "Print-on-demand integration", us: true, diy: "Self-setup", others: "Limited" },
  { feature: "Original design creation", us: true, diy: false, others: "Extra cost" },
  { feature: "Etsy policy compliance management", us: true, diy: "Self-managed", others: "Partial" },
  { feature: "Handmade & vintage category expertise", us: true, diy: false, others: false },
  { feature: "Listing optimization (all 13 tags)", us: true, diy: "Trial & error", others: "Basic" },
  { feature: "Customer service & review management", us: true, diy: "Your time", others: "Extra fee" },
  { feature: "Shop policy & branding setup", us: true, diy: "Self-managed", others: "Template" },
  { feature: "Dedicated Etsy account manager", us: true, diy: false, others: false },
  { feature: "WhatsApp direct support", us: true, diy: false, others: false },
];

const whatYouGet = [
  { icon: "/images/services/icons/marketing.png", title: "Original Design Creation", desc: "Our design team creates trending, marketable designs for print-on-demand products — t-shirts, mugs, wall art, tote bags, and personalized gifts that appeal to Etsy buyers." },
  { icon: "/images/services/icons/product-research.png", title: "Etsy SEO Optimization", desc: "Keyword research, optimized titles with long-tail keywords, all 13 tags utilized, detailed descriptions, accurate attributes, and competitive pricing for maximum Etsy search visibility." },
  { icon: "/images/services/icons/order-fulfillment.png", title: "Print-on-Demand Setup", desc: "Full integration with Printful, Printify, Gooten, or CustomCat. We choose the best provider based on product quality, shipping speed, and profit margins for your product line." },
  { icon: "/images/services/icons/personal-manager.png", title: "Complete Shop Management", desc: "Daily operations including listing creation, pricing strategy, inventory management, order processing, and shop policy updates to keep your store running smoothly." },
  { icon: "/images/services/icons/customer-support.png", title: "Customer Service & Reviews", desc: "We respond to buyer messages, handle order inquiries, manage returns and refunds, and actively maintain your shop's positive review rating and Star Seller status." },
  { icon: "/images/services/icons/marketing.png", title: "Etsy Ads & Promotion", desc: "Strategic Etsy Ads campaigns, social media promotion, seasonal sale planning, and coupon management to drive traffic and boost sales during peak seasons." },
];

const faqs = [
  {
    question: "What is Etsy dropshipping and how does it work?",
    answer:
      "Etsy dropshipping allows you to sell products on Etsy without holding inventory. When a customer places an order, we coordinate with print-on-demand or wholesale suppliers to manufacture and ship the product directly to the buyer under your brand.",
  },
  {
    question: "Is dropshipping allowed on Etsy?",
    answer:
      "Yes, Etsy allows dropshipping as long as you are transparent about it. You must list yourself as the seller, and all items must comply with Etsy's handmade, vintage, or craft supply categories. Print-on-demand products with your original designs are fully permitted.",
  },
  {
    question: "How do you optimize Etsy listings for search?",
    answer:
      "We use comprehensive Etsy SEO strategies including keyword research, optimized titles with long-tail keywords, all 13 tags utilized, detailed descriptions, accurate attributes, and competitive pricing to maximize your visibility in Etsy search results.",
  },
  {
    question: "What print-on-demand platforms do you integrate with?",
    answer:
      "We work with leading print-on-demand providers including Printful, Printify, Gooten, and CustomCat. We help you choose the best provider based on product quality, shipping speed, and profit margins for your specific product line.",
  },
  {
    question: "How long does it take to see sales on Etsy?",
    answer:
      "Most stores start seeing their first sales within 2-4 weeks after proper setup and optimization. Consistent growth typically begins within the first 2-3 months as your listings gain traction in Etsy search results.",
  },
  {
    question: "Do you handle customer service for my Etsy shop?",
    answer:
      "Yes, our team provides complete customer support including responding to buyer messages, handling order inquiries, managing returns and refunds, and maintaining your shop's positive review rating.",
  },
  {
    question: "What types of products sell best on Etsy?",
    answer:
      "Print-on-demand items like custom t-shirts, mugs, wall art, and personalized gifts perform exceptionally well. We also help with digital downloads, craft supplies, and vintage items based on current market trends and demand analysis.",
  },
  {
    question: "How much investment do I need to start an Etsy shop?",
    answer:
      "Etsy has very low startup costs. You need approximately $50-100 for initial listing fees and our management service fee. Since we use print-on-demand, there is no inventory investment required. Products are only made when ordered.",
  },
];


export default function EtsyDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>ETSY DROPSHIPPING</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Turn Etsy Into a Profitable Print-on-Demand Business
              </h1>
              <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px" }}>
                We understand Etsy&apos;s unique marketplace culture — handmade aesthetics, vintage vibes, and the algorithm that drives discovery. <strong>90+ million active buyers</strong> are searching. Let us put your products in front of them.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Zero inventory. Original designs. Full shop management.
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
                {["Original Design Team", "Star Seller Experts", "Etsy SEO Specialists"].map((text) => (
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
                <img src="/images/services/icons/zero-work.png" alt="Etsy Dropshipping" style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "24px" }} />
                <div style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1, marginBottom: "8px" }}>90M+</div>
                <div style={{ fontSize: "16px", opacity: 0.85, marginBottom: "16px" }}>Active Etsy Buyers</div>
                <div style={{ fontSize: "14px", opacity: 0.7, maxWidth: "280px" }}>Original designs, print-on-demand fulfillment, zero inventory risk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Etsy is one of the fastest-growing marketplaces for unique,
                handmade, and print-on-demand products. With over 90 million
                active buyers worldwide, it offers a massive opportunity for
                sellers who know how to stand out. Our Etsy dropshipping
                management service handles everything from store setup to daily
                operations.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                We specialize in print-on-demand integration, allowing you to
                sell custom-designed products like t-shirts, mugs, wall art, and
                personalized gifts without holding any inventory. When a
                customer orders, the product is manufactured and shipped
                directly to them with professional quality and branding.
              </p>
              <p className="typo-body">
                Our team handles product listing creation, Etsy SEO
                optimization, pricing strategy, customer support, and order
                fulfillment. Whether you are starting fresh or looking to scale
                an existing shop, we provide the expertise to grow your Etsy
                business profitably.
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
                  Why Sellers Choose Etsy
                </h3>
                {[
                  "90+ million active buyers worldwide",
                  "Print-on-demand — zero inventory risk",
                  "Low startup cost ($50-100 to begin)",
                  "Original designs that stand out",
                  "Star Seller badge optimization",
                  "Full Etsy SEO & algorithm expertise",
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
            <h2 className="typo-h2">From Setup to Sales in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Shop Setup", desc: "Create and optimize your Etsy shop with professional branding and policies" },
              { step: "02", title: "Product Design", desc: "Design unique products and create SEO-optimized listings with high-quality mockups" },
              { step: "03", title: "Order Fulfillment", desc: "Print-on-demand partner manufactures and ships directly to your customer automatically" },
              { step: "04", title: "Happy Customer", desc: "Customer receives a quality product with your branding and leaves a positive review" },
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

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Complete Etsy Shop Management</h2>
            <p className="typo-subtext">Everything you need to run a profitable Etsy print-on-demand business — handled by our team.</p>
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
                <div style={{ marginBottom: "12px" }}><img src={item.icon} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain" }} /></div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT SECTION ── */}
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
                  Our Etsy Expertise
                </h3>
                {[
                  "Etsy search algorithm mastery",
                  "All 13 tags optimized per listing",
                  "Original trend-driven designs",
                  "Star Seller badge strategy",
                  "Seasonal sale planning & execution",
                  "Shop trust score optimization",
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
                Why We Understand Etsy Better Than Anyone
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Etsy is not Amazon. It is not Walmart. It has its own culture, its own algorithm, and its own buyers who expect authenticity and creativity. Most agencies treat Etsy like just another marketplace — we do not.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We understand how Etsy&apos;s search algorithm weights recency, relevancy, listing quality score, and shop trust. We know how to craft titles and tags that rank. We know what shop policies Etsy rewards with higher visibility.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our design team creates original, trend-driven designs — not generic clipart. We study what Etsy buyers actually search for and design products that match real demand with real margins.
              </p>
              <p className="typo-body">
                From Star Seller badge optimization to seasonal sale planning, we manage every detail that turns an Etsy shop into a real business.
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
            <h2 className="typo-h2">EcomGarden vs DIY vs Other Agencies</h2>
            <p className="typo-subtext">See why sellers who understand Etsy&apos;s unique marketplace choose EcomGarden.</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px", textAlign: "left" }}>Feature</th>
                  <th style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>EcomGarden</th>
                  <th style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>DIY</th>
                  <th style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "100px" }}>Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                    <td style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>{row.feature}</td>
                    <td style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle", backgroundColor: i % 2 === 0 ? "rgba(22,163,74,0.04)" : "rgba(22,163,74,0.07)" }}>
                      {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.diy}</span>}
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.others === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.others}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
