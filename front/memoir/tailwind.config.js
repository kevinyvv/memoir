/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite"
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "25%": {
            transform: "translate(50px, -50px) scale(1.1)"
          },
          "50%": {
            transform: "translate(-25px, 25px) scale(0.9)"
          },
          "75%": {
            transform: "translate(-75px, 75px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      backgroundImage: {
        'nostalgia': "url('https://imgur.com/sF0Zszn.jpeg')",
      }
    },
    fontFamily: {
      'title': ["MuseoModerno", 'sans-serif'],
      'slogan': ["Mr Dafoe"],
      'cursive': ["Dancing Script", 'cursive'],
      'bio': ["Josefin Sans", 'sans-serif'],
    },
  },
	plugins: [
		require("tailwindcss-animate"),
    require("daisyui"),
	],
}