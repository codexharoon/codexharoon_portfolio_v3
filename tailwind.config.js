/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F0F4FF",
          dark: "#0F172A"
        },
        primary: "#6A5ACD",
        secondary: "#ADD8E6",
        text: {
          light: "#1A1A1A",
          dark: "#F8FAFC"
        }
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
