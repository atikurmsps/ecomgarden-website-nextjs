"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section style={{ padding: "40px 0" }} className="bg-white">
      <div className="container-main">
        <h2
          className="font-bold text-center mb-4"
          style={{ fontSize: "32px", color: "#2b2e37" }}
        >
          Benefits of getting our service
        </h2>
        <p
          className="text-center text-[#333] mb-10 max-w-4xl mx-auto leading-relaxed"
          style={{ fontSize: "16px", textAlign: "justify" }}
        >
          Our Amazon Virtual Assistant at EcomGarden efficiently launches and
          manages your Amazon Business worldwide, saving you time and ensuring
          progress. From setting up an Amazon store, product research, and
          listings to SEO optimization, account management, customer support,
          and sales boosting, we handle it all. Our services aim to boost your
          sales and profits comprehensively. Trust our experts at EcomGarden to
          enhance your eCommerce business and make it profitable. Here are some
          key advantages:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <Image
              src="/images/benefits/benefits-illustration.webp"
              alt="Benefits of our service"
              width={524}
              height={400}
              className="w-full max-w-[524px] h-auto rounded-lg"
            />
          </div>

          {/* Right - Accordion */}
          <div className="space-y-[10px]">
            {benefitItems.map((item, index) => (
              <div
                key={item.title}
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
                    {item.title}
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
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
