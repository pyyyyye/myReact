module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["36px", "40px"],
    },
    extend: {
      fontFamily: {
        Rampart: ["Roboto", "sans-serif"],
      },
      colors: {
        "greenlabs-green": "#83C772",
        black: "#444444",
      },
    },
  },
  plugins: [],
};
