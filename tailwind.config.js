/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        accent: "#06B6D4",
        dark: "#171A20",
        graphite: "#393C41",
        light: "#F8FAFC",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      transitionTimingFunction: {
        tesla: "cubic-bezier(0.5, 0, 0, 0.75)",
      },

      transitionDuration: {
        DEFAULT: "330ms",
      },
    },
  },
  plugins: [],
}
