/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          500: "#FF6B6B", // Adjust this hex code to match your design
        },
        navy: {
          900: "#1E2A3B", // Adjust this hex code to match your design
        },
      },
    },
  },
  plugins: [],
};
