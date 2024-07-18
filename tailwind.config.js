/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PrincipalFont : [ "Roboto Slab", 'serif']
      },
      colors : {
        'primary-palet': {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#cfcfd2',
          '300': '#aeaeb2',
          '400': '#85868b',
          '500': '#6a6b70',
          '600': '#5b5b5f',
          '700': '#4d4d51',
          '800': '#444546',
          '900': '#3b3b3e',
          '950': '#2f2f31',
        },
      },
      backgroundImage:{'wall': "url('/wallpaper.jpeg')"}

    },
  },
  plugins: [],
}