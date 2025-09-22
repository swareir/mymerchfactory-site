/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0B0F14",
          white: "#FFFFFF",
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
