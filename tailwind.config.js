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
        "60": "#ffffff",
        "30": "#000000",
        "03": "#2a2a2a",
        "10": "#4bacea",
        "01": "#3b82f6"
      },
      width: {
        "51/100": "51%",
        "48/100": "48%"
      }
    },
  },
  plugins: [],
}

