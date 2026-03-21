"use client";

import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    img: "/images/services/arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "as known 2-Step Dropshipping",
    description:
      "Most popular business model. In this model, no upfront inventory is required. We source products from retail stores and resell them on Amazon for profit. Our team handles everything from product research, sourcing, listing optimization, and order fulfillment. This is a low-risk, high-reward model perfect for beginners.",
    href: "/services/amazon-arbitrage",
  },
  {
    img: "/images/services/wholesale-icon.webp",
    title: "Amazon Wholesale",
    subtitle: "",
    description:
      "Upfront inventory is required. With wholesale business model, all products will be official authentic branded products purchased directly from authorized distributors. We handle product research, supplier negotiations, inventory management, and FBA prep. This model offers consistent profit margins and scalable growth.",
    href: "/services/amazon-wholesale",
  },
  {
    img: "/images/services/walmart-icon.png",
    title: "Walmart Management",
    subtitle: "",
    description:
      "Our Walmart Virtual Assistant can help you with product research, listings, optimizations, order fulfillment, and complete store management. We handle everything from store setup to daily operations, ensuring your Walmart store performs at its best with optimal pricing and inventory strategies.",
    href: "/services/walmart-management",
  },
  {
    img: "/images/services/hero/shopify-hero.svg",
    title: "Shopify Development",
    subtitle: "Store Development & Management",
    description:
      "Custom Shopify store development and management services. We build, design, and optimize your Shopify store for maximum conversions and sales. From custom theme development to app integration, we handle every aspect of your Shopify store.",
    href: "/services/shopify-development",
  },
  {
    img: "/images/warehouse/warehouse-map.webp",
    title: "3PL Warehouse",
    subtitle: "Operating in NY, FL, CT",
    description:
      "Operating dedicated warehouses in New York, Florida, and Connecticut. Web-based software, flat-rate pricing, fast processing, and shipping-ready boxes for all your fulfillment needs. FBA prep, WFS prep, storage, 2-step dropshipping support.",
    href: "/services/3pl-warehouse",
  },
  {
    img: "/images/services/hero/shipping-hero.jpg",
    title: "Flat Rate Shipping",
    subtitle: "Cheap USPS & UPS Labels",
    description:
      "Discounted flat-rate shipping services for eCommerce businesses. USPS Priority Mail for $4 and UPS Next Day Air for $5. No box size limit. Save on shipping costs with our partnerships with major carriers across the United States.",
    href: "/services/flat-rate-shipping",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Dark Hero Section */}
      <section
        style={{
          backgroundColor: "var(--color-dark)",
          padding: "44px 0 36px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "30%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <div className="flex flex-col items-center text-center">
            {/* Green badge pill */}
            <span
              style={{
                display: "inline-block",
                backgroundColor: "var(--color-primary)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "5px 16px",
                borderRadius: "50px",
                marginBottom: "14px",
                letterSpacing: "0.5px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              What We Offer
            </span>

            <h1
              style={{
                fontSize: "30px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "10px",
                lineHeight: 1.2,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              All Services
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "#9494ac",
                maxWidth: "520px",
                lineHeight: 1.6,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Comprehensive eCommerce management services to help you start, grow
              and scale your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        style={{
          backgroundColor: "var(--color-light-gray)",
          padding: "44px 0",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid #eee",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  borderTop: "3px solid transparent",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                  el.style.borderTopColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                  el.style.borderTopColor = "transparent";
                }}
              >
                {/* Service icon */}
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="object-contain"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "4px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {service.title}
                </h3>

                {/* Subtitle */}
                {service.subtitle && (
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-primary)",
                      marginBottom: "10px",
                      fontWeight: 500,
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {service.subtitle}
                  </p>
                )}

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--color-text-light)",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                    marginTop: service.subtitle ? "0" : "10px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {service.description}
                </p>

                {/* Read More link */}
                <Link
                  href={service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "8px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "5px";
                  }}
                >
                  Read More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
