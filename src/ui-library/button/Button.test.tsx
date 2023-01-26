import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("<Button />", () => {
  render(<Button>test</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("test");
});
