"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-bg to-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal className="text-center mb-16">
          <h2 className="font-display font-extrabold mb-4 text-3xl md:text-section text-ink">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base text-ink">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-primary ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  <div className={`accordion-panel ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
