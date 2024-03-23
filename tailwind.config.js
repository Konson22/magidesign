/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#7936e5',
        secondary:'#ff2e63',
       graybg:'rgb(205, 213,226)'
      }
    },
  },
  plugins: [],
}
