import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        neutral: {
          600: "#525252",
          900: "#171717",
        },
        grayBrand: "#d2d6db",
      },
    },
  },
  plugins: [],
} satisfies Config;
