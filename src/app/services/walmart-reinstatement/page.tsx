import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceProsCons from "@/components/services/ServiceProsCons";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Walmart Account Reinstatement Services | EcomGarden",
  description:
    "Professional Walmart seller account reinstatement and recovery services. Suspended account appeals, compliance review, policy violation resolution, and account health restoration.",
};

const faqs = [
  {
    question: "Why was my Walmart seller account suspended?",
    answer:
      "Walmart suspends seller accounts for various reasons including policy violations, high order defect rates, late shipment rates, intellectual property complaints, selling prohibited items, inaccurate product information, or failing to meet performance standards. Our team will conduct a thorough review to identify the exact cause.",
  },
  {
    question: "Can a permanently suspended Walmart account be reinstated?",
    answer:
      "In many cases, yes. Even accounts marked as permanently suspended can be reinstated with a well-crafted appeal that demonstrates understanding of the violation, provides evidence of corrective actions, and outlines a prevention plan. Our success rate for reinstatement appeals is over 85%.",
  },
  {
    question: "How long does the reinstatement process take?",
    answer:
      "The timeline varies depending on the severity of the suspension. Simple policy violations may be resolved within 3-7 business days. Complex cases involving multiple violations or IP complaints can take 2-4 weeks. We keep you informed throughout the entire process.",
  },
  {
    question: "What information do you need from me to start the appeal?",
    answer:
      "We need access to your Walmart Seller Center account, the suspension notification email, any previous correspondence with Walmart, and details about your business operations. Our team will review everything and may request additional documentation depending on the violation type.",
  },
  {
    question: "What is your success rate for Walmart reinstatements?",
    answer:
      "Our reinstatement success rate is over 85% across all types of suspensions. We have experience handling policy violations, performance-based suspensions, IP complaints, and account integrity issues. Our team stays updated on Walmart's latest policies and appeal requirements.",
  },
  {
    question: "Do you help prevent future suspensions?",
    answer:
      "Yes, after reinstatement we provide a comprehensive compliance review and create a prevention plan. This includes setting up monitoring for account health metrics, reviewing listing compliance, implementing quality control processes, and providing ongoing guidance to keep your account in good standing.",
  },
  {
    question: "What if my appeal is rejected?",
    answer:
      "If the first appeal is rejected, we analyze the rejection response, identify gaps in our approach, and prepare a stronger follow-up appeal with additional documentation and corrective measures. We do not give up after a single rejection and will continue working until all options are exhausted.",
  },
  {
    question: "How much does the reinstatement service cost?",
    answer:
      "Our reinstatement service pricing depends on the complexity of your case. We offer a free initial consultation to assess your situation and provide a transparent quote. We charge a fixed fee with no hidden costs, and in many cases, we offer a partial refund if we are unable to achieve reinstatement.",
  },
];

const processSteps = [
  {
    img: "/images/services/process/sell-items.png",
    title: "Case Review",
    description: "Analyze suspension notice, account history, and identify the root cause of suspension",
  },
  {
    img: "/images/services/process/buy-items.png",
    title: "Compliance Audit",
    description:
      "Review all listings, policies, and account metrics to find every violation that needs resolution",
  },
  {
    img: "/images/services/process/shipping.png",
    title: "Appeal Preparation",
    description:
      "Draft a professional appeal letter with corrective actions and a detailed prevention plan",
  },
  {
    img: "/images/services/process/happy-customer.png",
    title: "Submit & Follow Up",
    description:
      "Submit the appeal to Walmart and actively follow up until a decision is reached",
  },
  {
    img: "/images/services/process/get-payout.png",
    title: "Account Restored",
    description:
      "Account reinstated and selling privileges restored. Ongoing monitoring to prevent future issues",
  },
];

export default function WalmartReinstatementPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label">Account Recovery</span>
          <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
            Walmart Account Reinstatement Services
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
            Get your suspended Walmart seller account reinstated by our expert
            team. We handle the complete appeal process, compliance review, and
            policy violation resolution with an 85%+ success rate.
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
                A suspended Walmart seller account can be devastating for your
                business. Whether your account was suspended for policy
                violations, performance issues, intellectual property complaints,
                or account integrity concerns, our expert reinstatement team can
                help you get back to selling.
              </p>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Our reinstatement specialists have successfully recovered
                hundreds of suspended Walmart accounts. We understand Walmart&apos;s
                policies inside and out, and we know exactly what their
                compliance team looks for in a successful appeal.
              </p>
              <p className="typo-body">
                We don&apos;t just get your account reinstated &mdash; we conduct a
                complete compliance audit to fix every issue and implement
                preventive measures so your account stays in good standing. Our
                approach addresses the root cause, not just the symptoms, giving
                you long-term account security.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="/images/services/hero/walmart-hero.jpg"
                alt="Walmart Account Reinstatement Services"
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
                src="/images/services/hero/walmart-secondary.jpg"
                alt="Expert Walmart Account Recovery With EcomGarden"
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
                Expert Walmart Account Recovery With EcomGarden
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Our reinstatement team specializes in all types of Walmart
                account suspensions. Whether you are dealing with order defect
                rate violations, late shipment penalties, IP complaints from
                brand owners, or trust and safety issues, we have the expertise
                to build a winning appeal.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                We craft professional Plan of Action (POA) documents that clearly
                identify the root cause of the violation, detail the corrective
                actions already taken, and outline comprehensive prevention
                measures. Every appeal is customized to your specific situation
                and backed by supporting documentation.
              </p>
              <p className="typo-body">
                After reinstatement, we offer ongoing account health monitoring
                and compliance management to ensure your account remains in good
                standing. Our proactive approach catches potential issues before
                they escalate into suspensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Pros & Cons */}
      <ServiceProsCons
        heading="Pros & Cons of Professional Reinstatement"
        pros={[
          "85%+ success rate for account reinstatement",
          "Expert knowledge of Walmart compliance policies",
          "Professional appeal drafting and submission",
          "Complete compliance audit prevents future issues",
          "Faster resolution than self-submitted appeals",
          "Ongoing account health monitoring after recovery",
        ]}
        cons={[
          "Service fee required regardless of outcome",
          "Timeline depends on Walmart's review process",
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
