/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins : ['var(--font-poppins)'],
      },
      colors: {
        primary: '#F9BF3B',
        darkbrown : '#2F2100',
        secondaryBrown : '#491404',
        secondaryGray : '#323A45',
        base : '#FDFAF6'
      }
    },
  },
  plugins: [],
}
