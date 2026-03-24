"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const accordionItems = [
  {
    title: "Time and Resource Savings",
    content: "Our VAs work remotely — no office overhead. Save resources while getting high-quality store management done.",
  },
  {
    title: "Flexible Working Model",
    content: "Hire on a part-time or project basis with flexible workload — ideal for businesses with varying seasonal demands.",
  },
  {
    title: "24/7 Availability",
    content: "Round-the-clock support including weekends and holidays. Your store never sleeps, and neither do we.",
  },
  {
    title: "Focus on Your Main Business",
    content: "We handle A-Z store tasks. You collect profits and keep focus on your core business. Zero store worries.",
  },
  {
    title: "Scalability & Productivity",
    content: "As your business grows, we scale support to match — consistent quality and productivity at every stage.",
  },
];

export default function BenefitsSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Benefits</span>
          <h2 className="typo-h2">Why 250+ Clients Trust Us With Their Stores</h2>
          <p className="typo-subtext">
            Our Amazon &amp; Walmart Virtual Assistants at EcomGarden efficiently launch and manage
            your ecommerce business worldwide with expert precision — so you can focus on what matters most.
          </p>
        </div>

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
              style={{ width: "100%", maxWidth: "460px", height: "auto", borderRadius: "10px" }}
            />
          </div>

          {/* Right - Accordion */}
          <div>
            {accordionItems.map((item, index) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "8px",
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
                    padding: "14px 16px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span
                    className="typo-h3"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: openIndex === index ? "var(--color-primary-dark)" : "var(--color-text)",
                    }}
                  >
                    {item.title}
                  </span>
                  <FaChevronDown
                    style={{
                      fontSize: "11px",
                      color: "var(--color-text-light)",
                      flexShrink: 0,
                      marginLeft: "10px",
                      transition: "transform 0.3s ease",
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openIndex === index && (
                  <div style={{ padding: "0 16px 14px" }}>
                    <p className="typo-body" style={{ margin: 0 }}>
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
