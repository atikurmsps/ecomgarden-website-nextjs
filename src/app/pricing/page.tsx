import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const additionalServices = [
  {
    img: "/images/pricing/warehouse-icon.webp",
    title: "Warehouse Service",
    description:
      "Operating 3 dedicated warehouses in AZ, NY, CT. No matter which method you use to sell, we've got you covered. Our 3PL warehouses can do FBA prep, WFS prep, storage, 2-step Dropshipping, or ship your orders directly to your customers.",
    href: "/services/3pl-warehouse",
    btnText: "Read More",
  },
  {
    img: "/images/pricing/shipping-icon.webp",
    title: "Cheap Flat Rate Shipping",
    description:
      "Stop paying extra dollar to your current shipping provider anymore. Forget your shipping calculator. Get our flat rate shipping label and increase your ROI to 2X more.",
    href: "/services/flat-rate-shipping",
    btnText: "Read More",
  },
];

const managementServices = [
  {
    img: "/images/pricing/amazon-wholesale-icon.webp",
    title: "Amazon Wholesale",
    description:
      "Amazon Wholesale, is a popular business model. In this model, upfront inventory is required. With wholesale business model, all products will official authentic and you will get official approval letter to sell those branded products. Its 100% suspension risk free. Either you can deliver products from FBA or your warehouse.",
    href: "/services/amazon-wholesale",
    btnText: "Read More",
  },
  {
    img: "/images/pricing/walmart-icon.png",
    title: "Walmart Management",
    description:
      "Our Walmart Virtual Assistant can help you with Walmart product research, listings, optimizations, order management, error fixing, customer service, and many more tasks so you are free to focus on growing and developing your business. We have experience with million dollar sales scale.",
    href: "/services/walmart-management",
    btnText: "Read More",
  },
  {
    img: "/images/pricing/amazon-arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "(2-Step Dropshipping)",
    description:
      "Most popular business model. In this model, no upfront inventory is required. The inventory is acquired only when a customer places an order. This is a zero-risk and quickly profitable business model. Start profit within a week. Sounds amazing, right?",
    href: "/services/amazon-arbitrage",
    btnText: "Read More",
  },
  {
    img: "/images/pricing/amazon-fba-icon.webp",
    title: "Amazon FBA",
    description:
      "Our Amazon VAs can help you with Amazon product listings, optimizations, customer service, and many more tasks so you are free to focus on growing and developing your business.",
    href: "https://wa.link/m2ac6m",
    btnText: "Get Started",
    external: true,
  },
  {
    img: "/images/pricing/walmart-wfs-icon.png",
    title: "Walmart WFS",
    description:
      "Our Amazon VAs can help you with Amazon product listings, optimizations, customer service, and many more tasks so you are free to focus on growing and developing your business.",
    href: "https://wa.link/m2ac6m",
    btnText: "Get Started",
    external: true,
  },
  {
    img: "/images/pricing/ebay-icon.webp",
    title: "eBay Management",
    description:
      "Our Amazon VAs can help you with Amazon product listings, optimizations, customer service, and many more tasks so you are free to focus on growing and developing your business.",
    href: "/services/amazon-arbitrage",
    btnText: "Read More",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero / Profit Sharing */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
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
            className="text-[#333] max-w-3xl mx-auto leading-relaxed mb-8"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            No one will offer profit sharing model and no payment before you get
            profit. Because everyone can not handle risk and recover the dark
            side of eCommerce. Our experienced and highly skilled team will start
            profit within a week.
          </p>
          <h3
            className="font-bold mb-6"
            style={{ fontSize: "28px", color: "#2b2e37" }}
          >
            Contact with us &amp; book your dream project
          </h3>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Additional Services */}
      <section style={{ padding: "50px 0" }} className="bg-white">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-4"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Additional services on EcomGarden
          </h2>
          <p
            className="text-center text-[#333] mb-10 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            To complete your dream eCommerce project, we also provide partial
            services for your business. Checkout our additional service pricing
            from the details pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[4px] text-center card-hover"
                style={{
                  padding: "30px",
                  boxShadow: "rgba(0,0,0,0.1) 8px 8px 20px 0px",
                }}
              >
                <div className="flex justify-center mb-5">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#333] mb-3">
                  {service.title}
                </h3>
                <p
                  className="text-[#333] text-[16px] leading-relaxed mb-6"
                  style={{ textAlign: "justify", lineHeight: "24px" }}
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-block bg-[#86af51] text-white font-bold rounded-[3px] hover:bg-[#6d9340] transition-colors text-[14px]"
                  style={{ padding: "12px 24px", letterSpacing: "1px" }}
                >
                  {service.btnText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-4"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Management services on EcomGarden
          </h2>
          <p
            className="text-center text-[#333] mb-10 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            Our expert team will complete every tasks of your store
            professionally. Get store setup, supplier connect, inventory
            sourcing, order management, accounting, everything we will handle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {managementServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[4px] text-center card-hover"
                style={{
                  padding: "30px",
                  boxShadow: "rgba(0,0,0,0.1) 8px 8px 20px 0px",
                }}
              >
                <div className="flex justify-center mb-5">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#333] mb-1">
                  {service.title}
                </h3>
                {"subtitle" in service && service.subtitle && (
                  <h4 className="text-[18px] text-[#333] mb-3 font-bold">
                    {service.subtitle}
                  </h4>
                )}
                <p
                  className="text-[#333] text-[16px] leading-relaxed mb-6"
                  style={{ textAlign: "justify", lineHeight: "24px" }}
                >
                  {service.description}
                </p>
                {"external" in service && service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#86af51] text-white font-bold rounded-[3px] hover:bg-[#6d9340] transition-colors text-[14px]"
                    style={{ padding: "12px 24px", letterSpacing: "1px" }}
                  >
                    {service.btnText}
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="inline-block bg-[#86af51] text-white font-bold rounded-[3px] hover:bg-[#6d9340] transition-colors text-[14px]"
                    style={{ padding: "12px 24px", letterSpacing: "1px" }}
                  >
                    {service.btnText}
                  </Link>
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
