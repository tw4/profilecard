import { Box, Text, Button } from '../ui-library';
import profileCard from '../assets/logos/profilecard.svg';
import { signOut } from 'firebase/auth';
import { useAppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/Firebase';
import { clearUserState } from '../features/user/UserSlice';
import UserNavbarItem from './UserNavbarItem';

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
        display: 'flex',
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
          width: '25%',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        <img src={profileCard} height="30px" alt="profilecard logo" />
        <Text
          color="light"
          size="4"
          css={{
            fontWeight: 'bold',
            '@media screen and (max-width: 768px)': {
              visibility: 'hidden',
            },
          }}
        >
          Profile Card
        </Text>
      </Box>
      <Box
        stack="HStack"
        css={{
          justifyContent: 'center',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        <UserNavbarItem to="/profile" title="Home" />
        <UserNavbarItem to="/theme" title="Theme" />
      </Box>
      <Button
        onClick={() => logout()}
        size="4"
        css={{
          width: '25%',
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
