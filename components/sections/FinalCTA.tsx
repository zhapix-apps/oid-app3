import Reveal from "@/components/ui/Reveal";
import RippleButton from "@/components/ui/RippleButton";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden mx-4 md:mx-10 mb-10 rounded-[32px] bg-gradient-to-br from-primary via-blue-900 to-accent">
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full animate-drift bg-white/15" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full animate-drift-rev bg-white/10" />
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-floaty bg-white/50"
          style={{
            width: 5 + (i % 3) * 3,
            height: 5 + (i % 3) * 3,
            top: `${10 + i * 8}%`,
            left: `${(i * 37) % 90}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <Reveal className="relative max-w-2xl mx-auto text-center px-6">
        <>
          <h2 className="font-display font-extrabold mb-5 text-white text-3xl md:text-section">Stop switching between apps.</h2>
          <p className="text-lg mb-9 text-blue-50">
            Everything your team needs — groups, goals, and communication — in one intelligent workspace.
          </p>
          <RippleButton className="font-semibold px-8 py-4 rounded-full text-base bg-white text-primary">
            Start Free Today
          </RippleButton>
        </>
      </Reveal>
    </section>
  );
}
