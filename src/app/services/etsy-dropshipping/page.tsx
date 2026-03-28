"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaPaintBrush, FaSearch, FaTags, FaShoppingCart, FaHeadset, FaStar } from "react-icons/fa";
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
  { icon: <FaPaintBrush />, title: "Original Design Creation", desc: "Our design team creates trending, marketable designs for print-on-demand products — t-shirts, mugs, wall art, tote bags, and personalized gifts that appeal to Etsy buyers." },
  { icon: <FaSearch />, title: "Etsy SEO Optimization", desc: "Keyword research, optimized titles with long-tail keywords, all 13 tags utilized, detailed descriptions, accurate attributes, and competitive pricing for maximum Etsy search visibility." },
  { icon: <FaTags />, title: "Print-on-Demand Setup", desc: "Full integration with Printful, Printify, Gooten, or CustomCat. We choose the best provider based on product quality, shipping speed, and profit margins for your product line." },
  { icon: <FaShoppingCart />, title: "Complete Shop Management", desc: "Daily operations including listing creation, pricing strategy, inventory management, order processing, and shop policy updates to keep your store running smoothly." },
  { icon: <FaHeadset />, title: "Customer Service & Reviews", desc: "We respond to buyer messages, handle order inquiries, manage returns and refunds, and actively maintain your shop's positive review rating and Star Seller status." },
  { icon: <FaStar />, title: "Etsy Ads & Promotion", desc: "Strategic Etsy Ads campaigns, social media promotion, seasonal sale planning, and coupon management to drive traffic and boost sales during peak seasons." },
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

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Shop Setup",
    description: "Create and optimize your Etsy shop with professional branding and policies",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Product Design",
    description:
      "Design unique products and create SEO-optimized listings with high-quality mockups",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Order Fulfillment",
    description:
      "Print-on-demand partner manufactures and ships directly to your customer automatically",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer receives a quality product with your branding and leaves a positive review",
  },
];

export default function EtsyDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>ETSY DROPSHIPPING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            Turn Etsy Into a Profitable Print-on-Demand Business
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            We understand Etsy&apos;s unique marketplace culture — handmade aesthetics, vintage vibes, and the algorithm that drives discovery. <strong>90+ million active buyers</strong> are searching. Let us put your products in front of them.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Zero inventory. Original designs. Full shop management.
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
              { icon: <FaPaintBrush />, text: "Original Design Team" },
              { icon: <FaStar />, text: "Star Seller Experts" },
              { icon: <FaSearch />, text: "Etsy SEO Specialists" },
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
              <img
                src="/images/services/hero/arbitrage-hero.jpg"
                alt="Etsy Dropshipping Management Services"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
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
            {processSteps.map((step, index) => (
              <div
                key={step.title}
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
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{step.title}</h3>
                <p className="typo-small">{step.description}</p>
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
                <div style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "12px" }}>{item.icon}</div>
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
              <img
                src="/images/services/management/ecommerce-fulfilment.jpg"
                alt="Manage Etsy Shop With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
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
