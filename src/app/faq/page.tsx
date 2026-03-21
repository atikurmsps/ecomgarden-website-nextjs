"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const faqs = [
  {
    question: "Does 2 Step Dropshipping Legal?",
    answer:
      "Yes, 2 step dropshipping is legal. You will never face any legal issue with 2 step dropshipping model.",
  },
  {
    question: "How Safe 2 Step Dropshipping Business?",
    answer:
      "Its 100% safe business model. Amazon required sending products with Amazon's branded packaging or white branding. As well, no 3rd party retailer invoice into the parcel. Our warehouse will remove the walmart invoice and repackaging products with Amazon branded box.",
  },
  {
    question:
      "Does 2 Step Dropshipping profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question:
      "Why I Need Investment Where Dropshipping Not Required any upfront?",
    answer:
      "Good question. Amazon will send you payout after 14 days of order delivery. So you need purchase products using your own funds. Then you will get payment from Amazon. So you need capital to purchase products when customer will order.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We use authentic products sources only and use sourcing where its cheapest. We use Walmart, Amazon Prime, Sams Club, Target, Home Depot, Costco Wholesale.",
  },
  {
    question: "Will you guys manage my whole business?",
    answer:
      "Yes, We provide A-Z management including products research, sourcing, order management, shipping, return handling, customer support, promotion.",
  },
  {
    question: "What if I can not create any profit?",
    answer:
      "Our working method is 100% profit guarantee. You will get full refund of any charge with no question ask.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(160deg, var(--color-dark) 0%, #1a1555 50%, var(--color-dark) 100%)",
          padding: "40px 0 36px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "color-mix(in srgb, var(--color-primary) 5%, transparent)",
          }}
        />
        <div className="container-main" style={{ position: "relative" }}>
          <div className="text-center">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
                borderRadius: "50px",
                padding: "5px 16px",
                marginBottom: "14px",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-primary)",
              }}
            >
              <FaQuestionCircle style={{ fontSize: "11px" }} />
              Got Questions?
            </div>
            <h1
              style={{
                fontSize: "27px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "8px",
              }}
            >
              Frequently Asked Questions
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#9494ac",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Everything you need to know about our eCommerce management
              services and business models.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "40px 0 48px", backgroundColor: "var(--color-light-gray)" }}>
        <div className="container-main">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  style={{
                    marginBottom: "8px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#fff",
                    border: isOpen
                      ? "1px solid color-mix(in srgb, var(--color-primary) 25%, transparent)"
                      : "1px solid #eee",
                    boxShadow: isOpen
                      ? "0 4px 20px color-mix(in srgb, var(--color-primary) 8%, transparent)"
                      : "0 1px 4px rgba(0,0,0,0.02)",
                    transition: "all 0.3s",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 18px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "14px",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "7px",
                          background: isOpen
                            ? "var(--color-primary)"
                            : "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: "13px",
                          fontWeight: 700,
                          color: isOpen ? "#fff" : "var(--color-primary)",
                          transition: "all 0.3s",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: isOpen ? "var(--color-primary)" : "var(--color-text)",
                          transition: "color 0.2s",
                        }}
                      >
                        {item.question}
                      </span>
                    </div>
                    <span
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        background: isOpen
                          ? "color-mix(in srgb, var(--color-primary) 10%, transparent)"
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
                    <div
                      style={{
                        padding: "0 18px 16px 58px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "15px",
                          color: "var(--color-text-light)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions? */}
          <div
            style={{
              maxWidth: "780px",
              margin: "28px auto 0",
              background: "#fff",
              borderRadius: "14px",
              padding: "24px",
              textAlign: "center",
              border: "1px solid #eee",
              boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "6px",
              }}
            >
              Still have questions?
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "var(--color-text-light)",
                marginBottom: "14px",
              }}
            >
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our team.
            </p>
            <div
              className="flex flex-wrap justify-center"
              style={{ gap: "10px" }}
            >
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "15px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                style={{
                  background: "#f5f5f5",
                  color: "var(--color-text)",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "15px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  border: "1px solid #eee",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
