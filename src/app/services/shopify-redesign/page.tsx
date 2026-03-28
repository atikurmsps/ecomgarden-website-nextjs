import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Shopify Store Redesign Services | EcomGarden",
  description:
    "Conversion-optimized Shopify store redesign with UX improvement, speed optimization, and mobile-first design. Transform your store into a sales machine.",
};

const redesignFeatures = [
  {
    icon: "/images/services/shopify/redesign.png",
    title: "Complete Redesign",
    description:
      "Full store makeover with modern design trends, improved navigation, and a layout optimized to guide visitors toward making a purchase.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "UX/UI Improvement",
    description:
      "User experience audit and redesign focused on reducing friction, simplifying the shopping journey, and increasing customer satisfaction.",
  },
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Speed Optimization",
    description:
      "Comprehensive performance tuning including image compression, code minification, lazy loading, and third-party script optimization.",
  },
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Mobile-First Design",
    description:
      "Responsive design that prioritizes the mobile shopping experience, ensuring your store looks and works perfectly on every screen size.",
  },
  {
    icon: "/images/services/icons/account-health.png",
    title: "Conversion Rate Optimization",
    description:
      "Strategic placement of CTAs, trust signals, social proof, and urgency elements to maximize your store conversion rate.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Product Page Redesign",
    description:
      "Enhanced product pages with better image galleries, compelling descriptions, size guides, and cross-sell recommendations.",
  },
  {
    icon: "/images/services/shopify/custom-theme.png",
    title: "Homepage Redesign",
    description:
      "Eye-catching homepage with hero banners, featured collections, testimonials, and brand storytelling sections that engage visitors.",
  },
  {
    icon: "/images/services/shopify/migration.png",
    title: "Navigation Overhaul",
    description:
      "Restructured menu, mega navigation, breadcrumbs, and search functionality to help customers find products quickly and easily.",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "Brand Consistency",
    description:
      "Unified visual identity across all pages with consistent typography, color palette, imagery style, and brand voice.",
  },
  {
    icon: "/images/services/shopify/bug-fixing.png",
    title: "Checkout Optimization",
    description:
      "Streamlined checkout process with fewer steps, guest checkout option, multiple payment methods, and trust-building elements.",
  },
  {
    icon: "/images/services/icons/inventory.png",
    title: "Collection Pages",
    description:
      "Redesigned collection pages with advanced filtering, sorting options, quick-view functionality, and optimized product grid layouts.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Post-Launch Support",
    description:
      "Ongoing support after redesign launch including performance monitoring, A/B testing, bug fixes, and iterative improvements.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Audit & Analysis",
    description:
      "We audit your current store design, analytics, heatmaps, and user flow to identify conversion bottlenecks",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Strategy & Wireframe",
    description:
      "Create a redesign strategy with wireframes, mood boards, and a clear plan for every page improvement",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Design Mockups",
    description:
      "Deliver high-fidelity design mockups for your approval before any development work begins",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Development",
    description:
      "Implement the approved designs with clean code, responsive layouts, and performance optimization",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Launch & Optimize",
    description:
      "Go live with the redesign, monitor key metrics, and optimize based on real user data",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Fashion Brand Redesign",
    description: "Increased conversion rate by 45% with a complete mobile-first store redesign",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Beauty Store Makeover",
    description: "Modern redesign with improved product pages and 60% faster page load times",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Electronics Retailer",
    description: "Complete UX overhaul resulting in 35% reduction in cart abandonment rate",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Home & Garden Store",
    description: "Brand refresh with new navigation and collection pages driving 50% more sales",
  },
];

const faqs = [
  {
    question: "How long does a Shopify store redesign take?",
    answer:
      "A typical Shopify store redesign takes 2-4 weeks depending on the scope. Simple theme-based redesigns can be done in 1-2 weeks, while custom redesigns with unique layouts and features may take 3-4 weeks. We provide a detailed timeline after the initial audit.",
  },
  {
    question: "Will I lose my existing SEO rankings during the redesign?",
    answer:
      "No, we take great care to preserve your SEO during the redesign. We maintain all existing URLs, set up proper redirects where needed, preserve meta data, and ensure all on-page SEO elements are carried over or improved in the new design.",
  },
  {
    question: "Can you redesign my store without changing the theme?",
    answer:
      "Yes, we can work within your existing theme by customizing the CSS, Liquid templates, and section configurations. However, if your current theme is outdated or limiting, we may recommend switching to a more modern, performance-optimized theme.",
  },
  {
    question: "How do you ensure the redesign improves conversions?",
    answer:
      "We start with a data-driven audit of your current store using analytics, heatmaps, and user behavior data. Every design decision is based on conversion optimization best practices including strategic CTA placement, simplified navigation, and mobile optimization.",
  },
  {
    question: "Will my store have downtime during the redesign?",
    answer:
      "No, we work on a development or duplicate theme so your live store continues operating normally. Once the redesign is complete and approved, we publish the new design in minutes with zero downtime.",
  },
  {
    question: "Do you provide mobile-responsive designs?",
    answer:
      "Absolutely. All our redesigns follow a mobile-first approach since over 70% of eCommerce traffic comes from mobile devices. We test on multiple devices and screen sizes to ensure a seamless shopping experience everywhere.",
  },
  {
    question: "What if I do not like the redesign?",
    answer:
      "We involve you at every stage with design mockups and revisions before development. We offer up to 3 rounds of revisions on the design phase. Your existing store remains untouched until you approve the final redesign.",
  },
  {
    question: "Can you also improve my store speed during the redesign?",
    answer:
      "Yes, speed optimization is a core part of our redesign process. We optimize images, minimize code, implement lazy loading, audit third-party apps, and ensure your redesigned store loads in under 3 seconds on mobile.",
  },
];

export default function ShopifyRedesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Shopify Redesign</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Shopify Store Redesign Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Transform your underperforming Shopify store into a
            conversion-optimized sales machine with modern design, improved
            UX, faster speeds, and a mobile-first approach.
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
                Your Shopify store design is the first impression customers
                have of your brand. An outdated or confusing layout costs you
                sales every single day. Our redesign service transforms your
                existing store into a modern, high-converting shopping
                experience that keeps customers engaged and drives more
                revenue.
              </p>
              <p className="typo-body">
                We combine data-driven UX research with stunning visual design
                to create stores that not only look beautiful but perform
                exceptionally. From homepage to checkout, every page is
                optimized for speed, mobile responsiveness, and conversions.
                Our redesign process preserves your SEO rankings while
                delivering a fresh, professional storefront that reflects your
                brand identity.
              </p>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify Store Redesign Services"
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Our Shopify Redesign Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {redesignFeatures.map((feature) => (
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>How we redesign your Shopify store</h2>
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Recent store redesign projects</h2>
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
            Your Store Deserves a Modern Design
          </h2>
          <p className="typo-label" style={{ marginBottom: "20px" }}>
            Outdated design is costing you sales every day
          </p>
          <h3 className="typo-h3" style={{ marginBottom: "16px", color: "var(--color-accent)" }}>
            100% Satisfaction Guaranteed. We redesign until you love it.
          </h3>
          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto" }}>
            A professional store redesign pays for itself within weeks through
            improved conversion rates and higher average order values. Our
            data-driven approach ensures every design decision is backed by
            proven UX principles and conversion optimization strategies.
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
