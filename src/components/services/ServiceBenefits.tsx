"use client";

import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

const benefitItems = [
  {
    title: "Time and Resource Savings",
    content:
      "EcomGarden's virtual assistants work remotely, cutting out the need for physical office space and associated overhead costs. This leads to substantial cost savings. By handling routine tasks, they free up your time for strategic priorities, ultimately boosting productivity.",
  },
  {
    title: "Flexibility Work",
    content:
      "Hire virtual assistants on a part-time or project basis for flexible working hours and workload, ideal for businesses with varying work demands.",
  },
  {
    title: "24/7 Availability Service",
    content:
      "Our virtual assistant will provide you 24/7 support. Its doesn't matter weekend or holiday.",
  },
  {
    title: "Focus on Your Main Business",
    content:
      "Our team will handle A-Z tasks on your store. Just get profit from your store and keep focus on your main business. Never miss your cash cow.",
  },
  {
    title: "Scalability, Efficiency and Productivity",
    content:
      "Our virtual assistants provide a scalable solution, allowing you to adjust their workload or hire more as your business expands. Their ability to handle multiple tasks simultaneously enhances efficiency and productivity, ensuring prompt and accurate completion of routine tasks.",
  },
];

export default function ServiceBenefits() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Why Choose Us</span>
          <h2 className="typo-h2">Benefits of getting our service</h2>
          <p className="typo-subtext" style={{ maxWidth: "780px", margin: "0 auto" }}>
            Our Amazon Virtual Assistant at EcomGarden efficiently launches and
            manages your Amazon Business worldwide, saving you time and ensuring
            progress. From setting up an Amazon store, product research, and
            listings to SEO optimization, account management, customer support,
            and sales boosting, we handle it all. Our services aim to boost your
            sales and profits comprehensively. Trust our experts at EcomGarden to
            enhance your eCommerce business and make it profitable. Here are some
            key advantages:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            alignItems: "center",
          }}
          className="lg:!grid-cols-2"
        >
          {/* Left - Image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/benefits/benefits-illustration.webp"
              alt="Benefits of our service"
              style={{
                width: "100%",
                maxWidth: "524px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Right - Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                      : "#fff",
                    border: isOpen
                      ? "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)"
                      : "1px solid rgba(0,0,0,0.06)",
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
                          : "#f5f5f5",
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
      </div>
    </section>
  );
}
