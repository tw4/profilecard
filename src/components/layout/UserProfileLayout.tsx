import { Box } from '../../ui-library';
import type { FC, ReactNode } from 'react';

type IProps = {
  children: ReactNode;
};

const UserProfileLayout: FC<IProps> = ({ children }) => {
  return (
    <Box
      stack="VStack"
      css={{ alignItems: 'center', backgroundColor: 'White', height: '100vh' }}
    >
      {children}
    </Box>
  );
};

export default UserProfileLayout;
