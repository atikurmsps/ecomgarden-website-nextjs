import { Metadata } from "next";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Affiliate Referral Program - EcomGarden",
  description: "Earn $1,000+ every month by referring clients to EcomGarden.",
};

const benefits = [
  "Earn $1,000+ per referral per month",
  "No cap on earnings",
  "Monthly commission payouts",
  "Dedicated affiliate dashboard",
  "Marketing materials provided",
  "Personal affiliate manager",
];

export default function ReferralPage() {
  return (
    <>
      <section className="bg-[#2b2e37] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-roboto-slab)" }}>
            Affiliate Referral Program
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Earn $1,000+ every month from each referral
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-roboto-slab)" }}>
              Why Join Our <span className="text-primary">Affiliate Program</span>?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Partner with EcomGarden and earn generous commissions for every client you refer. Our affiliate program is designed to reward you for helping others discover our premium eCommerce management services.
            </p>
          </div>

          <div className="bg-[#f8f9f9] rounded-xl p-8 mb-10">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <FaCheck className="text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a href="https://wa.me/13072055481" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <FaWhatsapp className="text-lg" /> Join Affiliate Today
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
