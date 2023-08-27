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
        primary: "#FF6A00",
        menuSection: "#EFEFEF",
        textGray: "#343434",
        grayLight: "#848484",
      },
    },
  },
  plugins: [],
};
export default config;
