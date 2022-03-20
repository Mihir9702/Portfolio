module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      fontFamily: {
        custom: ['Karam', 'cursive'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
