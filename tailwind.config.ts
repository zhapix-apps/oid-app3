import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        secondary: "#60A5FA",
        accent: "#38BDF8",
        bg: "#F8FAFC",
        ink: "#0F172A",
        "ink-soft": "#475569",
        success: "#10B981",
        line: "#E2E8F0",
      },
      borderRadius: {
        "3xl": "24px",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.08", fontWeight: "800" }],
        section: ["48px", { lineHeight: "1.15", fontWeight: "800" }],
        cardhead: ["24px", { lineHeight: "1.3", fontWeight: "700" }],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.2deg)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.08)" },
          "66%": { transform: "translate(-25px,20px) scale(0.96)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.45), 0 30px 80px -20px rgba(37,99,235,0.5)" },
          "50%": { boxShadow: "0 0 0 14px rgba(37,99,235,0), 0 30px 80px -20px rgba(37,99,235,0.65)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "floaty-slow": "floaty 9s ease-in-out infinite",
        "floaty-delay": "floaty 7s ease-in-out infinite 1.4s",
        drift: "drift 18s ease-in-out infinite",
        "drift-rev": "drift 22s ease-in-out infinite reverse",
        "spin-slow": "spin-slow 26s linear infinite",
        "spin-slow-rev": "spin-slow 32s linear infinite reverse",
        marquee: "marquee 34s linear infinite",
        "pulse-plan": "pulse-glow 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
