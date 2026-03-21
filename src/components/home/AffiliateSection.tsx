"use client";

import Link from "next/link";

export default function AffiliateSection() {
  return (
    <section
      style={{
        padding: "32px 0",
        background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
        fontFamily: "var(--font-roboto)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative element */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "white",
                marginBottom: "4px",
                lineHeight: "28px",
              }}
            >
              Become an Affiliate Partner
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "20px",
              }}
            >
              Earn $1,000+ every month from each refer*
            </p>
          </div>
          <Link
            href="/referral"
            style={{
              display: "inline-block",
              backgroundColor: "white",
              color: "var(--color-primary-dark)",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "16px",
              padding: "11px 28px",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            className="affiliate-btn"
          >
            Join Affiliate Today
          </Link>
        </div>
      </div>

      <style jsx>{`
        .affiliate-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
