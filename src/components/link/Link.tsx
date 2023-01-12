import { styled } from "@stitches/react";

export const Link = styled("a", {
  variants: {
    color: {
      light: {
        color: "White",
      },
      blue: {
        color: "LightBlue",
      },
    },
    size: {
      "1": {
        fontSize: "xxx-large",
      },
      "2": {
        fontSize: "xx-large",
      },
      "3": {
        fontSize: "x-large",
      },
      "4": {
        fontSize: "large",
      },
    },
  },
});
