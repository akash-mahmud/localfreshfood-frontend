/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: "Arial",
        inter: "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
        "changa-one": "'Changa One'",
      },
    },
    colors: {
      gray: {
        100: "#f8f8f8",
        200: "#edebeb",
        300: "#666",
        400: "#576074",
        500: "#444444",
        600: "#434343",
        700: "#303233",
      },
      white: "#fff",
      green: "#34ad54",
      orange: "#ff9933",
      brown: "#d11f52",
      gold: "#a8b324",
    },
    fontSize: {
      xs: "10px",
      sm: "11px",
      base: "12px",
      lg: "13px",
      xl: "14px",
      "2xl": "16px",
      "3xl": "18px",
      "4xl": "24px",
      "5xl": "29px",
      "6xl": "36px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
      mq350small: { raw: "screen and (max-width: 350px)" },
      mq834: { raw: "screen and (max-width: 834px)" },
      mq600: { raw: "screen and (max-width: 600px)" },
    },
  },
  plugins: [],
};
