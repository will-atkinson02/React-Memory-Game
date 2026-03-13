/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addVariant }) {
      addVariant('portrait', '@media (orientation: portrait)');
      addVariant('landscape', '@media (orientation: landscape)');
    }
  ],
}
