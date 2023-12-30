import defaultTheme from 'tailwindcss/defaultTheme';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ['"Berkshire Swash"', ...defaultTheme.fontFamily.sans], // Or any other family you prefer
      },
      screens: {
        'sm' : '500px',
      }
    },
  },
  plugins: [],
}

