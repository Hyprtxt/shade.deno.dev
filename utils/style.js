import { asset } from "$fresh/runtime.ts"
import { apply, css, theme } from "twind/css"

export const globalStyles = css({
  ":global": {
    a: {
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-green`,
    },
    ".markdown": {
      "a": {
        "@apply": "underline",
      },
      "ul, ol": {
        "li": {
          marginLeft: "1rem",
        },
        marginBottom: "1rem",
      },
      "ul li": {
        listStyle: "disc",
      },
      "ol li": {
        listStyle: "number",
      },
    },
    "p": {
      "@apply": `mb-3`,
    },
    body: {
      "&::before": {
        content: `""`,
        display: "block",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: -10,
        width: "100%",
        height: "100%",
        background: `url(${asset("/background.jpg")}) no-repeat center center`,
        backgroundSize: "cover",
      },
      backgroundColor: theme("colors.purple"),
    },
    ".header-wrapper": {
      marginTop: "1rem",
    },
  },
})

export const homeStyles = css({
  ":global": {
    ".logo": {
      background: `url(${asset("/hyprtxt_stack.png")}) no-repeat center center`,
      width: "300px",
      height: "304px",
      margin: "0 auto",
      backgroundSize: "cover",
    },
    ".landing-page": {
      background: "transparent",
      width: "100%",
      minHeight: "100vh",
      color: "white",
      textAlign: "center",
      position: "fixed",
      zIndex: -1,
      top: 0,
    },
    "section.header-wrapper": {
      marginTop: "94vh",
    },
  },
})
