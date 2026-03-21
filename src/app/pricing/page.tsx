import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaChevronRight,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const highlights = [
  {
    icon: FaShieldAlt,
    title: "100% Risk Free",
    desc: "Pay only once you see profit",
  },
  {
    icon: FaHandshake,
    title: "Profit Sharing",
    desc: "We succeed when you succeed",
  },
  {
    icon: FaChartLine,
    title: "35% Avg ROI",
    desc: "Proven results across clients",
  },
];

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
      "Amazon Wholesale, is a popular business model. In this model, upfront inventory is required. With wholesale business model, all products will official authentic and you will get official approval letter to sell those branded products. Its 100% suspension risk free.",
    href: "/services/amazon-wholesale",
    btnText: "Read More",
  },
  {
    img: "/images/pricing/walmart-icon.png",
    title: "Walmart Management",
    description:
      "Our Walmart Virtual Assistant can help you with Walmart product research, listings, optimizations, order management, error fixing, customer service, and many more tasks so you are free to focus on growing your business.",
    href: "/services/walmart-management",
    btnText: "Read More",
  },
  {
    img: "/images/pricing/amazon-arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "(2-Step Dropshipping)",
    description:
      "Most popular business model. In this model, no upfront inventory is required. The inventory is acquired only when a customer places an order. This is a zero-risk and quickly profitable business model. Start profit within a week.",
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
      {/* Hero Section */}
      <section
        style={{
          background: "var(--color-light-gray)",
          padding: "40px 0 36px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container-main" style={{ position: "relative" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
                  borderRadius: "50px",
                  padding: "5px 14px",
                  marginBottom: "14px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                }}
              >
                Profit Sharing Model
              </div>

              <h1
                style={{
                  fontSize: "27px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  lineHeight: 1.3,
                  marginBottom: "4px",
                }}
              >
                Start Your Unlimited Vacation
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  marginBottom: "4px",
                }}
              >
                We provide service with profit sharing model
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  marginBottom: "10px",
                }}
              >
                100% Risk Free. Pay only once you see profit.
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--color-text-light)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                  maxWidth: "480px",
                }}
              >
                No one will offer profit sharing model and no payment before you
                get profit. Our experienced and highly skilled team will start
                profit within a week.
              </p>

              {/* Highlight pills */}
              <div
                className="flex flex-wrap"
                style={{ gap: "8px", marginBottom: "20px" }}
              >
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e8e8",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "7px",
                        background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon
                        style={{ color: "var(--color-primary)", fontSize: "13px" }}
                      />
                    </span>
                    <div>
                      <p
                        style={{
                          color: "var(--color-text)",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          color: "#999",
                          fontSize: "13px",
                          marginTop: "1px",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-wrap"
                style={{ gap: "10px" }}
              >
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FaWhatsapp style={{ fontSize: "16px" }} />
                  Book Your Dream Project
                </a>
                <Link
                  href="/contact"
                  className="btn-outline"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/images/pricing/hero-vacation.png"
                alt="Start your unlimited vacation"
                width={500}
                height={400}
                className="object-contain"
                style={{ maxHeight: "360px", width: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section style={{ padding: "44px 0 40px" }} className="bg-white">
        <div className="container-main">
          <div className="text-center" style={{ marginBottom: "28px" }}>
            <p
              style={{
                color: "var(--color-primary)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Additional Services
            </p>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "8px",
              }}
            >
              Additional services on EcomGarden
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--color-text-light)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              To complete your dream eCommerce project, we also provide partial
              services for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "26px 22px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s",
                  textAlign: "center",
                }}
                className="hover:!shadow-xl hover:!border-primary/20"
              >
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 8%, transparent), color-mix(in srgb, var(--color-primary) 15%, transparent))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "8px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--color-text-light)",
                    lineHeight: 1.7,
                    marginBottom: "14px",
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                  }}
                >
                  {service.btnText}
                  <FaChevronRight style={{ fontSize: "10px" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section style={{ padding: "44px 0 40px", backgroundColor: "var(--color-light-gray)" }}>
        <div className="container-main">
          <div className="text-center" style={{ marginBottom: "28px" }}>
            <p
              style={{
                color: "var(--color-primary)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Management Services
            </p>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "8px",
              }}
            >
              Management services on EcomGarden
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--color-text-light)",
                maxWidth: "620px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Our expert team will complete every task of your store
              professionally — from store setup to accounting, we handle
              everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {managementServices.map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "24px 20px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="hover:!shadow-xl hover:!border-primary/20"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h3>
                    {"subtitle" in service && service.subtitle && (
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--color-primary)",
                          fontWeight: 500,
                        }}
                      >
                        {service.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--color-text-light)",
                    lineHeight: 1.7,
                    marginBottom: "14px",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>
                {"external" in service && service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                      fontSize: "15px",
                      textDecoration: "none",
                    }}
                  >
                    {service.btnText}
                    <FaChevronRight style={{ fontSize: "9px" }} />
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                      fontSize: "15px",
                      textDecoration: "none",
                    }}
                  >
                    {service.btnText}
                    <FaChevronRight style={{ fontSize: "9px" }} />
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
