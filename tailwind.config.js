/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // Light blue color
          DEFAULT: '#0A66C2', // Default  blue
          dark: '#004182', // Dark blue color
        },
        background: {
          DEFAULT: '#F3F2EF', // Light grey background
          dark: '#FFFFFF', // White for sections
        },
        text: {
          DEFAULT: '#1D1D1D', // Dark text
          light: '#666666', // Light grey text
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
