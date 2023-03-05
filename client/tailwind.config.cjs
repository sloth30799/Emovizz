/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Fredoka One"],
      },
      colors: {
        black: "#252a41",
        grey: "#31465f",
        blue: "#759fb2",
        red: "#fe0202",
        purple: "#800080",
        orange: "#e6822f",
        teal: "#27d298",
      },
    },
  },
  plugins: [],
}
