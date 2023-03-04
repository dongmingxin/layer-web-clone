/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      avenirNext: ["Avenir Next LT Pro", "sans-serif"],
      avenirMedium: ["Avenir Medium", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
