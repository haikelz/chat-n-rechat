module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
  plugins: [require("tailwind-scrollbar")],
};
