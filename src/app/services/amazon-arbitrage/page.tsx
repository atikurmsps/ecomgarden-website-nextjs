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

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Sell Items",
    description: "List catalog on Amazon and start selling items",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Buy Items",
    description:
      "Purchase items from Walmart thats customer ordered and shipping to warehouse",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Shipping",
    description:
      "Warehouse will remove Walmart branding and repackaging Amazon branding and ship to customer",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Happy Customer",
    description:
      "Customer will receive Amazon branded parcel and Amazon invoice. Happy with their order",
  },
];

export default function AmazonArbitragePage() {
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
                Amazon Arbitrage 2 Step Dropshipping
              </h1>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Amazon Arbitrage, also known as 2-step dropshipping, is the most
                popular business model. No upfront inventory is required and
                only purchase items when a customer places orders. On average, a
                store starts generating a profit within a week with zero risk.
                Sounds amazing, right?
              </p>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Let&apos;s illustrate with an example: We sold an item on
                Amazon for $30 and purchase from Walmart for $30 and deliver to
                warehouse. Now re-boxing with Amazon box and ship to customer
                for $10. Finally, the profit margin is $10. Imagine if this
                product sells 50 units a day. OMG, it creates $500 in profit
                per day and $15,000 in profit in a month!
              </p>
              <p
                className="text-[#333] mb-6 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                If you are looking for quick growth on eCommerce market, then 2
                step dropshipping will perfect fit for you.
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
                src="/images/services/hero/arbitrage-hero.jpg"
                alt="Amazon Arbitrage 2 Step Dropshipping"
                width={500}
                height={476}
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
            How 2 Step Dropshipping Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* Some Results */}
      <section style={{ padding: "30px 0" }} className="bg-white">
        <div className="container-main">
          <h2
            className="font-bold text-center"
            style={{ fontSize: "32px", color: "#e5a24e" }}
          >
            Some Results of 2 Step Dropshipping Store
          </h2>
        </div>
      </section>

      {/* Vacation / Risk Free Section */}
      <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main text-center">
          <h2
            className="font-bold mb-2"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Start Your Unlimited Vacation. Because
          </h2>
          <p
            className="text-[#86af51] font-semibold mb-6"
            style={{ fontSize: "20px" }}
          >
            We provide service with profit sharing model
          </p>
          <h3
            className="font-bold mb-4"
            style={{ fontSize: "28px", color: "#e5a24e" }}
          >
            100% Risk Free. Pay only once you see profit.
          </h3>
          <p
            className="text-[#333] max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            No one will offer profit sharing model and no payment before you get
            profit. Because everyone can not handle risk and recover the dark
            side of eCommerce. Our experienced and highly skilled team will
            start profit within a week.
          </p>
        </div>
      </section>

      {/* Contact / Book Project */}
      <section style={{ padding: "30px 0" }} className="bg-white">
        <div className="container-main text-center">
          <h2
            className="font-bold mb-6"
            style={{ fontSize: "28px", color: "#2b2e37" }}
          >
            Contact with us &amp; book your dream project
          </h2>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
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
                Looking for a compete store management solutions and a trusted
                partner? You are in the right place. EcomGarden will fullfill
                your dream into reality.
              </p>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Get experienced highly skilled Amazon 2 step dropshipping
                virtual assistant for your store and get cost-effective and
                seamless support and run your the business successfully. We
                provide complete solutions of store management including wining
                products research, products listing, SEO optimizations, order
                management, purchase management, customer support, shipping and
                return handling, inventory management, PPC and marketing.
              </p>
              <p
                className="text-[#333] leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Our service is 100% tranparent and we do not have any hidden
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
        heading="Pros & Cons of 2 Step Dropshipping"
        pros={[
          "No suspend risk",
          "No upfront inventory required",
          "Get starting profit within a week",
          "No lose when your close business",
          "Start with minimum investment",
          "No account health issues",
          "Change products anytime without losing inventory",
          "No inventory lose for any brand complain",
        ]}
        cons={[
          "Purchase products regularly",
          "Active daily to ensure purchase",
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
