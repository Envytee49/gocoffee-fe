/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tone-1': 'rgb(252, 250, 248)',
        'tone-2': 'rgb(86, 40, 16)',
        'tone-3': 'rgb(107, 50, 20)',
        'gray-text' : 'rgb(134, 142, 150)'
      },
    },
  },
  plugins: [],
};
