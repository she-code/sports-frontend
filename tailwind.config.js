/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgRoot: " #f1f5f9",
        bgFav: "#c7d0e3",
      },
      boxShadow: {
        cardShadow: "0px 3px 20px #0000000b",
      },
    },
  },
  plugins: [],
};
