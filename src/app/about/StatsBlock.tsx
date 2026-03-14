"use client";

import CounterAnimation from "@/components/CounterAnimation";
import RevealOnScroll from "@/components/RevealOnScroll";

const stats = [
  { target: 80, suffix: "+", label: "Projects Delivered" },
  { target: 10, suffix: "", label: "Countries" },
  { target: 15, suffix: "+", label: "Industries Served" },
  { target: 100, suffix: "%", label: "On-Time Delivery" },
];

export default function StatsBlock() {
  return (
    <section className="stats-section">
      <div className="container">
        <RevealOnScroll>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">
                  <CounterAnimation target={s.target} suffix={s.suffix} />
                </div>
                <div className="stat-text">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
