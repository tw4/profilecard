import { Box, Text, Link } from '../../ui-library';
import profileCard from '../../assets/logos/profilecard.svg';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <Box
      stack="VStack"
      css={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        stack="HStack"
        css={{
          alignItems: 'center',
          justifyContent: 'center',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        <img src={profileCard} height="30px" alt="profilecard logo" />
        <Text color="light" size="4" css={{ fontWeight: 'bold' }}>
          Profile Card
        </Text>
      </Box>
      <Box
        stack="HStack"
        css={{
          width: '25%',
          justifyContent: 'space-around',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'row',
            width: '100%',
          },
        }}
      >
        <NavbarItem href="/" content="Home" />
        <NavbarItem href="/about" content="About" />
        <NavbarItem href="https://faq.profilecard.co/" content="FAQ" />
      </Box>
    </Box>
  );
};

export default Navbar;
