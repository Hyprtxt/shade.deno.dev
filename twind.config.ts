import { apply } from "twind"
import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;700&family=Raleway&display=swap')`,
    body: apply`bg-gray-900`,
    // h1: apply`text(gray-800 uppercase)`, // Grouping syntax
    a: apply`text-indigo text-underline visited:text-violet hover:text-blue`,
    "h1, h2, h3": {
      "@apply": `mb-3 font-heading`,
      a: {
        "@apply": `text-dark`,
        "&:visited": apply`text-dark`,
      },
    },
    h1: {
      "@apply": `text-4xl`,
    },
    h2: {
      "@apply": `text-2xl`,
    },
    h3: {
      "@apply": `text-xl`,
    },
  },
  theme: {
    extend: {
      boxShadow: {
        "red": "0 35px 60px -15px rgba(210,81,153, 1)",
      },
    },
    fontFamily: {
      "heading": ['"Libre Bodoni"', "serif"],
      "body": ['"Raleway"', "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      purple: "#271f3f",
      green: "#59a188",
      blue: "rgb(0,190,211)",
      indigo: "rgb(0,153,212)",
      violet: "rgb(108, 73, 136)",
      red: "rgb(210,81,153)",
      orange: "rgb(249,108,98)",
      yellow: "rgb(254,245,121)",
      dark: "rgb(15,15,15)",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
    },
  },
} as Options
