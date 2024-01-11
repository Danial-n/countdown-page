/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ex. ->'dark-blue': 'hsl(243, 87%, 12%)',
        'grayish-blue': 'hsl(237, 18%, 59%)',
        'soft-red': 'hsl(345, 95%, 68%)',
        white: 'hsl(0, 0%, 100%)',
        'desaturated-blue': 'hsl(236, 21%, 26%)',
        'very-dark-blue': 'hsl(235, 16%, 14%)',
        'mostly-black': 'hsl(234, 17%, 12%)',
        transparent: 'transparent',
      },
      fontFamily: {
        // ex. -> raleway: ['Raleway'],
        redhat: ['Red Hat Text'],
      },
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite forwards',
      },
      keyframes: {
        flip: {
          from: { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ' },
          to: { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ' },
        },
      },
    },
  },
  plugins: [],
};
