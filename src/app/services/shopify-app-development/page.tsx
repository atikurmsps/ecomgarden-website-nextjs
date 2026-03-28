import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Shopify App Development Services | EcomGarden",
  description:
    "Custom Shopify app development, API integrations, workflow automation, and custom functionality. Build private or public apps tailored to your business.",
};

const appFeatures = [
  {
    icon: "/images/services/shopify/custom-app.png",
    title: "Private App Development",
    description:
      "Build custom private apps tailored to your specific business needs with secure API access and seamless integration into your Shopify admin.",
  },
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Public App Development",
    description:
      "Develop and launch public Shopify apps on the App Store with complete submission support, listing optimization, and monetization strategy.",
  },
  {
    icon: "/images/services/shopify/migration.png",
    title: "API Integration",
    description:
      "Connect Shopify with third-party services including ERPs, CRMs, shipping carriers, accounting software, and custom backends via REST and GraphQL APIs.",
  },
  {
    icon: "/images/services/icons/inventory.png",
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes like order routing, inventory sync, customer tagging, email triggers, and report generation.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "Admin Extensions",
    description:
      "Build custom admin UI extensions that add new functionality directly into the Shopify admin panel for streamlined store management.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Checkout Extensions",
    description:
      "Develop custom checkout UI extensions for personalized checkout experiences including custom fields, upsells, and payment customizations.",
  },
  {
    icon: "/images/services/shopify/custom-theme.png",
    title: "Storefront API Apps",
    description:
      "Build headless commerce experiences using the Storefront API for custom storefronts, mobile apps, and unique shopping experiences.",
  },
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Webhook Integration",
    description:
      "Set up real-time event-driven workflows using Shopify webhooks for instant order notifications, inventory updates, and data synchronization.",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "Multi-Channel Sync",
    description:
      "Build apps that synchronize products, orders, and inventory across multiple sales channels including Amazon, eBay, and social platforms.",
  },
  {
    icon: "/images/services/shopify/redesign.png",
    title: "Custom Dashboard",
    description:
      "Create custom analytics dashboards and reporting tools that give you deeper insights into your store performance and customer behavior.",
  },
  {
    icon: "/images/services/shopify/bug-fixing.png",
    title: "App Maintenance",
    description:
      "Ongoing app maintenance including bug fixes, API version updates, performance optimization, and compatibility with Shopify platform changes.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Dedicated Support",
    description:
      "Dedicated developer support for your custom apps with SLA-backed response times, monitoring, and proactive issue resolution.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Discovery",
    description:
      "Understand your business requirements, technical needs, and define the app scope and architecture",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Architecture",
    description:
      "Design the app architecture, database schema, API endpoints, and user interface wireframes",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Development",
    description:
      "Agile development with regular demos, using Node.js, React, and Shopify APIs best practices",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Testing & QA",
    description:
      "Comprehensive testing including unit tests, integration tests, and real-store testing environments",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Deploy & Monitor",
    description:
      "Deploy the app, set up monitoring and alerts, and provide documentation and training",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Inventory Sync App",
    description: "Real-time inventory synchronization between Shopify and warehouse management system",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Custom Pricing App",
    description: "Volume-based pricing engine with customer group discounts and wholesale tiers",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Order Routing App",
    description: "Intelligent order routing to multiple fulfillment centers based on location and stock",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Loyalty Rewards App",
    description: "Points-based loyalty program with referral rewards and VIP tier management",
  },
];

const faqs = [
  {
    question: "What types of Shopify apps can you build?",
    answer:
      "We build all types of Shopify apps including private custom apps, public apps for the Shopify App Store, embedded admin apps, checkout extensions, theme app extensions, and headless commerce solutions using the Storefront API. We can build any custom functionality your business requires.",
  },
  {
    question: "What technologies do you use for Shopify app development?",
    answer:
      "We use the official Shopify tech stack including Node.js with Express or Remix, React for frontend, Prisma for database, and the Shopify API libraries. We work with both REST Admin API and GraphQL Admin API, plus the Storefront API for headless solutions.",
  },
  {
    question: "How long does it take to develop a custom Shopify app?",
    answer:
      "Development timeline depends on complexity. Simple apps with basic functionality take 2-4 weeks. Medium-complexity apps with integrations and custom UI take 4-8 weeks. Complex enterprise-grade apps with multiple integrations may take 8-16 weeks.",
  },
  {
    question: "Can you integrate Shopify with my existing systems?",
    answer:
      "Yes, we specialize in Shopify integrations with ERPs like NetSuite and SAP, CRMs like Salesforce and HubSpot, shipping carriers, accounting software like QuickBooks, and custom internal tools via APIs and webhooks.",
  },
  {
    question: "Do you help with Shopify App Store submission?",
    answer:
      "Yes, we handle the entire App Store submission process including meeting Shopify review requirements, creating app listing content, screenshots, demo stores, and responding to reviewer feedback until your app is approved and published.",
  },
  {
    question: "How do you handle app security and data privacy?",
    answer:
      "Security is built into our development process. We implement OAuth 2.0 authentication, HMAC verification, encrypted data storage, rate limiting, and follow Shopify security best practices. We ensure GDPR and CCPA compliance for user data handling.",
  },
  {
    question: "Can you maintain and update the app after launch?",
    answer:
      "Yes, we offer ongoing maintenance packages that include API version updates when Shopify releases new versions, bug fixes, performance optimization, new feature development, and 24/7 monitoring with alert-based incident response.",
  },
  {
    question: "What is the cost of custom Shopify app development?",
    answer:
      "App development costs vary based on scope and complexity. Simple apps start around $2,000-5,000, medium-complexity apps range from $5,000-15,000, and enterprise solutions can be $15,000+. We provide detailed quotes after understanding your requirements.",
  },
];

export default function ShopifyAppDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Shopify App Development</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Shopify App Development Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Build custom Shopify apps that extend your store functionality,
            automate workflows, and integrate with third-party systems.
            Private and public app development with expert hands.
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
                When off-the-shelf Shopify apps do not meet your business
                needs, a custom app is the solution. Our development team
                builds tailored Shopify applications that solve your specific
                challenges, whether it is automating complex workflows,
                integrating with external systems, or adding unique
                functionality to your store.
              </p>
              <p className="typo-body">
                We work with the latest Shopify APIs and development
                frameworks to build robust, scalable, and secure apps. From
                private apps for internal use to public apps for the Shopify
                App Store, our team handles the full development lifecycle
                including architecture design, development, testing,
                deployment, and ongoing maintenance.
              </p>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify App Development Services"
                style={{ borderRadius: "12px", width: "100%", maxWidth: "500px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="typo-label">Services</span>
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Our App Development Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {appFeatures.map((feature) => (
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
                  <img
                    src={feature.icon}
                    alt={feature.title}
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>How we develop your Shopify app</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px" }}>
            {howWeWorkSteps.map((step, index) => (
              <div key={step.title} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={step.img}
                      alt={step.title}
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Custom apps we have developed</h2>
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
                <img
                  src={item.img}
                  alt={item.title}
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

      {/* Risk Free Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 className="typo-h2" style={{ marginBottom: "8px" }}>
            Custom Solutions for Complex Problems
          </h2>
          <p className="typo-label" style={{ marginBottom: "20px" }}>
            When off-the-shelf apps fall short, we build what you need
          </p>
          <h3 className="typo-h3" style={{ marginBottom: "16px", color: "var(--color-accent)" }}>
            Scalable, secure, and built to grow with your business.
          </h3>
          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto" }}>
            A custom Shopify app eliminates monthly subscription fees for
            multiple third-party apps, gives you full control over your data
            and functionality, and provides a competitive advantage that
            off-the-shelf solutions simply cannot match.
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
