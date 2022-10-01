module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '9rem',
    },
    extend: {
      backgroundImage: {
        'back': "url('../public/back3.png')",
        'back1': "url('../public/dood.png')",
        'blueBack': "url('../public/back/blueBack.png')",
        'back6': "url('../public/back6.png')",
        'back7': "url('../public/back7.png')",
        'tech': "url('../public/back/02.png')",
        'deed': "url('../public/back/deed.png')",
        'dood': "url('../public/back/dood.png')",
        'what': "url('../public/back/what.png')",
        'footer': "url('../public/back/footer.png')",
        
      },
    },
   
  },
  plugins: [],
};
