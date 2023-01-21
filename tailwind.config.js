module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
        sanspro: ["Source Sans Pro, sans-serif"],
        dmsans: ["DM Sans, sans-serif"],
      },
      dropShadow: {
        primary: "0px 30px 60px 0px rgba(74,114,255,0.25)",
      },
      colors: {
        primary: "#4A72FF",
        aliceblue: "#EEF2FF",
        dark: "#0C1B4D",
        spacing: "#FFD39F",
      },
      screens: {
        phone: "411px",
      },
    },
  },
  plugins: [],
};
