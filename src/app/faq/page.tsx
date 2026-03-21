"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
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
      {/* FAQ Section */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
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

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
