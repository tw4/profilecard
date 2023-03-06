import { screen, render } from '@testing-library/react';
import { TextArea } from './TextArea';

beforeAll(() => {
  render(<TextArea placeholder="test" />);
});

test('<TextArea />', () => {
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
});
