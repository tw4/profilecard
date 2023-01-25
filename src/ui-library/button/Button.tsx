import { styled } from "@stitches/react";

export const Button = styled("button", {
  borderWidth: "2px",
  borderColor: "#302C3F",
  borderStyle: "solid",
  color: "White",
  backgroundColor: "#302C3F",
  borderRadius: "50px",
  cursor: "pointer",
  padding: "1.5%",

  variants: {
    variant: {
      gradient: {
        width: "100%",
        backgroundColor: "#1D1A27",
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
