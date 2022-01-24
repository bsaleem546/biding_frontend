module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        rarible: {
          900:'#121212',
          800:'#9D9D9D',
          100:'#F2F2F2'
        },
        neutral: {
          50:'#fafafa',
          100:'#f5f5f5',
          200:'#e5e5e5',
          300:'#d4d4d4',
          400:'#a3a3a3',
          500:'#737373',
          600:'#525252',
          700:'#404040',
          800: '#262626',
          900 : '#171717',
        },
      }
    },
  },
  variants: {
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {}
  },
  plugins: [],
}
