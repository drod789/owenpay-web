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
        plum: {
          50: "#FAF6FB",
          100: "#F0E6F4",
          200: "#DDC8E5",
          300: "#C4A1D1",
          400: "#A674B5",
          500: "#7D4E8F",
          600: "#5C3A6B",
          700: "#4A2D57",
          800: "#3D1E4A",
          900: "#2A1434",
          950: "#180A1F",
        },
        sage: {
          50: "#F4F7F2",
          100: "#E5ECDF",
          200: "#CCD9C2",
          300: "#A8BC9A",
          400: "#7B9971",
          500: "#5E7E55",
          600: "#496341",
          700: "#3B4F36",
          800: "#31402E",
          900: "#293627",
        },
        cream: {
          50: "#FDFCFA",
          100: "#F8F5F0",
          200: "#F0EAE0",
          300: "#E5DBC8",
          400: "#D4C4A8",
        },
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
