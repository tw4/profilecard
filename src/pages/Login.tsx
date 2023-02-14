import { Box } from '../ui-library';
import { auth, db } from '../services/Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { setUserState, UsersState } from '../features/user/UserSlice';
import { useEffect } from 'react';
import { UserLoginValidator } from '../utils/Validator/UserValidator';
import MetaTag from '../components/MetaTag';
import Navbar from '../components/LandingPage/Navbar';
import HeaderSide from '../components/LandingPage/HeaderSide';
import Features from '../components/LandingPage/Features';
import Produckt from '../components/LandingPage/Produckt';
import Footer from '../components/Footer';
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  setDoc,
} from 'firebase/firestore';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, '/profile');
  }, []);

  const login = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const token = await res.user.getIdToken();
    const user: UsersState = {
      uid: res.user.uid,
      displayName: res.user.displayName as string,
      email: res.user.email as string,
    };

    dispatch(setUserState(user));
    sessionStorage.setItem(
      'user',
      JSON.stringify({
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      })
    );

    const q = query(
      collection(db, 'users'),
      where('userID', '==', res.user.uid)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      await setDoc(doc(db, 'users', res.user.uid), {
        token: token,
        userID: res.user.uid,
        email: res.user.email,
        name: res.user.displayName,
        username: '',
        description: '',
        color: '',
        photoURL: res.user.photoURL,
        links: [
          { link: '', title: '' },
          { link: '', title: '' },
          { link: '', title: '' },
          { link: '', title: '' },
          { link: '', title: '' },
        ],
      });
    } else {
      const doc = querySnapshot.docs[0];
      await updateDoc(doc.ref, {
        token: token,
      });
    }

    sessionStorage.setItem('token', token);

    navigate('/profile');
  };

  return (
    <Box
      stack="VStack"
      css={{
        backgroundColor: '#1D1A27',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
      }}
    >
      <MetaTag
        title="Create and share Profile Card Free - ProfileCard.co"
        content="Customizable profiles & easy social media link sharing on ProfileCard. Stand out and boost online presence. Sign up now!"
      />
      <Box stack="VStack">
        <Navbar />
        <Box stack="VStack" css={{ marginTop: '10%' }}>
          <HeaderSide login={() => login()} />
          <Features />
          <Produckt />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
