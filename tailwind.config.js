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
          DEFAULT: '#1E40AF', // Default blue color
          dark: '#1E3A8A', // Dark blue color
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
