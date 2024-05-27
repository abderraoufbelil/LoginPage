/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#b3c6c9',
        'gradient-middle': '#b0b0c8',
        'gradient-end': '#85859c',
      },
    },
  },
  plugins: [],
}