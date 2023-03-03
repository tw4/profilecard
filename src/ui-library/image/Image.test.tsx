import { screen, render } from '@testing-library/react';
import { Image } from './Image';
import google from '../../assets/logos/google.svg';

beforeAll(() => {
  render(<Image src={google} />);
});

test('<Image />', () => {
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', google);
});
