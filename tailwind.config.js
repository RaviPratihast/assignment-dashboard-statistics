/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
<<<<<<< HEAD
        "max-sm": { max: "640px" }, // Adding a custom breakpoint for max-width: 640px
      },
      fontFamily: {
        sans: ["Montserrat", "sans"],
=======
        'max-sm': {'max': '640px'}, // Adding a custom breakpoint for max-width: 640px
>>>>>>> 1d0daebf696538e8537d9779a9b01546a714cec7
      },
    },
  },
  plugins: [],
};
