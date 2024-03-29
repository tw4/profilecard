import { styled } from '../stitches.config';

export const Link = styled('a', {
  variants: {
    linkButton: {
      costomUser: {
        display: 'block',
        width: '200px',
        padding: '2%',
        textDecoration: 'none',
      },
      default: {
        textDecoration: 'none',
      },
    },

    color: {
      light: {
        color: '$darkWhite',
        textDecoration: 'none',
        '&:hover': {
          color: 'White',
        },
      },
      blue: {
        color: 'LightBlue',
      },
    },
    size: {
      '1': {
        fontSize: 'xxx-large',
      },
      '2': {
        fontSize: 'xx-large',
      },
      '3': {
        fontSize: 'x-large',
      },
      '4': {
        fontSize: 'large',
      },
    },
  },
});
