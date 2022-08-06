/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'Dark-Blue': 'hsl(209, 23%, 22%)',
        'Very-Dark-Blue2': 'hsl(207, 26%, 17%)',
        'Very-Dark-Blue1': 'hsl(200, 15%, 8%)',
        'Dark-Gray': 'hsl(0, 0%, 52%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
