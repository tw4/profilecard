import { Box } from '../../ui-library';
import type { FC, ReactNode } from 'react';
import Navbar from '../navbar/Navbar';

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
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
