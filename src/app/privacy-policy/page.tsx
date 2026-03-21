import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - EcomGarden",
  description: "EcomGarden Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#2b2e37] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-roboto-slab)" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-gray">
          <p className="text-gray-600 leading-relaxed mb-6">
            At EcomGarden, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We collect information you provide directly to us, such as your name, email address, phone number, and business details when you contact us or sign up for our services.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the information we collect to provide, maintain, and improve our services, communicate with you, and process transactions.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Data Security</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at support@ecomgarden.com or call +1 307 205 5481.
          </p>
        </div>
      </section>
    </>
  );
}
