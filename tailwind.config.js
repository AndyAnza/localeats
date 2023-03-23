/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{handlebars,html,js}'],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/typography', '@tailwindcss/aspect-ratio' ],
}