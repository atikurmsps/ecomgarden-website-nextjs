"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, prefix: "$", suffix: "M+", label: "Revenue Last Year" },
  { value: 2, prefix: "$", suffix: "M+", label: "Profit Made" },
  { value: 55, prefix: "", suffix: "+", label: "Active Stores" },
  { value: 250, prefix: "", suffix: "+", label: "Happy Clients" },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  label,
  duration = 2000,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "0 16px",
        fontFamily: "var(--font-roboto)",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          lineHeight: "1",
          fontWeight: 800,
          color: "#fff",
          marginBottom: "4px",
          letterSpacing: "-0.5px",
        }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--color-primary)",
          letterSpacing: "0.5px",
          lineHeight: "1.4",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        padding: "20px 0",
        backgroundColor: "var(--color-dark)",
        fontFamily: "var(--font-roboto)",
      }}
    >
      <div className="container-main">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <AnimatedCounter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
              {index < stats.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "36px",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
