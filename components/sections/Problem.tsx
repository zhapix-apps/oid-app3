import { X, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { OLD_WAY, NEW_WAY } from "@/lib/data";

export default function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <>
            <h2 className="font-display font-extrabold mb-4 text-3xl md:text-section text-ink">
              Communication is scattered.
            </h2>
            <p className="text-lg text-ink-soft">
              Nine apps, nine inboxes, one exhausted team. ComHub puts the purpose back at the center.
            </p>
          </>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={80}>
            <div className="rounded-3xl p-8 h-full border border-line bg-white">
              <p className="font-display font-bold text-lg mb-6 text-ink-soft">The old way</p>
              <ul className="space-y-4">
                {OLD_WAY.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-ink-soft">
                    <X className="w-4 h-4 flex-shrink-0 text-red-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-3xl p-8 h-full glass-strong glow-blue">
              <p className="font-display font-bold text-lg mb-6 grad-text">Everything inside ComHub</p>
              <ul className="space-y-4">
                {NEW_WAY.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
