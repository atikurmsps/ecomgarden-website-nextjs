import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Walmart Wholesale Management Services | EcomGarden",
  description:
    "Professional wholesale product sourcing for Walmart marketplace. Brand approvals, bulk inventory management, pricing optimization, and complete store management.",
};

const faqs = [
  {
    question: "What is Walmart wholesale selling?",
    answer:
      "Walmart wholesale selling involves purchasing products in bulk directly from authorized distributors or brand manufacturers at wholesale prices and reselling them on Walmart's marketplace at retail prices. This model offers higher profit margins and consistent supply compared to retail arbitrage.",
  },
  {
    question: "How do you source wholesale products for Walmart?",
    answer:
      "We source products from authorized distributors, brand manufacturers, and verified wholesale suppliers. Our team negotiates pricing, verifies authenticity, and ensures all products come with proper invoices and documentation required by Walmart.",
  },
  {
    question: "Do I need brand approval to sell wholesale on Walmart?",
    answer:
      "Yes, many brands require approval before you can list their products on Walmart. Our team handles the entire brand approval process including preparing applications, submitting invoices, and following up with brand representatives to secure authorization.",
  },
  {
    question: "How much investment is needed for wholesale on Walmart?",
    answer:
      "The initial investment varies based on your goals, but we recommend starting with $5,000-$10,000 for inventory. Wholesale requires purchasing products in bulk upfront, but the higher margins and consistent supply make it a highly profitable model.",
  },
  {
    question: "What profit margins can I expect with wholesale?",
    answer:
      "Average profit margins for wholesale on Walmart range from 15-35% after all fees and costs. Our team focuses on finding products with strong demand and healthy margins, ensuring your investment generates consistent returns.",
  },
  {
    question: "How do you handle pricing optimization?",
    answer:
      "We use advanced repricing tools and market analysis to keep your products competitively priced. Our team monitors competitor pricing daily, adjusts prices to win the Buy Box, and ensures your margins stay within profitable ranges.",
  },
  {
    question: "Can you manage inventory for multiple wholesale suppliers?",
    answer:
      "Yes, we manage relationships with multiple wholesale suppliers simultaneously. Our inventory management system tracks stock levels across all suppliers, automates reorder points, and ensures you never run out of your best-selling products.",
  },
  {
    question: "What if a product doesn't sell well?",
    answer:
      "Before purchasing any wholesale inventory, our team conducts thorough product research including demand analysis, competition assessment, and profitability calculations. If a product underperforms, we adjust pricing, optimize listings, or pivot to better-performing alternatives.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Product Research",
    description: "Identify high-demand, profitable wholesale products with strong sales potential on Walmart",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Brand Approval",
    description:
      "Secure brand authorizations and establish relationships with authorized distributors",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Bulk Purchase",
    description:
      "Purchase inventory in bulk at wholesale pricing and coordinate shipping to your warehouse or WFS",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "List & Optimize",
    description:
      "Create optimized listings with SEO keywords, competitive pricing, and enhanced content",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Scale & Profit",
    description:
      "Monitor performance, replenish inventory, and scale winning products for maximum profitability",
  },
];

export default function WalmartWholesalePage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Walmart Wholesale</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Walmart Wholesale Management Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Build a sustainable, high-margin Walmart business with wholesale
            product sourcing, brand approvals, bulk inventory management, and
            expert pricing optimization.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Quick WhatsApp
            </a>
            <Link href="/services" className="btn-outline">
              Browse More Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Wholesale selling on Walmart is one of the most reliable and
                scalable e-commerce business models. By purchasing products in
                bulk from authorized distributors and brand manufacturers, you
                secure lower costs and higher profit margins compared to retail
                arbitrage or dropshipping.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our Walmart wholesale management service covers the entire
                process from product research and brand approvals to inventory
                management and listing optimization. We work with verified
                suppliers to ensure product authenticity and competitive pricing.
              </p>
              <p className="typo-body">
                For example, purchasing a product wholesale at $8 per unit and
                selling it on Walmart for $22 gives you a $14 gross margin.
                After Walmart fees and shipping, you keep $7-9 in profit per
                unit. With products selling 20-50 units daily, the numbers add
                up quickly to substantial monthly revenue.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="Walmart Wholesale Management Services"
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
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="typo-label">Process</span>
            <h2 className="typo-h2">How Walmart Wholesale Works</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="typo-small" style={{ color: "#ffffff" }}>{index + 1}</span>
                    </div>
                  </div>
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "6px" }}>
                  {step.title}
                </h3>
                <p className="typo-small">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-secondary.jpg"
                alt="Wholesale Account Management With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Wholesale Account Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, our wholesale management team handles everything
                from supplier negotiations and brand approvals to inventory
                forecasting and listing optimization. We build long-term
                relationships with distributors to secure the best wholesale
                pricing for your store.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our dedicated team manages product research, competitive
                analysis, pricing strategy, catalog management, order processing,
                customer support, and account health monitoring. We use
                data-driven tools to identify winning products and optimize your
                wholesale portfolio for maximum returns.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges. You
                maintain full control of your Walmart seller account and
                supplier relationships. Cancel anytime with no long-term
                contracts or commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Walmart Wholesale"
        pros={[
          "Higher profit margins than dropshipping",
          "Consistent and reliable product supply",
          "Build long-term supplier relationships",
          "Authorized products reduce IP complaint risks",
          "Scalable with predictable inventory costs",
          "Better account health with authentic invoices",
        ]}
        cons={[
          "Requires upfront inventory investment",
          "Need storage space or 3PL warehouse",
        ]}
      />

      {/* Service Features Grid */}
      <ServiceFeaturesGrid />

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
