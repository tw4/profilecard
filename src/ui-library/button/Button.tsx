import { styled } from '@stitches/react';

export const Button = styled('button', {
  width: '100%',
  borderWidth: '2px',
  borderColor: '#302C3F',
  borderStyle: 'solid',
  color: 'White',
  backgroundColor: '#302C3F',
  borderRadius: '50px',
  cursor: 'pointer',
  padding: '1.5%',

  variants: {
    variant: {
      gradient: {
        backgroundColor: '#13111A',
      },
      delete: {
        color: '#F67280',
      },
      blue: {
        color: 'White',
        backgroundColor: 'rgb(87, 106, 234)',
        borderRadius: '8px',
        border: 'none',
        '&:hover': {
          backgroundColor: 'rgb(71, 86, 189)',
        },
      },
      disable: {
        color: 'WhiteSmoke',
        backgroundColor: 'Gray',
        borderRadius: '8px',
        border: 'none',
      },
    },
    color: {
      purple: {
        color: '#7353E5',
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
