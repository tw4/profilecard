import { globalCss } from '../ui-library/stitches.config';

const globalStyles = globalCss({
  '@import': [
    'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '::-webkit-scrollbar': {
      width: '0.4em',
      backgroundColor: '$bgColor',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(to top, $pink, $purple)',
      borderRadius: '0.4em',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  },
  body: { fontFamily: 'Open Sans, sans-serif', backgroundColor: '$bgColor' },
});

export default globalStyles;
