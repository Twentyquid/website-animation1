/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        hs: "50vh",
        hw: "50vw",
      },
    },
  },
  plugins: [],
};
