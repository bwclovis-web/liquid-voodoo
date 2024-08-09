/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './templates/*.liquid',
    './snippets/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

