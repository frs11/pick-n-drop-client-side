/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: "'Allerta Stencil', sans-serif",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
