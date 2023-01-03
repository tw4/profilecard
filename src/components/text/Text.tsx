import { styled } from "@stitches/react";

export const Text = styled("p", {
  variants: {
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
    },
  },
});
