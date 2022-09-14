/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin", '@tailwindcss/forms')],
}
