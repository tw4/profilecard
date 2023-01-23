import { screen, render } from "@testing-library/react";
import { Box } from "./Box";

beforeAll(() => {
  render(<Box>test</Box>);
});

test("<Box />", () => {
  const box = screen.getByText("test");
  expect(box).toBeInTheDocument();
});
