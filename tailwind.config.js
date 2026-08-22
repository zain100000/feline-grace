/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#0f766e",
        secondary: "#0d9488",
        tertiary: "#14b8a6",
      },
    },
  },
  plugins: [],
};
