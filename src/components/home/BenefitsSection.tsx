"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const accordionItems = [
  {
    title: "Time and Resource Savings",
    content:
      "EcomGarden's virtual assistants work remotely, cutting out the need for physical office space and associated overhead costs. This enables businesses to save on resources while still getting high-quality work done.",
  },
  {
    title: "Flexibility Work",
    content:
      "Hire virtual assistants on a part-time or project basis for flexible working hours and workload, ideal for businesses with varying demands throughout the year.",
  },
  {
    title: "24/7 Availability Service",
    content:
      "Our virtual assistant will provide you 24/7 support. It doesn't matter weekend or holiday.",
  },
  {
    title: "Focus on Your Main Business",
    content:
      "Our team will handle A-Z tasks on your store. Just get profit from your store and keep focus on your main business. Never worry about your ecommerce store again.",
  },
  {
    title: "Scalability, Efficiency and Productivity",
    content:
      "Our services are designed to grow with your business. As your needs expand, we scale our support to match, ensuring consistent quality and productivity at every stage.",
  },
];

export default function BenefitsSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

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
            Why Choose Us
          </span>
        </div>
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 700,
            textAlign: "center",
            color: "var(--color-text)",
            marginBottom: "8px",
            lineHeight: "30px",
          }}
        >
          Benefits of Getting Our Service
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
          Our Amazon Virtual Assistant at EcomGarden efficiently launches and
          manages your Amazon Business worldwide with expert precision.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "center",
          }}
          className="benefits-grid"
        >
          {/* Left - Image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/benefits/benefits-illustration.webp"
              alt="Benefits of our service"
              width={524}
              height={400}
              style={{ width: "100%", maxWidth: "460px", height: "auto", borderRadius: "12px" }}
            />
          </div>

          {/* Right - Accordion */}
          <div>
            {accordionItems.map((item, index) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "10px",
                  marginBottom: "8px",
                  backgroundColor: openIndex === index ? "var(--color-primary-light)" : "var(--color-light-gray)",
                  overflow: "hidden",
                  transition: "background-color 0.2s ease",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    padding: "12px 16px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-roboto)",
                  }}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      color:
                        openIndex === index ? "var(--color-primary-dark)" : "var(--color-text)",
                    }}
                  >
                    {item.title}
                  </span>
                  <FaChevronDown
                    style={{
                      fontSize: "11px",
                      color: "var(--color-text-light)",
                      flexShrink: 0,
                      marginLeft: "12px",
                      transition: "transform 0.3s ease",
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openIndex === index && (
                  <div style={{ padding: "0 16px 12px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "19px",
                        color: "var(--color-text-light)",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .benefits-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
