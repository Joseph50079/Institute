/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      pad: '1024px',
    },
    colors: {
      ivory: '#ffffe3',
      offwhite: '#f2f0ef',
      seashell: '#fff1e7',
      cream: '#fdfbd4',
      ghostwhite: '#f8f8ff',
      lightgrey: '#d3d3d3',
    },
    extend: {
      height: {
        '128': '32rem',  // Adjust to your desired size
        '144': '36rem',  // Adjust to your desired size
      },
      
    },
  },
  plugins: [],
});