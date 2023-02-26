import { Box, Text, Link } from '../ui-library';
import FooterItem from './FooterItem';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      stack="HStack"
      css={{
        backgroundColor: '#2c2936',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
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
    </Box>
  );
};

export default Footer;
