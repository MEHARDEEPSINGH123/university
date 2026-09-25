import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#047857",
          dark: "#065F46",
          light: "#059669",
          subtle: "#ECFDF5",
        },
        secondary: {
          DEFAULT: "#D97706",
          dark: "#B45309",
          light: "#F59E0B",
          subtle: "#FFFBEB",
        },
        accent: {
          DEFAULT: "#FACC15",
          dark: "#EAB308",
          light: "#FEF08A",
        },
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F8FAFC",
          card: "#FFFFFF",
          muted: "#F1F5F9",
        },
        heading: "#111827",
        body: "#111827",
        muted: "#6B7280",
        border: {
          DEFAULT: "#E5E7EB",
          subtle: "#F1F5F9",
          strong: "#D1D5DB",
        },
      },
      fontFamily: {
        heading: ["var(--font-merriweather)", "Merriweather", "Georgia", "Cambria", "serif"],
        serif: ["var(--font-merriweather)", "Merriweather", "Georgia", "Cambria", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "content": "1400px",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "xl": "12px",
        "2xl": "16px",
        "card": "14px",
      },
      boxShadow: {
        "subtle": "0 1px 3px 0 rgba(17, 24, 39, 0.03)",
        "soft": "0 2px 12px -2px rgba(17, 24, 39, 0.04), 0 1px 3px 0 rgba(17, 24, 39, 0.02)",
        "card": "0 2px 14px -3px rgba(17, 24, 39, 0.05), 0 1px 3px 0 rgba(17, 24, 39, 0.02)",
        "card-hover": "0 8px 26px -4px rgba(17, 24, 39, 0.07), 0 2px 6px -1px rgba(17, 24, 39, 0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
