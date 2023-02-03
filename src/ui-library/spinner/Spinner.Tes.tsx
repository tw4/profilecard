import { screen, render } from "@testing-library/react";
import { Spinner } from "./Spinner";

beforeAll(() => {
  render(<Spinner data-testid="spin" />);
});

test("<Spinner/>", () => {
  const link = screen.findAllByTestId("spin");
  expect(link).toBeInTheDocument();
});
