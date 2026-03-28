"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaChevronDown, FaChevronUp, FaExclamationTriangle, FaShieldAlt, FaFileAlt, FaGavel, FaClock, FaHandshake, FaSearch, FaClipboardCheck } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const successStats = [
  { label: "Reinstatement Success Rate", value: 90, suffix: "%+" },
  { label: "Accounts Recovered", value: 200, suffix: "+" },
  { label: "Avg. Resolution Time", value: 14, suffix: " Days" },
  { label: "Previously Denied Cases Won", value: 75, suffix: "%+" },
];

const whatYouGet = [
  { img: "/images/services/icons/personal-manager.png", title: "Professional Appeal Writing", desc: "Every Plan of Action is custom-crafted for your specific violation. No templates, no generic language. We address the exact root cause, corrective actions, and preventive measures Amazon requires." },
  { img: "/images/services/icons/safety.png", title: "Amazon Policy Expertise", desc: "Our team stays current on every Amazon policy update. We know what Seller Performance looks for, what language triggers approvals, and what mistakes cause rejections." },
  { img: "/images/services/icons/account-health.png", title: "Evidence & Documentation", desc: "We gather and organize invoices, supplier documentation, authenticity certificates, and supporting evidence into a compelling case package that leaves no room for doubt." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Urgent Case Handling", desc: "We understand every day costs you money. Your case begins immediately after consultation. Most appeals are submitted within 48-72 hours of us receiving your account access." },
  { img: "/images/services/icons/return-handling.png", title: "Previously Denied Appeals", desc: "Had your appeal rejected once — or multiple times? We specialize in reopening denied cases. We identify weaknesses in past submissions and build a stronger, evidence-backed appeal." },
  { img: "/images/services/icons/scalability.png", title: "Post-Reinstatement Protection", desc: "Getting reinstated is step one. We help you implement compliance measures, performance monitoring, and operating procedures to prevent future suspensions." },
];

const caseStudies = [
  { type: "Inauthentic Item Claim", situation: "Seller received multiple inauthentic complaints on branded products. Account deactivated. Two previous appeals denied.", result: "Reinstated in 11 days. Gathered proper invoices from authorized distributors, documented supply chain, and submitted evidence-backed POA." },
  { type: "Intellectual Property Violation", situation: "Brand owner filed IP complaint. Seller's entire catalog suspended. No prior warning.", result: "Reinstated in 8 days. Negotiated retraction directly with rights owner, submitted retraction confirmation with supporting documentation to Amazon." },
  { type: "Account Health / ODR Violation", situation: "Order Defect Rate exceeded threshold due to negative feedback spike. Account suspended with inventory locked in FBA.", result: "Reinstated in 14 days. Identified root cause in packaging damage, implemented new prep procedures, and submitted detailed preventive action plan." },
];

const faqs = [
  {
    question: "Why was my Amazon seller account suspended?",
    answer:
      "Amazon suspends accounts for various reasons including policy violations, intellectual property complaints, inauthentic item claims, late shipment rates, order defect rates, linked accounts, or selling restricted products. We analyze your case to identify the exact cause and build a targeted appeal.",
  },
  {
    question: "How long does it take to get my account reinstated?",
    answer:
      "Most reinstatement cases are resolved within 2-4 weeks depending on the complexity of the suspension. Simple policy violations may be resolved faster, while complex cases involving multiple violations or legal issues may take longer. We work urgently on every case.",
  },
  {
    question: "What is a Plan of Action (POA)?",
    answer:
      "A Plan of Action is a formal document submitted to Amazon that explains the root cause of the issue, the corrective actions you have taken, and the preventive measures you will implement. A well-crafted POA is critical for reinstatement and must follow Amazon's specific requirements.",
  },
  {
    question: "Can you help if my appeal has already been denied?",
    answer:
      "Yes, we regularly handle cases where previous appeals have been rejected. We review your past submissions, identify weaknesses, gather additional evidence, and craft a stronger appeal. Many of our successful reinstatements come from previously denied cases.",
  },
  {
    question: "Do you guarantee account reinstatement?",
    answer:
      "While no one can guarantee 100% reinstatement as the final decision rests with Amazon, our success rate is over 90%. We only take cases where we believe reinstatement is achievable. If we cannot help, we will let you know upfront before charging any fee.",
  },
  {
    question: "What information do you need from me to get started?",
    answer:
      "We need access to your Seller Central account, the suspension notification from Amazon, any previous appeal submissions, invoices or documentation related to the flagged products, and a brief overview of your business operations.",
  },
  {
    question: "Can you help with ASIN-level suspensions?",
    answer:
      "Yes, we handle both account-level and ASIN-level suspensions. Whether a single listing has been removed or your entire catalog is affected, we prepare the necessary appeals and documentation to get your products back online.",
  },
  {
    question: "How much does reinstatement service cost?",
    answer:
      "Our pricing depends on the complexity of your case. We offer a free initial consultation to assess your situation and provide a transparent quote. There are no hidden fees, and we offer a money-back guarantee if we are unable to achieve reinstatement.",
  },
];


function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} style={{ fontSize: "36px", fontWeight: 800, color: "var(--color-dark)", lineHeight: "1.1" }}>
      {count}{suffix}
    </div>
  );
}

export default function AmazonReinstatementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO — URGENCY FOCUSED ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#1a1a2e" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
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
                <span style={{ color: "#dc2626", fontSize: "13px", fontWeight: 600 }}>ACCOUNT SUSPENDED? ACT NOW</span>
              </div>

              <h1 className="typo-h1" style={{ marginBottom: "14px", color: "#fff" }}>
                Every Day Your Account is Suspended Costs You Money
              </h1>
              <p style={{ marginBottom: "12px", fontSize: "17px", color: "rgba(255,255,255,0.8)" }}>
                Professional Amazon account reinstatement with a <strong style={{ color: "#fff" }}>90%+ success rate</strong>. Expert appeal writing, evidence gathering, and direct communication with Seller Performance.
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
                Free case assessment. We only take cases we can win.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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

              {/* Trust badges */}
              <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap" }}>
                {[
                  { icon: <FaShieldAlt />, text: "90%+ Success Rate" },
                  { icon: <FaFileAlt />, text: "200+ Accounts Recovered" },
                  { icon: <FaClock />, text: "Appeal in 48-72 Hours" },
                ].map((badge) => (
                  <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                    <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SVG Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div style={{
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "1/1",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #2d1a1a 0%, #1a1a2e 100%)",
                border: "1px solid rgba(220,38,38,0.2)",
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
                <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "rgba(220,38,38,0.2)", borderRadius: "12px", padding: "6px 14px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#dc2626" }}>URGENT</span>
                </div>
                <FaShieldAlt style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.9, color: "var(--color-primary)" }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  90%+ Success Rate
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                  Expert appeal writing &amp; evidence gathering
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  {[
                    { val: "200+", label: "Recovered" },
                    { val: "48h", label: "Appeal Time" },
                    { val: "14d", label: "Avg Resolution" },
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

      {/* ── URGENCY BAR ── */}
      <section style={{ padding: "16px 0", backgroundColor: "#dc2626" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 600, margin: 0 }}>
            Suspended inventory in FBA? Your storage fees continue while your account is down. Lost sales compound daily. Act today.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Having your Amazon seller account suspended can be devastating. Your revenue stops, your inventory sits idle, and every day without action reduces your chances of recovery. At EcomGarden, we specialize in getting suspended Amazon accounts reinstated quickly and effectively.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our reinstatement experts have handled hundreds of suspension cases across every category and violation type. Whether your account was suspended for policy violations, intellectual property complaints, inauthentic item claims, or performance issues, we know exactly how to build a winning appeal.
              </p>
              <p className="typo-body">
                We do not use generic templates. Every Plan of Action we craft is tailored to your specific situation, backed by proper documentation and evidence. Our systematic approach has achieved a reinstatement success rate of over 90%.
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
                    "Inauthentic item claims",
                    "Intellectual property violations",
                    "Policy violations & restricted products",
                    "Account health / ODR violations",
                    "Linked account suspensions",
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

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="typo-label">Process</span>
            <h2 className="typo-h2">How Our Reinstatement Process Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", icon: <FaSearch style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Case Analysis", desc: "We review your suspension notice, account health, and performance metrics to identify the root cause" },
              { step: "02", icon: <FaClipboardCheck style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Evidence Gathering", desc: "Collect invoices, documentation, and supporting evidence needed for a compelling appeal" },
              { step: "03", icon: <FaFileAlt style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Appeal Writing", desc: "Craft a professional Plan of Action addressing root cause, corrective actions, and prevention steps" },
              { step: "04", icon: <FaShieldAlt style={{ fontSize: "24px", color: "var(--color-primary)" }} />, title: "Submit & Follow Up", desc: "Submit the appeal to Amazon and actively follow up until your account is fully reinstated" },
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
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Expert Reinstatement — Not Generic Templates</h2>
            <p className="typo-subtext">Every case is unique. Our approach is tailored to your specific suspension reason and history.</p>
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
                <img src={item.img} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "12px" }} />
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS RATE STATS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR TRACK RECORD</span>
            <h2 className="typo-h2">Reinstatement Success By The Numbers</h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "0", maxWidth: "800px", margin: "32px auto 0" }}>
            {successStats.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  flex: "1 1 auto",
                  textAlign: "center",
                  padding: "16px 28px",
                  position: "relative",
                  minWidth: "140px",
                  borderRight: index < successStats.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <AnimatedStat value={stat.value} suffix={stat.suffix} />
                <p className="typo-label" style={{ marginTop: "8px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">REAL RESULTS</span>
            <h2 className="typo-h2">Recent Reinstatement Cases</h2>
            <p className="typo-subtext">Real suspension cases. Real reinstatements. Details anonymized for client privacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {caseStudies.map((cs) => (
              <div
                key={cs.type}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{
                  display: "inline-block",
                  backgroundColor: "rgba(220,38,38,0.1)",
                  color: "#dc2626",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}>
                  {cs.type}
                </div>
                <p className="typo-small" style={{ marginBottom: "12px" }}>
                  <strong>Situation:</strong> {cs.situation}
                </p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px" }}>
                  <p className="typo-small" style={{ color: "var(--color-primary)" }}>
                    <FaCheckCircle style={{ marginRight: "6px", fontSize: "12px" }} />
                    <strong>Result:</strong> {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div style={{
                width: "100%",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--color-dark) 0%, #2d2d3f 100%)",
                padding: "32px",
                color: "#fff",
              }}>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
                  Our Recovery Process Includes
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Custom Plan of Action (no templates)",
                    "Root cause analysis & evidence gathering",
                    "Direct communication with Seller Performance",
                    "Multiple appeal attempts if needed",
                    "Post-reinstatement compliance setup",
                    "Ongoing account health monitoring",
                    "IP complaint resolution & prevention",
                    "Performance metric restoration",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Expert Account Recovery With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Amazon&apos;s Seller Performance team requires specific language, structure, and evidence in appeals. A poorly written Plan of Action can result in permanent account closure. Our specialists understand exactly what Amazon looks for and how to present your case for maximum impact.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Beyond reinstatement, we help you implement compliance measures to prevent future suspensions. This includes setting up proper inventory documentation, performance monitoring, intellectual property protection, and policy-compliant standard operating procedures for your business.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges. We provide a free initial consultation, and you only pay when we take on your case. If we cannot help, we will tell you honestly upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE ECOMGARDEN DIFFERENCE</span>
            <h2 className="typo-h2">Why Suspended Sellers Trust EcomGarden</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { title: "We Know What Amazon Wants to Hear", desc: "Our team has written hundreds of successful appeals. We know the exact language, structure, and evidence format that Seller Performance requires. Generic templates get denied — our custom POAs get approved." },
              { title: "We Handle Denied Appeals Others Give Up On", desc: "75%+ of our cases involve previously denied appeals. Other services send one template and walk away. We dig deeper, find stronger evidence, and resubmit until your account is back." },
              { title: "Speed Is Everything — We Move Fast", desc: "We begin working on your case immediately after consultation. Most appeals are written and submitted within 48-72 hours. Every day your account is down, you lose money and ranking." },
              { title: "Free Assessment — No Obligation", desc: "We review your suspension notice and account health for free. If we do not believe we can win your case, we tell you honestly and do not charge you. We only take cases we are confident about." },
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
                <h3 className="typo-h4" style={{ marginBottom: "8px", color: "var(--color-primary)" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
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

      {/* ── EMERGENCY CTA ── */}
      <section style={{ padding: "50px 0", backgroundColor: "#1a1a2e" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 className="typo-h2" style={{ color: "#fff", marginBottom: "12px" }}>
            Don&apos;t Wait Another Day. Get Your Account Back.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", maxWidth: "500px", margin: "0 auto 24px" }}>
            Free case assessment within 2 hours. We only take cases we can win.
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

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
