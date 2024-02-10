/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      now: ["Now"],
    },
    extend: {
      backgroundImage: {
        'startup': "url('./img/startup-1.png')",
      }
    },
  },
  plugins: [],
}

