import { screen, render } from '@testing-library/react';
import { Spinner } from './Spinner';

beforeAll(() => {
  render(<Spinner data-testid="spin" />);
});

test('<Spinner/>', async () => {
  const spin = await screen.findByTestId('spin');
  expect(spin).toBeInTheDocument();
});
