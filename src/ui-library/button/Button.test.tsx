import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("<Button />", () => {
  render(<Button variant="facebook">test</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("test");
});
