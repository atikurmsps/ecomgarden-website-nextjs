import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const teamMembers = [
  {
    name: "Atikur Shohel",
    title: "Founder & Head Of Business",
    bio: "Founder & Head Of Business of EcomGarden. Have 9 years experience with ecommerce.",
    photo: "/images/about/atikur-shohel.jpeg",
  },
  {
    name: "Abu Shama",
    title: "Manager, Amazon Arbitrage",
    bio: "Abu Sama have 6 years ecommerce experience and leading the Amazon department",
    photo: "/images/about/abu-shama.webp",
  },
  {
    name: "Hossain Rifat",
    title: "Manager, eBay Department",
    bio: "Rifat have 5 years experience with eBay. He leading 30+ active ebay stores.",
    photo: "/images/about/hossain-rifat.webp",
  },
  {
    name: "Mohammad Amir",
    title: "Manager, Wholesale Department",
    bio: "Amir managing the wholesale department of Amazon, Walmart and eBay.",
    photo: "/images/about/mohammad-amir.webp",
  },
  {
    name: "Jakaria Islam",
    title: "Manager, Walmart Department",
    bio: "Jakaria have 6 years experience with Walmart. He leading the Walmart department",
    photo: "/images/about/jakaria-islam.webp",
  },
  {
    name: "Mahbub H.",
    title: "Manager, Warehouse & Shipping",
    bio: "Mahbub managing our US and UK warehouse and all kinds of shipping operation",
    photo: "/images/about/mahbub-h.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / Introduction */}
      <section style={{ padding: "50px 0" }} className="bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <h2
                className="font-extrabold mb-2"
                style={{ fontSize: "32px", lineHeight: "40px", color: "#e5a24e" }}
              >
                About EcomGarden
              </h2>
              <h3
                className="font-bold mb-5"
                style={{ fontSize: "24px", color: "#2b2e37" }}
              >
                Your Trusted Partner for eCommerce Solutions
              </h3>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Hello and welcome to EcomGarden, your friendly Amazon business
                advisor since 2018. We&apos;re thrilled to share our journey with
                you &ndash; it includes partnering with over 200 clients,
                completing upward of 250 projects, and growing our team to more
                than 50 enthusiastic members. We&apos;ve spread our wings across
                nine different countries, helping people just like you everywhere.
              </p>
              <p
                className="text-[#333] mb-4 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Our team is here to make selling on Amazon a breeze. Whether
                you&apos;re looking to sell big quantities through Amazon FBA
                wholesale, find good deals with online arbitrage, create your own
                brand with a private label, or just get started with your Amazon
                account, we&apos;ve got your back. We can help you pick the right
                products, find where to get them from, launch them into the
                marketplace, get your ads seen, boost your products up the
                rankings, and even help you if you&apos;re having trouble with
                your account.
              </p>
              <p
                className="text-[#333] mb-6 leading-relaxed"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                Let us join your Amazon adventure and make your business soar. We
                keep things straightforward and successful &ndash; that&apos;s the
                EcomGarden way!
              </p>
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange flex items-center gap-2 w-fit"
              >
                <FaWhatsapp className="text-lg" />
                Let&apos;s zoom meeting to view store sales
              </a>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/about/team-group.webp"
                alt="EcomGarden Team"
                width={550}
                height={400}
                className="w-full max-w-[550px] h-auto rounded-lg shadow-[0px_0px_20px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "50px 0" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h3
            className="font-bold text-center mb-8"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Our Story
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Left - Founder Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/about/atikur-shohel.jpeg"
                  alt="Atikur Rahman Shohel - Founder"
                  width={250}
                  height={300}
                  className="w-full max-w-[250px] h-auto rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* Right - Story Text */}
              <div className="lg:col-span-2">
                <p
                  className="text-[#333] mb-4 leading-relaxed"
                  style={{ fontSize: "16px", textAlign: "justify" }}
                >
                  In 2014, I began my web development journey on Odesk, a
                  freelancer marketplace. I worked on various projects and
                  initially focused on a dropshipping store in 2016. It attracted
                  my attention, and I became curious about the entire process. I
                  worked with them for two years. In 2018, I started my first
                  ecommerce website and sold items on eBay. That was an amazing
                  turning point in my career. By the end of 2018, I started a
                  journey with Amazon. With huge success in a short time, I
                  decided to expand myself with a team and start taking on public
                  projects.
                </p>
                <p
                  className="text-[#333] mb-6 leading-relaxed"
                  style={{ fontSize: "16px", textAlign: "justify" }}
                >
                  I established a team named ITFLE LTD and registered it in the
                  UK due to significant restrictions on banking. In 2021, I
                  registered this business in USA named EKKID LLC. In 2023, we
                  rebranded our business into &apos;EcomGarden.&apos; This is our
                  journey.
                </p>
                <div>
                  <p
                    className="font-bold text-[#333]"
                    style={{ fontSize: "16px" }}
                  >
                    Atikur Rahman Shohel
                  </p>
                  <p className="text-[#86af51]" style={{ fontSize: "14px" }}>
                    Founder &amp; Head Of Business, Ecomgarden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "50px 0" }} className="bg-white">
        <div className="container-main">
          <h3
            className="font-bold text-center mb-2"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Meet With Our Team
          </h3>
          <h4
            className="font-bold text-center mb-10"
            style={{ fontSize: "24px", color: "#e5a24e" }}
          >
            Leadership Team
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[4px] text-center card-hover"
                style={{
                  padding: "30px",
                  boxShadow: "rgba(0,0,0,0.1) 8px 8px 20px 0px",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-[150px] h-[150px] object-cover rounded-full"
                  />
                </div>
                <h4
                  className="font-bold text-[#333] mb-1"
                  style={{ fontSize: "20px" }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-[#86af51] font-semibold mb-3"
                  style={{ fontSize: "14px" }}
                >
                  {member.title}
                </p>
                <p
                  className="text-[#333]"
                  style={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  {member.bio}
                </p>
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
