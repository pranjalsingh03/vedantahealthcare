/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'shiva': '#92C7CF',
        'norm':'#AAD7D9',
        'advc':'#FBF9F1',
        'brew':'#E5E1DA',
      },
    },
    borderRadius:{
      lg:'4rem',
      sm:'2rem',
      md:'1rem'
    },
    fontSize:{
      xxl:'58px',
      xl:'38px',
      sm:'24px',
      md:'15px' 
    },
  },
  plugins: [],
}

