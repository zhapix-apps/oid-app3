import { MessageCircle } from "lucide-react";
import { FOOTER_LINK_GROUPS, FOOTER_SOCIAL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-10 border-b border-line">
          <div className="max-w-xs flex-shrink-0">
            <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-xl mb-3 text-ink">
              <span className="w-9 h-9 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                <MessageCircle className="w-5 h-5 text-white" />
              </span>
              ComHub
            </a>
            <p className="text-sm leading-relaxed text-ink-soft">
              One workspace for purpose-driven groups. Chat, meet, and ship — together.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1 lg:max-w-2xl">
            {FOOTER_LINK_GROUPS.map((g) => (
              <div key={g.title}>
                <p className="font-display font-bold text-sm mb-4 text-ink">{g.title}</p>
                <ul className="space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-ink-soft">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm text-ink-soft">© 2026 ComHub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {FOOTER_SOCIAL.map((s) => (
              <a key={s} href="#" className="text-sm font-medium text-ink-soft">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
