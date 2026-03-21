"use client";

import Image from "next/image";

const steps = [
  {
    img: "/images/process/discussion.png",
    title: "Discussion",
    description:
      "Discuss your requirements with us. Make agreement for your needs and pricing",
  },
  {
    img: "/images/process/get-access.png",
    title: "Get Access",
    description:
      "Send your store access to us. As well others portal's access based on requirements",
  },
  {
    img: "/images/process/planning.png",
    title: "Planing",
    description:
      "We will make plan to get maximum profit output and inform you everyting",
  },
  {
    img: "/images/process/growth.png",
    title: "Growth",
    description:
      "We will implement plan into reality and get stating max profit as possible",
  },
  {
    img: "/images/process/calculation.png",
    title: "Calculation",
    description:
      "We will calculate every sales and build a report. As well we will get paid from you",
  },
];

export default function ProcessSection() {
  return (
    <section style={{ padding: "40px 0", backgroundColor: "white", fontFamily: "var(--font-roboto)" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "6px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              color: "var(--color-primary)",
            }}
          >
            Our Process
          </span>
        </div>
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 700,
            textAlign: "center",
            color: "var(--color-text)",
            marginBottom: "28px",
            lineHeight: "30px",
          }}
        >
          How Our Management Service Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="process-grid"
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                padding: "0 8px",
              }}
            >
              {/* Numbered circle with icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                  position: "relative",
                }}
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  width={90}
                  height={90}
                  style={{ width: "34px", height: "34px", objectFit: "contain" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block"
                  style={{
                    position: "absolute",
                    top: "28px",
                    left: "calc(50% + 34px)",
                    width: "calc(100% - 68px)",
                    height: "2px",
                    background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-light))",
                    opacity: 0.4,
                  }}
                />
              )}

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "4px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "var(--color-text-light)",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 1023px) {
            .process-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 20px !important;
            }
          }
          @media (max-width: 639px) {
            .process-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
