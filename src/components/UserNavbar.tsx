import { Box, Text, Button } from '../ui-library';
import profileCard from '../assets/logos/profilecard.svg';
import { signOut } from 'firebase/auth';
import { useAppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/Firebase';
import { clearUserState } from '../features/user/UserSlice';

const UserNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate('/');
    sessionStorage.removeItem('user');
  };
  return (
    <Box
      stack="HStack"
      css={{
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 768px)': {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        stack="HStack"
        css={{
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
      <Button
        onClick={() => logout()}
        size="4"
        css={{
          width: '10%',
          padding: '0.5%',
          '@media screen and (max-width: 768px)': {
            width: '50%',
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserNavbar;
