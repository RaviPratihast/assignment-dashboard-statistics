/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
      },
      fontFamily: {
        sans: ["Montserrat", "Lato", "sans"],
      },
      colors: {
        bgGrey: "#F8FAFF",
        assignBlue: "#4285F4",
        bgWhite: "#FFFFFF",
        offWhite: "#e2e8f0",
        lightGreen: "#98D89E",
        lightPink: "#EE8484",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)", // Define the gradient background
      },
    },
  },
  plugins: [],
};
