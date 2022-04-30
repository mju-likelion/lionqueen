module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/DesignSystem/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
  },
  darkMode: "media", // class
  plugins: [],
  important: true,
};
