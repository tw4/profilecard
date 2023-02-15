import { Link } from 'react-router-dom';
import { Box, Text } from '../ui-library';
import type { FC } from 'react';

type IProps = {
  title: string;
  to: string;
};

const UserNavbarItem: FC<IProps> = ({ title, to }) => {
  return (
    <Box css={{ marginLeft: '2%', marginRight: '2%' }}>
      <Link to={to} style={{ textDecoration: 'none' }}>
        <Text color="light">{title}</Text>
      </Link>
    </Box>
  );
};

export default UserNavbarItem;
