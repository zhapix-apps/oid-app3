"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import CountUp from "@/components/ui/CountUp";
import { STATS } from "@/lib/data";

export default function TrustedBy() {
  const [ref, visible] = useReveal();
  const logos = ["Northwind", "Riverside NGO", "Loop Studio", "Cedar College", "Fielday Co.", "Marbleworks"];

  return (
    <section className="py-16 border-y border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-center text-sm font-semibold tracking-wide uppercase mb-8 text-ink-soft">
          Trusted by teams around the world
        </p>
        <div className="marquee-wrap overflow-hidden mb-16">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display font-bold text-xl whitespace-nowrap opacity-40 text-ink">
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-extrabold text-4xl md:text-5xl mb-1 grad-text">
                <CountUp target={s.value} trigger={visible} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="text-sm font-medium text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
