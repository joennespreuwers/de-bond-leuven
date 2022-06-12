/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        veryBlack: '#000000',
      },
    },
  },
  plugins: [],
}
