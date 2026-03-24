"use client";

import Image from "next/image";
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
    question: "How Safe Amazon Wholesale Business?",
    answer:
      "Its 100% safe business model. We will get approval from brand first and then get inventory from official distributor.",
  },
  {
    question:
      "Does wholesale profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question: "How much inventory do i need to start?",
    answer:
      "Wholesale business required purchasing inventory before. Based on your budget, we will purchase SKU quantity. A average good budgets is $20k. For a minimum start, its required $5k.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We will get approval from brand first. Based on brand, we will get inventory from their authorised distributor.",
  },
  {
    question: "Will you guys manage my whole business?",
    answer:
      "Yes, We provide A-Z management including products research, sourcing, order management, shipping, return handling, customer support, promotion.",
  },
  {
    question: "What if I can not create any profit?",
    answer:
      "Our working method is 100% profit guarantee. You will get full refund of any charge with no question ask.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/buy-items.png",
    title: "Buy Inventory",
    description:
      "Purchase inventory from official brand or distributor and send to FBA or 3rd party warehouse",
  },
  {
    img: "/images/services/process/sell-items.png",
    title: "Sell Items",
    description: "List inventory on Amazon and start selling inventory",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Shipping",
    description:
      "Your warehouse or FBA will process the product and shipping to customer",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer will receive product from you. Happy with their order",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Get Payout",
    description:
      "Amazon sends payout every 14 days of order delivery. Get funds directly in your bank account",
  },
];

export default function AmazonWholesalePage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Amazon Wholesale</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Build Your Dream with Amazon Wholesale
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Authentic branded products purchased directly from authorized
            distributors. A 100% suspension risk-free model suitable for
            long-term operations with scalable growth.
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
                Amazon Wholesale, is a popular business model. In this model,
                upfront inventory is required. There are some brand approval
                process before purchase inventory and selling on Amazon.
              </p>
              <p className="typo-body">
                After brand approval, sellers get a wholesale account for
                official authenticated products with an approval letter to
                sell those branded products. This model is 100% suspension
                risk free and suitable for long-term operations with adequate
                budgets.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/services/hero/wholesale-hero.jpg"
                alt="Build Your Dream with Amazon Wholesale"
                width={500}
                height={357}
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
            <h2 className="typo-h2">How Amazon Wholesale Works</h2>
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
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={70}
                      height={70}
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
              <Image
                src="/images/services/management/ecommerce-fulfilment.jpg"
                alt="Manage Amazon Seller Account With EcomGarden"
                width={570}
                height={380}
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
                Manage Amazon Seller Account With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                At EcomGarden, you will get complete service of fully account
                management. Our automation tools will ensure 100% accuracy and
                zero inventory loss. Our dedicated Virtual Assistant will
                provide you 24/7 support, quick order response, customers
                inquire.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Get experienced highly skilled Amazon wholesale virtual
                assistant for your store and get cost-effective and seamless
                support and run your the business successfully. We provide
                complete solutions of store management including wining
                products research, brand approval, products listing, SEO
                optimizations, order management, purchase management, customer
                support, shipping and return handling, inventory management,
                PPC and marketing.
              </p>
              <p className="typo-body">
                Our service is 100% transparent and we do not have any hidden
                charge and do not have any hidden terms &amp; conditions. Get
                our service until you want and cancel contract anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Amazon Wholesale"
        pros={[
          "Brand approved items",
          "Fast to launch products",
          "No advertisement cost",
          "No IP complain",
          "Get starting profit within a short time",
          "No daily inventory purchase tasks",
          "Less SKU easier to maintain",
        ]}
        cons={[
          "Required upfront to purchase inventory",
          "Long approval process",
          "Required registered business",
          "Pay warehouse fee until sold all inventory",
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
