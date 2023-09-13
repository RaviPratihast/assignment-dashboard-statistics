/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '640px'}, // Adding a custom breakpoint for max-width: 640px
      },
    },
  },
  plugins: [],
}