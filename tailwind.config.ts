import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f7f5",
          100: "#e3ebe6",
          200: "#c7d8ce",
          300: "#9fbcae",
          400: "#749b89",
          500: "#557f6d",
          600: "#426557",
          700: "#365247",
          800: "#2e433b",
          900: "#273832",
        },
        warm: {
          50: "#fdfbf7",
          100: "#f9f4eb",
          200: "#f1e6d3",
          300: "#e6d2b3",
          400: "#d7b68b",
          500: "#ca9c6a",
          600: "#bd8556",
          700: "#9d6b47",
          800: "#7f573e",
          900: "#674834",
        },
      },
      fontFamily: {
        serif: ["Georgia", " Cambria", '"Times New Roman"', "Times", "serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
