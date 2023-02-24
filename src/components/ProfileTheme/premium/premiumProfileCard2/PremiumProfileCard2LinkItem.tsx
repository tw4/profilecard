import { Box, ImageIcon, Text, Link } from '../../../../ui-library';
import type { FC } from 'react';

type IProps = {
  link: string;
  iconUrl: string;
  title: string;
  userColor: string;
};

const PremiumProfileCard2LinkItem: FC<IProps> = ({
  link,
  iconUrl,
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
          background: userColor,
          height: '50px',
          width: '50px',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          alignItems: 'center',
        }}
      >
        <ImageIcon src={iconUrl} alt={title} height="50px" width="50px" />
      </Box>
      <Box stack="VStack" css={{ textAlign: 'start', marginLeft: '2.5%' }}>
        <Text color="light">{shorter(title)}</Text>
        <Text size={5} color="grey">
          {shorter(link)}
        </Text>
      </Box>
    </Link>
  );
};

export default PremiumProfileCard2LinkItem;
