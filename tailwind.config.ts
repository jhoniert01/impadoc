import type { Config } from "tailwindcss";

/**
 * IMPADOC — Brand System 2026
 * Cromática oficial heredada del Brand Book (sección 04).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand System primaries ── */
        rojo:  "#E32118",     // Rojo Cal · Pantone 485 C
        azul:  "#1B2C5E",     // Azul Obra · Pantone 282 C
        ink:   { DEFAULT:"#15130F", 2:"#2A2823" },         // Carbón / Grafito
        paper: { DEFAULT:"#EFEAE0", 2:"#E7E1D2" },         // Yeso / Yeso oscuro
        cream: "#F8F5EE",                                    // Blanco Cal
        sand:  "#D9CFBE",                                    // Arena
        stone: "#8E867B",                                    // Concreto

        /* ── Editorial accents (≤10%) ── */
        clay:  "#C25B3F",     // Arcilla — exteriores
        moss:  "#4F5A3C",     // Musgo — industrial

        /* ── Brand palette grouped ── */
        brand: {
          red:       "#E32118",
          "red-mid": "#FF2E25",
          blue:      "#1B2C5E",
          deep:      "#0F1E45",
          mid:       "#2F4593",
          light:     "#5A78D6",
        },

        line:   "#E5E1D6",
        muted:  "#6a7484",
      },
      fontFamily: {
        sans:    ["Manrope", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Manrope", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1320px",
        wide: "1440px",
      },
      boxShadow: {
        card:    "0 2px 14px rgba(15,30,69,.07)",
        hover:   "0 24px 60px rgba(15,30,69,.14)",
        blue:    "0 12px 36px rgba(27,44,94,.28)",
        red:     "0 12px 30px rgba(227,33,24,.26)",
        premium: "0 18px 48px -8px rgba(15,30,69,.22)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "22px",
        "4xl": "30px",
        "5xl": "36px",
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter:  "-0.035em",
        tight:    "-0.025em",
        wider:    "0.06em",
        widest:   "0.18em",
      },
      backgroundImage: {
        'gradient-blue':   "linear-gradient(135deg, #1B2C5E 0%, #0F1E45 100%)",
        'gradient-red':    "linear-gradient(135deg, #E32118 0%, #B5180F 100%)",
        'gradient-cream':  "linear-gradient(180deg, #F8F5EE 0%, #EFEAE0 100%)",
        'grid-fine':       "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
      },
      animation: {
        'fade-up':  'fadeUp 0.8s cubic-bezier(.2,.7,.2,1) both',
        'shimmer':  'shimmer 2.2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
