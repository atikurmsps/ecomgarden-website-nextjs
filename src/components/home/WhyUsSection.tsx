import Image from "next/image";

const features = [
  {
    title: "Complete Store Management",
    description:
      "We manage the e-commerce store completely from start to finish, including top-selling product research, listing, sourcing, order processing, fulfillment, shipping, return handling, customer support, account health check, reporting and everything from A to Z.",
  },
  {
    title: "Risk-Free Growth",
    description:
      "Are you want to grow your online e-commerce business quickly without any risk? Use our automated e-commerce management services and experience the results you have always wanted.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "#fff",
        fontFamily: "var(--font-roboto)",
      }}
    >
      <div className="container-main">
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Why Choose Us
          </span>
          <h2
            style={{
              fontSize: "25px",
              lineHeight: "1.3",
              color: "var(--color-dark)",
              fontWeight: 800,
              marginTop: "6px",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Why You Will Get Our Ecommerce Management Services ?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Left - Image card */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ position: "relative" }}>
              <Image
                src="/images/hero/sales-screenshot.webp"
                alt="700k Sales in 1 Year"
                width={570}
                height={320}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              {/* Play button overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: "var(--color-primary)",
                    boxShadow: "0 4px 16px rgba(40,167,69,0.35)",
                    transition: "transform 0.2s",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ width: "24px", height: "24px", marginLeft: "2px" }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  borderRadius: "12px",
                  padding: "22px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  backgroundColor: "#fff",
                  borderLeft: "3px solid var(--color-primary)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--color-dark)",
                    marginBottom: "8px",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "var(--color-text-light)",
                    margin: 0,
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
