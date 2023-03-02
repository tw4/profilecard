import { Avatar, Box, Button, Text, Input, Link } from '../ui-library';
import { signOut, User } from 'firebase/auth';
import { auth, db } from '../services/Firebase';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { clearUserState } from '../features/user/UserSlice';
import React, { useEffect, useState } from 'react';
import { UserLoginValidator } from '../utils/Validator/UserValidator';
import avatar from '../assets/logos/avatar.png';
import { Links } from '../types';
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { SketchPicker } from 'react-color';
import LinkInput from '../components/LinkInput';
import Footer from '../components/Footer';
import CenterLayout from '../components/layout/CenterLayout';
import Loading from '../components/Loading';
import GradientButton from '../components/GradientButton';
import { BsFillTrashFill } from 'react-icons/bs';
import Navbar from '../components/Navbar';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<User>();
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [color, setColor] = useState<string>('#2596be');
  const [token, setToken] = useState<string>(sessionStorage.getItem('token')!);
  const [links, setLinks] = useState<Links[]>([]);
  const [publicEmail, setPublicEmail] = useState<string>('');

  const [validatorError, setValidatorError] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, '/profile');
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

  // if user ID and token equal
  // from DB to user ID and token
  // get user info and add to user state
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
      setUsername(doc.data().username);
      setName(doc.data().name);
      setDescription(doc.data().description);
      setColor(doc.data().color);
      setLinks(doc.data().links);
      setPublicEmail(doc.data().publicEmail || '');
    }
    setLoading(false);
  };

  // Here logout function for Firebase,
  // Redux and sessionstorage made
  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate('/');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };

  // username check if username is not exist,
  // and add to user state else show alert
  // message and clear user state
  const usernameValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      alert('username must be maximum length 20');
      await setUsername('');
    }

    e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    await setUsername(e.target.value);
    const q = query(
      collection(db, 'users'),
      where('username', '==', e.target.value)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      if (
        doc.data().username === e.target.value &&
        doc.data().userID !== user?.uid
      ) {
        alert('Username already exists');
        setUsername('');
      } else {
        setUsername(e.target.value);
      }
    });
  };

  // Check the link if it is missing
  // it will add https and check it is correct
  const checkLinkFormat = (val: Links) => {
    setValidatorError([]);
    const errorList: string[] = [];
    const regex = /^(https?:\/\/)/;

    if (val.link.includes('.')) {
      if (!regex.test(val.link)) {
        val.link = 'http://' + val.link;
      }
      if (!regex.test(val.link)) {
        errorList.push(val.link);
      }
    } else {
      errorList.push('please enter a link.');
    }

    setValidatorError(errorList);
    return val;
  };

  // add to link
  const addToLink = () => {
    if (links.length <= 4) {
      const tmp = [...links, { link: '', title: '' } as Links];
      setLinks(tmp);
    }
  };

  const deleteLink = (idx: number) => {
    const tmp = links.filter((val, index) => index !== idx);
    setLinks(tmp);
  };

  // Updates the user information
  // in the Firebase database
  // if the user ID and token match
  //  the corresponding values in the database
  const updateButton = async () => {
    const errors: string[] = [];
    setLoading(true);
    if (username === '') {
      setValidatorError(['Please enter a link']);
    }

    let linkList: Links[] = [];

    links.map(val => {
      if (val.link !== '') {
        linkList.push(val);
      }
    });

    setLinks(linkList);

    linkList = await linkList.map(link => {
      if (!link.link.includes('.')) {
        errors.push('Please enter a link');
      }
      return checkLinkFormat(link);
    });

    if (errors.length === 0) {
      try {
        const q = query(
          collection(db, 'users'),
          where('userID', '==', user?.uid),
          where('token', '==', token)
        );

        const querySnapshot = await getDocs(q);
        const doc = querySnapshot.docs[0];
        await updateDoc(doc.ref, {
          userID: user?.uid,
          email: user?.email,
          name: name,
          username: username,
          description: description,
          color: color,
          photoURL: user?.photoURL,
          links: linkList,
          publicEmail: publicEmail,
        });
        navigate('/' + username);
      } catch (error) {
        alert(error);
      }
    } else {
      setValidatorError(errors);
    }
    setLoading(false);
  };

  // this function makes maximum length control for name
  const nameValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (name.length > 29) {
      alert('name must be maximum length 30');
      await setName('');
    }
  };

  // this function makes maximum length control for description
  const descriptionValidator = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
    if (description.length > 199) {
      alert('description must be maximum length 200');
      await setDescription('');
    }
  };

  // this function makes maximum length control for public email
  const publicEmailValidator = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublicEmail(e.target.value);
    if (publicEmail.length > 199) {
      alert('public email must be maximum length 200');
      await setPublicEmail('');
    }
  };

  // this function makes maximum length control for title
  const titlesValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.name.replace('title', ''));
    if (e.target.value.length > 20) {
      alert('title must be maximum char 20');
      const newLinks = [...links];
      newLinks[index].title = '';
      setLinks(newLinks);
    } else {
      const newLinks = [...links];
      newLinks[index].title = e.target.value;
      setLinks(newLinks);
    }
  };

  // This function tracks changes
  // to a link input field and updates the 'links' array.
  const linkHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.name.replace('link', ''));
    const newLinks = [...links];
    newLinks[index].link = e.target.value;
    setLinks(newLinks);
  };

  // this function makes user delete
  // info if user ID and token match
  // from in firebase database user id and token
  const deleteButton = async () => {
    const q = query(
      collection(db, 'users'),
      where('userID', '==', user?.uid),
      where('token', '==', token)
    );
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];
    await deleteDoc(doc.ref);
    logout();
  };

  return loading ? (
    <Loading />
  ) : (
    <CenterLayout>
      <Navbar />
      <Box
        stack="VStack"
        css={{
          width: '50%',
          backgroundcolor: '#302C3F',
          alignItems: 'center',
          paddingBottom: '5%',
          color: 'white',
          '@media screen and (max-width: 768px)': {
            width: '100%',
          },
        }}
      >
        <Avatar
          src={user?.photoURL || avatar}
          css={{
            height: '100px',
            width: '100px',
            marginTop: '2.5%',
          }}
        />
        <Box stack="VStack" css={{ alignItems: 'center', marginTop: '5%' }}>
          <Text
            css={{
              textAlign: 'left',
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            Name Surname
          </Text>
          <Input
            onChange={nameValidator}
            css={{
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
            value={name}
          />
          <Text
            css={{
              width: '50%',
              textAlign: 'right',
              marginTop: '1%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            {name.length + '/30'}
          </Text>
          <Text
            css={{
              width: '50%',
              textAlign: 'left',
              marginTop: '5%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            Username
          </Text>

          <Link
            href={'https://www.profilecard.co/' + username}
            css={{
              textAlign: 'left',
              width: '50%',
              color: 'White',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            https://www.profilecard.co/{username}
          </Link>
          <Input
            onChange={usernameValidator}
            value={username}
            type="text"
            css={{
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          />
          <Text
            css={{
              width: '50%',
              textAlign: 'right',
              marginTop: '1%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            {username.length + '/20'}
          </Text>
          <Text
            css={{
              width: '50%',
              marginTop: '5%',
              textAlign: 'left',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            Description
          </Text>
          <Input
            onChange={descriptionValidator}
            value={description}
            css={{
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          />
          <Text
            css={{
              width: '50%',
              textAlign: 'right',
              marginTop: '1%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            {description.length + '/200'}
          </Text>
          <Text
            css={{
              width: '50%',
              marginTop: '5%',
              textAlign: 'left',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            Public Email - Optional
          </Text>

          <Input
            onChange={publicEmailValidator}
            value={publicEmail}
            css={{
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          />
          <Text
            css={{
              width: '50%',
              textAlign: 'right',
              marginTop: '1%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            {publicEmail.length + '/200'}
          </Text>
          <Box
            stack="VStack"
            css={{
              alignItems: 'center',
              width: '50%',
              marginTop: '5%',
            }}
          >
            <Text>Profile color picker</Text>
            <SketchPicker
              disableAlpha={true}
              color={color}
              onChange={e => setColor(e.hex)}
              styles={{
                default: {
                  picker: {
                    backgroundColor: '#302C3F',
                  },
                },
              }}
            />
          </Box>
          <Box
            css={{
              marginTop: '5%',
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            {links.map((val, index) => {
              return (
                <Box stack="HStack" css={{ alignItems: 'center' }}>
                  <LinkInput
                    key={index}
                    link={val.link}
                    linkName={'link' + index}
                    title={val.title}
                    titleName={'title' + index}
                    linkOnChange={linkHandler}
                    titleOnChange={titlesValidator}
                  />
                  <Button
                    onClick={() => deleteLink(index)}
                    css={{ width: '10%' }}
                  >
                    <BsFillTrashFill color="#F67280" />
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box css={{ marginTop: '2%' }}>
            {validatorError
              ? validatorError.map(err => {
                  return <Text validator="error">{err}</Text>;
                })
              : null}
          </Box>
          <GradientButton
            content="Add link"
            onClik={() => addToLink()}
            size={4}
          />
          <Button
            disabled={loading}
            onClick={() => updateButton()}
            size="4"
            css={{
              width: '50%',
              marginTop: '5%',
              '@media screen and (max-width: 768px)': {
                width: '80%',
              },
            }}
          >
            Save
          </Button>
          <Button
            variant="delete"
            disabled={loading}
            onClick={() => deleteButton()}
            size="4"
            css={{
              width: '50%',
              marginTop: '5%',
              '@media screen and (max-width: 768px)': {
                width: '80%',
              },
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
      <Footer />
    </CenterLayout>
  );
};

export default Profile;
