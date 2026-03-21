import Link from "next/link";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, var(--color-dark) 0%, var(--color-dark-light) 50%, var(--color-dark) 100%)",
        padding: "48px 0 44px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "color-mix(in srgb, var(--color-primary) 6%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-40px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "color-mix(in srgb, var(--color-primary) 4%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "color-mix(in srgb, var(--color-primary) 3%, transparent)",
        }}
      />

      <div className="container-main" style={{ position: "relative" }}>
        <div className="text-center">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
              borderRadius: "50px",
              padding: "6px 18px",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-primary)",
              letterSpacing: "0.5px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary)",
                display: "inline-block",
              }}
            />
            We are online CST 11 PM to 3 PM
          </div>

          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "12px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Ready to Scale Your eCommerce Business?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#9494ac",
              maxWidth: "520px",
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Connect with our in-house team of highly vetted experts eager to
            propel your store to new heights with guaranteed results.
          </p>

          <div
            className="flex flex-wrap justify-center"
            style={{ gap: "12px" }}
          >
            <Link
              href="/contact"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                padding: "12px 32px",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--color-primary) 30%, transparent)",
              }}
              className="hover:!opacity-90"
            >
              Contact Us
              <FaChevronRight style={{ fontSize: "10px" }} />
            </Link>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                padding: "12px 26px",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(255,255,255,0.12)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              className="hover:!bg-white/15"
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Quick WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
