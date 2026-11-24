"use client";

import { useState, type FormEvent } from "react";
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const fallback = "We couldn’t send your message. Try again or email shohel@ecomgarden.com.";
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: AbortSignal.timeout(20_000),
      });
      const result = await response.json();
      if (response.ok && result.ok === true) {
        form.reset();
        setStatus("sent");
        return;
      }
      setError(typeof result.error === "string" ? result.error : fallback);
    } catch {
      setError(fallback);
    }
    setStatus("error");
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Get In Touch</span>
            <h1 className="typo-h1">Contact Us</h1>
            <p className="typo-subtext" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Have questions about our services or need support? We&apos;re here to help.
              Reach out and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
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
                  <img
                    src={office.flag}
                    alt={office.name}
                    style={{ width: "72px", height: "auto" }}
                    className="object-contain"
                  />
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "8px" }}>
                  {office.name}
                </h3>
                <p className="typo-body" style={{ marginBottom: "8px" }}>
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  style={{
                    fontSize: "15px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
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
      <section style={{ padding: "55px 0", background: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "10px" }}>
                Let&apos;s get in touch
              </h2>
              <p className="typo-body" style={{ marginBottom: "28px" }}>
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
                    <p className="typo-small" style={{ marginBottom: "2px" }}>
                      Call us
                    </p>
                    <a
                      href="tel:+13072055481"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-text)",
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
                    <p className="typo-small" style={{ marginBottom: "2px" }}>
                      Email us
                    </p>
                    <a
                      href="mailto:shohel@ecomgarden.com"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                      }}
                    >
                      shohel@ecomgarden.com
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
                    <p className="typo-small" style={{ marginBottom: "2px" }}>
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/13072055481"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-primary)",
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
              {status === "sent" && (
                <div
                  role="status"
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    background: "#dcfce7",
                    color: "#15803d",
                    fontSize: "15px",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === "error" && (
                <p role="alert" className="mb-4 text-sm text-red-700">{error}</p>
              )}

              <form onSubmit={handleSubmit} aria-busy={status === "sending"} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div hidden>
                  <label htmlFor="contact-website">Leave this field empty</label>
                  <input id="contact-website" name="website" type="text" autoComplete="off" tabIndex={-1} />
                </div>
                <input
                  type="text"
                  name="name"
                  aria-label="Your name"
                  autoComplete="name"
                  maxLength={120}
                  placeholder="Your Name"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                />
                <input
                  type="email"
                  name="email"
                  aria-label="Email address"
                  autoComplete="email"
                  maxLength={254}
                  required
                  placeholder="Email Address"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                />
                <input
                  type="text"
                  name="subject"
                  aria-label="Subject"
                  maxLength={160}
                  placeholder="Subject"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                />
                <textarea
                  name="message"
                  aria-label="Your message"
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                />
                <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60" style={{ width: "100%" }}>
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
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
