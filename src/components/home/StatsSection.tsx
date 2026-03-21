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
    <div ref={ref} className="text-center py-4">
      <div
        className="text-[#86af51] font-extrabold leading-none mb-2"
        style={{ fontSize: "40px", lineHeight: "40px" }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-[#ee6c4e] text-[14px] font-bold" style={{ lineHeight: "35px", letterSpacing: "-0.1px" }}>{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{ padding: "0px 0px 0px" }} className="bg-white">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
