/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D2691E',
          light: '#E67E22',
          dark: '#A0522D',
        },
        secondary: {
          DEFAULT: '#F3E5AB',
          light: '#FFF8DC',
          dark: '#DEB887',
        },
        accent: {
          DEFAULT: '#E63946',
          light: '#FF4D5A',
          dark: '#C62828',
        },
      },
    },
  },
  plugins: [],
};