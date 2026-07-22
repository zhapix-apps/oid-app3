import Reveal from "@/components/ui/Reveal";
import { AUDIENCE } from "@/lib/data";

export default function Audience() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="flex flex-wrap justify-center gap-3">
          <>
            {AUDIENCE.map((g) => (
              <div key={g.label} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-ink-soft">
                <g.icon className="w-4 h-4 text-primary" /> {g.label}
              </div>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
