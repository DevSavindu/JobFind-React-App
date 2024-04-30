/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors:{
        'blueColor':'#135D66',
        'greyIsh':'#E3FEF7',
        'cardShadow':'#f7f8f9',
        'textColor':'#003C43',
      }
    },
  },
  plugins: [],
}

