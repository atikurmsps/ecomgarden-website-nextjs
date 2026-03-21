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
      {/* Dark Hero Section */}
      <section
        style={{
          padding: "44px 0 36px",
          backgroundColor: "var(--color-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "1px solid rgba(22, 163, 74, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(22, 163, 74, 0.1)",
          }}
        />
        <div className="container-main" style={{ position: "relative" }}>
          {/* Green badge pill */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(22, 163, 74, 0.15)",
              color: "var(--color-primary)",
              padding: "6px 18px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "var(--font-roboto)",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            3PL Warehouse
          </div>
          <h1
            style={{
              fontSize: "30px",
              lineHeight: "40px",
              color: "#fff",
              fontFamily: "var(--font-roboto)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Get Warehouse For Your Business
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "#9494ac",
              fontFamily: "var(--font-roboto)",
              maxWidth: "600px",
              marginBottom: "24px",
            }}
          >
            Operating dedicated warehouses in NY, FL, CT. FBA prep, WFS prep,
            storage, 2-step dropshipping, and direct-to-customer shipping
            with flat rate pricing.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Contact Us
            </a>
            <Link href="/services" className="btn-primary">
              Browse More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "44px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-roboto)",
                  marginBottom: "16px",
                }}
              >
                Operating Dedicated Warehouses in NY, FL, CT
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "26px",
                  color: "var(--color-text-light)",
                  fontFamily: "var(--font-roboto)",
                  marginBottom: "20px",
                }}
              >
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
                    className="flex items-start gap-3"
                    style={{ marginBottom: "12px" }}
                  >
                    <FaCheck
                      style={{
                        color: "var(--color-primary)",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "15px",
                        color: "var(--color-text-light)",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/3pl-warehouse"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-roboto)",
                }}
                className="hover:underline"
              >
                Get only warehouse service
              </Link>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/warehouse/warehouse-map.webp"
                alt="3PL Warehouse Locations Map"
                width={550}
                height={400}
                style={{ borderRadius: "12px" }}
                className="w-full max-w-[550px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        style={{
          padding: "44px 0",
          backgroundColor: "var(--color-light-gray)",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(22, 163, 74, 0.15)",
              color: "var(--color-primary)",
              padding: "4px 14px",
              borderRadius: "50px",
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "var(--font-roboto)",
              marginBottom: "12px",
              letterSpacing: "0.5px",
            }}
          >
            Pricing
          </div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--color-text)",
              fontFamily: "var(--font-roboto)",
              marginBottom: "12px",
            }}
          >
            Flat Rate Pricing
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "26px",
              color: "var(--color-text-light)",
              fontFamily: "var(--font-roboto)",
              maxWidth: "720px",
              marginBottom: "32px",
            }}
          >
            We believe in transparency. Our pricing is flat rate and no
            hidden charge. There are no monthly fees in our warehouse
            service. Receive, Process, Shipping, Storage your items with
            full confidence.
          </p>

          {/* General Services Table */}
          <div className="max-w-3xl mx-auto" style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--color-text)",
                fontFamily: "var(--font-roboto)",
                marginBottom: "16px",
              }}
            >
              General Services
            </h3>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <table className="w-full" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-dark)" }}>
                    <th
                      className="text-left"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: "#fff",
                        padding: "12px 20px",
                      }}
                    >
                      Service
                    </th>
                    <th
                      className="text-left"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: "#fff",
                        padding: "12px 20px",
                      }}
                    >
                      Price
                    </th>
                    <th
                      className="text-left"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: "#fff",
                        padding: "12px 20px",
                      }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generalServices.map((item, index) => (
                    <tr
                      key={item.service}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#fff" : "var(--color-light-gray)",
                      }}
                    >
                      <td
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--font-roboto)",
                          color: "var(--color-text)",
                          fontWeight: 500,
                          padding: "12px 20px",
                        }}
                      >
                        {item.service}
                      </td>
                      <td
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--font-roboto)",
                          color: "var(--color-primary)",
                          fontWeight: 700,
                          padding: "12px 20px",
                        }}
                      >
                        {item.price}
                      </td>
                      <td
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--font-roboto)",
                          color: "var(--color-text-light)",
                          padding: "12px 20px",
                        }}
                      >
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Box Price Table */}
          <div className="max-w-3xl mx-auto" style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--color-text)",
                fontFamily: "var(--font-roboto)",
                marginBottom: "16px",
              }}
            >
              Box Price
            </h3>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <table className="w-full" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-dark)" }}>
                    <th
                      className="text-left"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: "#fff",
                        padding: "12px 20px",
                      }}
                    >
                      Box Type
                    </th>
                    <th
                      className="text-left"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: "#fff",
                        padding: "12px 20px",
                      }}
                    >
                      Price
                    </th>
                    <th
                      className="text-left"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-roboto)",
                        color: "#fff",
                        padding: "12px 20px",
                      }}
                    >
                      Dimensions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {boxPrices.map((item, index) => (
                    <tr
                      key={item.boxType}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#fff" : "var(--color-light-gray)",
                      }}
                    >
                      <td
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--font-roboto)",
                          color: "var(--color-text)",
                          fontWeight: 500,
                          padding: "12px 20px",
                        }}
                      >
                        {item.boxType}
                      </td>
                      <td
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--font-roboto)",
                          color: "var(--color-primary)",
                          fontWeight: 700,
                          padding: "12px 20px",
                        }}
                      >
                        {item.price}
                      </td>
                      <td
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--font-roboto)",
                          color: "var(--color-text-light)",
                          padding: "12px 20px",
                        }}
                      >
                        {item.dimensions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "26px",
              color: "var(--color-text-light)",
              fontFamily: "var(--font-roboto)",
              maxWidth: "720px",
            }}
          >
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
