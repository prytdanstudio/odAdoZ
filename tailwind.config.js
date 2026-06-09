/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#111827",
        steel: "#334155",
        mist: "#f4f7fb",
        accent: "#2563eb",
        copper: "#c48a3a"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(17, 24, 39, 0.10)"
      }
    }
  },
  plugins: []
};
