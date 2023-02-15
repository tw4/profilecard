import type { FC, ReactNode } from 'react';
import { Box } from '../../ui-library';

type IProps = {
  children: ReactNode;
};

const CenterLayout: FC<IProps> = ({ children }) => {
  return (
    <Box
      stack="VStack"
      css={{
        backgroundColor: '#1D1A27',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default CenterLayout;
