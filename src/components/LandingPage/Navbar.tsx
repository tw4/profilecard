import { Box, Text } from '../../ui-library';
import profileCard from '../assets/logos/profilecard.svg';

const Navbar = () => {
  return (
    <Box
      stack="HStack"
      css={{
        alignItems: 'center',
        height: '5vh',
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
  );
};

export default Navbar;
