import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Shopify Store Marketing Services | EcomGarden",
  description:
    "Complete Shopify marketing services including SEO, Google Ads, Facebook/Meta ads, email marketing, and social media marketing to grow your store revenue.",
};

const marketingFeatures = [
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Shopify SEO",
    description:
      "On-page and technical SEO optimization including keyword research, meta tags, site structure, schema markup, and content strategy for organic traffic growth.",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "Facebook & Meta Ads",
    description:
      "Data-driven Facebook and Instagram ad campaigns with audience targeting, creative testing, retargeting funnels, and conversion tracking for maximum ROAS.",
  },
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Google Ads",
    description:
      "Google Search, Shopping, Display, and Performance Max campaigns managed with keyword bidding, negative keywords, and continuous optimization for profitability.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Email Marketing",
    description:
      "Automated email flows including welcome series, abandoned cart recovery, post-purchase upsells, win-back campaigns, and promotional newsletters.",
  },
  {
    icon: "/images/services/shopify/custom-app.png",
    title: "TikTok Ads",
    description:
      "Creative TikTok advertising campaigns leveraging trending formats, influencer-style content, and TikTok Shop integration for viral product promotion.",
  },
  {
    icon: "/images/services/shopify/redesign.png",
    title: "Social Media Management",
    description:
      "Content creation, scheduling, and community management across Instagram, Facebook, Pinterest, and TikTok to build brand awareness and engagement.",
  },
  {
    icon: "/images/services/icons/product-research.png",
    title: "Google Shopping",
    description:
      "Product feed optimization, Google Merchant Center setup, Shopping campaigns, and free listings to get your products in front of high-intent shoppers.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "Content Marketing",
    description:
      "Blog content strategy, product descriptions, landing pages, and brand storytelling that drives organic traffic and positions you as an authority.",
  },
  {
    icon: "/images/services/icons/account-health.png",
    title: "Conversion Rate Optimization",
    description:
      "A/B testing, landing page optimization, checkout improvements, and user behavior analysis to maximize revenue from existing traffic.",
  },
  {
    icon: "/images/services/shopify/custom-theme.png",
    title: "SMS Marketing",
    description:
      "Targeted SMS campaigns for flash sales, order updates, abandoned cart reminders, and VIP customer promotions with high open rates.",
  },
  {
    icon: "/images/services/shopify/migration.png",
    title: "Influencer Marketing",
    description:
      "Identify and collaborate with relevant micro and macro influencers to create authentic product content that drives awareness and sales.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Analytics & Reporting",
    description:
      "Comprehensive monthly reports with KPI tracking, ROI analysis, customer insights, and actionable recommendations for continuous growth.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Audit & Strategy",
    description:
      "Analyze your current marketing, competitors, and target audience to build a custom growth strategy",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Channel Setup",
    description:
      "Set up and configure all marketing channels, tracking pixels, analytics, and attribution tools",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Campaign Launch",
    description:
      "Launch campaigns across selected channels with targeted audiences, compelling creatives, and tracking",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Optimize & Scale",
    description:
      "Monitor performance daily, optimize underperforming campaigns, and scale winning strategies",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Report & Grow",
    description:
      "Deliver detailed performance reports and refine strategies for continuous revenue growth",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Fashion Brand Growth",
    description: "Scaled a fashion brand from $5K to $50K monthly revenue using Facebook Ads and email marketing",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Supplement Store SEO",
    description: "Grew organic traffic by 300% in 6 months with comprehensive SEO and content strategy",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Home Decor PPC",
    description: "Achieved 5.2x ROAS on Google Ads with Shopping campaigns and Performance Max optimization",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Beauty Brand Launch",
    description: "Generated $30K in first-month revenue for a new beauty brand using influencer and Meta ads",
  },
];

const faqs = [
  {
    question: "Which marketing channel is best for my Shopify store?",
    answer:
      "The best marketing channel depends on your product type, target audience, and budget. Facebook and Instagram Ads work great for visual products and impulse purchases. Google Ads captures high-intent shoppers actively searching for your products. SEO provides long-term organic growth. We analyze your business and recommend the optimal channel mix.",
  },
  {
    question: "How much should I spend on marketing my Shopify store?",
    answer:
      "We recommend starting with a minimum ad spend of $500-1,000 per month per channel to gather enough data for optimization. As we identify winning campaigns, we scale budgets for maximum profitability. Our management fees are separate from ad spend and depend on the scope of services.",
  },
  {
    question: "How long does it take to see results from marketing?",
    answer:
      "Paid advertising like Facebook and Google Ads can generate results within the first week. SEO typically takes 3-6 months to show significant organic traffic growth. Email marketing shows results quickly once flows are set up. We set realistic expectations and provide regular progress updates.",
  },
  {
    question: "Do you create ad creatives and copy?",
    answer:
      "Yes, our team handles everything including ad creative design, video production, copywriting, and A/B testing. We create multiple ad variations for testing and continuously optimize based on performance data to find the best-performing combinations.",
  },
  {
    question: "How do you track and measure marketing performance?",
    answer:
      "We set up comprehensive tracking using Facebook Pixel, Google Analytics 4, Google Tag Manager, and Shopify analytics. We track key metrics including ROAS, CPA, conversion rate, CLV, and attribution across all channels. You receive detailed monthly reports with actionable insights.",
  },
  {
    question: "Can you help with email marketing automation?",
    answer:
      "Yes, we set up complete email marketing automation using Klaviyo, Mailchimp, or your preferred platform. This includes welcome series, abandoned cart flows, post-purchase sequences, win-back campaigns, browse abandonment, and promotional campaigns with segmented audiences.",
  },
  {
    question: "Do you offer SEO services specifically for Shopify?",
    answer:
      "Yes, we specialize in Shopify SEO which has unique considerations. We handle technical SEO like canonical tags, site speed, structured data, and URL structure, along with on-page SEO including keyword-optimized product descriptions, collection pages, blog content, and meta tag optimization.",
  },
  {
    question: "What ROAS can I expect from paid advertising?",
    answer:
      "ROAS varies by industry and product. On average, our clients achieve 3-5x ROAS on Facebook Ads and 4-8x ROAS on Google Shopping. We set ROAS targets based on your profit margins and continuously optimize campaigns to improve profitability over time.",
  },
];

export default function ShopifyMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Shopify Marketing</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Shopify Store Marketing Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Drive targeted traffic and maximize revenue with our comprehensive
            Shopify marketing services including SEO, Google Ads, Meta Ads,
            email marketing, and social media management.
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
                A beautiful Shopify store means nothing without traffic and
                customers. Our marketing team specializes in driving qualified
                traffic to Shopify stores using a multi-channel approach that
                combines paid advertising, organic search optimization, email
                automation, and social media marketing for sustainable
                growth.
              </p>
              <p className="typo-body">
                We do not believe in one-size-fits-all marketing. Every
                campaign we run is data-driven and customized to your specific
                products, target audience, and business goals. From launching
                your first ad campaign to scaling a seven-figure store, our
                team has the expertise to drive measurable results and
                maximize your return on every marketing dollar.
              </p>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify Store Marketing Services"
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Our Marketing Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {marketingFeatures.map((feature) => (
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>How we market your Shopify store</h2>
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
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Marketing success stories</h2>
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
            Stop Guessing, Start Growing
          </h2>
          <p className="typo-label" style={{ marginBottom: "20px" }}>
            Data-driven marketing that delivers measurable results
          </p>
          <h3 className="typo-h3" style={{ marginBottom: "16px", color: "var(--color-accent)" }}>
            Transparent reporting. Real ROI. No long-term contracts.
          </h3>
          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto" }}>
            Every dollar you spend on marketing should generate a positive
            return. Our team tracks every click, conversion, and sale to
            ensure your marketing budget is working hard. We provide complete
            transparency with detailed reports and are always optimizing to
            improve your bottom line.
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
