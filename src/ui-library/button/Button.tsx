import { styled } from '../stitches.config';

export const Button = styled('button', {
  width: '100%',
  borderWidth: '2px',
  borderColor: '$grey',
  borderStyle: 'solid',
  color: 'White',
  backgroundColor: '$grey',
  borderRadius: '50px',
  cursor: 'pointer',
  padding: '1.5%',

  variants: {
    variant: {
      gradient: {
        backgroundColor: '$bgColor',
      },
      delete: {
        color: '$red',
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
        color: '$purple',
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
