"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";

const shopifyFeatures = [
  {
    icon: "/images/services/shopify/store-development.png",
    title: "Store Development",
    description:
      "Our team will handle A-Z development tasks on your store and deliver a complete store with all requirement done.",
  },
  {
    icon: "/images/services/shopify/redesign.png",
    title: "Redesign Store",
    description:
      "Having a outdated design, our expert UX UI designer waiting for you. Get a custom and modern design for your right audiences.",
  },
  {
    icon: "/images/services/shopify/theme-customization.png",
    title: "Theme Customization",
    description:
      "Need extra features with your exist design? No worry. Our expert hand ready for customize your store as needed.",
  },
  {
    icon: "/images/services/shopify/migration.png",
    title: "Store Migration",
    description:
      "Expert hand for move your exist inventory, orders, customer data, design and all data into Shopify from any platform.",
  },
  {
    icon: "/images/services/shopify/dropshipping.png",
    title: "Dropshipping Setup",
    description:
      "Don't want to get inventory? Dropshipping is right for you. Get faster branded supplier and product and live your risk free business.",
  },
  {
    icon: "/images/services/shopify/va-service.png",
    title: "VA Service",
    description:
      "Our expert virtual assistant available for any kinds of order fullfillment, manual data process, response customer support.",
  },
  {
    icon: "/images/services/icons/product-research.png",
    title: "Product Research",
    description:
      "Start your brand with unique and high demand product. Our expert dropshipper ready to pick right product based on your criteria.",
  },
  {
    icon: "/images/services/shopify/products-listing.png",
    title: "Products Listing",
    description:
      "Listing products on your store using CSV, Excel, custom API, data scrapper from any website, any sources or even manual entry.",
  },
  {
    icon: "/images/services/shopify/custom-app.png",
    title: "Custom App Develop",
    description:
      "Get custom features with our custom app development service. Private and public app both services are available.",
  },
  {
    icon: "/images/services/shopify/custom-theme.png",
    title: "Custom Theme Develop",
    description:
      "We make your ideas into reality. Our custom theme development service provide you exact pixel perfect design thats you thinking.",
  },
  {
    icon: "/images/services/shopify/speed-optimization.png",
    title: "Speed Optimization",
    description:
      "Slow website and higher bounce rate? Our team will audit your store and make your store lighting fast.",
  },
  {
    icon: "/images/services/shopify/bug-fixing.png",
    title: "Bug Fixing",
    description:
      "Facing issues on your current setup? We are happy to audit your full setup and fix any kinds of bugs with expert hand.",
  },
  {
    icon: "/images/services/icons/account-health.png",
    title: "Conversion Optimize",
    description:
      "Getting traffics but not converting? We provide complete solution to update your store design, redesign products for highest conversion rate",
  },
  {
    icon: "/images/services/shopify/social-media.png",
    title: "Social Media",
    description:
      "Sale on any platform using Shopify. Make your Shopify all in one tools. We will setup and integrate all social media sales channel with your store.",
  },
  {
    icon: "/images/services/icons/personal-manager.png",
    title: "Customer Support",
    description:
      "Response on customer query is the main key of satisfaction. Our support team will 24/7 online to answer customer messages.",
  },
  {
    icon: "/images/services/icons/inventory.png",
    title: "Store Automation",
    description:
      "Having much repeat tasks? Shopify custom automation tools will help you to fulfilment orders, tracking, chatbot, supply chain.",
  },
];

const howWeWorkSteps = [
  {
    img: "/images/services/shopify/discussion.png",
    title: "Discussion",
    description:
      "Discuss your requirements with us. Make agreement for your needs and pricing",
  },
  {
    img: "/images/services/shopify/get-access.png",
    title: "Get Access",
    description:
      "Send your store access to us. As well others portal's access based on requirements",
  },
  {
    img: "/images/services/shopify/planning.png",
    title: "Planning",
    description:
      "We will make plan to reach highest quality service and fulfilment your requirements",
  },
  {
    img: "/images/services/shopify/implement.png",
    title: "Implement",
    description:
      "We will implement plan into reality, beta testing updates, fixing bugs if needed",
  },
  {
    img: "/images/services/shopify/live-handover.png",
    title: "Live & Handover",
    description:
      "After all beta testing, we will live the update and handover you everything",
  },
];

const portfolioItems = [
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
  {
    img: "/images/services/portfolio/porto-shopify-theme.webp",
    title: "Test Website",
    description: "We worked on this website and completed everything",
  },
];

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

export default function ShopifyDevelopmentPage() {
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
                Shopify Store Development &amp; Management
              </h1>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Shopify, world largest cloud based eCommerce platform. Provide
                complete solutions including millions of traffics handle and zero
                downtime payment processing. Looking for extend your business
                into Shopify ? Your on the right place. We provide a complete
                solution for Shopify development.
              </p>
              <p
                className="text-[#333] mb-6 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Our service including store development, redesign, dropshipping
                development, supplier finding, custom theme and application
                development, bud fixing, theme customoziation, speed
                optimization and all kinds of development support. As well we
                provide monthly management for order processing, customer
                support. Our dedicated 50+ expert hand always available to make
                your Shopify business success.
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
                src="/images/services/hero/shopify-hero.svg"
                alt="Shopify Store Development & Management"
                width={500}
                height={400}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 16 Shopify Service Features */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-10"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Our Shopify Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {shopifyFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
                <h3
                  className="font-bold text-[#333] mb-2"
                  style={{ fontSize: "22px" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#333]"
                  style={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: "40px 0" }} className="bg-white">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-10"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            How we work with Shopify project
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {howWeWorkSteps.map((step, index) => (
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

      {/* Portfolio */}
      <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-10"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Some recent work of our Shopify development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3
                    className="font-bold text-[#333] mb-2"
                    style={{ fontSize: "18px" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#333] mb-3"
                    style={{ fontSize: "14px", lineHeight: "22px" }}
                  >
                    {item.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#e5a24e] font-semibold hover:underline"
                    style={{ fontSize: "14px" }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacation / Risk Free Section */}
      <section style={{ padding: "40px 0" }} className="bg-white">
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

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
