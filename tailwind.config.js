/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
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
      backgroundImage: {
        'contact-texture': "url('../assets/bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
