/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xxl' : '0px 14px 52px -14px rgba(0,0,0,0.75)'
      },
    },
  },
  plugins: [],
}