/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // background: linear-gradient(270deg, #903AFF 0%, #FE34B9 100%);
      colors: {
        'lightPurple': '#D434FE',
        'darkPurple': '#903AFF',
        'darkPink': '#FF26B9',
        'darkBlue': '#150E28',
      },
      fontFamily:{
        clashDisplay: ["clash-display"],
        montserrat: ["montserrat"],
        unicaOne: ["unicaOne"]
      }
    },
  },
  plugins: [],
}
