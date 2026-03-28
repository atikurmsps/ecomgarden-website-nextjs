import { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Amazon FBA Management Services - EcomGarden",
  description:
    "Complete Amazon FBA management including private label product research, listing optimization, PPC management, and inventory replenishment. Grow your FBA business with EcomGarden.",
};

const faqs = [
  {
    question: "What is Amazon FBA and how does it work?",
    answer:
      "FBA stands for Fulfilled by Amazon. You send your products to Amazon's fulfillment centers, and Amazon handles storage, packing, shipping, customer service, and returns. You focus on sourcing products and growing your brand while Amazon handles the logistics.",
  },
  {
    question: "How much investment do I need to start an FBA business?",
    answer:
      "A good starting budget for Amazon FBA is $10,000-$15,000. This covers initial inventory, product photography, listing optimization, and PPC advertising. For a minimum start, you can begin with $5,000 but growth will be slower.",
  },
  {
    question: "How long does it take to see profit with FBA?",
    answer:
      "Most FBA businesses start seeing consistent profit within 3-6 months. The first 1-2 months are typically spent on product research, sourcing, and launch. Once your listings are optimized and PPC campaigns are running, revenue builds steadily.",
  },
  {
    question: "Do you help with private label product development?",
    answer:
      "Yes, we provide end-to-end private label support including market research, competitor analysis, supplier sourcing, sample evaluation, packaging design, and brand registry. We guide you through every step of building your own brand on Amazon.",
  },
  {
    question: "How do you manage PPC advertising for FBA products?",
    answer:
      "We create and optimize Sponsored Products, Sponsored Brands, and Sponsored Display campaigns. Our team monitors ACoS, adjusts bids daily, performs keyword research, and runs A/B tests to maximize your advertising ROI while maintaining profitability.",
  },
  {
    question: "What happens if my inventory runs out of stock?",
    answer:
      "Running out of stock hurts your ranking and sales velocity. Our inventory management system tracks stock levels, forecasts demand, and sends reorder alerts well in advance so you never lose momentum due to stockouts.",
  },
  {
    question: "Will you manage my entire FBA business?",
    answer:
      "Yes, we provide complete A-Z FBA management including product research, supplier negotiation, listing creation, SEO optimization, PPC management, inventory planning, customer support, and performance monitoring.",
  },
  {
    question: "What if my product does not sell well?",
    answer:
      "We conduct thorough market validation before launching any product. If a product underperforms, we analyze the data, optimize the listing and PPC strategy, and pivot if needed. Our goal is always to ensure profitability for your business.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/buy-items.png",
    title: "Product Research",
    description:
      "Deep market analysis to find profitable product opportunities with strong demand and low competition",
  },
  {
    img: "/images/services/process/sell-items.png",
    title: "Source & Launch",
    description:
      "Source from verified suppliers, create optimized listings, and launch with a proven strategy",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Ship to FBA",
    description:
      "Prepare and ship inventory to Amazon fulfillment centers following all FBA requirements",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Amazon Fulfills",
    description:
      "Amazon stores, packs, and ships orders to customers with Prime-eligible fast delivery",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Scale & Profit",
    description:
      "Optimize PPC, expand product line, and scale your brand for long-term profitable growth",
  },
];

export default function AmazonFBAPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Amazon FBA</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Amazon FBA Management Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            End-to-end FBA management from product research to scaling your
            brand. Private label expertise, listing optimization, PPC
            management, and inventory planning under one roof.
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
                Amazon FBA (Fulfilled by Amazon) is one of the most powerful
                business models for building a scalable eCommerce brand. With
                FBA, Amazon handles warehousing, packing, shipping, and customer
                service while you focus on growing your product line and brand
                presence.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Whether you are launching your first private label product or
                managing an existing portfolio of FBA SKUs, our team provides
                the expertise and hands-on management you need to succeed.
                From identifying winning products to optimizing your PPC spend,
                we handle every aspect of your FBA operations.
              </p>
              <p className="typo-body">
                Our data-driven approach ensures every decision is backed by
                market research, competitor analysis, and real performance
                metrics. We treat your business as our own and work tirelessly
                to maximize your ROI.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/wholesale-hero.jpg"
                alt="Amazon FBA Management Services"
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
            <h2 className="typo-h2">How Amazon FBA Works</h2>
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
                src="/images/services/management/ecommerce-fulfilment.jpg"
                alt="Full-Service FBA Management With EcomGarden"
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
                Full-Service FBA Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, we provide comprehensive FBA store management
                that covers every stage of your product lifecycle. Our team
                handles product research, supplier vetting, listing creation
                with professional photography and A+ content, keyword
                optimization, and launch strategy.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our PPC specialists manage your advertising campaigns with
                precision, optimizing bids, discovering high-converting
                keywords, and reducing wasted ad spend. Combined with our
                inventory forecasting tools, we ensure your products stay in
                stock and your campaigns never pause due to stockouts.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges and no
                hidden terms &amp; conditions. Get our service for as long as
                you want and cancel your contract anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Amazon FBA"
        pros={[
          "Amazon handles fulfillment and shipping",
          "Prime eligibility boosts sales and visibility",
          "Build your own brand with private label",
          "Scalable business model with high margins",
          "Access to Amazon's massive customer base",
          "Hands-off logistics and customer service",
          "Long-term brand equity and asset value",
        ]}
        cons={[
          "Upfront investment for inventory required",
          "FBA storage and fulfillment fees apply",
          "Product research phase takes time",
          "Competition can be high in popular niches",
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
