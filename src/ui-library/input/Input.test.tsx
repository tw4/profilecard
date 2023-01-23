import { screen, render } from "@testing-library/react";
import { Input } from "./Input";

beforeAll(() => {
  render(<Input value="test" />);
});

test("<Input />", () => {
  const input = screen.getByDisplayValue("test");
  expect(input).toBeInTheDocument();
});
