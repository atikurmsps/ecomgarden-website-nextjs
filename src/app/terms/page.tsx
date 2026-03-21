import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - EcomGarden",
  description: "EcomGarden Terms and Conditions",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#2b2e37] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-roboto-slab)" }}>
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-gray">
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to EcomGarden. By using our website and services, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Services</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            EcomGarden provides eCommerce management services including Amazon, Walmart, and Shopify store management, warehouse services, and shipping solutions.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Payment Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Payment terms are agreed upon during the initial consultation. All fees are due as specified in your service agreement.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            EcomGarden shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-roboto-slab)" }}>Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these terms, contact us at support@ecomgarden.com or call +1 307 205 5481.
          </p>
        </div>
      </section>
    </>
  );
}
