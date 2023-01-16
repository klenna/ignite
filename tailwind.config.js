/* eslint-disable no-undef */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        titillium: ['Titillium Web'],
      },
      colors: {
        ...colors,
        primary: '#00FFAA',
        secondary: '#409CFF',
      },
    },
  },
  plugins: [],
}