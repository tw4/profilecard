import { styled } from '../stitches.config';
import { Box } from '../index';
import type { FC } from 'react';

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

  '&:hover': {
    backgroundColor: '$darkGrey',
  },

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

        '&:hover': {
          backgroundColor: 'Gray',
          cursor: 'default',
        },
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

// GradientButton IProps
type GradientButtonProps = {
  onClik: () => void;
  content: string;
  size: number;
};

export const GradientButton: FC<GradientButtonProps> = ({
  onClik,
  content,
  size,
}) => {
  return (
    <Box
      css={{
        width: '25%',
        marginTop: '5%',
        padding: '2px',
        background: 'linear-gradient(to right, #CE4DA4, #7353E5)',
        borderRadius: '50px',
        '@media screen and (max-width: 768px)': {
          width: '90%',
        },
      }}
    >
      <Button
        variant="gradient"
        onClick={() => onClik()}
        size={size}
        css={{
          width: '100%',
        }}
      >
        {content}
      </Button>
    </Box>
  );
};
