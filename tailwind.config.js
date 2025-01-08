/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'abuabu': '#D9DFDF',
        'dark' : '#222323',
        'merah' :'#cc0202'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'anton' : ['anton', 'serif']
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}