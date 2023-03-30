import { styled } from '@stitches/react';

export const Badge = styled('text', {
  color: '$purple',
  borderWidth: '1px',
  borderColor: '$purple',
  borderStyle: 'solid',
  borderRadius: '10px',
  paddingRight: '1%',
  paddingLeft: '1%',

  variants: {
    status: {
      staff: {
        color: '$blue',
        borderColor: '$blue',
      },
      standard: {},
    },
  },
});
