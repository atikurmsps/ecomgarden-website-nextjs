"use client";

import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

const benefitItems = [
  {
    title: "Complete A-Z Management",
    content:
      "Our team handles every aspect of your store — from product research and listing to order fulfillment and customer support. You stay focused on growing your business while we manage the daily operations.",
  },
  {
    title: "Dedicated Account Manager",
    content:
      "You get a personal account manager who knows your business inside out. Direct WhatsApp communication, regular updates, and strategic recommendations tailored to your goals.",
  },
  {
    title: "Risk-Free Growth Model",
    content:
      "We believe in results, not promises. Our profit-sharing model means you only pay when you see actual results. Zero upfront risk, full accountability from our side.",
  },
  {
    title: "24/7 Support & Monitoring",
    content:
      "Your store never sleeps, and neither do we. Our team provides round-the-clock monitoring, customer support handling, and issue resolution — weekends and holidays included.",
  },
  {
    title: "Scalable & Flexible Service",
    content:
      "Whether you are just starting or managing a multi-channel operation, our services scale with your business. Hire on a per-store basis, add new marketplaces anytime, and adjust workload as needed.",
  },
];

export default function ServiceBenefits() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Why Choose Us</span>
          <h2 className="typo-h2">Benefits of Working With EcomGarden</h2>
          <p className="typo-subtext" style={{ maxWidth: "680px", margin: "0 auto" }}>
            We are not just a service provider — we are your growth partner.
            Here is what sets us apart from every other agency.
          </p>
        </div>

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {benefitItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: isOpen
                    ? "var(--color-primary-light)"
                    : "#f6f7f9",
                  border: isOpen
                    ? "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)"
                    : "1px solid rgba(0,0,0,0.04)",
                  boxShadow: isOpen
                    ? "0 4px 16px color-mix(in srgb, var(--color-primary) 8%, transparent)"
                    : "0 1px 4px rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "12px",
                    transition: "background 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: isOpen
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: isOpen
                        ? "color-mix(in srgb, var(--color-primary) 15%, transparent)"
                        : "#e8e8e8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s",
                    }}
                  >
                    <FaChevronDown
                      style={{
                        fontSize: "10px",
                        color: isOpen ? "var(--color-primary)" : "#999",
                        transition: "transform 0.3s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      }}
                    />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div style={{ padding: "0 20px 16px" }}>
                    <p className="typo-body" style={{ margin: 0 }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
