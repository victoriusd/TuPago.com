/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      now: ["Now"],
    },
    extend: {
      backgroundImage: {
        'startup': "url('./img/startup-1.png')",
        'startup-2': "url('./img/startup-2.png')",
      }
    },
  },
  plugins: [],
}

