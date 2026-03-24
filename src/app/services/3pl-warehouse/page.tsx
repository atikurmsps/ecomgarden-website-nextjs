"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const features = [
  "Manage with web based software",
  "Flat rate. No hidden charges and monthly fees",
  "Faster order processing",
  "Shipping box ready",
];

const generalServices = [
  {
    service: "Receive Items",
    price: "Free",
    description: "We will receive your items from any source",
  },
  {
    service: "Process Your Items",
    price: "$2 Per Parcel",
    description: "We will process your items for shipment",
  },
  {
    service: "Oversize Item Process",
    price: "$3 Per Parcel",
    description: "Process oversize items 10lbs to 25lbs max",
  },
  {
    service: "Return Handling",
    price: "$2 Per Return",
    description: "Receive your returned parcel and prepare for shipping",
  },
  {
    service: "FBA & WFS Prep",
    price: "$0.50 Per Item",
    description: "Labeling & bundle your items for FBA & WFS",
  },
  {
    service: "Photography",
    price: "$15 Per Item",
    description:
      "Capture 10 photos of your items from different position",
  },
];

const boxPrices = [
  {
    boxType: "Poly Bag",
    price: "$1.00",
    dimensions: "Upto 11x13 in",
  },
  {
    boxType: "Small Box",
    price: "$1.30",
    dimensions: "Upto 12x9x6 in",
  },
  {
    boxType: "Medium Box",
    price: "$2.00",
    dimensions: "Upto 18x12x12 in",
  },
  {
    boxType: "Large Box",
    price: "$5.00",
    dimensions: "Upto 28x18x18 in",
  },
];

export default function ThreePLWarehousePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">3PL Warehouse</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Get Warehouse For Your Business
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Operating dedicated warehouses in NY, FL, CT. FBA prep, WFS prep,
            storage, 2-step dropshipping, and direct-to-customer shipping
            with flat rate pricing.
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
              Contact Us
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
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Operating Dedicated Warehouses in NY, FL, CT
              </h2>
              <p className="typo-body" style={{ marginBottom: "20px" }}>
                No matter which method you use to sell, we&apos;ve got you
                covered. Our 3PL warehouses can do FBA prep, WFS prep,
                storage, 2-step Dropshipping, or ship your orders directly
                to your customers.
              </p>

              {/* Feature Bullets */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {features.map((feature) => (
                  <li
                    key={feature}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}
                  >
                    <FaCheck
                      style={{
                        color: "var(--color-primary)",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    />
                    <span className="typo-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/services/3pl-warehouse" className="typo-label">
                Get only warehouse service
              </Link>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/warehouse/warehouse-map.webp"
                alt="3PL Warehouse Locations Map"
                width={550}
                height={400}
                style={{ borderRadius: "12px", width: "100%", maxWidth: "550px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="typo-label">Pricing</span>
            <h2 className="typo-h2">Flat Rate Pricing</h2>
            <p className="typo-subtext" style={{ maxWidth: "720px", margin: "8px 0 32px" }}>
              We believe in transparency. Our pricing is flat rate and no
              hidden charge. There are no monthly fees in our warehouse
              service. Receive, Process, Shipping, Storage your items with
              full confidence.
            </p>
          </div>

          {/* General Services Table */}
          <div style={{ maxWidth: "768px", margin: "0 auto 32px" }}>
            <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
              General Services
            </h3>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-dark)" }}>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>
                      Service
                    </th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>
                      Price
                    </th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generalServices.map((item, index) => (
                    <tr
                      key={item.service}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#fff" : "#f6f7f9",
                      }}
                    >
                      <td className="typo-body" style={{ padding: "12px 20px" }}>
                        {item.service}
                      </td>
                      <td className="typo-body" style={{ padding: "12px 20px", color: "var(--color-primary)", fontWeight: 700 }}>
                        {item.price}
                      </td>
                      <td className="typo-small" style={{ padding: "12px 20px" }}>
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Box Price Table */}
          <div style={{ maxWidth: "768px", margin: "0 auto 32px" }}>
            <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
              Box Price
            </h3>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-dark)" }}>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>
                      Box Type
                    </th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>
                      Price
                    </th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>
                      Dimensions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {boxPrices.map((item, index) => (
                    <tr
                      key={item.boxType}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#fff" : "#f6f7f9",
                      }}
                    >
                      <td className="typo-body" style={{ padding: "12px 20px" }}>
                        {item.boxType}
                      </td>
                      <td className="typo-body" style={{ padding: "12px 20px", color: "var(--color-primary)", fontWeight: 700 }}>
                        {item.price}
                      </td>
                      <td className="typo-small" style={{ padding: "12px 20px" }}>
                        {item.dimensions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="typo-body" style={{ maxWidth: "720px" }}>
            We also offer on demand service. For more informations, please
            contact with us with your requirements. Our support agent happy
            to assist you for any kinds of informations.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
