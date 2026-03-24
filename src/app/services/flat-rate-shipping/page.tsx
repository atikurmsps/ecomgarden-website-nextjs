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
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Flat Rate Shipping</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Flat Rate Cheap USPS &amp; UPS Shipping Label
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Stop overpaying shipping label and increase profit. Forget your
            shipping calculator and get flat rate labels to 2X your ROI.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp />
              Quick Whatsapp
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            {/* Left - Text */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Stop overpaying shipping label and increase profit
              </h2>
              <p className="typo-body" style={{ marginBottom: "20px" }}>
                Stop paying extra dollar to your current shipping provider
                anymore. Forget your shipping calculator. Get our flat rate
                shipping label and increase your ROI to 2X more.
              </p>

              {/* Feature Bullets */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {features.map((feature) => (
                  <li
                    key={feature}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}
                  >
                    <FaCheck
                      style={{
                        color: "var(--color-primary)",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    />
                    <span className="typo-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/services/hero/shipping-hero.jpg"
                alt="Flat Rate Cheap USPS & UPS Shipping Label"
                style={{ borderRadius: "12px", width: "100%", maxWidth: "500px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* No Box Size Limit Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <div className="section-header">
            <span className="typo-label">No Limits</span>
            <h2 className="typo-h2">No Box Size Limit Flat Rate</h2>
            <p className="typo-subtext">
              It doesn&apos;t matter where your warehouse located and where
              your customer address. Your will get flat rate shipping label
              from us. There are no limit of your box size.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="typo-label">Pricing</span>
            <h2 className="typo-h2" style={{ marginBottom: "32px" }}>Label Price</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "896px", margin: "0 auto" }}>
            {pricingCards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "12px",
                  padding: "36px 20px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
                  {card.title}
                </h3>
                <p className="typo-h1" style={{ marginBottom: "12px", color: "var(--color-primary)" }}>
                  {card.price}
                </p>
                <p className="typo-body">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <h2 className="typo-h2" style={{ marginBottom: "12px" }}>
            No one can offer more cheaper!
          </h2>
          <p className="typo-body" style={{ maxWidth: "800px" }}>
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
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 className="typo-h2" style={{ marginBottom: "12px" }}>
            Contact with us for your discount flat rate shipping label
          </h2>
          <p className="typo-subtext" style={{ maxWidth: "720px", margin: "0 auto 24px" }}>
            We believe in transparency. Our pricing is flat rate and no
            hidden charge. There are no monthly fees in our flat rate cheap
            shipping label services.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp />
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
