import { styled } from "@stitches/react";

export const Button = styled("button", {
  border: "none",
  color: "Black",
  padding: "1%",
  borderRadius: "8px",
  cursor: "pointer",

  variants: {
    variant: {
      google: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "large",
        color: "Black",
        backgroundColor: "White",
        boxShadow: "0px 8px 20px rgba(96, 28, 238, 0.5)",
        "&:hover": {
          backgroundColor: "GhostWhite",
        },
      },
      twitter: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "large",
        color: "White",
        backgroundColor: "#1E8EEE",
        boxShadow: "0px 8px 20px rgba(96, 28, 238, 0.5)",
        "&:hover": {
          backgroundColor: "#187DD3",
        },
      },
      facebook: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "large",
        color: "White",
        backgroundColor: "#1877F2",
        boxShadow: "0px 8px 20px rgba(96, 28, 238, 0.5)",
        "&:hover": {
          backgroundColor: "#126BDF",
        },
      },
      apple: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "large",
        color: "White",
        backgroundColor: "Black",
        boxShadow: "0px 8px 20px rgba(96, 28, 238, 0.5)",
        "&:hover": {
          backgroundColor: "#212121",
        },
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
