/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./javascript/**/*.js"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        'primary1': "#2FA258",
        'primary2': "#38BD67",
        'white-deep': "#DFDFDF",
        'white-lite': "#F1F7FB",
        'dark-deep': "#172635",
        'dark-lite': "#17263599",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
