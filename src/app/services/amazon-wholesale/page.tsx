"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

const faqs = [
  {
    question: "How Safe Amazon Wholesale Business?",
    answer:
      "Its 100% safe business model. We will get approval from brand first and then get inventory from official distributor.",
  },
  {
    question:
      "Does wholesale profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question: "How much inventory do i need to start?",
    answer:
      "Wholesale business required purchasing inventory before. Based on your budget, we will purchase SKU quantity. A average good budgets is $20k. For a minimum start, its required $5k.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We will get approval from brand first. Based on brand, we will get inventory from their authorised distributor.",
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

const processSteps = [
  {
    img: "/images/services/process/buy-items.png",
    title: "Buy Inventory",
    description:
      "Purchase inventory from official brand or distributor and send to FBA or 3rd party warehouse",
  },
  {
    img: "/images/services/process/sell-items.png",
    title: "Sell Items",
    description: "List inventory on Amazon and start selling inventory",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Shipping",
    description:
      "Your warehouse or FBA will process the product and shipping to customer",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer will receive product from you. Happy with their order",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Get Payout",
    description:
      "Amazon sends payout every 14 days of order delivery. Get funds directly in your bank account",
  },
];

export default function AmazonWholesalePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "50px 0" }} className="bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <h1
                className="font-extrabold mb-5"
                style={{
                  fontSize: "32px",
                  lineHeight: "40px",
                  color: "#e5a24e",
                }}
              >
                Build Your Dream with Amazon Wholesale
              </h1>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Amazon Wholesale, is a popular business model. In this model,
                upfront inventory is required. There are some brand approval
                process before purchase inventory and selling on Amazon.
              </p>
              <p
                className="text-[#333] mb-6 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                After brand approval, sellers get a wholesale account for
                official authenticated products with an approval letter to
                sell those branded products. This model is 100% suspension
                risk free and suitable for long-term operations with adequate
                budgets.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Quick Whatsapp
                </a>
                <Link href="/services" className="btn-primary">
                  Browse More Services
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/services/hero/wholesale-hero.jpg"
                alt="Build Your Dream with Amazon Wholesale"
                width={500}
                height={357}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-10"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            How Amazon Wholesale Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] object-contain"
                    />
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 bg-[#86af51] rounded-full flex items-center justify-center text-white font-bold"
                      style={{ fontSize: "14px" }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3
                  className="font-bold text-[#333] mb-2"
                  style={{ fontSize: "18px" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#333]"
                  style={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/services/management/ecommerce-fulfilment.jpg"
                alt="Manage Amazon Seller Account With EcomGarden"
                width={570}
                height={380}
                className="w-full rounded-lg shadow-[0px_0px_20px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* Right - Text */}
            <div>
              <h2
                className="font-bold mb-5"
                style={{
                  fontSize: "32px",
                  lineHeight: "40px",
                  color: "#2b2e37",
                }}
              >
                Manage Amazon Seller Account With EcomGarden
              </h2>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                At EcomGarden, you will get complete service of fully account
                management. Our automation tools will ensure 100% accuracy and
                zero inventory loss. Our dedicated Virtual Assistant will
                provide you 24/7 support, quick order response, customers
                inquire.
              </p>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Get experienced highly skilled Amazon wholesale virtual
                assistant for your store and get cost-effective and seamless
                support and run your the business successfully. We provide
                complete solutions of store management including wining
                products research, brand approval, products listing, SEO
                optimizations, order management, purchase management, customer
                support, shipping and return handling, inventory management,
                PPC and marketing.
              </p>
              <p
                className="text-[#333] leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Our service is 100% transparent and we do not have any hidden
                charge and do not have any hidden terms &amp; conditions. Get
                our service until you want and cancel contract anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Amazon Wholesale"
        pros={[
          "Brand approved items",
          "Fast to launch products",
          "No advertisement cost",
          "No IP complain",
          "Get starting profit within a short time",
          "No daily inventory purchase tasks",
          "Less SKU easier to maintain",
        ]}
        cons={[
          "Required upfront to purchase inventory",
          "Long approval process",
          "Required registered business",
          "Pay warehouse fee until sold all inventory",
        ]}
      />

      {/* Service Features Grid */}
      <ServiceFeaturesGrid />

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
