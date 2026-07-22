import { FolderKanban, Target, MessageCircle, Users, TrendingUp, CheckCircle2, UserPlus, Video, Bell } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function DashboardShowcase() {
  const sidebarItems = [
    { icon: FolderKanban, label: "Groups" },
    { icon: Target, label: "Goals" },
    { icon: MessageCircle, label: "Communication" },
    { icon: Users, label: "Members" },
  ];
  const activity = [
    { icon: CheckCircle2, text: "Design review goal marked complete", time: "2m ago" },
    { icon: UserPlus, text: "Wei joined Marketing Sprint", time: "18m ago" },
    { icon: Video, text: "Zoom launched from Product Launch", time: "41m ago" },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <>
            <h2 className="font-display font-extrabold mb-4 text-3xl md:text-section text-ink">
              One dashboard, the whole workspace.
            </h2>
            <p className="text-lg text-ink-soft">
              Groups, goals, members, and every channel — visible at a glance.
            </p>
          </>
        </Reveal>

        <Reveal scale delay={100}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] blur-3xl bg-[radial-gradient(ellipse,rgba(37,99,235,0.18),transparent_70%)]" />
            <div className="relative rounded-3xl glass-strong glow-blue-lg p-3 md:p-4 grid grid-cols-12 gap-3 md:gap-4">
              <div className="col-span-12 md:col-span-3 rounded-2xl p-4 bg-primary/5">
                <p className="text-xs font-bold uppercase tracking-wide mb-4 text-ink-soft">Workspace</p>
                <div className="space-y-1.5">
                  {sidebarItems.map((s, i) => (
                    <div
                      key={s.label}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold ${
                        i === 0 ? "bg-primary text-white" : "text-ink-soft"
                      }`}
                    >
                      <s.icon className="w-4 h-4" /> {s.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-3 md:gap-4">
                <div className="col-span-2 rounded-2xl p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-display font-bold text-sm">Group progress</p>
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 50, 80, 70, 95, 60].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl p-4 bg-white">
                  <p className="font-display font-bold text-sm mb-3">Active groups</p>
                  <p className="font-display font-extrabold text-3xl grad-text">24</p>
                  <p className="text-xs mt-1 text-ink-soft">+6 this month</p>
                </div>

                <div className="rounded-2xl p-4 bg-white">
                  <p className="font-display font-bold text-sm mb-3">Notifications</p>
                  {activity.slice(0, 1).map((a) => (
                    <div key={a.text} className="flex items-start gap-2">
                      <a.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <p className="text-xs leading-snug text-ink-soft">{a.text}</p>
                    </div>
                  ))}
                </div>

                <div className="col-span-2 rounded-2xl p-4 bg-white">
                  <p className="font-display font-bold text-sm mb-3">Activity feed</p>
                  <div className="space-y-2.5">
                    {activity.map((a) => (
                      <div key={a.text} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-ink">
                          <a.icon className="w-3.5 h-3.5 text-primary" /> {a.text}
                        </div>
                        <span className="text-ink-soft">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-6 -right-6 glass-strong rounded-2xl shadow-lg px-3 py-2 items-center gap-2 animate-floaty">
              <Bell className="w-4 h-4 text-success" />
              <span className="text-xs font-semibold">Goal 72% complete</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
