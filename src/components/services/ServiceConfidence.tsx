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
    <section style={{ padding: "40px 0" }} className="bg-[#f8f9f9]">
      <div className="container-main" ref={sectionRef}>
        <h2
          className="font-bold text-center mb-10"
          style={{ fontSize: "32px", color: "#2b2e37" }}
        >
          Confidence with EcomGarden Service
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-extrabold text-[#86af51]"
                style={{ fontSize: "40px", lineHeight: "40px" }}
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
                className="font-bold text-[#333] mt-2"
                style={{
                  fontSize: "16px",
                  lineHeight: "35px",
                  letterSpacing: "-0.1px",
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
