import Link from "next/link";
import Image from "next/image";

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
];

export default function ServicesSection() {
  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "var(--color-light-gray)",
        fontFamily: "var(--font-roboto)",
      }}
    >
      <div className="container-main">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontFamily: "var(--font-roboto)",
              display: "block",
              marginBottom: "6px",
            }}
          >
            What We Offer
          </span>
          <h2
            style={{
              fontSize: "25px",
              lineHeight: "1.3",
              color: "var(--color-dark)",
              fontWeight: 800,
              fontFamily: "var(--font-roboto)",
              margin: 0,
            }}
          >
            Our Most Demanded Services
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover"
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  marginBottom: "16px",
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(40,167,69,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={80}
                  height={80}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "var(--color-dark)",
                  marginBottom: "2px",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                {service.title}
              </h3>
              {service.subtitle && (
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    marginBottom: "8px",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  {service.subtitle}
                </p>
              )}

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "var(--color-text-light)",
                  marginBottom: "18px",
                  fontFamily: "var(--font-roboto)",
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-roboto)",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(40,167,69,0.08)",
                  border: "1px solid rgba(40,167,69,0.15)",
                  transition: "all 0.2s",
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link
            href="/services"
            style={{
              display: "inline-block",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "6px",
              fontSize: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              padding: "12px 36px",
              backgroundColor: "var(--color-accent)",
              textDecoration: "none",
              fontFamily: "var(--font-roboto)",
              transition: "background-color 0.2s",
            }}
          >
            Browse All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
