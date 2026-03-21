"use client";

import Image from "next/image";

const features = [
  {
    img: "/images/features/zero-work.webp",
    title: "Zero work from you",
    description:
      "We handle everything from product research to order fulfillment. You just relax and watch your business grow.",
  },
  {
    img: "/images/features/personal-manager.webp",
    title: "Personal Manager",
    description:
      "Get a dedicated account manager who will be your single point of contact for all business-related queries.",
  },
  {
    img: "/images/features/safety.webp",
    title: "100% Safety",
    description:
      "We follow all marketplace guidelines and best practices to ensure your account stays safe and healthy.",
  },
  {
    img: "/images/features/calculation.webp",
    title: "Accurate Calculation",
    description:
      "Transparent profit calculations with detailed reports so you always know exactly where your money goes.",
  },
  {
    img: "/images/features/research.webp",
    title: "Product Research",
    description:
      "Our expert team researches profitable products with high demand and low competition for maximum ROI.",
  },
  {
    img: "/images/features/inventory.webp",
    title: "Inventory Management",
    description:
      "Smart inventory tracking and management to ensure optimal stock levels and minimize storage costs.",
  },
  {
    img: "/images/features/marketing.webp",
    title: "Marketing & Promote",
    description:
      "Strategic marketing and promotion to boost your product visibility and increase sales volume.",
  },
  {
    img: "/images/features/fulfillment.webp",
    title: "Order Fulfillment",
    description:
      "Fast and reliable order processing and shipping from our US-based warehouses.",
  },
  {
    img: "/images/features/scalability.webp",
    title: "Scalability",
    description:
      "Our systems and processes are designed to scale with your business as it grows.",
  },
  {
    img: "/images/features/return.webp",
    title: "Return Handling",
    description:
      "Professional return and refund management to maintain high customer satisfaction scores.",
  },
  {
    img: "/images/features/support.webp",
    title: "Customer Support",
    description:
      "24/7 customer service handling for your store to maintain excellent buyer experience.",
  },
  {
    img: "/images/features/account-health.webp",
    title: "Account Health",
    description:
      "Continuous monitoring and maintenance of your account health metrics and performance.",
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{ padding: "40px 0", backgroundColor: "white", fontFamily: "var(--font-roboto)" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "6px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              color: "var(--color-primary)",
            }}
          >
            What We Offer
          </span>
        </div>
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 800,
            textAlign: "center",
            color: "var(--color-text)",
            marginBottom: "8px",
            lineHeight: "30px",
          }}
        >
          Achieve Amazing Results With Our Service
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "20px",
            color: "var(--color-text-light)",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 24px",
          }}
        >
          No matter where you are on your e-commerce journey &ndash; whether
          you&apos;re just starting out or looking to scale &ndash; our team is
          here to help you achieve amazing results.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
          }}
          className="features-grid"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: "var(--color-light-gray)",
                borderRadius: "12px",
                padding: "20px 16px",
                textAlign: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "default",
              }}
              className="feature-card"
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={100}
                  height={100}
                  style={{ width: "48px", height: "48px", objectFit: "contain" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "4px",
                  lineHeight: "18px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "12.5px",
                  lineHeight: "17px",
                  color: "var(--color-text-light)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
          .feature-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          @media (max-width: 1023px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 639px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 10px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
