import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Shopify Theme Development Services | EcomGarden",
  description:
    "Custom Shopify theme development from scratch with Liquid coding, responsive design, and brand-matching themes. Get a unique store that stands out.",
};

const themeFeatures = [
  {
    icon: "/images/services/shopify/custom-theme.png",
    title: "Custom Theme Build",
    description:
      "Build a completely unique Shopify theme from scratch using Shopify 2.0 architecture, JSON templates, and modern Liquid coding practices.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "Liquid Development",
    description:
      "Expert Liquid template coding for dynamic content rendering, custom sections, blocks, and metafield integration throughout your theme.",
  },
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Responsive Design",
    description:
      "Pixel-perfect responsive layouts that adapt seamlessly across desktop, tablet, and mobile devices with consistent brand experience.",
  },
  {
    icon: "/images/services/shopify/redesign.png",
    title: "Brand-Matching Design",
    description:
      "Custom visual design that perfectly reflects your brand identity including colors, typography, imagery style, and overall aesthetic.",
  },
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Performance First",
    description:
      "Lightweight, optimized code that delivers blazing-fast page loads. No bloated frameworks or unnecessary scripts slowing down your store.",
  },
  {
    icon: "/images/services/shopify/custom-app.png",
    title: "Dynamic Sections",
    description:
      "Flexible, reusable theme sections that you can drag, drop, and customize from the Shopify theme editor without touching any code.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Product Templates",
    description:
      "Multiple product page templates for different product types with custom layouts, image galleries, size charts, and variant selectors.",
  },
  {
    icon: "/images/services/shopify/migration.png",
    title: "Collection Templates",
    description:
      "Advanced collection pages with custom filtering, sorting, infinite scroll or pagination, and flexible grid or list view options.",
  },
  {
    icon: "/images/services/icons/account-health.png",
    title: "Conversion Elements",
    description:
      "Built-in conversion optimization features including sticky add-to-cart, quick view, recently viewed, and smart product recommendations.",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "SEO Optimized",
    description:
      "Clean semantic HTML, structured data markup, optimized meta tags, and fast loading speeds for maximum search engine visibility.",
  },
  {
    icon: "/images/services/shopify/bug-fixing.png",
    title: "Cross-Browser Testing",
    description:
      "Thorough testing across Chrome, Firefox, Safari, and Edge on both desktop and mobile to ensure consistent functionality everywhere.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Documentation & Training",
    description:
      "Comprehensive theme documentation and personalized training so you can confidently manage and update your custom theme.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Requirements",
    description:
      "Understand your brand, target audience, design preferences, and specific functionality requirements",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Design Phase",
    description:
      "Create wireframes and high-fidelity design mockups for all key pages for your review and approval",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Development",
    description:
      "Build the theme using Shopify 2.0 architecture with clean Liquid code and modular sections",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Testing & QA",
    description:
      "Rigorous testing across devices and browsers, performance optimization, and bug fixing",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Deploy & Train",
    description:
      "Deploy the theme to your live store, provide documentation and training on theme customization",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Luxury Jewelry Theme",
    description: "Custom premium theme with 3D product viewer and elegant animations for a jewelry brand",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Fitness Brand Theme",
    description: "Bold, athletic-inspired theme with subscription support and workout plan integration",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Organic Food Theme",
    description: "Clean, nature-inspired theme with farm-to-table storytelling and recipe integration",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Tech Gadgets Theme",
    description: "Modern dark-mode theme with product comparison tables and spec sheets",
  },
];

const faqs = [
  {
    question: "Why should I get a custom theme instead of using a pre-built one?",
    answer:
      "A custom theme gives you a unique brand identity that stands out from competitors using the same templates. It is built specifically for your products and customers, offers better performance since there is no unused code, and provides exactly the features you need without relying on third-party apps.",
  },
  {
    question: "How long does custom Shopify theme development take?",
    answer:
      "A custom Shopify theme typically takes 4-8 weeks depending on complexity. Simple themes with standard layouts can be done in 3-4 weeks, while complex themes with custom features, animations, and multiple templates may take 6-8 weeks.",
  },
  {
    question: "Do you build themes using Shopify 2.0 architecture?",
    answer:
      "Yes, all our custom themes are built using Shopify Online Store 2.0 architecture with JSON templates, app blocks, and flexible sections on every page. This gives you maximum flexibility to customize your store directly from the theme editor.",
  },
  {
    question: "Can I customize the theme myself after development?",
    answer:
      "Absolutely. We build themes with the Shopify theme editor in mind, creating intuitive section settings and block configurations. We also provide comprehensive documentation and training so you can make changes without developer help.",
  },
  {
    question: "Will the custom theme be fast and SEO-friendly?",
    answer:
      "Performance and SEO are core priorities in our development process. We write clean, minimal code, optimize all assets, implement proper semantic HTML, add structured data markup, and ensure Core Web Vitals scores are excellent.",
  },
  {
    question: "Do you convert Figma or PSD designs to Shopify themes?",
    answer:
      "Yes, we specialize in converting design files from Figma, Adobe XD, Sketch, or PSD into fully functional Shopify themes. We ensure pixel-perfect accuracy while maintaining responsive behavior and Shopify best practices.",
  },
  {
    question: "What about ongoing support after the theme is delivered?",
    answer:
      "We provide 30 days of free bug-fix support after delivery. For ongoing needs, we offer monthly maintenance packages that include theme updates, new feature additions, performance monitoring, and priority support.",
  },
  {
    question: "Can you add custom features that are not available in standard themes?",
    answer:
      "Yes, that is the biggest advantage of a custom theme. We can build any feature you need including custom product configurators, advanced filtering systems, loyalty point displays, subscription flows, or any unique functionality specific to your business.",
  },
];

export default function ShopifyThemeDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Shopify Theme Development</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Shopify Theme Development Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Get a unique, brand-matching Shopify theme built from scratch
            with expert Liquid coding, responsive design, and Shopify 2.0
            architecture for maximum flexibility and performance.
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
                A custom Shopify theme sets your store apart from thousands of
                competitors using the same pre-built templates. Our theme
                development team builds unique, pixel-perfect themes from
                scratch that perfectly match your brand identity and provide
                the exact features your business needs without relying on
                third-party apps.
              </p>
              <p className="typo-body">
                Using Shopify 2.0 architecture, we create flexible themes with
                dynamic sections, customizable blocks, and metafield
                integration that you can manage directly from the theme
                editor. Every theme we build prioritizes performance, SEO, and
                conversion optimization to ensure your store not only looks
                stunning but drives real results.
              </p>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify Theme Development Services"
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Our Theme Development Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {themeFeatures.map((feature) => (
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>How we develop your custom theme</h2>
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Custom themes we have built</h2>
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
            Stand Out With a Unique Store Design
          </h2>
          <p className="typo-label" style={{ marginBottom: "20px" }}>
            Stop looking like every other Shopify store
          </p>
          <h3 className="typo-h3" style={{ marginBottom: "16px", color: "var(--color-accent)" }}>
            Pixel-perfect custom themes that match your brand identity.
          </h3>
          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto" }}>
            A custom theme is an investment in your brand. It eliminates the
            need for multiple third-party apps, gives you complete control
            over your store experience, and ensures your store performs
            faster than competitors using bloated pre-built themes.
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
