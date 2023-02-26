import { User } from 'firebase/auth';
import Layout from '../components/layout/Layout';
import UserNavbar from '../components/Navbar';
import { Box } from '../ui-library';
import { useState, useEffect } from 'react';
import { UserLoginValidator } from '../utils/Validator/UserValidator';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../services/Firebase';
import type { Links, UserCard } from '../types';
import ThemeListItem from '../components/ThemeListItem';
import Loading from '../components/Loading';
import DefaultProfile from '../components/ProfileTheme/free/DefaultProfile';
import PremiumProfileCard1 from '../components/ProfileTheme/premium/PremiumProfileCard1';

const Theme = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [userTheme, setUserTheme] = useState<string>('');
  const [token, setToken] = useState<string>(sessionStorage.getItem('token')!);
  const [user, setUser] = useState<UserCard>();
  const [loading, setLoading] = useState<boolean>(false);
  const [links, setLinks] = useState<Links[]>([]);

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, '/theme');
    setUser(getUser());
  }, []);

  const getUser = () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user') || '');
      if (user !== '') {
        getUserFromDB(user);
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  // get user info from firebase firestore
  const getUserFromDB = async (user: User) => {
    setLoading(true);
    const q = query(
      collection(db, 'users'),
      where('userID', '==', user.uid),
      where('token', '==', token)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      setUser(doc.data() as UserCard);
      setUsername(doc.data().username);
      setUserTheme(doc.data().theme);
      setLinks(doc.data().links);
      setUserTheme(doc.data().theme);
    }
    setLoading(false);
  };

  const updateTheme = async (cardName: string) => {
    const q = query(
      collection(db, 'users'),
      where('userID', '==', user?.userID),
      where('token', '==', token)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      updateDoc(doc.ref, { theme: cardName });
    }
    alert('Your theme has been changed');
  };

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      <UserNavbar />
      <Box stack="Grid">
        <ThemeListItem click={() => updateTheme('DefaultProfile')}>
          <DefaultProfile linkList={links} userDeteil={user as UserCard} />
        </ThemeListItem>
        <ThemeListItem click={() => updateTheme('PremiumProfileCard1')}>
          <PremiumProfileCard1 linkList={links} userDeteil={user as UserCard} />
        </ThemeListItem>
      </Box>
    </Layout>
  );
};

export default Theme;
