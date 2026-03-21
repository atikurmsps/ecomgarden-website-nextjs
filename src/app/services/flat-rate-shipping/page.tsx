"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const features = [
  "Web based shipping portal",
  "Flat rate. No hidden charges and monthly fees",
  "No expire. Use when you want",
];

const pricingCards = [
  {
    title: "USPS PRIORITY MAIL",
    price: "$4.00",
    description: "Any weight & any dimension size",
  },
  {
    title: "UPS NEXT DAY AIR",
    price: "$5.00",
    description: "Any weight & any dimension size",
  },
  {
    title: "High Volume Labels",
    price: "Contact Sales",
    description: "For a large business, custom pricing",
  },
];

export default function FlatRateShippingPage() {
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
                Flat Rate Cheap USPS &amp; UPS Shipping Label
              </h1>
              <h2
                className="font-bold mb-4"
                style={{
                  fontSize: "20px",
                  color: "#2b2e37",
                }}
              >
                Stop overpaying shipping label and increase profit
              </h2>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Stop paying extra dollar to your current shipping provider
                anymore. Forget your shipping calculator. Get our flat rate
                shipping label and increase your ROI to 2X more.
              </p>

              {/* Feature Bullets */}
              <ul className="space-y-3 mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FaCheck className="text-[#86af51] mt-1 flex-shrink-0" />
                    <span
                      className="text-[#333]"
                      style={{ fontSize: "16px" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

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
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/services/hero/shipping-hero.jpg"
                alt="Flat Rate Cheap USPS & UPS Shipping Label"
                width={500}
                height={334}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* No Box Size Limit Section */}
      <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "32px", color: "#e5a24e" }}
          >
            No Box Size Limit Flat Rate
          </h2>
          <p
            className="text-[#333] max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            It doesn&apos;t matter where your warehouse located and where
            your customer address. Your will get flat rate shipping label
            from us. There are no limit of your box size.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section style={{ padding: "50px 0" }} className="bg-white">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-10"
            style={{ fontSize: "32px", color: "#e5a24e" }}
          >
            Label Price
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f8f9f9] rounded-lg shadow text-center"
                style={{ padding: "40px 20px" }}
              >
                <h3
                  className="font-bold text-[#2b2e37] mb-4"
                  style={{ fontSize: "20px" }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-extrabold mb-4"
                  style={{
                    fontSize: "36px",
                    color: "#86af51",
                  }}
                >
                  {card.price}
                </p>
                <p
                  className="text-[#333]"
                  style={{ fontSize: "15px" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "28px", color: "#2b2e37" }}
          >
            No one can offer more cheaper!
          </h2>
          <p
            className="text-[#333] max-w-4xl leading-relaxed"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            Having plan to shipping a Mainstays Flexible Round Laundry
            Hamper, its weight 4lbs but dimension 28x18x18 in. Ohh no.
            Everywhere shipping cost $25+ including pirateship and easyship.
            So will you sell this item $50 where everyone selling $20? A big
            no, get our $4 priority mail shipping and fix your issue. Our
            shipping label rate is flat and there are no size limit. Ship
            your item as large as possible with our flat rate shipping label.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "30px 0" }} className="bg-white">
        <div className="container-main text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "28px", color: "#2b2e37" }}
          >
            Contact with us for your discount flat rate shipping label
          </h2>
          <p
            className="text-[#333] max-w-3xl mx-auto mb-6 leading-relaxed"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            We believe in transparency. Our pricing is flat rate and no
            hidden charge. There are no monthly fees in our flat rate cheap
            shipping label services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Quick Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
