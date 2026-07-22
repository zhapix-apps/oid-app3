import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { FEATURES, CHANNELS } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-white to-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 text-primary">Features</p>
            <h2 className="font-display font-extrabold text-3xl md:text-section text-ink">
              Everything a team needs, none of the tab-switching.
            </h2>
          </>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 70}>
                <TiltCard className="h-full">
                  <div className="card-hover rounded-3xl p-7 h-full glass">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-primary/10 to-accent/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-ink">{f.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink-soft">{f.desc}</p>
                    {f.title === "Communication Hub" && (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {CHANNELS.slice(0, 6).map((c) => (
                          <span key={c.label} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                            {c.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
