import { Box, Text, Link } from '../ui-library';
import FooterItem from './FooterItem';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      stack="HStack"
      css={{
        alignItems: 'center',
        borderTop: '1px solid rgba(196, 196, 196, 0.1)',
        padding: '1%',
        justifyContent: 'space-around',
        '@media screen and (max-width: 768px)': {
          flexDirection: 'column',
          marginTop: '5%',
        },
      }}
    >
      <Box stack="VStack">
        <Text color="light" size="4" as="h4">
          Profile Card
        </Text>
        <Box
          stack="HStack"
          css={{
            justifyContent: 'center',
            marginTop: '2.5%',
          }}
        >
          <Link href="https://www.discord.profilecard.co/">
            <FaDiscord size="30px" color="white" />
          </Link>
          <Link href="https://twitter.com/theprofilecard">
            <FaTwitter size="30px" color="white" />
          </Link>
        </Box>
        <Box stack="HStack"></Box>
      </Box>
      <Box stack="VStack">
        <FooterItem
          href="https://www.discord.profilecard.co/"
          title="Help & Support"
        />
        <FooterItem
          href="https://www.discord.profilecard.co/"
          title="Feedback"
        />
      </Box>
      <Box stack="VStack">
        <FooterItem href="https://faq.profilecard.co/" title="FAQ" />
        <FooterItem href="https://privacy.profilecard.co/" title="Privacy" />
      </Box>
      <Box stack="VStack">
        <Text color="light">© Copyright 2023 Profilecard.co</Text>
        <Link href="https://mertsabinov.com/" color="light">
          Mert Sabinov
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
