/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Nunito", 'san-serif'],
        'header': ["Coda", 'san-serif'],
      },
      backgroundColor: {
        'zinc-900': '#040F1A',
        'zinc-800': '#071422',
        'zinc-700': '#0B1B2B',
        'zinc-600': '#112131',
        'zinc-500': '#1C2F41',
        'zinc-400': '#3A536B',
        'zinc-300': '#7B96B2',
        'zinc-200': '#AFC2D4',
        'zinc-100': '#C4D4E3',
        'zinc-50': '#E7EDF4',

        'blue-500': '#3294F8',
        'blue-700': '#0879ed'
      },
      colors: {
        'zinc-900': '#040F1A',
        'zinc-800': '#071422',
        'zinc-700': '#0B1B2B',
        'zinc-600': '#112131',
        'zinc-500': '#1C2F41',
        'zinc-400': '#3A536B',
        'zinc-300': '#7B96B2',
        'zinc-200': '#AFC2D4',
        'zinc-100': '#C4D4E3',
        'zinc-50': '#E7EDF4',

        'blue-500': '#3294F8',
        'blue-700': '#0879ed'
      },
      backgroundImage: {
        header: 'url(/background.png)'
      },
      boxShadow: {
        'box': '0px 2px 28px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
