/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
      },
      maxWidth: {
        '8xl': '88rem'
      },
      spacing: {
        '104': '26rem',
        '112': '28rem',
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      dolar: 'dolar',
    }
  },
  plugins: [
  ],
}

