import Image from "next/image";

const features = [
  {
    img: "/images/features/zero-work.webp",
    title: "Zero work from you",
    description:
      "We handle everything from product research to order fulfillment. You just relax and watch your business grow.",
  },
  {
    img: "/images/features/personal-manager.webp",
    title: "Personal Manager",
    description:
      "Get a dedicated account manager who will be your single point of contact for all business-related queries.",
  },
  {
    img: "/images/features/safety.webp",
    title: "100% Safety",
    description:
      "We follow all marketplace guidelines and best practices to ensure your account stays safe and healthy.",
  },
  {
    img: "/images/features/calculation.webp",
    title: "Accurate Calculation",
    description:
      "Transparent profit calculations with detailed reports so you always know exactly where your money goes.",
  },
  {
    img: "/images/features/research.webp",
    title: "Product Research",
    description:
      "Our expert team researches profitable products with high demand and low competition for maximum ROI.",
  },
  {
    img: "/images/features/inventory.webp",
    title: "Inventory Management",
    description:
      "Smart inventory tracking and management to ensure optimal stock levels and minimize storage costs.",
  },
  {
    img: "/images/features/marketing.webp",
    title: "Marketing & Promote",
    description:
      "Strategic marketing and promotion to boost your product visibility and increase sales volume.",
  },
  {
    img: "/images/features/fulfillment.webp",
    title: "Order Fulfillment",
    description:
      "Fast and reliable order processing and shipping from our US-based warehouses.",
  },
  {
    img: "/images/features/scalability.webp",
    title: "Scalability",
    description:
      "Our systems and processes are designed to scale with your business as it grows.",
  },
  {
    img: "/images/features/return.webp",
    title: "Return Handling",
    description:
      "Professional return and refund management to maintain high customer satisfaction scores.",
  },
  {
    img: "/images/features/support.webp",
    title: "Customer Support",
    description:
      "24/7 customer service handling for your store to maintain excellent buyer experience.",
  },
  {
    img: "/images/features/account-health.webp",
    title: "Account Health",
    description:
      "Continuous monitoring and maintenance of your account health metrics and performance.",
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{ padding: "50px 0 30px" }} className="bg-white">
      <div className="container-main">
        <h2
          className="font-extrabold text-center mb-6"
          style={{ fontSize: "32px", lineHeight: "48px", color: "#e5a24e" }}
        >
          This is how you will achieve amazing results with our management service
        </h2>
        <p
          className="text-center text-[#2b2e37] mb-12 max-w-3xl mx-auto"
          style={{ fontSize: "15px", lineHeight: "20px" }}
        >
          No matter where you are on your e-commerce journey &ndash; whether
          you&apos;re just starting out or looking to scale &ndash; our team is
          here to help you achieve amazing results.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-4">
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <h3 className="font-bold text-black mb-2" style={{ fontSize: "22px", lineHeight: "22px" }}>
                {feature.title}
              </h3>
              <p className="text-[#333]" style={{ fontSize: "15px", lineHeight: "22.5px", letterSpacing: "-0.2px" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
