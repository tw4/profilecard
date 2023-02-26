import { Box, Text } from '../ui-library';
import type { FC } from 'react';

type IProps = {
  title: string;
  content: string;
};

const Card: FC<IProps> = ({ content, title }) => {
  return (
    <Box css={{ padding: '2%' }}>
      <Box
        stack="VStack"
        css={{
          backgroundColor: '#1D1A27',
          borderRadius: '10px',
        }}
      >
        <Text size="2" color="light" css={{ marginTop: '2.5%' }}>
          {title}
        </Text>
        <Text color="grey" css={{ margin: '5%' }}>
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
