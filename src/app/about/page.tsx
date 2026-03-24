"use client";

import Link from "next/link";
import { FaWhatsapp, FaUsers, FaProjectDiagram, FaPeopleCarry, FaGlobeAmericas } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const stats = [
  { icon: FaUsers, value: "200+", label: "Clients" },
  { icon: FaProjectDiagram, value: "250+", label: "Projects" },
  { icon: FaPeopleCarry, value: "50+", label: "Team Members" },
  { icon: FaGlobeAmericas, value: "9", label: "Countries" },
];

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
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">About Us</span>
            <h1 className="typo-h1">Your Trusted eCommerce Partner Since 2018</h1>
            <p className="typo-subtext" style={{ maxWidth: "520px", margin: "0 auto" }}>
              We help entrepreneurs build and scale profitable Amazon, eBay, and
              Walmart businesses across nine countries worldwide.
            </p>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8ee",
                    borderRadius: "10px",
                    padding: "14px 22px",
                    minWidth: "130px",
                    textAlign: "center",
                  }}
                >
                  <Icon
                    style={{
                      fontSize: "16px",
                      color: "var(--color-primary)",
                      marginBottom: "6px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="typo-small">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Welcome to EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "12px" }}>
                Hello and welcome to EcomGarden, your friendly Amazon business
                advisor since 2018. We&apos;re thrilled to share our journey
                with you &ndash; it includes partnering with over 200 clients,
                completing upward of 250 projects, and growing our team to more
                than 50 enthusiastic members. We&apos;ve spread our wings across
                nine different countries, helping people just like you
                everywhere.
              </p>
              <p className="typo-body" style={{ marginBottom: "12px" }}>
                Our team is here to make selling on Amazon a breeze. Whether
                you&apos;re looking to sell big quantities through Amazon FBA
                wholesale, find good deals with online arbitrage, create your
                own brand with a private label, or just get started with your
                Amazon account, we&apos;ve got your back. We can help you pick
                the right products, find where to get them from, launch them
                into the marketplace, get your ads seen, boost your products up
                the rankings, and even help you if you&apos;re having trouble
                with your account.
              </p>
              <p className="typo-body" style={{ marginBottom: "20px" }}>
                Let us join your Amazon adventure and make your business soar.
                We keep things straightforward and successful &ndash;
                that&apos;s the EcomGarden way!
              </p>
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 w-fit"
              >
                <FaWhatsapp className="text-lg" />
                Let&apos;s Schedule a Zoom Meeting
              </a>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/about/team-group.webp"
                alt="EcomGarden Team"
                className="w-full max-w-[550px] h-auto rounded-lg"
                style={{
                  width: "550px",
                  height: "auto",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Left - Founder Image */}
              <div className="flex justify-center">
                <img
                  src="/images/about/atikur-shohel.jpeg"
                  alt="Atikur Rahman Shohel - Founder"
                  className="w-full max-w-[250px] h-auto"
                  style={{
                    width: "250px",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  }}
                />
              </div>

              {/* Right - Story Text */}
              <div className="lg:col-span-2">
                <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                  Our Story
                </h2>
                <p className="typo-body" style={{ marginBottom: "12px" }}>
                  In 2014, I began my web development journey on Odesk, a
                  freelancer marketplace. I worked on various projects and
                  initially focused on a dropshipping store in 2016. It
                  attracted my attention, and I became curious about the entire
                  process. I worked with them for two years. In 2018, I started
                  my first ecommerce website and sold items on eBay. That was an
                  amazing turning point in my career. By the end of 2018, I
                  started a journey with Amazon. With huge success in a short
                  time, I decided to expand myself with a team and start taking
                  on public projects.
                </p>
                <p className="typo-body" style={{ marginBottom: "20px" }}>
                  I established a team named ITFLE LTD and registered it in the
                  UK due to significant restrictions on banking. In 2021, I
                  registered this business in USA named EKKID LLC. In 2023, we
                  rebranded our business into &apos;EcomGarden.&apos; This is
                  our journey.
                </p>
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    Atikur Rahman Shohel
                  </p>
                  <p className="typo-small">
                    Founder &amp; Head Of Business, EcomGarden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main">
          <div className="section-header text-center" style={{ marginBottom: "28px" }}>
            <span className="typo-label">Leadership Team</span>
            <h2 className="typo-h2">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center"
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  background: "#fff",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--color-primary)";
                  el.style.boxShadow =
                    "0 6px 24px color-mix(in srgb, var(--color-primary) 12%, transparent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#eee";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div className="flex justify-center" style={{ marginBottom: "14px" }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="object-cover"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "4px",
                  }}
                >
                  {member.name}
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    marginBottom: "10px",
                  }}
                >
                  {member.title}
                </p>
                <p className="typo-body">
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
