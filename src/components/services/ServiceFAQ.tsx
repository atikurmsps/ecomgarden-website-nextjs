"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
      <div className="container-main">
        <h2
          className="font-bold text-center mb-10"
          style={{ fontSize: "32px", color: "#2b2e37" }}
        >
          Frequently Asked Questions FAQs
        </h2>

        <div className="max-w-3xl mx-auto space-y-[10px]">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="bg-white rounded-[5px] overflow-hidden"
              style={{ borderBottom: "1px solid #e0e0e0" }}
            >
              <button
                className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                style={{ padding: "15px 20px" }}
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <span
                  className="font-semibold"
                  style={{
                    fontSize: "16px",
                    lineHeight: "16px",
                    color: openIndex === index ? "#e5a24e" : "#333",
                  }}
                >
                  {item.question}
                </span>
                <FaChevronDown
                  className={`text-[12px] text-gray-400 transition-transform duration-300 flex-shrink-0 ml-3 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div style={{ padding: "0 20px 15px" }}>
                  <p
                    className="text-[#333]"
                    style={{ fontSize: "14px", lineHeight: "24px" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
