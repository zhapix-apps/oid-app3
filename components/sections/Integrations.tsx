import Reveal from "@/components/ui/Reveal";
import { CHANNELS } from "@/lib/data";

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 md:py-32 bg-gradient-to-b from-bg to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 text-primary">Integrations</p>
            <h2 className="font-display font-extrabold text-3xl md:text-section text-ink">
              Launch any channel, without leaving ComHub.
            </h2>
          </>
        </Reveal>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 60} scale>
                <div className="card-hover rounded-2xl glass p-5 flex flex-col items-center gap-3 text-center h-full">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-ink">{c.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
