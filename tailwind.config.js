/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      mainBgColor:'#191919',
    },
    fontFamily: {
      'orbitron': ['Orbitron']
      
    },
  },
  plugins: [],
}

