"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const features = [
  "Manage with web based software",
  "Flat rate. No hidden charges and monthly fees",
  "Faster order processing",
  "Shipping box ready",
];

const generalServices = [
  {
    service: "Receive Items",
    price: "Free",
    description: "We will receive your items from any source",
  },
  {
    service: "Process Your Items",
    price: "$2 Per Parcel",
    description: "We will process your items for shipment",
  },
  {
    service: "Oversize Item Process",
    price: "$3 Per Parcel",
    description: "Process oversize items 10lbs to 25lbs max",
  },
  {
    service: "Return Handling",
    price: "$2 Per Return",
    description: "Receive your returned parcel and prepare for shipping",
  },
  {
    service: "FBA & WFS Prep",
    price: "$0.50 Per Item",
    description: "Labeling & bundle your items for FBA & WFS",
  },
  {
    service: "Photography",
    price: "$15 Per Item",
    description:
      "Capture 10 photos of your items from different position",
  },
];

const boxPrices = [
  {
    boxType: "Poly Bag",
    price: "$1.00",
    dimensions: "Upto 11x13 in",
  },
  {
    boxType: "Small Box",
    price: "$1.30",
    dimensions: "Upto 12x9x6 in",
  },
  {
    boxType: "Medium Box",
    price: "$2.00",
    dimensions: "Upto 18x12x12 in",
  },
  {
    boxType: "Large Box",
    price: "$5.00",
    dimensions: "Upto 28x18x18 in",
  },
];

export default function ThreePLWarehousePage() {
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
                Get Warehouse For Your Business
              </h1>
              <h2
                className="font-bold mb-4"
                style={{
                  fontSize: "20px",
                  color: "#2b2e37",
                }}
              >
                Operating Dedicated Warehouses in NY, FL, CT
              </h2>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                No matter which method you use to sell, we&apos;ve got you
                covered. Our 3PL warehouses can do FBA prep, WFS prep,
                storage, 2-step Dropshipping, or ship your orders directly
                to your customers.
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

              <div className="flex flex-wrap items-center gap-4 mb-3">
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Contact Us
                </a>
              </div>
              <Link
                href="/services/3pl-warehouse"
                className="text-[#e5a24e] font-semibold hover:underline"
                style={{ fontSize: "16px" }}
              >
                Get only warehouse service
              </Link>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/warehouse/warehouse-map.webp"
                alt="3PL Warehouse Locations Map"
                width={550}
                height={400}
                className="w-full max-w-[550px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-4"
            style={{ fontSize: "32px", color: "#e5a24e" }}
          >
            Flat Rate Pricing
          </h2>
          <p
            className="text-[#333] max-w-3xl mx-auto mb-10 leading-relaxed text-center"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            We believe in transparency. Our pricing is flat rate and no
            hidden charge. There are no monthly fees in our warehouse
            service. Receive, Process, Shipping, Storage your items with
            full confidence.
          </p>

          {/* General Services Table */}
          <div className="max-w-3xl mx-auto mb-10">
            <h3
              className="font-bold mb-4"
              style={{ fontSize: "24px", color: "#2b2e37" }}
            >
              General Services
            </h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2b2e37] text-white">
                    <th
                      className="text-left px-5 py-3"
                      style={{ fontSize: "15px" }}
                    >
                      Service
                    </th>
                    <th
                      className="text-left px-5 py-3"
                      style={{ fontSize: "15px" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-left px-5 py-3"
                      style={{ fontSize: "15px" }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generalServices.map((item, index) => (
                    <tr
                      key={item.service}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-[#f8f9f9]"
                      }
                    >
                      <td
                        className="px-5 py-3 text-[#333] font-medium"
                        style={{ fontSize: "15px" }}
                      >
                        {item.service}
                      </td>
                      <td
                        className="px-5 py-3 font-bold"
                        style={{
                          fontSize: "15px",
                          color: "#86af51",
                        }}
                      >
                        {item.price}
                      </td>
                      <td
                        className="px-5 py-3 text-[#333]"
                        style={{ fontSize: "15px" }}
                      >
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Box Price Table */}
          <div className="max-w-3xl mx-auto mb-10">
            <h3
              className="font-bold mb-4"
              style={{ fontSize: "24px", color: "#2b2e37" }}
            >
              Box Price
            </h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2b2e37] text-white">
                    <th
                      className="text-left px-5 py-3"
                      style={{ fontSize: "15px" }}
                    >
                      Box Type
                    </th>
                    <th
                      className="text-left px-5 py-3"
                      style={{ fontSize: "15px" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-left px-5 py-3"
                      style={{ fontSize: "15px" }}
                    >
                      Dimensions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {boxPrices.map((item, index) => (
                    <tr
                      key={item.boxType}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-[#f8f9f9]"
                      }
                    >
                      <td
                        className="px-5 py-3 text-[#333] font-medium"
                        style={{ fontSize: "15px" }}
                      >
                        {item.boxType}
                      </td>
                      <td
                        className="px-5 py-3 font-bold"
                        style={{
                          fontSize: "15px",
                          color: "#86af51",
                        }}
                      >
                        {item.price}
                      </td>
                      <td
                        className="px-5 py-3 text-[#333]"
                        style={{ fontSize: "15px" }}
                      >
                        {item.dimensions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p
            className="text-[#333] max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            We also offer on demand service. For more informations, please
            contact with us with your requirements. Our support agent happy
            to assist you for any kinds of informations.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
