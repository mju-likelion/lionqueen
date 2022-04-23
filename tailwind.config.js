const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./DesignSystem/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      ...colors,
      text: "#2e2e2e",
      placeholder: "#646464",
      primary: {
        skyblue: "#c5e5ff",
        brown: "#8d8255",
        yellow: "#ffe161",
        orange: "#ffbb17",
        green: "#458d10",
        lightgreen: "#92cd00",
      },
    },
  },
  plugins: [],
  important: true,
};
