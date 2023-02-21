import { Box, Text, Link } from '../ui-library';

const UserProfileFooter = () => {
  return (
    <Box
      stack="HStack"
      css={{
        height: '5vh',
        backgroundColor: '#000000',
        padding: '1%',
        justifyContent: 'center',
        '@media screen and (max-width: 768px)': {
          flexDirection: 'row',
          marginTop: '5%',
        },
      }}
    >
      <Text color="light">create your own page :</Text>
      <Link color="light" href="http://www.profilecard.co/">
        profilecard.co
      </Link>
    </Box>
  );
};

export default UserProfileFooter;
