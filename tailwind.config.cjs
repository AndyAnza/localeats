/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./localeats/views/**/*.{handlebars,html}'],
    theme: {
      extend: {},
    },
    plugins: ['@tailwindcss/forms', '@tailwindcss/typography', '@tailwindcss/aspect-ratio' ],
  }