import { styled } from "@stitches/react";

export const Text = styled("p", {
  variants: {
    validator: {
      error: {
        color: "Red",
      },
    },
    color: {
      light: {
        color: "White",
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
      "5": {
        fontSize: "small",
      },
      "6": {
        fontSize: "x-small",
      },
      "7": {
        fontSize: "xx-small",
      },
    },
  },
});
