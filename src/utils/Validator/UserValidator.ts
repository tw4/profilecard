import { collection, getDocs, query, where } from 'firebase/firestore';
import { NavigateFunction } from 'react-router-dom';
import { UsersState } from '../../features/user/UserSlice';
import { db } from '../../services/Firebase';

export const UserValidator = (user: UsersState, token: string) => {
  if (
    user.uid !== '' &&
    user.email !== '' &&
    user.displayName !== '' &&
    token !== ''
  ) {
    return true;
  } else {
    return false;
  }
};

export const UserLoginValidator = async (
  sessionStorage: Storage,
  navigate: NavigateFunction,
  path = '/'
) => {
  try {
    const user = JSON.parse(sessionStorage.getItem('user') || '') as UsersState;
    const token = sessionStorage.getItem('token') || '';
    if (user && token && UserValidator(user, token)) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('userID', '==', user.uid),
          where('token', '==', token)
        )
      );
      if (!querySnapshot.empty) {
        navigate(path);
        return;
      }
    }
    navigate('/');
    sessionStorage.clear();
  } catch (error) {
    navigate('/');
    sessionStorage.clear();
  }
};
