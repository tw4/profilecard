import { Box } from '../../ui-library';
import type { FC, ReactNode } from 'react';
import type { CSS } from '@stitches/react';

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box
      stack="VStack"
      css={{
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
