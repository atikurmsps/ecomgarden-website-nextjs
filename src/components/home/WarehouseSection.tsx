"use client";

import Link from "next/link";
import Image from "next/image";

export default function WarehouseSection() {
  return (
    <section style={{ padding: "40px 0", backgroundColor: "var(--color-light-gray)", fontFamily: "var(--font-roboto)" }}>
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "center",
          }}
          className="warehouse-grid"
        >
          {/* Left - Text Content */}
          <div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "1.5px",
                color: "var(--color-primary)",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Warehouses
            </span>
            <h2
              style={{
                fontSize: "25px",
                fontWeight: 800,
                color: "var(--color-text)",
                marginBottom: "12px",
                lineHeight: "30px",
              }}
            >
              Operating Dedicated Warehouses in NY, FL, CT
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "20px",
                color: "var(--color-text-light)",
                marginBottom: "20px",
              }}
            >
              No matter which method you use to sell, we&apos;ve got you
              covered. Our 3PL warehouses can do FBA prep, WFS prep, storage,
              2-step Dropshipping, or ship your orders directly to your
              customers.
            </p>
            <Link href="/services/3pl-warehouse" className="btn-primary">
              Get only warehouse service
            </Link>
          </div>

          {/* Right - Map Image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/warehouse/warehouse-map.webp"
              alt="Warehouse Locations Map"
              width={550}
              height={400}
              style={{ width: "100%", maxWidth: "440px", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .warehouse-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
