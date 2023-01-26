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
        color: "white",
      },
      grey: {
        color: "Grey",
      },
      reinbow: {
        background: "linear-gradient(to right, #CE4DA4, #7353E5)",
        backgroundClip: "text",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        color: "transparent",
        " -moz-background-clip": "text",
        " -moz-text-fill-color": "transparent",
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
