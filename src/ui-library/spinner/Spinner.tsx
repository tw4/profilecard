import { keyframes, styled } from '@stitches/react';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const Spinner = styled('div', {
  height: '10vh',
  width: '10vh',
  border: '5px solid transparent',
  borderImage: 'linear-gradient(to right, $pink, $purple)1',
  animation: `${spin} 3s infinite linear`,
});
