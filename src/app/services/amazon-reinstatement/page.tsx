import { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Amazon Account Reinstatement Services - EcomGarden",
  description:
    "Professional Amazon seller account reinstatement services. Expert appeal writing, plan of action, and policy compliance to recover your suspended Amazon account fast.",
};

const faqs = [
  {
    question: "Why was my Amazon seller account suspended?",
    answer:
      "Amazon suspends accounts for various reasons including policy violations, intellectual property complaints, inauthentic item claims, late shipment rates, order defect rates, linked accounts, or selling restricted products. We analyze your case to identify the exact cause and build a targeted appeal.",
  },
  {
    question: "How long does it take to get my account reinstated?",
    answer:
      "Most reinstatement cases are resolved within 2-4 weeks depending on the complexity of the suspension. Simple policy violations may be resolved faster, while complex cases involving multiple violations or legal issues may take longer. We work urgently on every case.",
  },
  {
    question: "What is a Plan of Action (POA)?",
    answer:
      "A Plan of Action is a formal document submitted to Amazon that explains the root cause of the issue, the corrective actions you have taken, and the preventive measures you will implement. A well-crafted POA is critical for reinstatement and must follow Amazon's specific requirements.",
  },
  {
    question: "Can you help if my appeal has already been denied?",
    answer:
      "Yes, we regularly handle cases where previous appeals have been rejected. We review your past submissions, identify weaknesses, gather additional evidence, and craft a stronger appeal. Many of our successful reinstatements come from previously denied cases.",
  },
  {
    question: "Do you guarantee account reinstatement?",
    answer:
      "While no one can guarantee 100% reinstatement as the final decision rests with Amazon, our success rate is over 90%. We only take cases where we believe reinstatement is achievable. If we cannot help, we will let you know upfront before charging any fee.",
  },
  {
    question: "What information do you need from me to get started?",
    answer:
      "We need access to your Seller Central account, the suspension notification from Amazon, any previous appeal submissions, invoices or documentation related to the flagged products, and a brief overview of your business operations.",
  },
  {
    question: "Can you help with ASIN-level suspensions?",
    answer:
      "Yes, we handle both account-level and ASIN-level suspensions. Whether a single listing has been removed or your entire catalog is affected, we prepare the necessary appeals and documentation to get your products back online.",
  },
  {
    question: "How much does reinstatement service cost?",
    answer:
      "Our pricing depends on the complexity of your case. We offer a free initial consultation to assess your situation and provide a transparent quote. There are no hidden fees, and we offer a money-back guarantee if we are unable to achieve reinstatement.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/buy-items.png",
    title: "Case Analysis",
    description:
      "We review your suspension notice, account health, and performance metrics to identify the root cause",
  },
  {
    img: "/images/services/process/sell-items.png",
    title: "Evidence Gathering",
    description:
      "Collect invoices, documentation, and supporting evidence needed for a compelling appeal",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Appeal Writing",
    description:
      "Craft a professional Plan of Action addressing root cause, corrective actions, and prevention steps",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Submit & Follow Up",
    description:
      "Submit the appeal to Amazon and actively follow up until your account is fully reinstated",
  },
];

export default function AmazonReinstatementPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Account Reinstatement</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Amazon Account Reinstatement Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Expert account recovery for suspended Amazon sellers. Professional
            appeal writing, plan of action development, and ongoing compliance
            support to get your business back on track.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Quick WhatsApp
            </a>
            <Link href="/services" className="btn-outline">
              Browse More Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Having your Amazon seller account suspended can be devastating.
                Your revenue stops, your inventory sits idle, and every day
                without action reduces your chances of recovery. At EcomGarden,
                we specialize in getting suspended Amazon accounts reinstated
                quickly and effectively.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our reinstatement experts have handled hundreds of suspension
                cases across every category and violation type. Whether your
                account was suspended for policy violations, intellectual
                property complaints, inauthentic item claims, or performance
                issues, we know exactly how to build a winning appeal.
              </p>
              <p className="typo-body">
                We do not use generic templates. Every Plan of Action we craft
                is tailored to your specific situation, backed by proper
                documentation and evidence. Our systematic approach has
                achieved a reinstatement success rate of over 90%.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/wholesale-hero.jpg"
                alt="Amazon Account Reinstatement Services"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="typo-label">Process</span>
            <h2 className="typo-h2">How Our Reinstatement Process Works</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="typo-small" style={{ color: "#ffffff" }}>{index + 1}</span>
                    </div>
                  </div>
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "6px" }}>
                  {step.title}
                </h3>
                <p className="typo-small">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/management/ecommerce-fulfilment.jpg"
                alt="Expert Account Recovery With EcomGarden"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Expert Account Recovery With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Amazon&apos;s Seller Performance team requires specific
                language, structure, and evidence in appeals. A poorly written
                Plan of Action can result in permanent account closure. Our
                specialists understand exactly what Amazon looks for and how to
                present your case for maximum impact.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Beyond reinstatement, we help you implement compliance
                measures to prevent future suspensions. This includes setting
                up proper inventory documentation, performance monitoring,
                intellectual property protection, and policy-compliant
                standard operating procedures for your business.
              </p>
              <p className="typo-body">
                Our service is 100% transparent with no hidden charges. We
                provide a free initial consultation, and you only pay when we
                take on your case. If we cannot help, we will tell you
                honestly upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Benefits of Professional Reinstatement Services"
        pros={[
          "Expert appeal writing with proven templates",
          "Over 90% reinstatement success rate",
          "Fast turnaround to minimize revenue loss",
          "Handle all communication with Amazon",
          "Free initial case assessment",
          "Post-reinstatement compliance support",
          "Experience with all suspension types",
        ]}
        cons={[
          "Reinstatement timeline depends on Amazon",
          "Some violations may require extensive documentation",
          "Previously denied appeals need stronger evidence",
          "Severe policy violations may limit options",
        ]}
      />

      {/* Service Features Grid */}
      <ServiceFeaturesGrid />

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
