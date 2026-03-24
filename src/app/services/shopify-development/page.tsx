"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

const shopifyFeatures = [
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Store Development",
    description:
      "Our team will handle A-Z development tasks on your store and deliver a complete store with all requirement done.",
  },
  {
    icon: "/images/services/shopify/redesign.png",
    title: "Redesign Store",
    description:
      "Having a outdated design, our expert UX UI designer waiting for you. Get a custom and modern design for your right audiences.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "Theme Customization",
    description:
      "Need extra features with your exist design? No worry. Our expert hand ready for customize your store as needed.",
  },
  {
    icon: "/images/services/shopify/migration.png",
    title: "Store Migration",
    description:
      "Expert hand for move your exist inventory, orders, customer data, design and all data into Shopify from any platform.",
  },
  {
    icon: "/images/services/shopify/dropshipping.png",
    title: "Dropshipping Setup",
    description:
      "Don't want to get inventory? Dropshipping is right for you. Get faster branded supplier and product and live your risk free business.",
  },
  {
    icon: "/images/services/shopify/va-service.png",
    title: "VA Service",
    description:
      "Our expert virtual assistant available for any kinds of order fullfillment, manual data process, response customer support.",
  },
  {
    icon: "/images/services/icons/product-research.png",
    title: "Product Research",
    description:
      "Start your brand with unique and high demand product. Our expert dropshipper ready to pick right product based on your criteria.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Products Listing",
    description:
      "Listing products on your store using CSV, Excel, custom API, data scrapper from any website, any sources or even manual entry.",
  },
  {
    icon: "/images/services/shopify/custom-app.png",
    title: "Custom App Develop",
    description:
      "Get custom features with our custom app development service. Private and public app both services are available.",
  },
  {
    icon: "/images/services/shopify/custom-theme.png",
    title: "Custom Theme Develop",
    description:
      "We make your ideas into reality. Our custom theme development service provide you exact pixel perfect design thats you thinking.",
  },
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Speed Optimization",
    description:
      "Slow website and higher bounce rate? Our team will audit your store and make your store lighting fast.",
  },
  {
    icon: "/images/services/shopify/bug-fixing.png",
    title: "Bug Fixing",
    description:
      "Facing issues on your current setup? We are happy to audit your full setup and fix any kinds of bugs with expert hand.",
  },
  {
    icon: "/images/services/icons/account-health.png",
    title: "Conversion Optimize",
    description:
      "Getting traffics but not converting? We provide complete solution to update your store design, redesign products for highest conversion rate",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "Social Media",
    description:
      "Sale on any platform using Shopify. Make your Shopify all in one tools. We will setup and integrate all social media sales channel with your store.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Customer Support",
    description:
      "Response on customer query is the main key of satisfaction. Our support team will 24/7 online to answer customer messages.",
  },
  {
    icon: "/images/services/icons/inventory.png",
    title: "Store Automation",
    description:
      "Having much repeat tasks? Shopify custom automation tools will help you to fulfilment orders, tracking, chatbot, supply chain.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Discussion",
    description:
      "Discuss your requirements with us. Make agreement for your needs and pricing",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Get Access",
    description:
      "Send your store access to us. As well others portal's access based on requirements",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Planning",
    description:
      "We will make plan to reach highest quality service and fulfilment your requirements",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Implement",
    description:
      "We will implement plan into reality, beta testing updates, fixing bugs if needed",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Live & Handover",
    description:
      "After all beta testing, we will live the update and handover you everything",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
];

const faqs = [
  {
    question: "Does 2 Step Dropshipping Legal?",
    answer:
      "Yes, 2 step dropshipping is legal. You will never face any legal issue with 2 step dropshipping model.",
  },
  {
    question: "How Safe 2 Step Dropshipping Business?",
    answer:
      "Its 100% safe business model. Amazon required sending products with Amazon's branded packaging or white branding. As well, no 3rd party retailer invoice into the parcel. Our warehouse will remove the walmart invoice and repackaging products with Amazon branded box.",
  },
  {
    question:
      "Does 2 Step Dropshipping profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question:
      "Why I Need Investment Where Dropshipping Not Required any upfront?",
    answer:
      "Good question. Amazon will send you payout after 14 days of order delivery. So you need purchase products using your own funds. Then you will get payment from Amazon. So you need capital to purchase products when customer will order.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We use authentic products sources only and use sourcing where its cheapest. We use Walmart, Amazon Prime, Sams Club, Target, Home Depot, Costco Wholesale.",
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

export default function ShopifyDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Shopify Development</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Shopify Store Development &amp; Management
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Complete Shopify solutions including store development, redesign,
            custom theme and app development, speed optimization, and monthly
            management with 50+ expert hands.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp />
              Quick Whatsapp
            </a>
            <Link href="/services" className="btn-outline">
              Browse More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            {/* Left - Text */}
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Shopify, world largest cloud based eCommerce platform. Provide
                complete solutions including millions of traffics handle and zero
                downtime payment processing. Looking for extend your business
                into Shopify ? Your on the right place. We provide a complete
                solution for Shopify development.
              </p>
              <p className="typo-body">
                Our service including store development, redesign, dropshipping
                development, supplier finding, custom theme and application
                development, bud fixing, theme customoziation, speed
                optimization and all kinds of development support. As well we
                provide monthly management for order processing, customer
                support. Our dedicated 50+ expert hand always available to make
                your Shopify business success.
              </p>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify Store Development & Management"
                width={500}
                height={400}
                style={{ borderRadius: "12px", width: "100%", maxWidth: "500px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Service Features */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="typo-label">Services</span>
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Our Shopify Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {shopifyFeatures.map((feature) => (
              <div
                key={feature.title}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "24px 16px",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    style={{ width: "80px", height: "80px", objectFit: "contain" }}
                  />
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "6px" }}>
                  {feature.title}
                </h3>
                <p className="typo-small">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="typo-label">Process</span>
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>How we work with Shopify project</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px" }}>
            {howWeWorkSteps.map((step, index) => (
              <div key={step.title} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <div style={{ position: "relative" }}>
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={80}
                      height={80}
                      style={{ width: "80px", height: "80px", objectFit: "contain" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        backgroundColor: "var(--color-primary)",
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "6px" }}>
                  {step.title}
                </h3>
                <p className="typo-small">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="typo-label">Portfolio</span>
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Some recent work of our Shopify development</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 className="typo-h3" style={{ marginBottom: "6px" }}>
                    {item.title}
                  </h3>
                  <p className="typo-small" style={{ marginBottom: "10px" }}>
                    {item.description}
                  </p>
                  <Link href="/contact" className="typo-label">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacation / Risk Free Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 className="typo-h2" style={{ marginBottom: "8px" }}>
            Start Your Unlimited Vacation. Because
          </h2>
          <p className="typo-label" style={{ marginBottom: "20px" }}>
            We provide service with profit sharing model
          </p>
          <h3 className="typo-h3" style={{ marginBottom: "16px", color: "var(--color-accent)" }}>
            100% Risk Free. Pay only once you see profit.
          </h3>
          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto" }}>
            No one will offer profit sharing model and no payment before you get
            profit. Because everyone can not handle risk and recover the dark
            side of eCommerce. Our experienced and highly skilled team will
            start profit within a week.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
