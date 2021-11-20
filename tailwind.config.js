const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/banner-prambanan.png')",
       },
       fontFamily: {
        'reguler': ['Poppins', ...fontFamily.sans], // call this font with font-myfont
        'medium': ['Poppins-Reguler', ...fontFamily.sans], // call this font with font-body
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
