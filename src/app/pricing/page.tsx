import Link from "next/link";
import {
  FaWhatsapp,
  FaChevronRight,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
  FaHeadset,
  FaWarehouse,
  FaShippingFast,
} from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const highlights = [
  {
    icon: FaShieldAlt,
    title: "100% Risk Free",
    desc: "Pay only once you see profit",
  },
  {
    icon: FaHandshake,
    title: "Profit Sharing",
    desc: "We succeed when you succeed",
  },
  {
    icon: FaChartLine,
    title: "35% Avg ROI",
    desc: "Proven results across clients",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Dedicated team for your store",
  },
];

const additionalServices = [
  {
    icon: FaWarehouse,
    img: "/images/pricing/warehouse-icon.webp",
    title: "3PL Warehouse Service",
    description:
      "Operating 3 dedicated warehouses in AZ, NY, CT. FBA prep, WFS prep, storage, 2-step dropshipping, and direct-to-customer shipping — all under one roof.",
    bullets: ["Same-day order processing", "Flat rate pricing, no hidden fees", "Web-based inventory software"],
    href: "/services/3pl-warehouse",
  },
  {
    icon: FaShippingFast,
    img: "/images/pricing/shipping-icon.webp",
    title: "Flat Rate Shipping Labels",
    description:
      "Stop overpaying for shipping. Get discounted USPS & UPS labels at flat rates — no box size limits, no expiration, no hidden fees.",
    bullets: ["USPS Priority Mail from $4.00", "UPS Next Day Air from $5.00", "No box size or weight limits"],
    href: "/services/flat-rate-shipping",
  },
];

const managementServices = [
  {
    img: "/images/pricing/amazon-wholesale-icon.webp",
    title: "Amazon Wholesale",
    description:
      "Official authentic branded products from authorized distributors. 100% suspension risk free with brand approval letters.",
    href: "/services/amazon-wholesale",
  },
  {
    img: "/images/pricing/walmart-icon.png",
    title: "Walmart Management",
    description:
      "Complete Walmart store management — product research, listings, order fulfillment, pricing optimization, and daily operations.",
    href: "/services/walmart-management",
  },
  {
    img: "/images/pricing/amazon-arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "(2-Step Dropshipping)",
    description:
      "No upfront inventory required. Zero-risk, quickly profitable business model — start generating profit within the first week.",
    href: "/services/amazon-arbitrage",
  },
  {
    img: "/images/pricing/amazon-fba-icon.webp",
    title: "Amazon FBA",
    description:
      "Full FBA management — product listings, optimization, PPC campaigns, inventory management, and customer service handled for you.",
    href: "https://wa.link/m2ac6m",
    external: true,
  },
  {
    img: "/images/pricing/walmart-wfs-icon.png",
    title: "Walmart WFS",
    description:
      "Walmart Fulfillment Services management — product prep, shipping to WFS warehouses, listing optimization, and order management.",
    href: "https://wa.link/m2ac6m",
    external: true,
  },
  {
    img: "/images/pricing/ebay-icon.webp",
    title: "eBay Management",
    description:
      "Complete eBay store management — listing creation, pricing strategy, order fulfillment, customer support, and returns handling.",
    href: "/services/amazon-arbitrage",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#f6f7f9", position: "relative", overflow: "hidden" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left Content */}
            <div style={{ padding: "55px 0" }}>
              <span className="typo-label" style={{ display: "block", marginBottom: "10px" }}>
                Profit Sharing Model
              </span>

              <h1 className="typo-h1" style={{ marginBottom: "6px" }}>
                Start Your Unlimited Vacation
              </h1>
              <p className="typo-body" style={{ color: "var(--color-primary)", fontWeight: 600, marginBottom: "6px", fontSize: "16px" }}>
                We provide service with profit sharing model
              </p>
              <p className="typo-h3" style={{ color: "var(--color-accent)", marginBottom: "12px" }}>
                100% Risk Free. Pay only once you see profit.
              </p>
              <p className="typo-body" style={{ marginBottom: "20px", maxWidth: "480px" }}>
                No one will offer profit sharing model and no payment before you
                get profit. Our experienced and highly skilled team will start
                profit within a week.
              </p>

              {/* Highlight pills */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e8e8",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "7px",
                        backgroundColor: "rgba(22,163,74,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                    </span>
                    <div>
                      <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-text)", lineHeight: 1.2 }}>
                        {item.title}
                      </p>
                      <p className="typo-small" style={{ color: "#999", marginTop: "1px" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <FaWhatsapp style={{ fontSize: "16px" }} />
                  Book Your Dream Project
                </a>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Image — full height with top padding */}
            <div className="hidden lg:flex items-end justify-center" style={{ position: "relative", minHeight: "100%", paddingTop: "50px" }}>
              <img
                src="/images/pricing/hero-vacation.png"
                alt="Start your unlimited vacation"
                style={{ width: "auto", maxWidth: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">Additional Services</span>
            <h2 className="typo-h2">Warehouse &amp; Shipping Solutions</h2>
            <p className="typo-subtext">
              Complete your eCommerce operation with our in-house warehouse and shipping services — designed to cut costs and boost margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="card-hover"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(22,163,74,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      style={{ width: "32px", height: "32px", objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="typo-h3">{service.title}</h3>
                </div>

                <p className="typo-body" style={{ marginBottom: "12px" }}>
                  {service.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
                  {service.bullets.map((b) => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: "var(--color-primary)", fontSize: "10px" }}>●</span>
                      <span className="typo-small" style={{ fontWeight: 500 }}>{b}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Learn More <FaChevronRight style={{ fontSize: "9px" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">Management Services</span>
            <h2 className="typo-h2">Full Store Management Solutions</h2>
            <p className="typo-subtext">
              Our expert team handles every task of your store professionally — from setup to scaling, we manage everything so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {managementServices.map((service) => (
              <div
                key={service.title}
                className="card-hover"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ width: "40px", height: "40px", objectFit: "contain", flexShrink: 0 }}
                  />
                  <div>
                    <h3 className="typo-h3" style={{ fontSize: "17px" }}>{service.title}</h3>
                    {"subtitle" in service && service.subtitle && (
                      <p className="typo-small" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                        {service.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <p className="typo-body" style={{ marginBottom: "14px", flex: 1 }}>
                  {service.description}
                </p>

                {"external" in service && service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px", fontSize: "13px", width: "fit-content", animation: "none" }}
                  >
                    Get Started <FaChevronRight style={{ fontSize: "9px" }} />
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Read More <FaChevronRight style={{ fontSize: "9px" }} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
