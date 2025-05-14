/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        left_line_grow: {
          '0%': { height: '0%' },
          '50%': { height: '100%' },
          '100%': { height: '0%' },
        },
        slowspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        left_line_grow: 'left_line_grow 5s ease-in-out infinite',
        slowspin: 'slowspin 5s linear infinite',
      },
    },
  },
  plugins: [],
};
