import { styled } from "@stitches/react";

export const ImageIcon = styled("img", {
  height: "20px",
  width: "20px",

  variants: {
    variant: {
      left: {
        marginLeft: "2%",
      },
      right: {
        marginRight: "2%",
      },
    },
  },
});
