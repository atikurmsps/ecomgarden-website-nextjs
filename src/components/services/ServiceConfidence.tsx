"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Sales Last Year", value: 10, prefix: "$", suffix: " M" },
  { label: "Profit Made", value: 5, prefix: "$", suffix: " M" },
  { label: "Active Store", value: 15, prefix: "", suffix: " +" },
  { label: "Happy Client", value: 150, prefix: "", suffix: " +" },
];

export default function ServiceConfidence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "36px 0",
        backgroundColor: "var(--color-dark)",
        fontFamily: "var(--font-roboto)",
      }}
    >
      <div className="container-main" ref={sectionRef}>
        <h2
          style={{
            fontSize: "27px",
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            marginBottom: "32px",
            fontFamily: "var(--font-roboto)",
          }}
        >
          Confidence with EcomGarden Service
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                flex: "1 1 auto",
                textAlign: "center",
                padding: "16px 28px",
                position: "relative",
                minWidth: "140px",
                borderRight:
                  index < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: "1.1",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                {isVisible ? (
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  `${stat.prefix}0${stat.suffix}`
                )}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  marginTop: "8px",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
