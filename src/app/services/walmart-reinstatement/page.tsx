"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaExclamationTriangle, FaGavel, FaFileAlt, FaShieldAlt, FaChartLine, FaClock, FaSearch, FaClipboardCheck } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Walmart policy expertise", us: true, self: false, others: "Generic knowledge" },
  { feature: "Custom Plan of Action drafting", us: true, self: "Template-based", others: "Basic template" },
  { feature: "Root cause analysis", us: true, self: false, others: "Surface-level" },
  { feature: "Supporting documentation prep", us: true, self: "You gather", others: "Partial" },
  { feature: "Direct follow-up with Walmart", us: true, self: "No leverage", others: "Limited" },
  { feature: "Multiple appeal attempts", us: true, self: "1-2 tries", others: "1 attempt" },
  { feature: "Post-reinstatement compliance audit", us: true, self: false, others: false },
  { feature: "Ongoing account health monitoring", us: true, self: false, others: "Extra fee" },
  { feature: "Average resolution time", us: "3-14 days", self: "Weeks-months", others: "2-4 weeks" },
  { feature: "Success rate", us: "85%+", self: "Under 30%", others: "40-60%" },
];

const faqs = [
  {
    question: "Why was my Walmart seller account suspended?",
    answer:
      "Walmart suspends seller accounts for various reasons including policy violations, high order defect rates, late shipment rates, intellectual property complaints, selling prohibited items, inaccurate product information, or failing to meet performance standards. Our team will conduct a thorough review to identify the exact cause.",
  },
  {
    question: "Can a permanently suspended Walmart account be reinstated?",
    answer:
      "In many cases, yes. Even accounts marked as permanently suspended can be reinstated with a well-crafted appeal that demonstrates understanding of the violation, provides evidence of corrective actions, and outlines a prevention plan. Our success rate for reinstatement appeals is over 85%.",
  },
  {
    question: "How long does the reinstatement process take?",
    answer:
      "The timeline varies depending on the severity of the suspension. Simple policy violations may be resolved within 3-7 business days. Complex cases involving multiple violations or IP complaints can take 2-4 weeks. We keep you informed throughout the entire process.",
  },
  {
    question: "What information do you need from me to start the appeal?",
    answer:
      "We need access to your Walmart Seller Center account, the suspension notification email, any previous correspondence with Walmart, and details about your business operations. Our team will review everything and may request additional documentation depending on the violation type.",
  },
  {
    question: "What is your success rate for Walmart reinstatements?",
    answer:
      "Our reinstatement success rate is over 85% across all types of suspensions. We have experience handling policy violations, performance-based suspensions, IP complaints, and account integrity issues. Our team stays updated on Walmart's latest policies and appeal requirements.",
  },
  {
    question: "Do you help prevent future suspensions?",
    answer:
      "Yes, after reinstatement we provide a comprehensive compliance review and create a prevention plan. This includes setting up monitoring for account health metrics, reviewing listing compliance, implementing quality control processes, and providing ongoing guidance to keep your account in good standing.",
  },
  {
    question: "What if my appeal is rejected?",
    answer:
      "If the first appeal is rejected, we analyze the rejection response, identify gaps in our approach, and prepare a stronger follow-up appeal with additional documentation and corrective measures. We do not give up after a single rejection and will continue working until all options are exhausted.",
  },
  {
    question: "How much does the reinstatement service cost?",
    answer:
      "Our reinstatement service pricing depends on the complexity of your case. We offer a free initial consultation to assess your situation and provide a transparent quote. We charge a fixed fee with no hidden costs, and in many cases, we offer a partial refund if we are unable to achieve reinstatement.",
  },
];


export default function WalmartReinstatementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 80px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block", color: "#dc2626" }}>ACCOUNT SUSPENDED?</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Every Day Your Walmart Account Is Suspended, You&apos;re Losing Money
          </h1>
          <p className="typo-body" style={{ maxWidth: "600px", margin: "0 auto 12px", fontSize: "17px" }}>
            We&apos;ve reinstated <strong>300+ suspended Walmart accounts</strong> with an <strong>85%+ success rate</strong>. Most cases resolved in 3-14 business days.
          </p>
          <p style={{ fontSize: "14px", color: "#dc2626", fontWeight: 600, marginBottom: "28px" }}>
            Don&apos;t attempt a DIY appeal &mdash; one bad submission can permanently close your account.
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
              Get Emergency Help Now
            </a>
            <Link href="/services" className="btn-outline">
              Browse Services
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            {[
              { icon: <FaShieldAlt />, text: "85%+ Success Rate" },
              { icon: <FaClock />, text: "3-14 Day Resolution" },
              { icon: <FaGavel />, text: "300+ Accounts Reinstated" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY BANNER ── */}
      <section style={{ padding: "28px 0", backgroundColor: "#dc2626" }}>
        <div className="container-main">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap", textAlign: "center" }}>
            <FaExclamationTriangle style={{ color: "#fff", fontSize: "24px", flexShrink: 0 }} />
            <div>
              <p style={{ color: "#fff", fontSize: "16px", fontWeight: 700, margin: 0 }}>
                A suspended Walmart account loses $500-$5,000+ in daily revenue.
              </p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", margin: "4px 0 0" }}>
                The longer you wait, the harder reinstatement becomes. Failed DIY appeals make recovery even more difficult.
              </p>
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
                A suspended Walmart seller account can be devastating for your
                business. Whether your account was suspended for policy
                violations, performance issues, intellectual property complaints,
                or account integrity concerns, our expert reinstatement team can
                help you get back to selling.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our reinstatement specialists have successfully recovered
                hundreds of suspended Walmart accounts. We understand Walmart&apos;s
                policies inside and out, and we know exactly what their
                compliance team looks for in a successful appeal.
              </p>
              <p className="typo-body">
                We don&apos;t just get your account reinstated &mdash; we conduct a
                complete compliance audit to fix every issue and implement
                preventive measures so your account stays in good standing. Our
                approach addresses the root cause, not just the symptoms, giving
                you long-term account security.
              </p>
            </div>
            <div className="flex justify-center">
              <div style={{
                width: "100%",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--color-dark) 0%, #2d2d3f 100%)",
                padding: "32px",
                color: "#fff",
              }}>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
                  Suspension Types We Handle
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Policy violations & restricted items",
                    "High order defect rate (ODR)",
                    "Late shipment rate violations",
                    "Intellectual property complaints",
                    "Account integrity issues",
                    "Previously denied appeals",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STATS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR TRACK RECORD</span>
            <h2 className="typo-h2">Proven Results That Speak for Themselves</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {[
              { number: "300+", label: "Accounts Reinstated", desc: "Across all suspension types" },
              { number: "85%+", label: "Success Rate", desc: "Including permanent suspensions" },
              { number: "3-14", label: "Days Average", desc: "From appeal to reinstatement" },
              { number: "$0", label: "If No Result", desc: "Partial refund guarantee" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "24px",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1, marginBottom: "6px" }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "4px" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "12px", color: "#999" }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="typo-label">Process</span>
            <h2 className="typo-h2">How Our Reinstatement Process Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaSearch style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Case Review", desc: "Analyze suspension notice, account history, and identify the root cause of suspension" },
              { step: "02", icon: <FaClipboardCheck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Compliance Audit", desc: "Review all listings, policies, and account metrics to find every violation that needs resolution" },
              { step: "03", icon: <FaFileAlt style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Appeal Preparation", desc: "Draft a professional appeal letter with corrective actions and a detailed prevention plan" },
              { step: "04", icon: <FaGavel style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Submit & Follow Up", desc: "Submit the appeal to Walmart and actively follow up until a decision is reached" },
              { step: "05", icon: <FaShieldAlt style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Account Restored", desc: "Account reinstated and selling privileges restored. Ongoing monitoring to prevent future issues" },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 20px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--color-primary)", opacity: 0.15, marginBottom: "8px", lineHeight: 1 }}>
                  {item.step}
                </div>
                <div style={{ marginBottom: "10px" }}>{item.icon}</div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Complete Reinstatement Service</h2>
            <p className="typo-subtext">Professional account recovery from suspension experts who know Walmart inside and out.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: <FaGavel />, title: "Root Cause Analysis", desc: "We identify exactly why Walmart suspended your account. Not surface-level guessing - deep analysis of every violation, metric, and policy breach." },
              { icon: <FaFileAlt />, title: "Professional Appeal Drafting", desc: "Custom Plan of Action (POA) tailored to your specific case. Clear root cause, corrective actions taken, and preventive measures that Walmart wants to see." },
              { icon: <FaShieldAlt />, title: "Full Compliance Audit", desc: "We review every listing, metric, and policy on your account. Every violation is identified and fixed before the appeal is submitted." },
              { icon: <FaExclamationTriangle />, title: "IP Complaint Resolution", desc: "Specialized handling of intellectual property complaints. We work with brand owners and prepare proper documentation for IP-related suspensions." },
              { icon: <FaChartLine />, title: "Account Health Restoration", desc: "After reinstatement, we fix all account health metrics - order defect rate, late shipment rate, and cancellation rate brought back to healthy levels." },
              { icon: <FaClock />, title: "Ongoing Prevention Monitoring", desc: "Post-reinstatement monitoring catches potential issues before they escalate. We set up alerts and compliance checks to prevent future suspensions." },
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
                <div style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "12px" }}>{item.icon}</div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs DIY Appeals vs Other Services</h2>
            <p className="typo-subtext">A failed appeal makes recovery harder. Choose the team with the highest success rate.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", minWidth: "600px" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700, backgroundColor: "#f6f7f9", fontSize: "13px" }}>Feature</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>EcomGarden</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>DIY Appeals</div>
              <div style={{ padding: "12px 20px", fontWeight: 700, backgroundColor: "#f6f7f9", textAlign: "center", fontSize: "13px", minWidth: "110px" }}>Other Services</div>

              {comparisonData.map((row) => (
                <React.Fragment key={row.feature}>
                  <div style={{ padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid #f5f5f5" }}>{row.feature}</div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5", backgroundColor: "rgba(22,163,74,0.03)" }}>
                    {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                  </div>
                  <div style={{ padding: "10px 20px", textAlign: "center", borderBottom: "1px solid #f5f5f5" }}>
                    {row.self === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "16px" }} /> : <span style={{ fontSize: "13px", color: "#999" }}>{row.self}</span>}
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

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">ACT NOW</span>
            <h2 className="typo-h2">Why You Should Not Wait</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Revenue Bleeding Daily", desc: "Every day suspended is $500-$5,000+ in lost sales. Your competitors are capturing your customers right now." },
              { step: "02", title: "DIY Appeals Hurt You", desc: "A poorly written appeal gets rejected and makes your case harder. Walmart tracks every failed attempt on your file." },
              { step: "03", title: "Time-Sensitive Window", desc: "Walmart gives limited appeal windows. Miss it and your account could be permanently closed with no recourse." },
              { step: "04", title: "We Start Immediately", desc: "Contact us now and we begin case review within hours. Most appeals submitted within 24-48 hours of engagement." },
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
                  color: "#dc2626",
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

          {/* Emergency CTA */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-pulse"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", padding: "14px 32px" }}
            >
              <FaWhatsapp style={{ fontSize: "20px" }} />
              Get Emergency Help Now
            </a>
            <p style={{ fontSize: "13px", color: "#999", marginTop: "10px" }}>Free initial consultation. We assess your case before you pay anything.</p>
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

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
