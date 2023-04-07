import { Box, GradientButton, Text } from '../../ui-library';
import type { FC } from 'react';

type IProps = {
  login: () => void;
};

const HeaderSide: FC<IProps> = ({ login }) => {
  return (
    <Box stack="VStack" css={{ alignItems: 'center' }}>
      <Text
        as="h1"
        color="light"
        size="1"
        css={{ textAlign: 'center', display: 'block', fontWeight: 'bold' }}
      >
        Profile Card
      </Text>
      <Text
        as="h2"
        color="reinbow"
        size="1"
        css={{ textAlign: 'center', display: 'block', fontWeight: 'bold' }}
      >
        All links from one link
      </Text>
      <Text
        as="h3"
        color="grey"
        size="4"
        css={{
          width: '50%',
          '@media screen and (max-width: 768px)': {
            width: '90%',
          },
        }}
      >
        Welcome to ProfileCard! We are a web application that allows users to
        create their own personal profile pages and share links such as social
        media accounts on these pages. Easily share your social media accounts,
        email address, or blog on your profile page. Customize your profile page
        and share it with friends, business partners, or potential employers.
        ProfileCard is a great tool for creating and sharing your personal
        brand. Sign up now and create your own profile page!
      </Text>
      <GradientButton content="Sign in with your free Google account" onClik={login} size={3} />
    </Box>
  );
};

export default HeaderSide;
