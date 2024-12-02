/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#070618',
        'seco': '#1B1762',
        'lght': '#4E4A95',
        'lghtest': '#a999fb'
      },

      backgroundImage : {
        'hero': "url('./src/assets/imgs/hero.png')",
        'below': "url('./src/assets/imgs/below.png')"
      }
    },
  },
  plugins: [],
}