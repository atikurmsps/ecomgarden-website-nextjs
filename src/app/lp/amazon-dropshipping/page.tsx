"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaCheck,
  FaTimes,
  FaChevronDown,
  FaShieldAlt,
  FaArrowRight,
  FaArrowDown,
  FaStar,
  FaSearchDollar,
  FaShippingFast,
  FaUndoAlt,
  FaHeadset,
  FaChartLine,
  FaWarehouse,
  FaBullhorn,
  FaEnvelope,
  FaExclamationTriangle,
  FaUserSlash,
  FaGavel,
  FaHourglassHalf,
  FaStore,
  FaBoxOpen,
  FaDollarSign,
} from "react-icons/fa";
import LocalVideo from "@/components/LocalVideo";

const WHATSAPP = "https://wa.link/m2ac6m";

/* ---------- data ---------- */

const heroStats = [
  { value: "$12M+", label: "client revenue last year" },
  { value: "250+", label: "happy clients" },
  { value: "55+", label: "stores under management" },
  { value: "35%", label: "average ROI" },
];

const eduPoints = [
  {
    icon: FaStore,
    title: "You sell on Amazon — without owning inventory",
    text: "Products from big-box retailers (Walmart, Costco, Target, Home Depot) get listed on your Amazon store at a higher price. No bulk buying, no private label, no stock sitting in a garage.",
  },
  {
    icon: FaBoxOpen,
    title: "Orders are bought after the customer pays",
    text: "A customer orders from you first. Then the product is purchased from the retailer at the lower price. You're never holding unsold inventory — capital only moves when a sale exists.",
  },
  {
    icon: FaDollarSign,
    title: "The margin is the price gap",
    text: "Amazon shoppers pay for convenience and Prime-fast delivery. The spread between retail price and Amazon price — minus fees — is your profit on every single order.",
  },
];

const pains = [
  {
    icon: FaUserSlash,
    title: "Accounts get suspended",
    text: "Regular dropshipping ships straight from the retailer to your customer. Amazon detects it — and suspends the account you spent months building.",
  },
  {
    icon: FaGavel,
    title: "IP complaints kill listings",
    text: "List one wrong brand and you're fighting an intellectual-property claim with your funds frozen.",
  },
  {
    icon: FaHourglassHalf,
    title: "It eats your whole day",
    text: "Sourcing, repricing, fulfilling, answering buyers, chasing refunds — it's a full-time job pretending to be passive income.",
  },
];

const mechanism = [
  {
    step: "01",
    title: "Customer orders on Amazon",
    text: "Our team sources winning products daily from Walmart, Costco, Target & Home Depot — only 30-40% margin products get listed.",
  },
  {
    step: "02",
    title: "We rebox in our US warehouses",
    text: "Every order routes through our own warehouses in NY, FL & CT. Retailer branding removed, Amazon-compliant packaging on.",
  },
  {
    step: "03",
    title: "You collect the profit",
    text: "Policy-safe delivery, 0.02% order defect rate, account protected. We report every sale — you pay us from profit only.",
  },
];

const results = [
  {
    video: "3months",
    name: "Celena's Store",
    amount: "$153,438",
    period: "sales in 4 months",
    roi: "35% ROI",
    last: "$58,200 last month",
  },
  {
    video: "yearsales",
    name: "Thompson's Store",
    amount: "$691,224",
    period: "sales in 11 months",
    roi: "35% ROI",
    last: "$95,000 last month",
  },
  {
    video: "3days",
    name: "Joseph's Store",
    amount: "$8,780",
    period: "sales in first 2 days",
    roi: "25% ROI",
    last: "$50,000 last month",
  },
];

const weDo = [
  { icon: FaSearchDollar, text: "Research 50+ products daily — only winners get listed" },
  { icon: FaChartLine, text: "Win the Buy Box with SEO-optimized listings" },
  { icon: FaShippingFast, text: "Purchase & fulfill every order same day" },
  { icon: FaWarehouse, text: "Rebox in our 3 US warehouses (NY, FL, CT)" },
  { icon: FaShieldAlt, text: "Screen every product against IP-restricted brands" },
  { icon: FaUndoAlt, text: "Handle 100% of returns & refunds" },
  { icon: FaHeadset, text: "Answer every buyer within 4 hours" },
  { icon: FaBullhorn, text: "Run PPC & scale from 10 to 100+ SKUs" },
];

const youDo = [
  "Fund product purchases ($3,000–$5,000 working capital)",
  "Check your profit report & collect payouts",
];

const comparison = [
  { feature: "Daily expert product sourcing", us: true, diy: "—", others: "Limited catalog" },
  { feature: "Same-day order purchasing", us: true, diy: "You, every day", others: "Delayed" },
  { feature: "Own US warehouse reboxing", us: true, diy: "You arrange", others: "$3–5/order" },
  { feature: "IP complaint prevention", us: true, diy: "High risk", others: "Reactive only" },
  { feature: "Returns fully managed", us: true, diy: "You handle", others: "Extra fee" },
  { feature: "Pay only from profit", us: true, diy: "N/A", others: "Monthly retainer" },
  { feature: "Profit in first 7 days", us: true, diy: "Uncertain", others: "2–4 weeks" },
  { feature: "24/7 WhatsApp support", us: true, diy: "—", others: "Email only" },
];

const faqs = [
  {
    q: "Is Amazon 2-step dropshipping legal and safe?",
    a: "Yes — 100% legal and safe. Amazon allows selling products sourced from retail stores as long as they arrive in proper packaging with no third-party branding. That's exactly what 2-step means: every order routes through our warehouse, where we remove retailer branding and rebox in Amazon-compliant packaging.",
  },
  {
    q: "How is this different from regular dropshipping?",
    a: "Regular dropshipping ships directly from the retailer to your customer — which violates Amazon's policy and gets accounts suspended. With 2-step, everything passes through our own US warehouses first. Your account stays protected: our managed stores hold a 0.02% order defect rate.",
  },
  {
    q: "What ROI can I realistically expect?",
    a: "Our average ROI is 35%. You keep a 30-40% profit margin after ALL expenses — Amazon fees, product cost, shipping, warehouse reboxing, everything. On a $5,000 cycle, that's $1,500–$2,000 profit.",
  },
  {
    q: "How much money do I need to start?",
    a: "$3,000–$5,000 working capital. This buys products — it never pays us. Amazon pays out 14 days after delivery, so you need funds to purchase while waiting. Our management fee is $0 upfront, taken from profit only.",
  },
  {
    q: "What exactly do you charge?",
    a: "Nothing upfront. We work on profit sharing — a percentage of the profit we generate for you. No profit, no fee. Ever.",
  },
  {
    q: "What if my store doesn't profit?",
    a: "Then you pay nothing — and any charge is refunded in full, no questions asked. That's our 100% profit guarantee.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no lock-in periods. Our retention rate is 90%+ because results keep clients, not contracts.",
  },
  {
    q: "Who handles IP complaints and account health?",
    a: "We do. Every product is screened against known IP-restricted brands before listing. Our IP complaint rate over 3+ years is under 0.5%.",
  },
];

/* ---------- page ---------- */

export default function AmazonDropshippingFunnel() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="fnl">
      {/* ── URGENCY BAR ── */}
      <div className="fnl-urgency">
        <FaExclamationTriangle style={{ fontSize: "12px" }} />
        <span>
          Warehouse capacity is real — we onboard a <strong>limited number of stores each month</strong>. This
          month&apos;s slots are filling.
        </span>
      </div>

      {/* ── MINIMAL HEADER ── */}
      <header className="fnl-header">
        <div className="fnl-header-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-white.webp" alt="EcomGarden" style={{ height: "32px", width: "auto" }} />
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fnl-btn fnl-btn-sm">
            <FaWhatsapp /> Free Profit Plan
          </a>
        </div>
      </header>

      {/* ── HERO / VSL ── */}
      <section className="fnl-hero">
        <p className="fnl-prehead">For people who want Amazon income — without running an Amazon store</p>
        <h1 className="fnl-h1">
          Own an Amazon Store That Pays You a <span className="fnl-glow">30–40% Margin</span> Without
          Touching a Single Order
        </h1>
        <p className="fnl-sub">
          Our 50+ person team builds, stocks and runs your store through our own 3 US warehouses.
          You pay <strong>$0 upfront</strong> — we only earn a share of profit <em>after you profit</em>.
        </p>

        {/* VSL */}
        <div className="fnl-vsl">
          <div className="fnl-vsl-inner">
            <LocalVideo
              src="/videos/yearsales.mp4"
              poster="/images/video-thumbs/yearsales.jpg"
              title="Watch: how Celena's store made $153,438 in 4 months"
            />
          </div>
          <p className="fnl-vsl-cap">
            ▶ Watch Celena explain how her store made <strong>$153,438 in 4 months</strong>
          </p>
        </div>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fnl-btn fnl-btn-xl">
          Get My Free Profit Plan <FaArrowRight />
        </a>
        <p className="fnl-micro">Free WhatsApp consult · No card needed · Reply in ~2 minutes</p>

        {/* hero stats */}
        <div className="fnl-stats">
          {heroStats.map((s) => (
            <div key={s.label} className="fnl-stat">
              <span className="fnl-stat-v">{s.value}</span>
              <span className="fnl-stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION: WHAT IS AMAZON DROPSHIPPING ── */}
      <section className="fnl-sec fnl-light">
        <p className="fnl-kicker">New to this? Start here</p>
        <h2 className="fnl-h2">Amazon Dropshipping, Explained in 60 Seconds</h2>
        <p className="fnl-lead">
          Amazon is a $570B+ marketplace — and more than half of everything sold there is sold by
          independent third-party sellers, not Amazon itself. Dropshipping is the lowest-barrier way
          to become one of them.
        </p>

        <div className="fnl-edu">
          <div className="fnl-edu-points">
            {eduPoints.map((p) => (
              <div key={p.title} className="fnl-edu-point">
                <div className="fnl-edu-ico"><p.icon /></div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
            <div className="fnl-edu-note">
              <FaShieldAlt />
              <p>
                <strong>The catch:</strong> shipping retailer-to-customer directly violates Amazon&apos;s
                dropshipping policy. That&apos;s why we run the <strong>2-step model</strong> — every order
                passes through our US warehouses and gets repackaged Amazon-compliant. Same economics,
                zero policy risk.
              </p>
            </div>
          </div>

          {/* unit economics receipt */}
          <div className="fnl-receipt">
            <p className="fnl-receipt-head">Typical product economics</p>
            <div className="fnl-receipt-row">
              <span>Sold on your Amazon store</span>
              <span className="fnl-receipt-plus">$99.99</span>
            </div>
            <div className="fnl-receipt-row">
              <span>Product cost (Walmart)</span>
              <span>− $58.00</span>
            </div>
            <div className="fnl-receipt-row">
              <span>Amazon fees</span>
              <span>− $13.50</span>
            </div>
            <div className="fnl-receipt-row">
              <span>Rebox + shipping</span>
              <span>− $7.50</span>
            </div>
            <div className="fnl-receipt-total">
              <span>Your profit per order</span>
              <span>$20.99</span>
            </div>
            <p className="fnl-receipt-foot">
              ≈ 32% return on the $65.50 you put in — repeated across every order, every day.
              Amazon pays out 14 days after delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section className="fnl-sec fnl-gray">
        <p className="fnl-kicker fnl-kicker-red">Why 90% of Amazon sellers quit</p>
        <h2 className="fnl-h2">So Why Doesn&apos;t Everyone Just Do It Themselves?</h2>
        <div className="fnl-pain-grid">
          {pains.map((p) => (
            <div key={p.title} className="fnl-pain-card">
              <p.icon className="fnl-pain-ico" />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="fnl-bridge">
          The problem was never Amazon. It was doing it <strong>alone, without infrastructure</strong>. Here&apos;s
          what changes when a 50-person team with 3 warehouses runs it for you:
        </p>
        <div className="fnl-center" style={{ marginTop: "8px" }}>
          <FaArrowDown style={{ color: "#16a34a", fontSize: "20px" }} />
        </div>
      </section>

      {/* ── MECHANISM ── */}
      <section className="fnl-sec fnl-dark">
        <p className="fnl-kicker">The 2-Step Model</p>
        <h2 className="fnl-h2 fnl-white">
          The Only Dropshipping Model That <span className="fnl-glow">Protects Your Account</span>
        </h2>
        <div className="fnl-mech-grid">
          {mechanism.map((m, i) => (
            <div key={m.step} className="fnl-mech-card">
              <span className="fnl-mech-num">{m.step}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              {i < mechanism.length - 1 && <FaArrowRight className="fnl-mech-arrow" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="fnl-sec fnl-light" id="results">
        <p className="fnl-kicker">Proof, not promises</p>
        <h2 className="fnl-h2">Our Clients Show Their Dashboards on Camera</h2>
        <div className="fnl-proof-grid">
          {results.map((r) => (
            <div key={r.video} className="fnl-proof-card">
              <div className="fnl-proof-video">
                <LocalVideo
                  src={`/videos/${r.video}.mp4`}
                  poster={`/images/video-thumbs/${r.video}.jpg`}
                  title={`${r.name} — ${r.amount} ${r.period}`}
                />
              </div>
              <div className="fnl-proof-body">
                <div className="fnl-proof-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="fnl-proof-amount">{r.amount}</span>
                <span className="fnl-proof-period">{r.period}</span>
                <div className="fnl-proof-meta">
                  <span>{r.name}</span>
                  <span className="fnl-proof-roi">{r.roi}</span>
                </div>
                <p className="fnl-proof-last">{r.last} · 0.02% defect rate · zero health issues</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fnl-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fnl-btn fnl-btn-lg">
            I Want Results Like These <FaArrowRight />
          </a>
        </div>
      </section>

      {/* ── WE DO / YOU DO ── */}
      <section className="fnl-sec fnl-gray">
        <p className="fnl-kicker">Truly hands-off</p>
        <h2 className="fnl-h2">What We Do vs. What You Do</h2>
        <div className="fnl-split">
          <div className="fnl-split-col fnl-split-we">
            <h3>We handle</h3>
            <ul>
              {weDo.map((w) => (
                <li key={w.text}>
                  <w.icon className="fnl-split-ico" />
                  {w.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="fnl-split-col fnl-split-you">
            <h3>You handle</h3>
            <ul>
              {youDo.map((y) => (
                <li key={y}>
                  <FaCheck className="fnl-split-ico" />
                  {y}
                </li>
              ))}
            </ul>
            <p className="fnl-split-note">That&apos;s it. Seriously.</p>
          </div>
        </div>
      </section>

      {/* ── OFFER + GUARANTEE ── */}
      <section className="fnl-sec fnl-dark">
        <p className="fnl-kicker">The offer</p>
        <h2 className="fnl-h2 fnl-white">
          Other Agencies Charge Monthly Retainers. <span className="fnl-glow">We Charge $0 Until You Profit.</span>
        </h2>

        <div className="fnl-offer">
          <ul className="fnl-offer-list">
            {[
              ["$0 upfront management fee", "we take a share of profit only after you profit"],
              ["$3,000–$5,000 working capital", "buys your inventory — never pays us"],
              ["30–40% margin after ALL expenses", "average ROI across stores: 35%"],
              ["First profit typically in 7 days", "not months — days"],
              ["100% profit guarantee", "full refund of any charge, no questions asked"],
              ["No contracts, cancel anytime", "90%+ of clients stay anyway"],
            ].map(([head, tail]) => (
              <li key={head}>
                <FaCheck className="fnl-offer-check" />
                <span>
                  <strong>{head}</strong> — {tail}
                </span>
              </li>
            ))}
          </ul>

          <div className="fnl-seal">
            <FaShieldAlt className="fnl-seal-ico" />
            <span className="fnl-seal-big">100%</span>
            <span className="fnl-seal-txt">PROFIT GUARANTEE</span>
            <span className="fnl-seal-sub">No profit → full refund</span>
          </div>
        </div>

        <div className="fnl-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fnl-btn fnl-btn-xl">
            Claim My Free Profit Plan <FaArrowRight />
          </a>
          <p className="fnl-micro" style={{ color: "#8b8ba3" }}>
            We&apos;ll review your situation and show your numbers before you commit to anything.
          </p>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="fnl-sec fnl-light">
        <p className="fnl-kicker">Compare for yourself</p>
        <h2 className="fnl-h2">EcomGarden vs. DIY vs. Other Agencies</h2>
        <div className="fnl-table-wrap">
          <table className="fnl-table">
            <thead>
              <tr>
                <th></th>
                <th className="fnl-th-us">EcomGarden</th>
                <th>DIY</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature}>
                  <td className="fnl-td-feature">{row.feature}</td>
                  <td className="fnl-td-us"><FaCheck /></td>
                  <td>{row.diy === "—" ? <FaTimes className="fnl-x" /> : row.diy}</td>
                  <td>{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="fnl-sec fnl-gray">
        <p className="fnl-kicker">Still thinking?</p>
        <h2 className="fnl-h2">Every Question, Answered Straight</h2>
        <div className="fnl-faq">
          {faqs.map((f, i) => (
            <div key={f.q} className={`fnl-faq-item ${openFaq === i ? "open" : ""}`}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <FaChevronDown className="fnl-faq-chev" />
              </button>
              {openFaq === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="fnl-final">
        <h2 className="fnl-h2 fnl-white">
          Your Store Could Be Profitable <span className="fnl-glow">7 Days From Now</span>
        </h2>
        <p className="fnl-final-sub">
          Or you can keep scrolling and let someone else take this month&apos;s onboarding slot. Message us —
          worst case, you get a free profit plan and walk away smarter.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fnl-btn fnl-btn-xl">
          <FaWhatsapp style={{ fontSize: "20px" }} /> Start Risk-Free on WhatsApp
        </a>
        <div className="fnl-contact">
          <span><FaEnvelope /> info@ecomgarden.com</span>
        </div>
      </section>

      {/* ── MINI FOOTER ── */}
      <footer className="fnl-footer">
        <span>© {new Date().getFullYear()} EcomGarden — Operated by Ekkid LLC (USA) &amp; ITFLE LTD (UK)</span>
        <span className="fnl-footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </span>
      </footer>

      {/* ── STICKY MOBILE CTA ── */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fnl-sticky-cta">
        <FaWhatsapp style={{ fontSize: "18px" }} /> Get Free Profit Plan — $0 Upfront
      </a>

      {/* ── STYLES ── */}
      <style jsx>{`
        .fnl {
          --ink: #0b0f1a;
          --ink2: #111827;
          --panel: #1b2336;
          --green: #22c55e;
          --green-d: #16a34a;
          --amber: #fbbf24;
          --amber-d: #d97706;
          --txt-dim: #9aa3b8;
          --body-ink: #475063;
          --head-ink: #10141f;
          --f-display: var(--font-display), sans-serif;
          --f-body: var(--font-body), sans-serif;
          background: #fff;
          font-family: var(--f-body);
          -webkit-font-smoothing: antialiased;
        }

        /* ===== typography ===== */
        .fnl-h1 {
          font-family: var(--f-display);
          font-size: clamp(32px, 5.2vw, 58px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.025em;
          max-width: 980px;
          margin: 0 auto;
          text-wrap: balance;
        }
        .fnl-h2 {
          font-family: var(--f-display);
          font-size: clamp(26px, 3.8vw, 40px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.02em;
          text-align: center;
          color: var(--head-ink);
          max-width: 840px;
          margin: 0 auto;
          text-wrap: balance;
        }
        .fnl-kicker {
          font-family: var(--f-display);
          text-transform: uppercase;
          letter-spacing: 0.26em;
          font-size: 12px;
          font-weight: 700;
          color: var(--green-d);
          text-align: center;
          margin-bottom: 14px;
        }
        .fnl-kicker-red { color: #dc2626; }
        .fnl-lead {
          font-size: clamp(16px, 2vw, 18.5px);
          line-height: 1.7;
          color: var(--body-ink);
          text-align: center;
          max-width: 700px;
          margin: 18px auto 0;
        }
        .fnl-glow {
          color: var(--green);
          text-shadow: 0 0 42px rgba(34, 197, 94, 0.5);
        }
        .fnl-white { color: #fff; }

        /* urgency bar */
        .fnl-urgency {
          background: linear-gradient(90deg, #78350f, #b45309 50%, #78350f);
          color: #fff7ed;
          font-size: 13px;
          letter-spacing: 0.01em;
          padding: 9px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-align: center;
        }

        /* header */
        .fnl-header {
          background: rgba(11, 15, 26, 0.92);
          backdrop-filter: blur(10px);
          padding: 14px 20px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }
        .fnl-header-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* buttons */
        .fnl-btn {
          font-family: var(--f-display);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(180deg, var(--amber), var(--amber-d));
          color: #221502;
          font-weight: 800;
          letter-spacing: -0.01em;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.32), inset 0 1.5px 0 rgba(255, 255, 255, 0.4);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .fnl-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(245, 158, 11, 0.45), inset 0 1.5px 0 rgba(255, 255, 255, 0.4);
        }
        .fnl-btn-sm { font-size: 14px; padding: 10px 18px; border-radius: 10px; }
        .fnl-btn-lg { font-size: 16px; padding: 16px 34px; }
        .fnl-btn-xl { font-size: 18px; padding: 19px 46px; }

        /* hero */
        .fnl-hero {
          background:
            radial-gradient(1200px 540px at 50% -12%, rgba(34, 197, 94, 0.16) 0%, transparent 60%),
            linear-gradient(180deg, #0d1322 0%, var(--ink) 100%);
          color: #fff;
          text-align: center;
          padding: 72px 20px 76px;
        }
        .fnl-prehead {
          font-family: var(--f-display);
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 22px;
        }
        .fnl-sub {
          color: var(--txt-dim);
          font-size: clamp(15.5px, 2vw, 18px);
          line-height: 1.7;
          max-width: 640px;
          margin: 22px auto 0;
        }
        .fnl-sub strong, .fnl-sub em { color: #eef1f8; font-style: normal; }

        .fnl-vsl { max-width: 800px; margin: 40px auto 32px; }
        .fnl-vsl-inner {
          position: relative;
          padding-bottom: 56.25%;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(34, 197, 94, 0.4);
          box-shadow: 0 0 0 8px rgba(34, 197, 94, 0.07), 0 36px 90px rgba(0, 0, 0, 0.6);
        }
        .fnl-vsl-cap { color: var(--txt-dim); font-size: 14.5px; margin-top: 16px; }
        .fnl-vsl-cap strong { color: var(--green); }

        .fnl-micro { font-size: 13px; color: var(--txt-dim); margin-top: 14px; letter-spacing: 0.01em; }

        .fnl-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          max-width: 840px;
          margin: 48px auto 0;
        }
        .fnl-stat {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 16px;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .fnl-stat-v {
          font-family: var(--f-display);
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--green);
          font-variant-numeric: tabular-nums;
        }
        .fnl-stat-l { font-size: 12.5px; color: var(--txt-dim); }

        /* sections */
        .fnl-sec { padding: 76px 20px; }
        .fnl-light { background: #fff; }
        .fnl-gray { background: #f4f6fa; }
        .fnl-dark { background: var(--ink2); }
        .fnl-center { text-align: center; margin-top: 40px; }

        /* education */
        .fnl-edu {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 36px;
          align-items: start;
          max-width: 1020px;
          margin: 44px auto 0;
        }
        .fnl-edu-points { display: flex; flex-direction: column; gap: 26px; }
        .fnl-edu-point { display: flex; gap: 18px; align-items: flex-start; }
        .fnl-edu-ico {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #ecfdf3;
          border: 1px solid #bbf7d0;
          color: var(--green-d);
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fnl-edu-point h3 {
          font-family: var(--f-display);
          font-size: 17.5px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--head-ink);
          margin-bottom: 6px;
        }
        .fnl-edu-point p { font-size: 15px; line-height: 1.7; color: var(--body-ink); }
        .fnl-edu-note {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #fffbeb;
          border: 1px solid #fde68a;
          border-radius: 14px;
          padding: 18px 20px;
          color: #92400e;
          font-size: 14.5px;
          line-height: 1.65;
        }
        .fnl-edu-note svg { flex-shrink: 0; margin-top: 3px; font-size: 16px; }
        .fnl-edu-note strong { color: #78350f; }

        .fnl-receipt {
          background: var(--ink2);
          border-radius: 20px;
          padding: 28px 26px 24px;
          box-shadow: 0 24px 60px rgba(13, 23, 48, 0.25);
          position: sticky;
          top: 84px;
        }
        .fnl-receipt-head {
          font-family: var(--f-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--green);
          margin-bottom: 18px;
        }
        .fnl-receipt-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
          color: #c4cbda;
          font-size: 15px;
        }
        .fnl-receipt-row span:last-child {
          font-variant-numeric: tabular-nums;
          font-weight: 600;
          color: #e7ebf4;
        }
        .fnl-receipt-plus { color: var(--green) !important; }
        .fnl-receipt-total {
          display: flex;
          justify-content: space-between;
          padding: 16px 0 6px;
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 19px;
          color: #fff;
        }
        .fnl-receipt-total span:last-child {
          color: var(--green);
          font-size: 24px;
          font-variant-numeric: tabular-nums;
        }
        .fnl-receipt-foot {
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--txt-dim);
          margin-top: 10px;
        }

        /* pain */
        .fnl-pain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 1020px;
          margin: 40px auto 0;
        }
        .fnl-pain-card {
          background: #fff;
          border: 1px solid #fee2e2;
          border-top: 4px solid #dc2626;
          border-radius: 16px;
          padding: 28px 24px;
          box-shadow: 0 8px 28px rgba(220, 38, 38, 0.06);
        }
        .fnl-pain-ico { font-size: 26px; color: #dc2626; margin-bottom: 16px; }
        .fnl-pain-card h3 {
          font-family: var(--f-display);
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          color: var(--head-ink);
        }
        .fnl-pain-card p { font-size: 14.5px; line-height: 1.7; color: var(--body-ink); }
        .fnl-bridge {
          text-align: center;
          font-size: 17.5px;
          line-height: 1.65;
          color: #333;
          max-width: 640px;
          margin: 42px auto 0;
        }

        /* mechanism */
        .fnl-mech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 1020px;
          margin: 44px auto 0;
        }
        .fnl-mech-card {
          position: relative;
          background: var(--panel);
          border: 1px solid rgba(34, 197, 94, 0.22);
          border-radius: 16px;
          padding: 30px 26px;
        }
        .fnl-mech-num {
          font-family: var(--f-display);
          font-size: 13px;
          font-weight: 800;
          color: var(--green);
          letter-spacing: 0.25em;
        }
        .fnl-mech-card h3 {
          font-family: var(--f-display);
          color: #fff;
          font-size: 18.5px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 12px 0 8px;
        }
        .fnl-mech-card p { color: var(--txt-dim); font-size: 14.5px; line-height: 1.7; }
        .fnl-mech-arrow {
          position: absolute;
          right: -17px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--green);
          font-size: 18px;
          z-index: 2;
        }

        /* proof */
        .fnl-proof-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 40px auto 0;
        }
        .fnl-proof-card {
          background: #fff;
          border: 1px solid #e6e9f0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(13, 23, 48, 0.09);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .fnl-proof-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 52px rgba(13, 23, 48, 0.14);
        }
        .fnl-proof-video { position: relative; padding-bottom: 56.25%; }
        .fnl-proof-body { padding: 20px 22px 24px; display: flex; flex-direction: column; }
        .fnl-proof-stars { color: #f59e0b; font-size: 13px; display: flex; gap: 3px; margin-bottom: 10px; }
        .fnl-proof-amount {
          font-family: var(--f-display);
          font-size: 34px;
          font-weight: 800;
          color: var(--green-d);
          letter-spacing: -0.03em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .fnl-proof-period { font-size: 14px; color: var(--body-ink); margin-top: 5px; }
        .fnl-proof-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 14px;
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 14px;
          color: var(--head-ink);
        }
        .fnl-proof-roi {
          background: #dcfce7;
          color: var(--green-d);
          border-radius: 50px;
          padding: 4px 13px;
          font-size: 12px;
          font-weight: 800;
        }
        .fnl-proof-last { font-size: 12.5px; color: #8a93a6; margin-top: 12px; }

        /* split */
        .fnl-split {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
          max-width: 940px;
          margin: 40px auto 0;
        }
        .fnl-split-col { border-radius: 18px; padding: 30px 28px; }
        .fnl-split-we { background: var(--ink2); }
        .fnl-split-you { background: #fff; border: 2px dashed var(--green-d); }
        .fnl-split-col h3 {
          font-family: var(--f-display);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          margin-bottom: 20px;
        }
        .fnl-split-we h3 { color: var(--green); }
        .fnl-split-you h3 { color: var(--green-d); }
        .fnl-split-col ul { display: flex; flex-direction: column; gap: 14px; }
        .fnl-split-col li {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          font-size: 15px;
          line-height: 1.55;
        }
        .fnl-split-we li { color: #d3d9e6; }
        .fnl-split-you li { color: #2b3346; font-weight: 600; }
        .fnl-split-ico { color: var(--green); flex-shrink: 0; margin-top: 1px; font-size: 20px; }
        .fnl-split-you .fnl-split-ico { color: var(--green-d); }
        .fnl-split-note {
          margin-top: 20px;
          font-size: 14.5px;
          font-style: italic;
          color: var(--green-d);
          font-weight: 700;
        }

        /* offer */
        .fnl-offer {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 32px;
          align-items: center;
          max-width: 920px;
          margin: 44px auto 0;
        }
        .fnl-offer-list { display: flex; flex-direction: column; gap: 17px; }
        .fnl-offer-list li { display: flex; gap: 15px; align-items: flex-start; }
        .fnl-offer-list span { color: #c2c9da; font-size: 16px; line-height: 1.6; }
        .fnl-offer-list strong { color: #fff; font-weight: 700; }
        .fnl-offer-check { color: var(--green); font-size: 16px; margin-top: 4px; flex-shrink: 0; }
        .fnl-seal {
          justify-self: center;
          width: 215px;
          height: 215px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 25%, #1f9d4e, #15803d 70%);
          border: 4px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 0 12px rgba(34, 197, 94, 0.1), 0 28px 64px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          color: #fff;
          text-align: center;
          transform: rotate(-6deg);
        }
        .fnl-seal-ico { font-size: 26px; margin-bottom: 7px; opacity: 0.9; }
        .fnl-seal-big { font-family: var(--f-display); font-size: 46px; font-weight: 800; line-height: 1; }
        .fnl-seal-txt { font-family: var(--f-display); font-size: 13px; font-weight: 800; letter-spacing: 0.12em; }
        .fnl-seal-sub { font-size: 11px; opacity: 0.85; margin-top: 5px; }

        /* table */
        .fnl-table-wrap { overflow-x: auto; max-width: 900px; margin: 38px auto 0; }
        .fnl-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
          border: 1px solid #e6e9f0;
          border-radius: 18px;
          overflow: hidden;
        }
        .fnl-table th {
          font-family: var(--f-display);
          padding: 17px 16px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          background: #10141f;
          color: #8a93a6;
        }
        .fnl-th-us { color: var(--green) !important; font-size: 13px !important; }
        .fnl-table td {
          padding: 14px 16px;
          font-size: 14px;
          text-align: center;
          color: var(--body-ink);
          border-top: 1px solid #eef0f5;
        }
        .fnl-td-feature { text-align: left !important; font-weight: 600; color: var(--head-ink) !important; }
        .fnl-td-us { background: #f0fdf4; color: var(--green-d) !important; font-size: 16px !important; }
        .fnl-x { color: #dc2626; }
        .fnl-table td svg { display: block; margin: 0 auto; vertical-align: middle; }

        /* faq */
        .fnl-faq {
          max-width: 730px;
          margin: 38px auto 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .fnl-faq-item {
          background: #fff;
          border: 1px solid #e6e9f0;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .fnl-faq-item.open {
          border-color: var(--green-d);
          box-shadow: 0 8px 28px rgba(22, 163, 74, 0.08);
        }
        .fnl-faq-item button {
          font-family: var(--f-display);
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          padding: 18px 22px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15.5px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--head-ink);
          text-align: left;
        }
        .fnl-faq-chev { color: #8a93a6; flex-shrink: 0; transition: transform 0.2s; }
        .fnl-faq-item.open .fnl-faq-chev { transform: rotate(180deg); color: var(--green-d); }
        .fnl-faq-item p {
          padding: 0 22px 20px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--body-ink);
        }

        /* final */
        .fnl-final {
          background:
            radial-gradient(1000px 460px at 50% 115%, rgba(34, 197, 94, 0.18) 0%, transparent 60%),
            linear-gradient(180deg, var(--ink) 0%, #0d1322 100%);
          text-align: center;
          padding: 80px 20px 88px;
        }
        .fnl-final-sub {
          color: var(--txt-dim);
          font-size: 16.5px;
          line-height: 1.7;
          max-width: 560px;
          margin: 18px auto 34px;
        }
        .fnl-contact {
          display: flex;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
          margin-top: 28px;
          color: var(--txt-dim);
          font-size: 14px;
        }
        .fnl-contact span { display: inline-flex; align-items: center; gap: 8px; }

        /* footer */
        .fnl-footer {
          background: #070a12;
          color: #6b7287;
          font-size: 12.5px;
          padding: 20px 28px 88px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .fnl-footer a { color: #6b7287; text-decoration: underline; margin-left: 14px; }

        /* sticky mobile cta */
        .fnl-sticky-cta {
          font-family: var(--f-display);
          display: none;
          position: fixed;
          left: 12px;
          right: 12px;
          bottom: 12px;
          z-index: 200;
          background: linear-gradient(180deg, #25d366, #1da851);
          color: #fff;
          font-weight: 800;
          font-size: 15px;
          padding: 16px;
          border-radius: 14px;
          text-decoration: none;
          align-items: center;
          justify-content: center;
          gap: 9px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        /* responsive */
        @media (max-width: 900px) {
          .fnl-pain-grid, .fnl-mech-grid, .fnl-proof-grid { grid-template-columns: 1fr; max-width: 480px; }
          .fnl-mech-arrow { display: none; }
          .fnl-split, .fnl-offer, .fnl-edu { grid-template-columns: 1fr; max-width: 560px; }
          .fnl-receipt { position: static; }
          .fnl-seal { margin-top: 10px; }
          .fnl-stats { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .fnl-sticky-cta { display: flex; }
          .fnl-sec { padding: 54px 16px; }
          .fnl-hero { padding: 52px 16px 60px; }
          .fnl-btn-xl { width: 100%; font-size: 16px; padding: 17px 20px; }
        }
      `}</style>
    </div>
  );
}
