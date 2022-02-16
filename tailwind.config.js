const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      blue: "#2405F2",
      darkblue: "#282938",
      grey: "#F4F6FC",
      tintblue: "#1C1E53",
      yellow: "#FCD980",
      lightyellow: "#FDE4A6",
    },
  },
  plugins: [],
};
