"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaExclamationTriangle } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Custom Plan of Action (no templates)", us: true, diy: false, others: "Semi-custom" },
  { feature: "Root cause analysis by Walmart policy experts", us: true, diy: "You guess", others: "Basic review" },
  { feature: "Evidence gathering & documentation", us: true, diy: "You scramble", others: "You provide" },
  { feature: "Appeal submitted within 48-72 hours", us: true, diy: "Days to weeks", others: "5-7 days" },
  { feature: "Previously denied appeal recovery", us: true, diy: false, others: false },
  { feature: "Direct Walmart Seller Support communication", us: true, diy: false, others: "Limited" },
  { feature: "Post-reinstatement compliance setup", us: true, diy: false, others: false },
  { feature: "Free case assessment — pay only if we take it", us: true, diy: "N/A", others: "Upfront fee" },
  { feature: "Money-back if not reinstated", us: true, diy: "N/A", others: false },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Case Analysis", desc: "We dissect your suspension notice, account health, performance history, and previous appeals to identify the exact root cause Walmart flagged." },
  { img: "/images/services/icons/safety.png", title: "Policy Research", desc: "Our team knows every Walmart Marketplace policy inside out. We identify exactly which policy was violated and what Walmart needs to see in your appeal." },
  { img: "/images/services/icons/account-health.png", title: "Evidence Gathering", desc: "Invoices, supplier documentation, authenticity certificates, process photos — we build an evidence package that leaves zero room for doubt." },
  { img: "/images/services/icons/personal-manager.png", title: "Appeal Writing", desc: "Custom action plan addressing root cause, corrective actions, and preventive measures. No templates. Every word written for your specific Walmart case." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Submission & Follow-up", desc: "We submit your appeal through the right Walmart channels and actively follow up with their Trust & Safety team until you get a definitive response." },
  { img: "/images/services/icons/customer-support.png", title: "Escalation Handling", desc: "If the first appeal is not accepted, we analyze the response, strengthen the evidence, and resubmit. We do not stop until your account is back." },
  { img: "/images/services/icons/return-handling.png", title: "Post-Reinstatement Audit", desc: "Once reinstated, we audit your entire account — listings, metrics, policies — to fix every issue that could trigger another suspension." },
  { img: "/images/services/icons/scalability.png", title: "Prevention Plan", desc: "Compliance SOPs, performance monitoring setup, policy adherence protocols, and operating procedures that prevent future suspensions permanently." },
];

const faqs = [
  {
    question: "Why was my Walmart seller account suspended?",
    answer: "Walmart suspends accounts for policy violations, performance metric failures, trust and safety concerns, IP complaints, order defect rates, late shipments, or restricted product sales. Walmart's suspension notices are often vague — our job is to decode exactly what happened and build a targeted appeal.",
  },
  {
    question: "How long does Walmart reinstatement take?",
    answer: "Most cases resolve within 2-4 weeks. Simple policy violations can be faster. Complex cases with multiple violations or denied appeals may take longer. We submit your appeal within 48-72 hours — the fastest turnaround in the industry.",
  },
  {
    question: "My Walmart appeal was already denied. Can you still help?",
    answer: "Yes — many of our Walmart cases involve previously denied appeals. Failed appeals give us valuable data. We analyze what went wrong, identify weaknesses in your past submission, and build a fundamentally different appeal that addresses what the first one missed.",
  },
  {
    question: "Is Walmart harder to get reinstated than Amazon?",
    answer: "Different, not necessarily harder. Walmart's Trust & Safety team has different priorities and communication styles than Amazon. They are stricter on certain metrics like shipping speed and order defect rates. Our team has specific experience with Walmart's reinstatement process and knows exactly what they look for.",
  },
  {
    question: "Do you guarantee reinstatement?",
    answer: "Our success rate is over 90%, but no honest service guarantees 100% — the final decision rests with Walmart. What we do guarantee: if we take your case and cannot achieve reinstatement, you get your money back. We only take cases we believe we can win.",
  },
  {
    question: "How much does reinstatement cost?",
    answer: "Pricing depends on case complexity. We provide a free case assessment first — no obligation. If we take your case, you get a transparent fixed quote with no hidden fees. If we do not believe we can win, we tell you honestly and do not charge you a cent.",
  },
  {
    question: "Can you help with listing-level suspensions?",
    answer: "Yes, we handle both account-level and listing-level suspensions on Walmart. Whether one product was removed or your entire catalog is down, we prepare the specific appeals and documentation needed for each type of suspension.",
  },
  {
    question: "What information do you need to get started?",
    answer: "Walmart Seller Center access, the suspension notification from Walmart, any previous appeal submissions, invoices related to flagged products, and a brief overview of your business. We can start working within hours of receiving these.",
  },
];

export default function WalmartReinstatementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO — CENTERED, NO IMAGE, URGENT ── */}
      <section style={{ padding: "60px 0 70px", backgroundColor: "#1a1a2e" }}>
        <div className="container-main" style={{ textAlign: "center", maxWidth: "800px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(220,38,38,0.15)",
            border: "1px solid rgba(220,38,38,0.3)",
            borderRadius: "20px",
            padding: "6px 16px",
            marginBottom: "20px",
          }}>
            <FaExclamationTriangle style={{ color: "#dc2626", fontSize: "14px" }} />
            <span style={{ color: "#dc2626", fontSize: "13px", fontWeight: 600 }}>WALMART ACCOUNT SUSPENDED? EVERY HOUR COSTS YOU MONEY</span>
          </div>

          <h1 className="typo-h1" style={{ marginBottom: "14px", color: "#fff" }}>
            Your Walmart Account is Down. Your Revenue is <span style={{ color: "#dc2626" }}>Bleeding</span>. We Fix It.
          </h1>
          <p style={{ marginBottom: "16px", fontSize: "17px", color: "rgba(255,255,255,0.8)", maxWidth: "680px", margin: "0 auto 16px" }}>
            90%+ success rate. Appeals submitted within 48 hours. Previously denied cases recovered. We only take cases we can win — and we do not get paid unless we do.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
            {[
              "90%+ success rate",
              "Walmart policy experts",
              "Appeal in 48 hours",
              "Free case assessment",
              "Money-back guarantee",
              "Previously denied cases",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "12px", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{item}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "24px" }}>
            WFS inventory sitting idle? Storage fees continue. Lost sales compound daily. Act now.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-pulse"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", padding: "14px 28px" }}
            >
              <FaWhatsapp style={{ fontSize: "20px" }} />
              Get Emergency Help Now
            </a>
            <Link href="/contact" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
              Free Case Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY SELLERS FAIL ALONE</span>
            <h2 className="typo-h2">Your Problems. Our Solutions.</h2>
            <p className="typo-subtext">Most DIY Walmart appeals get denied. Not because the seller is guilty — because the appeal was written wrong. Here&apos;s what we do differently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "Account suspended — revenue dropped to $0?",
                solution: "We start working within hours. Appeal submitted in 48-72 hours. Most accounts restored within 2-4 weeks. Every day matters and we move fast.",
              },
              {
                problem: "Losing hundreds or thousands per day?",
                solution: "We treat every case as urgent. No queue, no waiting list. Your case gets assigned immediately to a senior Walmart reinstatement specialist.",
              },
              {
                problem: "Walmart's suspension email makes no sense?",
                solution: "We decode Walmart's vague policy language daily. We know exactly what their Trust & Safety team is flagging and what evidence they need to see.",
              },
              {
                problem: "Wrote your own appeal and got denied?",
                solution: "Many of our cases are previously denied appeals. Failed attempts actually help us — we see what went wrong and build a fundamentally stronger case.",
              },
              {
                problem: "Deadline pressure — clock is ticking?",
                solution: "We work weekends, holidays, whenever needed. Your appeal is submitted within 48-72 hours. No other Walmart reinstatement service moves this fast.",
              },
              {
                problem: "Don't understand Walmart's policies?",
                solution: "We do. Root cause, corrective actions, preventive measures — in the exact format Walmart's team expects. Our appeals are written by Walmart policy experts.",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="card-hover"
                style={{
                  borderRadius: "10px",
                  padding: "22px",
                  backgroundColor: "#f6f7f9",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px", lineHeight: 1.4 }}>
                  <span style={{ color: "#dc2626" }}>&#10007;</span>{" "}{item.problem}
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-text-light)", margin: 0, lineHeight: 1.6, paddingLeft: "2px", borderLeft: "3px solid var(--color-primary)" }}>
                  <span style={{ display: "block", paddingLeft: "12px" }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>&rarr;</span>{" "}{item.solution}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">How We Get Your Walmart Account Back</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              From case assessment to full reinstatement — our systematic process has recovered accounts with a <strong>90%+ success rate</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Assessment", desc: "We analyze your suspension notice, account health, performance metrics, and history to identify the exact root cause." },
              { img: "/images/process/get-access.png", title: "Evidence Building", desc: "Invoices, supplier docs, authenticity certificates, process documentation — we compile an airtight evidence package." },
              { img: "/images/process/planning.png", title: "Appeal & Submit", desc: "Custom action plan written by Walmart policy experts. Root cause, corrective actions, preventive measures. Submitted within 48-72 hours." },
              { img: "/images/process/growth.png", title: "Resolution", desc: "Active follow-up with Walmart's Trust & Safety team. If denied, we strengthen and resubmit. We do not stop until your account is back." },
            ].map((item, index) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <div style={{ position: "relative" }}>
                    <img src={item.img} alt={item.title} style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                    <div style={{
                      position: "absolute", top: "-4px", right: "-4px",
                      width: "22px", height: "22px", borderRadius: "50%",
                      backgroundColor: "var(--color-primary)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700,
                    }}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
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
            <span className="typo-label">FULL SERVICE</span>
            <h2 className="typo-h2">Expert Reinstatement. Not Generic Templates.</h2>
            <p className="typo-subtext">Every case is unique. Every appeal is custom-written. Every piece of evidence is hand-gathered for your specific Walmart situation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <img src={item.img} alt={item.title} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENT CTA BANNER ── */}
      <section style={{ padding: "45px 0", backgroundColor: "#1a1a2e" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
            Every Day Your Walmart Account is Down Costs You <span style={{ color: "#dc2626" }}>Real Money</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "550px", margin: "0 auto 20px" }}>
            Free case assessment within 2 hours. We only take cases we can win. If we cannot help, we tell you honestly — no charge.
          </p>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-pulse"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", padding: "14px 28px" }}
          >
            <FaWhatsapp style={{ fontSize: "20px" }} />
            Get Emergency Help Now
          </a>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE HONEST COMPARISON</span>
            <h2 className="typo-h2">Why Suspended Walmart Sellers Trust Us Over DIY or Legal Firms</h2>
            <p className="typo-subtext">DIY appeals get denied most of the time. Legal firms charge $5,000+ and take weeks. We combine speed, Walmart expertise, and results.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>DIY Appeals</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Legal Firms</th>
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
                      {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.diy}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.others === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.others}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">GOT QUESTIONS?</span>
            <h2 className="typo-h2">Everything You Want to Know Before Hiring Us</h2>
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
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "14px 18px", background: "none", border: "none",
                    cursor: "pointer", fontSize: "15px", fontWeight: 600,
                    color: "var(--color-dark)", textAlign: "left",
                  }}
                >
                  {faq.question}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden", transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
