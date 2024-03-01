import type { Config } from "tailwindcss";
import { functionalTokens } from "./const";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["var(--font-inter)", "serif"],
      "serif-medium": ["var(--font-inter-medium)", "serif"],
    },
    extend: {
      colors: functionalTokens,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
