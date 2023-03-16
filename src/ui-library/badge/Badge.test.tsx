import { screen, render } from '@testing-library/react';
import { Badge } from './Badge';

beforeAll(() => {
  render(<Badge>test</Badge>);
});

test('<Badge />', () => {
  const badge = screen.getByText('test');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveTextContent('test');
});
