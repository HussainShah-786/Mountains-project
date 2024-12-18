import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        primary: ["Open Sans", "sans-serif"],
        secondary: ["Playfair Display", "serif"],
        tertiary: ["Niconne", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
