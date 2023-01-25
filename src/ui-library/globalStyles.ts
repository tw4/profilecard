import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
  ],
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    "::-webkit-scrollbar": {
      width: "0.4em",
      backgroundColor: "#1D1A27",
    },
    "::-webkit-scrollbar-thumb": {
      background: "linear-gradient(to top, #CE4DA4, #7353E5)",
      borderRadius: "0.4em",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  },
  body: { fontFamily: "Open Sans, sans-serif" },
});

export default globalStyles;
