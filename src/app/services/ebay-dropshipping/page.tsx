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
    question: "Is dropshipping allowed on eBay?",
    answer:
      "Yes, eBay allows dropshipping as long as you source products from legitimate wholesale suppliers. eBay's policy permits listing items from suppliers who ship directly to customers, provided you are the seller of record and handle customer service.",
  },
  {
    question: "How do you maintain eBay account health?",
    answer:
      "We monitor your account health daily, ensuring all performance metrics stay within eBay's standards. This includes maintaining high seller ratings, fast shipping times, low defect rates, and prompt customer communication to achieve and maintain Top Rated Seller status.",
  },
  {
    question: "What products do you source for eBay dropshipping?",
    answer:
      "We source products from trusted wholesale suppliers and authorized distributors. Our product research team identifies high-demand, profitable items across categories like electronics, home and garden, fashion, and automotive parts with strong profit margins.",
  },
  {
    question: "How much profit can I expect from eBay dropshipping?",
    answer:
      "Average profit margins range from 15-30% depending on the product category and sourcing strategy. Our team focuses on finding items with healthy margins after accounting for eBay fees, shipping costs, and supplier pricing.",
  },
  {
    question: "Do you handle eBay returns and refunds?",
    answer:
      "Yes, our team manages the entire returns process including communicating with buyers, processing refunds, coordinating with suppliers for return shipments, and ensuring your account metrics remain in good standing throughout.",
  },
  {
    question: "How do you optimize eBay listings for more sales?",
    answer:
      "We optimize listings with keyword-rich titles, detailed item descriptions, high-quality images, competitive pricing using repricing tools, promoted listings campaigns, and item specifics that improve search visibility through eBay's Cassini search engine.",
  },
  {
    question: "Can you manage multiple eBay accounts?",
    answer:
      "Yes, we can manage multiple eBay accounts across different marketplaces including eBay US, UK, Australia, Canada, and Germany. Each account gets a dedicated manager who understands the specific marketplace requirements and buyer behavior.",
  },
  {
    question: "What if my eBay account gets restricted?",
    answer:
      "Our account health team proactively monitors for potential issues to prevent restrictions. If a restriction occurs, we work immediately to identify the cause, submit proper appeals, and implement corrective measures to restore your account to full functionality.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Product Research",
    description: "Find high-demand profitable products from trusted wholesale suppliers",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "List & Optimize",
    description:
      "Create optimized eBay listings with SEO titles, descriptions, and competitive pricing",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Order Processing",
    description:
      "Process orders immediately through suppliers with fast shipping and tracking updates",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer receives quality product on time and your seller ratings stay excellent",
  },
];

export default function EbayDropshippingPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">eBay Dropshipping</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            eBay Dropshipping Management Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Professional eBay store management with product sourcing, listing optimization, and complete order fulfillment.
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
                eBay remains one of the world&apos;s largest online marketplaces
                with over 130 million active buyers globally. eBay dropshipping
                is a proven business model where you list products from
                wholesale suppliers and fulfill orders directly to customers
                without holding inventory. It&apos;s a low-risk way to build a
                profitable ecommerce business.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our eBay management service covers everything from product
                sourcing and listing creation to order processing and account
                health management. We use advanced repricing tools and data
                analytics to ensure your products are competitively priced and
                your listings rank high in eBay search results.
              </p>
              <p className="typo-body">
                Whether you are a new seller looking to launch your first eBay
                store or an established seller wanting to scale operations, our
                experienced team provides the expertise and daily management
                needed to maximize your sales and profits on eBay.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/arbitrage-hero.jpg"
                alt="eBay Dropshipping Management Services"
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
            <h2 className="typo-h2">How eBay Dropshipping Works</h2>
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
                alt="Manage eBay Store With EcomGarden"
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
                Manage Your eBay Store With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, we deliver comprehensive eBay store management
                that covers every aspect of your business. Our product research
                team identifies trending, high-margin products from verified
                wholesale suppliers to keep your store competitive.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We create professional listings optimized for eBay&apos;s
                Cassini search engine, manage daily order processing, handle
                customer inquiries within hours, and maintain your account
                health metrics at Top Rated Seller standards.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our repricing tools automatically adjust your prices to stay
                competitive while protecting your profit margins. We also
                manage promoted listings campaigns and store marketing to drive
                additional traffic and sales to your eBay shop.
              </p>
              <p className="typo-body">
                Our service operates with complete transparency. You maintain
                full control of your eBay account, and there are no hidden
                charges or long-term contracts. Cancel anytime with no
                penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of eBay Dropshipping"
        pros={[
          "Access to 130+ million active buyers worldwide",
          "No upfront inventory investment needed",
          "Multiple product categories available",
          "Global marketplace reach across 190 markets",
          "Established buyer trust and payment protection",
          "Flexible listing formats including auction and fixed price",
          "Top Rated Seller benefits boost visibility",
          "Strong returns and refund infrastructure",
        ]}
        cons={[
          "eBay fees can reduce margins on low-priced items",
          "Account health requires constant monitoring",
          "Competitive pricing pressure in popular categories",
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
