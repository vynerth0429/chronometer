const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Red Hat Text'],
      serif: ['sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['18px', '26px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '36px'],
      '6xl': ['68px', '76px'],
    },
    extend: {
      colors: {
        'light': 'hsl(0, 0%, 100%)',
        'dark-blue': 'hsl(236, 21%, 26%)',
        'darker-blue': 'hsl(235, 16%, 14%)',
        'darkest-blue': 'hsl(234, 17%, 12%)',
        'grayish-blue': 'hsl(237, 18%, 59%)',
        'soft-red': 'hsl(345, 95%, 68%)',
      },
      container: {
        screens: {
          '2xl': "1280px",
        }
      },
      letterSpacing: {
        '2xl': '0.2em',
        '3xl': '0.3em',
        '4xl': '0.4em',
        '5xl': '0.5em'
      }
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
