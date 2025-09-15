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
        primary: "#fdc700",
        secondary: "#ff8904",
        tertiory: "#433f3a",
        black: "#000000",
        grey_primary: "#e4e4e4",
        grey_secondary: "#f5f5f5",
        info: "#00bafe",
        success: "#00d390",
        warning: "#fcb700",
        error: "#ff6266"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
    //...
  ],
};
export default config;
