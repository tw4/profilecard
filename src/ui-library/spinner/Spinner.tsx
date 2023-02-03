import { keyframes, styled } from "@stitches/react";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Spinner = styled("div", {
  height: "10vh",
  width: "10vh",
  borderRadius: "50%",
  border: "5px solid black",
  borderTopColor: "LightGray",
  animation: `${spin} 3s infinite linear`,
});
