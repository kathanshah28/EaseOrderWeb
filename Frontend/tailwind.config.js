/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports=  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'auto-fill': 'repeat(auto-fill, minmax(240px, 1fr))'
      },
      keyframes: {
        fadeIn: {
          '0%' : { opacity : 0 },
          '100%': { opacity : 1 },
        },
        fadeIn1s : {
          '0%' : { opacity : 0 },
          '100%': { opacity : 1 },
        },
        rotate : {
          '100%' : { transform : 'rotate(360deg)'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
        fadeIn1s : 'fadeIn 1s ease-in-out',
        rotate : 'rotate 3s infinite'
      }
    },
    
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar" : {
          display : "none",
        }
      }
      addUtilities(newUtilities)
    }
  ],
})
