/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",//  file ended by them is watched by tailwind 
  ],
  theme : {
    extend : {} ,
  },
  plugins : [] ,
}

