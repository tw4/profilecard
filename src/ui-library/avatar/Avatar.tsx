import { styled } from "@stitches/react";

export const Avatar = styled("img", {
  height: "30px",
  width: "30px",
  borderRadius: "100%",
  filter: "drop-shadow(0px 8px 18px rgba(96, 28, 238, 1));",

  variants: {
    variant: {
      profileCard: {
        height: "100px",
        width: "100px",
        marginTop: "5%",
        filter: "none",
        borderWidth: "2px",
        borderStyle: "solid",
      },
    },
  },
});
