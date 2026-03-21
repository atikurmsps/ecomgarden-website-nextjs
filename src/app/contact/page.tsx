"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
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
      {/* Hero / Introduction */}
      <section style={{ padding: "50px 0 30px" }} className="bg-white">
        <div className="container-main text-center">
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: "32px", lineHeight: "40px", color: "#e5a24e" }}
          >
            Contact Us
          </h1>
          <p
            className="text-[#333] max-w-4xl mx-auto leading-relaxed"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            Need any kind of support to help facilitate your business
            operations? Have any questions about our services? We&apos;re eager
            to hear from you! Whether you&apos;re new to having a virtual
            assistant, have any special requirements, want a custom quote, or
            have questions regarding your existing account, fill in the form and
            we&apos;ll get back to you at the earliest.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section style={{ padding: "30px 0 40px" }} className="bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-[4px] text-center card-hover"
                style={{
                  padding: "30px",
                  boxShadow: "rgba(0,0,0,0.1) 8px 8px 20px 0px",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={office.flag}
                    alt={office.name}
                    width={80}
                    height={50}
                    className="w-[80px] h-auto object-contain"
                  />
                </div>
                <h3
                  className="font-bold text-[#333] mb-3"
                  style={{ fontSize: "20px" }}
                >
                  {office.name}
                </h3>
                <p
                  className="text-[#333] mb-2"
                  style={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-[#86af51] font-semibold"
                  style={{ fontSize: "14px" }}
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "40px 0 50px" }} className="bg-[#f8f9f9]">
        <div className="container-main">
          <h2
            className="font-bold text-center mb-2"
            style={{ fontSize: "32px", color: "#2b2e37" }}
          >
            Let&apos;s get in touch
          </h2>
          <p
            className="text-center text-[#333] mb-10"
            style={{ fontSize: "16px" }}
          >
            Make a free consultation with our expert team to solve your problems
          </p>

          <div className="max-w-2xl mx-auto">
            {submitted && (
              <div
                className="bg-green-100 text-green-700 rounded-[4px] mb-6 text-center"
                style={{ padding: "15px" }}
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-[4px] border border-gray-300 focus:border-[#86af51] focus:ring-1 focus:ring-[#86af51] outline-none transition-colors bg-white"
                  style={{ padding: "12px 16px", fontSize: "16px" }}
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
                  className="w-full rounded-[4px] border border-gray-300 focus:border-[#86af51] focus:ring-1 focus:ring-[#86af51] outline-none transition-colors bg-white"
                  style={{ padding: "12px 16px", fontSize: "16px" }}
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
                  className="w-full rounded-[4px] border border-gray-300 focus:border-[#86af51] focus:ring-1 focus:ring-[#86af51] outline-none transition-colors bg-white"
                  style={{ padding: "12px 16px", fontSize: "16px" }}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-[4px] border border-gray-300 focus:border-[#86af51] focus:ring-1 focus:ring-[#86af51] outline-none transition-colors resize-none bg-white"
                  style={{ padding: "12px 16px", fontSize: "16px" }}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-[#86af51] text-white font-bold rounded-[3px] hover:bg-[#6d9340] transition-colors text-[16px] uppercase tracking-wide"
                  style={{ padding: "14px 50px" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
