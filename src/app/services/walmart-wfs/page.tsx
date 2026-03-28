import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Walmart WFS Management Services | EcomGarden",
  description:
    "Expert Walmart Fulfillment Services (WFS) management. Product prep, shipping to WFS warehouses, inventory management, and listing optimization on Walmart.",
};

const faqs = [
  {
    question: "What is Walmart Fulfillment Services (WFS)?",
    answer:
      "Walmart Fulfillment Services (WFS) is Walmart's own fulfillment program where sellers ship inventory to Walmart warehouses, and Walmart handles storage, picking, packing, shipping, and customer returns on your behalf. Products fulfilled by WFS earn the W+ tag and faster delivery badges.",
  },
  {
    question: "How does WFS differ from self-fulfillment on Walmart?",
    answer:
      "With WFS, Walmart stores and ships your products from their fulfillment centers, giving you access to 2-day shipping badges, higher search rankings, and better Buy Box placement. Self-fulfillment requires you to handle storage, packing, and shipping yourself.",
  },
  {
    question: "What are the costs associated with WFS?",
    answer:
      "WFS charges fulfillment fees based on product weight and dimensions, plus monthly storage fees. These fees are competitive and often lower than comparable services. Our team optimizes your packaging dimensions to minimize fees and maximize profitability.",
  },
  {
    question: "How do you prepare products for WFS warehouses?",
    answer:
      "We handle complete product prep including labeling with Walmart barcodes, poly-bagging fragile items, bundling multi-packs, and ensuring all packaging meets Walmart's strict receiving guidelines. Proper prep prevents rejections and delays.",
  },
  {
    question: "Can WFS help improve my product rankings on Walmart?",
    answer:
      "Yes, WFS products receive priority in Walmart search results and are more likely to win the Buy Box. The 2-day delivery badge and Walmart+ eligibility significantly increase conversion rates and organic visibility.",
  },
  {
    question: "What happens if a customer returns a WFS product?",
    answer:
      "Walmart handles all returns for WFS orders. Returned items in sellable condition are restocked automatically. Damaged items are disposed of or returned to you based on your preference. Our team monitors return rates and takes action to minimize them.",
  },
  {
    question: "How long does it take to get started with WFS?",
    answer:
      "Once your Walmart seller account is approved, we can have your first WFS shipment prepared and sent within 5-7 business days. Products typically become active within 2-3 days after Walmart receives and processes your inventory.",
  },
  {
    question: "Do you handle inventory replenishment for WFS?",
    answer:
      "Yes, we continuously monitor your WFS inventory levels and create replenishment shipments before stock runs out. Our forecasting tools analyze sales velocity to ensure optimal inventory levels without overstocking.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Product Sourcing",
    description: "Source profitable products and prepare optimized listings for Walmart marketplace",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Product Prep",
    description:
      "Label, poly-bag, and package products to meet Walmart WFS receiving requirements",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Ship to WFS",
    description:
      "Create inbound shipments and ship inventory to Walmart fulfillment centers",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Walmart Fulfills",
    description:
      "Walmart stores, picks, packs, and ships orders with 2-day delivery to customers",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Get Paid",
    description:
      "Receive payouts from Walmart while we manage inventory replenishment and optimization",
  },
];

export default function WalmartWFSPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Walmart WFS</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Walmart WFS Management Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Leverage Walmart Fulfillment Services to earn 2-day delivery badges,
            win the Buy Box, and scale your Walmart business with hands-free
            fulfillment managed by our expert team.
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
                Walmart Fulfillment Services (WFS) is the fastest-growing
                fulfillment program for Walmart marketplace sellers. By storing
                your products in Walmart&apos;s own warehouses, you gain access to
                2-day shipping, Walmart+ eligibility, and significantly higher
                search rankings.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our WFS management service handles everything from product
                preparation and labeling to creating inbound shipments, tracking
                inventory levels, and ensuring your listings are fully optimized
                for maximum visibility and conversions.
              </p>
              <p className="typo-body">
                Sellers using WFS typically see a 30-50% increase in sales
                compared to self-fulfilled listings. With our expert management,
                you can focus on growing your product catalog while we handle the
                logistics and optimization that drive results.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="Walmart WFS Management Services"
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
            <h2 className="typo-h2">How WFS Management Works</h2>
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
                alt="WFS Inventory Management With EcomGarden"
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
                Complete WFS Inventory Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Managing WFS inventory requires precision and constant attention.
                Our team monitors stock levels in real-time, creates optimized
                replenishment plans, and ensures your products never go out of
                stock at Walmart&apos;s fulfillment centers.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We handle every aspect of WFS operations including inbound
                shipment creation, carrier coordination, product prep compliance,
                listing optimization with enhanced content, and ongoing
                performance monitoring to maintain your account health.
              </p>
              <p className="typo-body">
                Our service is fully transparent with no hidden fees. You
                maintain complete control of your Walmart seller account while we
                handle the day-to-day WFS operations that drive growth and
                profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Walmart WFS"
        pros={[
          "2-day delivery badge boosts conversions",
          "Higher search ranking on Walmart",
          "Walmart handles shipping and returns",
          "Walmart+ eligible products get more visibility",
          "Lower fulfillment costs than most 3PLs",
          "Professional packaging builds customer trust",
        ]}
        cons={[
          "Upfront inventory investment required",
          "Monthly storage fees for slow-moving items",
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
