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
      }
    },
  },
  plugins: [],
}