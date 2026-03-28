import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "2 Step Walmart Dropshipping Services | EcomGarden",
  description:
    "Low-risk 2-step dropshipping on Walmart. Source from retailers, ship via warehouse with Walmart branding. No upfront inventory needed. Start generating profit within a week.",
};

const faqs = [
  {
    question: "What is 2 Step Walmart Dropshipping?",
    answer:
      "2 Step Walmart Dropshipping is a business model where you list products on Walmart, and when a customer orders, you purchase the item from a retailer (like Amazon, Target, or Costco) and have it shipped to a warehouse. The warehouse removes the original branding, repackages it with Walmart-branded packaging, and ships it to the customer.",
  },
  {
    question: "Is 2 Step Dropshipping legal on Walmart?",
    answer:
      "Yes, 2 step dropshipping is completely legal. The key difference from traditional dropshipping (which Walmart prohibits) is that products go through a warehouse for repackaging with Walmart branding. This ensures customers receive packages that meet Walmart's packaging requirements.",
  },
  {
    question: "How much investment do I need to start?",
    answer:
      "You can start with as little as $1,000-$3,000 in working capital. Since you only purchase products after a customer orders, there is no upfront inventory cost. The capital is needed to cover the gap between purchasing products and receiving Walmart payouts (which come 14 days after delivery).",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "Our average ROI is 35%. After all expenses including product cost, warehouse fees for repackaging, and shipping charges, you can expect 30-40% profit margin. We only select products with proven profit margins during our research process.",
  },
  {
    question: "Where do you source products from?",
    answer:
      "We source from authentic, reputable retailers including Amazon Prime, Sam's Club, Target, Home Depot, Costco Wholesale, and other authorized retailers. We always use legitimate sourcing channels to ensure product authenticity and quality.",
  },
  {
    question: "Why do I need a warehouse for dropshipping?",
    answer:
      "Walmart requires products to arrive in Walmart-branded packaging or white-label packaging with no third-party retailer invoices or branding. The warehouse removes the original packaging and invoices, then repackages items in Walmart-compliant boxes before shipping to customers.",
  },
  {
    question: "How quickly can I start making profit?",
    answer:
      "Most stores start generating profit within the first week of operation. Once products are listed and orders start coming in, the profit cycle begins immediately. Our team focuses on finding high-demand products with proven profit margins.",
  },
  {
    question: "What happens if I want to stop the business?",
    answer:
      "Since there is no upfront inventory, you can stop anytime with zero loss. There are no unsold products to worry about. Simply stop listing products and fulfill any remaining orders. Our management contract can be cancelled at any time.",
  },
  {
    question: "Will you manage my entire store?",
    answer:
      "Yes, we provide complete A-Z management including product research, listing creation, order management, purchasing, warehouse coordination, shipping, return handling, customer support, and promotional activities. You simply monitor profits.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "List Products",
    description: "Research and list profitable products on your Walmart seller account",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Customer Orders",
    description:
      "When a customer orders, purchase the product from a retail source at a lower price",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Ship to Warehouse",
    description:
      "Product ships to warehouse for repackaging with Walmart-branded packaging",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Deliver to Customer",
    description:
      "Warehouse ships the repackaged product directly to the customer with Walmart branding",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Collect Profit",
    description:
      "Walmart sends payout every 14 days after delivery. Profit goes directly to your bank",
  },
];

export default function WalmartDropshippingPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Walmart Dropshipping</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            2 Step Walmart Dropshipping Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            A low-risk, high-reward business model with no upfront inventory.
            Source products from retailers, ship through our warehouse with
            Walmart branding, and start profiting within days.
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
                2 Step Walmart Dropshipping is the most popular and accessible
                e-commerce business model for Walmart sellers. Unlike traditional
                dropshipping, the 2-step method routes products through a
                warehouse for compliant repackaging before delivery to customers.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                The beauty of this model is that no upfront inventory is required.
                You only purchase products after a customer places an order on
                your Walmart store. This makes it a zero-risk business that
                generates profit from day one.
              </p>
              <p className="typo-body">
                Here&apos;s a real example: We purchase a product from Amazon for
                $10 and sell it on Walmart for $30. The warehouse charges $4 for
                repackaging with Walmart branding, and shipping costs $6. That
                leaves a $10 profit per unit. If this product sells 30 units per
                day, that&apos;s $300 in daily profit and $9,000 per month from just
                one product.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="2 Step Walmart Dropshipping"
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
            <h2 className="typo-h2">How 2 Step Dropshipping Works</h2>
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
                alt="Dropshipping Store Management With EcomGarden"
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
                Complete Dropshipping Store Management With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, we provide complete A-Z management of your 2 Step
                Dropshipping business. Our automation tools ensure 100% accuracy
                in order processing, and our dedicated virtual assistant provides
                24/7 support for your store.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our team handles winning product research, listing creation, SEO
                optimization, order management, purchasing from source retailers,
                warehouse coordination, customer support, shipping tracking,
                return handling, and promotional campaigns to maximize your sales.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges or hidden
                terms and conditions. We offer a profit guarantee &mdash; if we
                cannot generate profit for your store, you receive a full refund
                of all management fees with no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of 2 Step Dropshipping"
        pros={[
          "No upfront inventory investment required",
          "Start with minimal capital ($1,000-$3,000)",
          "Zero loss if you decide to close the business",
          "Change products anytime without inventory risk",
          "No inventory loss from brand complaints",
          "Start generating profit within the first week",
        ]}
        cons={[
          "Must purchase products for each order regularly",
          "Need daily active management to ensure timely purchases",
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
