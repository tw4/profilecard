import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/Firebase';
import { Links, UserCard } from '../types';
import Loading from '../components/Loading';
import MetaTag from '../components/MetaTag';
import UserProfileCard from '../components/UserProfileComponents/UserProfileCard';
import { UserStatus } from '../enum';

const UserProfile = () => {
  const { user } = useParams();
  const navigate = useNavigate();

  const [userDeteil, setUserDeteil] = useState<UserCard>();
  const [linkList, setLinkList] = useState<Links[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userLinkCount, setUserLinkCount] = useState<number>(4);

  useEffect(() => {
    getUserDeteilFromDB(user || '');
  }, []);

  // This function checks if a username matches a username
  // in the Firebase database.If there is a match,
  // it retrieves the user information,
  // otherwise it directs the user to a 404 page.
  const getUserDeteilFromDB = async (userName: string) => {
    setLoading(true);
    const q = query(collection(db, 'users'), where('username', '==', userName));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      navigate('/404');
    }
    const doc = querySnapshot.docs[0];

    setUserDeteil(doc.data() as UserCard);
    setLinkList(doc.data().links);
    switch (querySnapshot.docs[0].data().status as UserStatus) {
      case UserStatus.Standard:
        setUserLinkCount(4);
        break;
      case UserStatus.Pro:
        setUserLinkCount(24);
        break;
      default:
        setUserLinkCount(4);
        break;
    }
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <MetaTag
        title={`ProfileCard  ${
          userDeteil ? userDeteil.username : 'ProfileCard'
        }`}
        content={userDeteil ? userDeteil.username : 'ProfileCard'}
      />
      <UserProfileCard
        linkList={linkList}
        userLinkCount={userLinkCount}
        userDeteil={userDeteil as UserCard}
      />
    </>
  );
};

export default UserProfile;
