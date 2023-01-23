import { screen, render } from "@testing-library/react";
import { Link } from "./Link";

beforeAll(() => {
  render(<Link href="testLink">test</Link>);
});

test("<Link/>", () => {
  const link = screen.getByText("test");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "testLink");
});
