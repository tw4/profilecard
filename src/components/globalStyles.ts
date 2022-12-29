import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
  ],
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: { fontFamily: "Roboto, sans-serif" },
});

export default globalStyles;
