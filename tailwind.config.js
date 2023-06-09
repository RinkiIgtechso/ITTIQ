/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FD4A36",
        secondary:{
          100: '#292B2C',
          200: '#888883',
          300:'#F8F8F8',
          400:'#1F242E'
        },
        danger:{
          100:'#fff8f4'
        }
      },
      width:{
        'full':'100%',
        '75':"57%",
        '2/5':"48%"
      },
      spacing: {
        '72': '36rem'
      },
      fontFamily:{
        nunito:['Nunito']
      },
      backgroundImage:{
        'hero':"url('/Images/logo.svg')"
      },
      backgroundSize:{
        'ellipse1':'400px'
      }
    },
  },
  plugins: [],
}
