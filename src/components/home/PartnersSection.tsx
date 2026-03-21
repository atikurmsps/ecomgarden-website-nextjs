"use client";

import Image from "next/image";

const partners = [
  { name: "USPS", img: "/images/partners/usps.webp", w: 157, h: 77 },
  { name: "Amazon SPN", img: "/images/partners/amazon-spn.webp", w: 157, h: 60 },
  { name: "Sam's Club", img: "/images/partners/sams-club.webp", w: 157, h: 65 },
  { name: "CenturyLink", img: "/images/partners/centurylink.webp", w: 157, h: 62 },
  { name: "EasyShip", img: "/images/partners/easyship.webp", w: 157, h: 86 },
  { name: "Zoro", img: "/images/partners/zoro.webp", w: 157, h: 82 },
  { name: "Shopify", img: "/images/partners/shopify.webp", w: 158, h: 85 },
  { name: "Google Workspace", img: "/images/partners/google-workspace.webp", w: 157, h: 38 },
  { name: "Walmart", img: "/images/partners/walmart.png", w: 157, h: 75 },
  { name: "Google Ads", img: "/images/partners/google-ads.webp", w: 157, h: 53 },
];

export default function PartnersSection() {
  return (
    <section style={{ padding: "24px 0", backgroundColor: "var(--color-light-gray)", fontFamily: "var(--font-roboto)" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              color: "var(--color-primary)",
            }}
          >
            Trusted By
          </span>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "var(--color-text)",
              marginTop: "4px",
              lineHeight: "28px",
            }}
          >
            Our Partners
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px 32px",
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="partner-logo"
              style={{
                width: "110px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.55,
                filter: "grayscale(100%)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <Image
                src={partner.img}
                alt={partner.name}
                width={partner.w}
                height={partner.h}
                style={{ maxWidth: "100px", maxHeight: "38px", width: "auto", height: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .partner-logo:hover {
            opacity: 1 !important;
            filter: grayscale(0%) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
