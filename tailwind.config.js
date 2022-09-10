/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        Dot16: ['DotGothic16', "sans-serif"],
        Quintessential: ['Quintessential', 'cursive'],
        Comforter: ['Comforter', 'cursive']
      }
    },
  },
  plugins: [],
}
