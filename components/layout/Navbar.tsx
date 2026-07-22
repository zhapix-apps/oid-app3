"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import RippleButton from "@/components/ui/RippleButton";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-xl text-ink">
          <span className="w-9 h-9 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-accent">
            <MessageCircle className="w-5 h-5 text-white" />
          </span>
          ComHub
        </a>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="relative text-[15px] font-medium text-ink-soft group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-[15px] font-semibold px-4 py-2 rounded-full text-ink transition hover:bg-slate-100">Sign In</button>
          <RippleButton className="btn-primary text-[15px] font-semibold px-5 py-2.5 rounded-full">Start Free</RippleButton>
        </div>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6 text-ink" />
        </button>
      </nav>

      <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 glass-strong shadow-2xl p-6 flex flex-col gap-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between">
            <span className="font-display font-extrabold text-lg">ComHub</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="text-base font-semibold text-ink">
              {link}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <button className="text-[15px] font-semibold px-4 py-2.5 rounded-full border border-line">Sign In</button>
            <RippleButton className="btn-primary text-[15px] font-semibold px-4 py-2.5 rounded-full">Start Free</RippleButton>
          </div>
        </div>
      </div>
    </div>
  );
}
