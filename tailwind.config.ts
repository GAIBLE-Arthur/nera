import type { Config } from "tailwindcss";

// Design tokens live as CSS custom properties in app/globals.css so the
// visual identity (colors, accent) can be changed in one place. Tailwind
// classes below simply reference those variables.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        graphite: "var(--color-graphite)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        paper: "var(--color-paper)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        "border-dark": "var(--color-border-dark)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        "on-dark": "var(--color-on-dark)",
        "on-dark-muted": "var(--color-on-dark-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.18em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Traveling pulse used on diagram connectors (FlowArrow,
        // TechApproachDiagram) to give static pipeline diagrams a sense of
        // data actually moving through the chain.
        "flow-down": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateY(26px)", opacity: "0" },
        },
        "flow-right": {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateX(26px)", opacity: "0" },
        },
        "flow-path": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "12%": { opacity: "1" },
          "88%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        "flow-down": "flow-down 1.8s ease-in-out infinite",
        "flow-right": "flow-right 1.8s ease-in-out infinite",
        "flow-path": "flow-path 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
