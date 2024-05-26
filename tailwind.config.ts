import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
      gridTemplateRows: {
        app: "min-content max-content",
      },
    },
  },
  plugins: [],
};
export default config;
