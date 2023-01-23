import { screen, render, getByRole } from "@testing-library/react";
import { Text } from "./Text";

beforeAll(() => {
  render(<Text>test</Text>);
});

test("<Text />", () => {
  const text = screen.getByText("test");
  expect(text).toBeInTheDocument();
});
