import Reveal from "@/components/ui/Reveal";
import { STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <>
            <h2 className="font-display font-extrabold mb-4 text-3xl md:text-section text-ink">
              From sign-up to shipped, in <span className="grad-text">minutes.</span>
            </h2>
            <p className="text-lg text-ink-soft">A guided path from empty workspace to a fully aligned team.</p>
          </>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card-hover rounded-3xl p-6 h-full border border-line bg-white">
                <p className="font-display font-extrabold text-3xl mb-4 grad-text">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display font-bold text-base mb-2 leading-snug text-ink">{s.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
