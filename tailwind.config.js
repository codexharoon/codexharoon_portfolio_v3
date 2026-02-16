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
        background: "var(--background)",
        primary: "#007AFF",
        secondary: "#5856D6",
        accent: "#34C759",
        text: "var(--text)",
        systemGray: {
          1: "#8E8E93",
          2: "#AEAEB2",
          3: "#C7C7CC",
          4: "#D1D1D6",
          5: "#E5E5EA",
          6: "#F2F2F7",
        }
      },
      fontFamily: {
        heading: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        body: ["Inter", "SF Pro Text", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Cascadia Code", "monospace"],
      },
      borderRadius: {
        'apple': '12px',
        'apple-lg': '20px',
      },
      backdropBlur: {
        'apple': '20px',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
