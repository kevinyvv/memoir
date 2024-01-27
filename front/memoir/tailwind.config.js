/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nostalgia': "url('https://imgur.com/sF0Zszn.jpeg')",
      }
    },
  },
  plugins: [require("daisyui")],
}