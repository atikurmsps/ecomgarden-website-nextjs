import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

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
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Etsy Dropshipping</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Etsy Dropshipping Management Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Complete Etsy store management with print-on-demand integration, SEO optimization, and hands-free order fulfillment.
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
              Browse Services
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

            {/* Right - Image */}
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
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="typo-label">HOW IT WORKS</span>
            <h2 className="typo-h2">How Etsy Dropshipping Works</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                alt="Manage Etsy Shop With EcomGarden"
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
                Manage Your Etsy Shop With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, we provide complete Etsy shop management from
                product research and design to listing optimization and daily
                operations. Our team understands the Etsy algorithm and buyer
                behavior to maximize your shop&apos;s visibility and sales.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We handle print-on-demand integration with top providers like
                Printful and Printify, ensuring seamless order fulfillment with
                quality products. Our design team creates trending, marketable
                designs that appeal to Etsy&apos;s unique buyer demographic.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                From keyword research and SEO-optimized titles to managing
                customer reviews and shop policies, we take care of every
                detail. Our goal is to build your Etsy shop into a sustainable,
                profitable business with consistent monthly revenue.
              </p>
              <p className="typo-body">
                Our service is fully transparent with no hidden fees. You
                maintain full access and control of your shop at all times.
                Cancel anytime with no obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Etsy Dropshipping"
        pros={[
          "No inventory investment required",
          "Low startup costs compared to other platforms",
          "Access to 90+ million active Etsy buyers",
          "Print-on-demand handles manufacturing and shipping",
          "Unique niche market with less competition",
          "Easy to scale with unlimited product listings",
          "Strong brand-building opportunities",
          "Multiple product categories to explore",
        ]}
        cons={[
          "Etsy listing fees apply per product",
          "Longer shipping times with print-on-demand",
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
