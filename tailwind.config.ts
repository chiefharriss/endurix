import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#050505",
        track: "#E01919",
        bone: "#F4EFE7",
        dust: "#8A8A8A"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "Impact", "sans-serif"],
        body: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        redline: "0 0 0 1px rgba(224, 25, 25, 0.45), 0 24px 80px rgba(224, 25, 25, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
