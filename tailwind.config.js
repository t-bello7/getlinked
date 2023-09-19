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
        'lightPurple': '#903AFF',
        'darkPurple': '#903AFF',
        'darkBlue': '#150E28',
      },
    },
  },
  plugins: [],
}
