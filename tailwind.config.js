/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    darkMode: 'selector',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    extend: {
      fontFamily: {
        zain: ['Zain', 'sans-serif'],
      },
      colors: {
        primary: '#fd3d84',
        secondary: '#fe6d88',
        green: '#0E8D62',
        'light-green': '#ACEECE',
        rose: '#F93A60',
        'light-rose': '#FDA4AF',
        black: 'rgb(40, 38, 45)',
        'black-75': 'rgba(40, 38, 45, 0.75)',
        'black-50': 'rgba(40, 38, 45, 0.5)',
        'black-25': 'rgba(40, 38, 45, 0.25)',
        'black-10': 'rgba(40, 38, 45, 0.1)',
        'black-5': 'rgba(40, 38, 45, 0.05)',
        'dark-gray': '#1A1D1F',
        white: '#FCFCFC',
      },
      backgroundColor: {
        light: '#F4F4F4',
        dark: '#111315',
      },
    },
  },
  plugins: [],
};
