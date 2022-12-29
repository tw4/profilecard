import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
  ],
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: { fontFamily: "Open Sans, sans-serif" },
});

export default globalStyles;
