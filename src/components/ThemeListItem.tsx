import { Box, Button } from '../ui-library';
import type { FC, ReactNode } from 'react';

type IProps = {
  children: ReactNode;
  click: () => void;
};

const ThemeListItem: FC<IProps> = ({ children, click }) => {
  return (
    <Box
      stack="VStack"
      css={{
        width: 'fit-content',
        '@media screen and (max-width: 768px)': {
          width: '100%',
        },
      }}
    >
      {children}
      <Button
        size="4"
        color="purple"
        onClick={() => click()}
        css={{ marginTop: '5%', marginBottom: '5%' }}
      >
        Select
      </Button>
    </Box>
  );
};

export default ThemeListItem;
