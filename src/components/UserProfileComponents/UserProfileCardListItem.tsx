import { Box, Text, Link } from '../../ui-library';
import type { FC } from 'react';
import { IconType } from 'react-icons';

type IProps = {
  link: string;
  Icon: IconType;
  title: string;
  userColor: string;
};

const UserProfileCardListItem: FC<IProps> = ({
  link,
  Icon,
  title,
  userColor,
}) => {
  const shorter = (str: string) => {
    if (str.length >= 30) {
      return str.slice(0, 30) + '...';
    } else {
      return str;
    }
  };
  return (
    <Link
      linkButton="default"
      href={link}
      css={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#151515',
        borderRadius: '10px',
      }}
    >
      <Box
        css={{
          background: 'Black',
          height: '50px',
          width: '50px',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          alignItems: 'center',
        }}
      >
        <Icon style={{ height: '100%' }} size="35" color={userColor} />
      </Box>
      <Box
        stack="VStack"
        css={{ textAlign: 'start', marginLeft: '2.5%', marginTop: '0.5%' }}
      >
        <Text color="light">{shorter(title)}</Text>
        <Text size={5} color="grey">
          {shorter(link)}
        </Text>
      </Box>
    </Link>
  );
};

export default UserProfileCardListItem;
