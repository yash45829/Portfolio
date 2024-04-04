/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },

  },

  daisyui: {
    themes: ["cupcake", "dark", "night","valentine"],
  },
  plugins: [require("daisyui")],
}

