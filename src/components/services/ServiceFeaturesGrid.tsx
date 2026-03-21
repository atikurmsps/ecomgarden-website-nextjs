import Image from "next/image";

const features = [
  {
    img: "/images/services/icons/zero-work.png",
    title: "Zero work from you",
    description:
      "Our team will handle A-Z tasks on your store and there are not any single tasks from your side. Stay relax and enjoy holiday.",
  },
  {
    img: "/images/services/icons/personal-manager.png",
    title: "Personal Manager",
    description:
      "Your dedicated manager will keep you update, answer all your questions and take care of any issues.",
  },
  {
    img: "/images/services/icons/safety.png",
    title: "100% Safety",
    description:
      "We will not get any money. Always use your account to ensure 100% safety and zero scam. You will control the login.",
  },
  {
    img: "/images/services/icons/calculation.png",
    title: "Accurate Calculation",
    description:
      "We will calculate every single order's profit or loss. Every refund will calculate accurately. No chance to show fake informations.",
  },
  {
    img: "/images/services/icons/product-research.png",
    title: "Product Research",
    description:
      "Our dedicated products research team will find authentic 100% profitable products from various official sources.",
  },
  {
    img: "/images/services/icons/inventory.png",
    title: "Inventory Management",
    description:
      "3rd party partner warehouse will keep update every single product realtime inventory update and delivery status.",
  },
  {
    img: "/images/services/icons/marketing.png",
    title: "Marketing & Promote",
    description:
      "Dedicated marketing team will ensure SEO, Organic promotion, Social media promotion to get highest sales.",
  },
  {
    img: "/images/services/icons/order-fulfillment.png",
    title: "Order Fulfillment",
    description:
      "Partner warehouse will complete order fulfilment asap they will receive products and shipping informations. Realtime update on sheet.",
  },
  {
    img: "/images/services/icons/scalability.png",
    title: "Scalability",
    description:
      "If your store had fewer sales or new store, our team will find max opportunity to get highest number of sales within a month.",
  },
  {
    img: "/images/services/icons/return-handling.png",
    title: "Return Handling",
    description:
      "Warehouse will receive all return items and restock for sale again. Realtime update for customer or shipping damage items.",
  },
  {
    img: "/images/services/icons/customer-support.png",
    title: "Customer Support",
    description:
      "Response on customer query is the main key of satisfaction. Our support team will 24/7 online to answer customer messages.",
  },
  {
    img: "/images/services/icons/account-health.png",
    title: "Account Health",
    description:
      "Legal team keep active eyes to fight with intellectual property complaint, negative feedback, policy violation to keep your account healthy.",
  },
];

export default function ServiceFeaturesGrid() {
  return (
    <section style={{ padding: "50px 0 30px" }} className="bg-white">
      <div className="container-main">
        <h2
          className="font-extrabold text-center mb-6"
          style={{ fontSize: "32px", lineHeight: "48px", color: "#e5a24e" }}
        >
          This is how you will achieve amazing results with our management
          service
        </h2>
        <p
          className="text-center text-[#2b2e37] mb-12 max-w-3xl mx-auto"
          style={{ fontSize: "15px", lineHeight: "20px" }}
        >
          No matter where you are on your e-commerce journey &ndash; whether
          you&apos;re just starting or managing a flourishing business &ndash;
          we have the tailored solution you&apos;ve been searching for!
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
              <h3
                className="font-bold text-black mb-2"
                style={{ fontSize: "22px", lineHeight: "22px" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#333]"
                style={{
                  fontSize: "15px",
                  lineHeight: "22.5px",
                  letterSpacing: "-0.2px",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
