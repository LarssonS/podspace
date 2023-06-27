/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['inter'],
      'ionb': ['ionb'],
    },
    colors: {
      'surf-new': {
        '900': '#000000',
        '800': '#060609',
        '700': '#0C0C0F',
        '600': '#101014',
        '500': '#17171C',
      },
      'surf': {
        '700': '#0B0B0F',
      },
      'comp': {
        'yellow': '#FFC020',
        'pink': '#FF668D',
        'purple': '#DD33FF'
      },
      'primary': {
        'txt': '#FDFDFF',
        'interaction': '#3333FF1A'
      },
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
