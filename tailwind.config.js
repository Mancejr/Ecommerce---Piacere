/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ramsons-pattern": "url('./src/assets/cover-image.jpg')",
      },
    },
  },
  plugins: [],
};
