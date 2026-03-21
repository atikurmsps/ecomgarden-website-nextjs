"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const offices = [
  {
    name: "Arizona Office",
    flag: "/images/contact/flag-usa.webp",
    address: "1311 W Baseline Road, Tempe, Arizona, 85283, USA",
    phone: "+1 307 205 5481",
  },
  {
    name: "London Office",
    flag: "/images/contact/flag-uk.png",
    address: "71-75 Shelton street, London, WC2H 9JQ, UK",
    phone: "+1 307 205 5481",
  },
  {
    name: "Bangladesh Office",
    flag: "/images/contact/flag-bangladesh.webp",
    address: "RK Road, Ideal Mor, Rangpur, 5400, Bangladesh",
    phone: "+880 140 064 7156",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Dark Hero Section */}
      <section
        style={{
          padding: "44px 0 36px",
          background: "var(--color-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(22,163,74,0.15)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "1px solid rgba(22,163,74,0.1)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(22,163,74,0.05)",
            pointerEvents: "none",
          }}
        />

        <div className="container-main text-center" style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{
              display: "inline-block",
              padding: "5px 18px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-primary)",
              background: "rgba(22,163,74,0.12)",
              marginBottom: "14px",
              fontFamily: "var(--font-roboto)",
              letterSpacing: "0.5px",
            }}
          >
            Get In Touch
          </span>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "10px",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#9494ac",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "22px",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Have questions about our services or need support? We&apos;re here to help.
            Reach out and our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section style={{ padding: "44px 0", background: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.name}
                className="text-center transition-all duration-300"
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 24px rgba(22,163,74,0.1)";
                  el.style.borderColor = "rgba(22,163,74,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                  el.style.borderColor = "#e5e7eb";
                }}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={office.flag}
                    alt={office.name}
                    width={72}
                    height={46}
                    className="w-[72px] h-auto object-contain"
                  />
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "8px",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  {office.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--color-text-light)",
                    lineHeight: "21px",
                    marginBottom: "8px",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  style={{
                    fontSize: "16px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: "44px 0", background: "var(--color-light-gray)" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Info */}
            <div>
              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Let&apos;s get in touch
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--color-text-light)",
                  lineHeight: "22px",
                  marginBottom: "28px",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Make a free consultation with our expert team to solve your
                problems. Fill out the form and we&apos;ll get back to you at the
                earliest.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaPhoneAlt style={{ color: "var(--color-primary)", fontSize: "15px" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--color-text-light)",
                        marginBottom: "2px",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      Call us
                    </p>
                    <a
                      href="tel:+13072055481"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      +1 307 205 5481
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaEnvelope style={{ color: "var(--color-primary)", fontSize: "15px" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--color-text-light)",
                        marginBottom: "2px",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      Email us
                    </p>
                    <a
                      href="mailto:info@ecomgarden.com"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      info@ecomgarden.com
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaWhatsapp style={{ color: "var(--color-primary)", fontSize: "17px" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--color-text-light)",
                        marginBottom: "2px",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/13072055481"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted && (
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    background: "#dcfce7",
                    color: "#15803d",
                    fontSize: "16px",
                    textAlign: "center",
                    marginBottom: "16px",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                    style={{
                      padding: "10px 14px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      fontFamily: "var(--font-roboto)",
                    }}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                    style={{
                      padding: "10px 14px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      fontFamily: "var(--font-roboto)",
                    }}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                    style={{
                      padding: "10px 14px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      fontFamily: "var(--font-roboto)",
                    }}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none bg-white"
                    style={{
                      padding: "10px 14px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      fontFamily: "var(--font-roboto)",
                    }}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
