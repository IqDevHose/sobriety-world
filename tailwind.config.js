/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { Lightbulb } = require('lucide-react');

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        white: "#fbfbfb",
        lightbulb: "#6aa0a2",
        softblack: "#404040",
      },
    },
  },
  plugins: [],
});
