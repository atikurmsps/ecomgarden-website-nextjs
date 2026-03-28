import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Shopify Dropshipping Store Services | EcomGarden",
  description:
    "Ready-to-sell Shopify dropshipping store setup, product import, supplier sourcing, and automated fulfillment. Launch your dropshipping business with EcomGarden.",
};

const dropshippingFeatures = [
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Store Setup",
    description:
      "Complete Shopify dropshipping store setup with optimized theme, payment gateway, shipping zones, and essential apps configured for day-one selling.",
  },
  {
    icon: "/images/services/shopify/dropshipping.png",
    title: "Supplier Sourcing",
    description:
      "We find reliable suppliers with fast shipping, competitive pricing, and quality products from AliExpress, CJ Dropshipping, Spocket, and US-based suppliers.",
  },
  {
    icon: "/images/services/icons/product-research.png",
    title: "Product Research",
    description:
      "Data-driven winning product research using trend analysis, competitor study, and profit margin calculations to find high-demand, low-competition products.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Product Import",
    description:
      "Bulk product import with optimized titles, descriptions, images, and variants. SEO-friendly listings that convert visitors into paying customers.",
  },
  {
    icon: "/images/services/icons/inventory.png",
    title: "Automated Fulfillment",
    description:
      "Set up automated order processing and fulfillment workflows so orders are sent to suppliers instantly without manual intervention.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "Branded Storefront",
    description:
      "Professional branded storefront design with custom logo, color scheme, trust badges, and conversion-focused layout that builds customer confidence.",
  },
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Speed Optimization",
    description:
      "Fast-loading store optimized for mobile and desktop. Compressed images, minimal code, and performance tuning for best user experience.",
  },
  {
    icon: "/images/services/shopify/custom-app.png",
    title: "App Integration",
    description:
      "Install and configure essential dropshipping apps including Oberlo, DSers, Zendrop, and review importers for a fully automated store.",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "Sales Channel Setup",
    description:
      "Connect your store to Facebook Shop, Instagram Shopping, TikTok, and Google Shopping to maximize your product visibility and reach.",
  },
  {
    icon: "/images/services/icons/account-health.png",
    title: "Conversion Optimization",
    description:
      "Implement urgency timers, trust badges, upsell funnels, abandoned cart recovery, and exit-intent popups to maximize your conversion rate.",
  },
  {
    icon: "/images/services/shopify/bug-fixing.png",
    title: "Quality Assurance",
    description:
      "Thorough testing of checkout flow, payment processing, mobile responsiveness, and all store functionality before going live.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Ongoing Support",
    description:
      "Post-launch support including order management, customer service setup, returns handling, and ongoing store maintenance.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Niche Selection",
    description:
      "We analyze market trends and help you pick a profitable niche with high demand and manageable competition",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Store Setup",
    description:
      "Build your complete Shopify dropshipping store with branded design, products, and all configurations",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Supplier Vetting",
    description:
      "Source and verify reliable suppliers with quality products, fast shipping, and competitive pricing",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Automation Setup",
    description:
      "Configure automated ordering, inventory sync, tracking updates, and fulfillment workflows",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Launch & Scale",
    description:
      "Launch your store, monitor performance, optimize listings, and scale winning products",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Fashion Dropship Store",
    description: "Built a branded fashion dropshipping store with 500+ products and automated fulfillment",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Home Decor Store",
    description: "Complete home decor dropshipping setup with US-based suppliers and 3-day delivery",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Pet Supplies Store",
    description: "Niche pet supplies store generating $15K/month with automated order processing",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Electronics Store",
    description: "High-ticket electronics dropshipping store with warranty support and fast shipping",
  },
];

const faqs = [
  {
    question: "What is Shopify dropshipping and how does it work?",
    answer:
      "Shopify dropshipping is a business model where you sell products online without holding inventory. When a customer places an order, the supplier ships the product directly to the customer. You only pay for products after you make a sale, making it a low-risk business model.",
  },
  {
    question: "How long does it take to set up a dropshipping store?",
    answer:
      "A complete dropshipping store setup typically takes 5-10 business days depending on the number of products and customization required. This includes store design, product import, app configuration, and testing.",
  },
  {
    question: "Do you help with finding winning products?",
    answer:
      "Yes, our product research team uses advanced tools and data analysis to identify trending, high-demand products with good profit margins. We analyze competition, search volume, and market trends to find the best products for your niche.",
  },
  {
    question: "Which suppliers do you work with?",
    answer:
      "We work with a variety of suppliers including AliExpress, CJ Dropshipping, Spocket, Zendrop, and US/EU-based suppliers. We vet each supplier for product quality, shipping speed, and reliability before adding them to your store.",
  },
  {
    question: "Can I automate the entire order fulfillment process?",
    answer:
      "Yes, we set up fully automated fulfillment using apps like DSers or Zendrop. When a customer orders from your store, the order is automatically sent to the supplier with shipping details. Tracking information is also automatically updated.",
  },
  {
    question: "What profit margins can I expect with dropshipping?",
    answer:
      "Typical dropshipping profit margins range from 15-40% depending on your niche and product selection. We focus on finding products with at least 25%+ margins after all costs including product cost, shipping, and transaction fees.",
  },
  {
    question: "Do you provide marketing support for the store?",
    answer:
      "While our dropshipping service focuses on store setup and product sourcing, we can also help with Facebook Ads, Google Ads, and social media marketing as an add-on service to drive traffic to your new store.",
  },
  {
    question: "What happens after my store is launched?",
    answer:
      "After launch, we provide 30 days of free support for any issues. We also offer ongoing management packages for order processing, customer support, product updates, and store optimization on a monthly basis.",
  },
];

export default function ShopifyDropshippingPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Shopify Dropshipping</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Shopify Dropshipping Store Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Launch a ready-to-sell Shopify dropshipping store with winning
            products, reliable suppliers, and fully automated fulfillment.
            Start selling from day one with zero inventory risk.
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
                Dropshipping on Shopify is one of the most accessible ways to
                start an eCommerce business with minimal upfront investment.
                You sell products without ever handling inventory, and your
                suppliers ship directly to your customers. Our team builds
                complete, ready-to-sell dropshipping stores that are designed
                to convert visitors into buyers from day one.
              </p>
              <p className="typo-body">
                We handle everything from niche research and product sourcing
                to store design, app integration, and automated fulfillment
                setup. Whether you are starting fresh or scaling an existing
                dropshipping operation, our expert team ensures your store is
                optimized for maximum profitability with reliable suppliers
                and a professional brand presence.
              </p>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify Dropshipping Store Services"
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Our Dropshipping Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {dropshippingFeatures.map((feature) => (
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>How we build your dropshipping store</h2>
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Recent dropshipping store projects</h2>
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
            Start Selling Without Inventory Risk
          </h2>
          <p className="typo-label" style={{ marginBottom: "20px" }}>
            Zero upfront inventory cost. Pay only when you make a sale.
          </p>
          <h3 className="typo-h3" style={{ marginBottom: "16px", color: "var(--color-accent)" }}>
            100% Risk Free. No inventory, no warehouse, no hassle.
          </h3>
          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto" }}>
            With our dropshipping setup, you never purchase products until a
            customer has already paid you. Your suppliers handle storage,
            packaging, and shipping while you focus on marketing and growing
            your brand. It is the smartest way to start an eCommerce business.
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
