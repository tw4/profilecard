import { screen, render } from "@testing-library/react";
import { Avatar } from "./Avatar";
import avatar from "../../assets/logos/avatar.png";

beforeAll(() => {
  render(<Avatar src={avatar} />);
});

test("<Avatar />", () => {
  const avatar = screen.getByRole("img");
  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveAttribute("src", "avatar.png");
});
