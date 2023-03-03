import { screen, render } from '@testing-library/react';
import { Input } from './Input';

beforeAll(() => {
  render(<Input placeholder="test" />);
});

test('<Input />', () => {
  const input = screen.getByPlaceholderText('test');
  expect(input).toBeInTheDocument();
});
