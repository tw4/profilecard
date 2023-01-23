import { screen, render } from "@testing-library/react";
import { ImageIcon } from "./ImageIcon";
import google from "../../assets/logos/google.svg";

beforeAll(() => {
  render(<ImageIcon src={google} alt="test" />);
});

test("<ImageIcon />", () => {
  const imageIcon = screen.getByRole("img");
  expect(imageIcon).toBeInTheDocument();
  expect(imageIcon).toHaveAttribute("alt", "test");
  expect(imageIcon).toHaveAttribute("src", "google.svg");
});
