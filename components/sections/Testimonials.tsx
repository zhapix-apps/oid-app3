import { Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold mb-4 text-3xl md:text-section text-ink">
            Teams that stopped switching apps.
          </h2>
        </Reveal>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track flex gap-6 w-max px-6">
          {loop.map((t, i) => (
            <div key={i} className="glass rounded-3xl p-6 w-80 flex-shrink-0">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-5 text-ink">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0 bg-gradient-to-br from-primary to-accent">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
