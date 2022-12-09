/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00E77F',
        primary: '#3d3d3d',
        secondary: '#4b4b4b',
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(27rem, 1fr))',
      },
    },
  },
  plugins: [],
};
