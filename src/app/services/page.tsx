import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    img: "/images/services/arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "as known 2-Step Dropshipping",
    description:
      "Most popular business model. In this model, no upfront inventory is required. We source products from retail stores and resell them on Amazon for profit. Our team handles everything from product research, sourcing, listing optimization, and order fulfillment. This is a low-risk, high-reward model perfect for beginners.",
    href: "/services/amazon-arbitrage",
  },
  {
    img: "/images/services/wholesale-icon.webp",
    title: "Amazon Wholesale",
    subtitle: "",
    description:
      "Upfront inventory is required. With wholesale business model, all products will be official authentic branded products purchased directly from authorized distributors. We handle product research, supplier negotiations, inventory management, and FBA prep. This model offers consistent profit margins and scalable growth.",
    href: "/services/amazon-wholesale",
  },
  {
    img: "/images/services/walmart-icon.png",
    title: "Walmart Management",
    subtitle: "",
    description:
      "Our Walmart Virtual Assistant can help you with product research, listings, optimizations, order fulfillment, and complete store management. We handle everything from store setup to daily operations, ensuring your Walmart store performs at its best with optimal pricing and inventory strategies.",
    href: "/services/walmart-management",
  },
  {
    img: "/images/services/hero/shopify-hero.svg",
    title: "Shopify Development",
    subtitle: "Store Development & Management",
    description:
      "Custom Shopify store development and management services. We build, design, and optimize your Shopify store for maximum conversions and sales. From custom theme development to app integration, we handle every aspect of your Shopify store.",
    href: "/services/shopify-development",
  },
  {
    img: "/images/warehouse/warehouse-map.webp",
    title: "3PL Warehouse",
    subtitle: "Operating in NY, FL, CT",
    description:
      "Operating dedicated warehouses in New York, Florida, and Connecticut. Web-based software, flat-rate pricing, fast processing, and shipping-ready boxes for all your fulfillment needs. FBA prep, WFS prep, storage, 2-step dropshipping support.",
    href: "/services/3pl-warehouse",
  },
  {
    img: "/images/services/hero/shipping-hero.jpg",
    title: "Flat Rate Shipping",
    subtitle: "Cheap USPS & UPS Labels",
    description:
      "Discounted flat-rate shipping services for eCommerce businesses. USPS Priority Mail for $4 and UPS Next Day Air for $5. No box size limit. Save on shipping costs with our partnerships with major carriers across the United States.",
    href: "/services/flat-rate-shipping",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Services Section */}
      <section style={{ padding: "50px 0 30px" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h1
            className="font-bold text-center text-black mb-4"
            style={{ fontSize: "32px", lineHeight: "32px" }}
          >
            All Services
          </h1>
          <p
            className="text-center text-[#333] mb-10 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            Comprehensive eCommerce management services to help you start, grow
            and scale your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
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
                {service.subtitle && (
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
                <Link
                  href={service.href}
                  className="inline-block bg-[#86af51] text-white font-bold rounded-[3px] hover:bg-[#6d9340] transition-colors text-[14px]"
                  style={{ padding: "12px 24px", letterSpacing: "1px" }}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
