import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      NativeLand: ["var(--native-land)"],
    },
    extend: {
      colors: {
        primary: "#E33C12",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
