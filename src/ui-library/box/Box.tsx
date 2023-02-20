import { styled } from '@stitches/react';

export const Box = styled('div', {
  variants: {
    stack: {
      VStack: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },
      HStack: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 768px)': {
          flexDirection: 'column',
        },
      },
      Grid: {
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
});
