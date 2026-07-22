import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RippleButton from "@/components/ui/RippleButton";
import { PLANS } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-white to-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 text-primary">Pricing</p>
            <h2 className="font-display font-extrabold mb-4 text-3xl md:text-section text-ink">Commit longer, save more.</h2>
            <p className="text-lg text-ink-soft">Every plan starts with a free month. No credit card required.</p>
          </>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <div
                className={`h-full rounded-3xl p-6 flex flex-col ${
                  p.popular ? "animate-pulse-plan glass-strong border-2 border-primary" : "glass card-hover border border-line"
                }`}
              >
                {p.popular && (
                  <span className="self-start text-xs font-bold px-3 py-1 rounded-full text-white mb-4 bg-gradient-to-r from-primary to-accent">
                    MOST POPULAR
                  </span>
                )}
                <p className="font-display font-bold text-lg mb-1 text-ink">{p.name}</p>
                <p className="text-sm mb-4 text-ink-soft">{p.duration}</p>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-3xl text-ink">{p.price}</span>
                  {p.price.startsWith("$") && <span className="text-sm text-ink-soft">/mo</span>}
                </div>
                <p className="text-xs mb-6 text-ink-soft">{p.cadence}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-success" /> {f}
                    </li>
                  ))}
                </ul>
                <RippleButton
                  className={`w-full font-semibold py-3 rounded-full text-sm ${
                    p.popular ? "btn-primary" : "border border-primary text-primary"
                  }`}
                >
                  {p.cta}
                </RippleButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
