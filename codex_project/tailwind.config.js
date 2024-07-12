const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '360px',  // small devices
        'md': '768px',  // Medium screens
        'lg': '1024px', // Large screens (iPads)
      },
    },
  },
  plugins: [],
});