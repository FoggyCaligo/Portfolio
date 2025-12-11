/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#155DFC" },
        yellow: { DEFAULT: "#F5FF42" },
        whitecustom: { DEFAULT: "#FFFFFF" },
      },
    },
  },
  plugins: [],
}
