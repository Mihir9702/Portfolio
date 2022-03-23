module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      fontFamily: {
        custom: ['Karam', 'cursive'],
      },
      Animation: {
        heading: 'heading 300ms ease 100ms forwards',
      },
      KeyframeEffect: {
        heading: {
          '0%': {
            opacity: '0',
            marginTop: '4rem',
          },
          '50%': {
            opacity: '50',
            marginTop: '2rem',
          },
          '100%': {
            opacity: '100',
            marginTop: '0',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
