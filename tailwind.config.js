/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', // Scan all HTML files in public/
    './src/**/*.{js,jsx,ts,tsx}', // Include JS/TS files if you use them
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};