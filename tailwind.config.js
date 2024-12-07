/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      container: {
       
        center: true,

        screens: {
          sm: '600px',
          md: '728px',
          lg: '1320px',
         
          
        },
        
      },

      colors: {
        primary: '#121212',
        secondary: '#212121',
        ternery:"#191919",
        whiteColor:'#DDDDDD',
        tomato: '#FF4655',
        lightGray:'#666666',
         
      },

      fontFamily: {
        'oswald': ["Oswald", "sans-serif"],
        'barlow': ["Barlow Condensed", "sans-serif"],
         
      },

      backgroundImage: {
        bannerImg: "url('./src/assets/banner.png')",
         
      },




    },
  },
  plugins: [],
}

