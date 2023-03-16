import { Box, Text, Button } from '../../ui-library';
import profileCard from '../assets/logos/profilecard.svg';
import { signOut } from 'firebase/auth';
import { useAppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/Firebase';
import { clearUserState } from '../../features/user/UserSlice';
import NavbarItem from './NavbarItem';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user') || '');
      if (user !== '') {
        setLogin(true);
      } else {
        setLogin(false);
      }
    } catch (error) {
      setLogin(false);
    }
  };

  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate('/');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };
  return (
    <Box
      stack="HStack"
      css={{
        height: '5vh',
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
          alignItems: 'center',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'row',
            width: '10%',
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
          alignItems: 'center',
          justifyContent: 'space-evenly',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        {/* <UserNavbarItem to="/profile" title="Home" />
        <UserNavbarItem to="/theme" title="Theme" /> */}
        {login ? null : <NavbarItem href="/" content="Home" />}
        {login ? <NavbarItem href="/profile" content="Profile" /> : null}
        <NavbarItem href="/about" content="About" />
        <NavbarItem href="https://faq.profilecard.co/" content="FAQ" />
      </Box>
      <Box css={{ width: '25%' }}>
        {login ? (
          <Button
            onClick={() => logout()}
            size="4"
            css={{
              padding: '1%',
              '@media screen and (max-width: 768px)': {
                width: '100%',
                borderRadius: '8px',
              },
            }}
          >
            Logout
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
