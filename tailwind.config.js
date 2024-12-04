const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Uncomment only if using the `src` directory
    "./node_modules/@nextui-org/theme/dist/components/pagination.js",
  ],  
  theme: {
    extend: {
      colors: {
        'tone-1': 'rgb(252, 250, 248)',
        'tone-2': 'rgb(86, 40, 16)',
        'tone-3': 'rgb(107, 50, 20)',
        'gray-text' : 'rgb(134, 142, 150)'
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [nextui()],
};
