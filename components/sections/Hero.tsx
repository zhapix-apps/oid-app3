"use client";

import { Sparkles, ArrowRight, PlayCircle, Star, Rocket, Bell, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RippleButton from "@/components/ui/RippleButton";
import { CHANNELS } from "@/lib/data";

function HeroHubVisual() {
  const radius = 168;
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto animate-floaty-slow">
      <div className="absolute inset-0 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(37,99,235,0.25),transparent_70%)]" />
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-8 rounded-full border border-dashed border-accent/30" />

      <div className="absolute inset-0 animate-spin-slow">
        {CHANNELS.map((c, i) => {
          const angle = (i / CHANNELS.length) * 2 * Math.PI;
          const x = 50 + (radius / 4.2) * Math.cos(angle);
          const y = 50 + (radius / 4.2) * Math.sin(angle);
          const Icon = c.icon;
          return (
            <div
              key={c.label}
              className="absolute w-11 h-11 md:w-12 md:h-12 rounded-2xl glass-strong shadow-md flex items-center justify-center animate-spin-slow-rev"
              style={{ left: "29.999999999999982%", top: "15.358983848622465%", transform: "translate(-50%,-50%)" }}
              title={c.label}
            >
              <Icon className="w-5 h-5 text-primary" />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-strong rounded-3xl glow-blue-lg p-5 w-56 md:w-64">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-accent">
              <Rocket className="w-4 h-4 text-white" />
            </span>
            <div>
              <p className="text-sm font-bold font-display leading-tight">Product Launch</p>
              <p className="text-xs text-ink-soft">12 members · Active</p>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1 text-ink-soft">
              <span>Goal progress</span>
              <span className="font-semibold text-primary">72%</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "72%" }} />
            </div>
          </div>
          <div className="flex -space-x-2">
            {["#2563EB", "#60A5FA", "#38BDF8", "#10B981"].map((c, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ background: c }} />
            ))}
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-ink-soft">
              +8
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-3 -left-4 glass-strong rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 animate-floaty">
        <Bell className="w-4 h-4 text-success" />
        <span className="text-xs font-semibold">Goal milestone reached</span>
      </div>
      <div className="absolute -bottom-2 -right-2 glass-strong rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 animate-floaty-delay">
        <MessageCircle className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold">3 new messages</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 mesh-bg overflow-hidden">
      <div className="absolute top-24 -left-24 w-80 h-80 rounded-full animate-drift bg-[radial-gradient(circle,rgba(96,165,250,0.35),transparent_70%)]" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full animate-drift-rev bg-[radial-gradient(circle,rgba(56,189,248,0.3),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold mb-6 text-primary">
              <Sparkles className="w-4 h-4" /> One workspace, every conversation
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-extrabold leading-[1.08] mb-6 text-4xl md:text-hero text-ink">
              Bring every conversation into <span className="grad-text">one place.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed mb-9 max-w-xl text-ink-soft">
              Create purpose-driven groups, define goals, invite members, and launch WhatsApp, Telegram, calls, Zoom, Slack, Teams, Discord, and email — all from one unified workspace.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <RippleButton className="btn-primary font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 text-base">
                Start Free for 1 Month <ArrowRight className="w-4 h-4" />
              </RippleButton>
              <button className="flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full glass card-hover text-base text-ink">
                <PlayCircle className="w-5 h-5 text-primary" /> Watch Demo
              </button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink-soft">Trusted by 50,000+ users</span>
            </div>
          </Reveal>
        </div>

        <Reveal scale delay={200}>
          <HeroHubVisual />
        </Reveal>
      </div>
    </section>
  );
}
