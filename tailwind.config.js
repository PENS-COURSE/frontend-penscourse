/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        "regal-blue": {
          50: "#edf5f7",
          100: "#dcedf2",
          200: "#add0de",
          300: "#83b3c9",
          400: "#3e7ca3",
          500: "#0f497a",
          600: "#0c3e6e",
          700: "#08315c",
          800: "#05234a",
          900: "#031838",
          950: "#010d24",
        },
        spindle: {
          50: "#fcfeff",
          100: "#f7fdff",
          200: "#ebf8fc",
          300: "#dcf1fa",
          400: "#c6e6f7",
          500: "#abd4f1",
          600: "#8cb8db",
          700: "#608cb5",
          800: "#3f6591",
          900: "#23426e",
          950: "#0f2547",
        },
        dark: {
          50: "#f5f5f5",
          100: "#ededed",
          200: "#cfcfcf",
          300: "#b3b3b3",
          400: "#7a7a7a",
          500: "#3f3f3f",
          600: "#3b3535",
          700: "#302424",
          800: "#261717",
          900: "#1c0d0d",
          950: "#120505",
        },
        "school-bus-yellow": {
          50: "#fffef2",
          100: "#fffde6",
          200: "#fffbbf",
          300: "#fff799",
          400: "#ffed4d",
          500: "#ffe000",
          600: "#e6bf00",
          700: "#bf9300",
          800: "#996b00",
          900: "#734900",
          950: "#4a2a00",
        },
        alto: {
          50: "#fcfcfc",
          100: "#fcfcfc",
          200: "#f5f6f7",
          300: "#f2f4f5",
          400: "#e6e8eb",
          500: "#dcdfe3",
          600: "#b1bdcc",
          700: "#7d8eab",
          800: "#4e6287",
          900: "#2d3f66",
          950: "#132042",
        },
        "slate-gray": {
          50: "#f7f9fa",
          100: "#f0f3f5",
          200: "#dce2e6",
          300: "#c7d1d6",
          400: "#9fabb5",
          500: "#7d8997",
          600: "#657587",
          700: "#465770",
          800: "#2d3d59",
          900: "#192845",
          950: "#0a142b",
        },
      },
    },
  },

  plugins: [],
};
