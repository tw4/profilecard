import { Avatar, Box, Link, Text } from "../ui-library";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/Firebase";
import { Links, UserCard } from "../types";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { user } = useParams();
  const navigate = useNavigate();

  const [userDeteil, setUserDeteil] = useState<UserCard>();
  const [linkList, setLinkList] = useState<Links[]>([]);
  useEffect(() => {
    getUserDeteilFromDB(user!);
  }, []);

  const getUserDeteilFromDB = async (userName: string) => {
    const q = query(collection(db, "users"), where("username", "==", userName));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      navigate("/");
    }

    querySnapshot.forEach(async (doc) => {
      await setUserDeteil(doc.data() as UserCard);
      await setLinkList(doc.data().links);
    });
  };

  return (
    <Box stack="VStack" css={{ alignItems: "center" }}>
      <Helmet>
        <title>
          ProfileCard @{userDeteil ? userDeteil.username : "ProfileCard"}
        </title>
        <meta
          name="description"
          content={userDeteil ? userDeteil.description : ""}
        />
      </Helmet>
      <Box
        stack="VStack"
        css={{
          height: "600px",
          width: "400px",
          marginTop: "10%",
          backgroundColor: "transparent",
          alignItems: "center",
          borderRadius: "25px",
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px;",
          borderBottomWidth: "20px",
          borderBottomStyle: "solid",
          borderBottomColor: userDeteil?.color,
          paddingLeft: "1.5%",
          paddingRight: "1.5%",
          textAlign: "center",
          wordBreak: "break-word",
        }}>
        <Avatar
          variant="profileCard"
          src={userDeteil?.photoURL}
          css={{ borderColor: userDeteil?.color }}
        />
        <Text css={{ marginTop: "5%", fontWeight: "bold" }}>
          {userDeteil?.name}
        </Text>
        <Text css={{ marginTop: "2.5%" }}>@{userDeteil?.username}</Text>
        <Text
          size="5"
          css={{
            marginTop: "5%",
          }}>
          {userDeteil?.description}
        </Text>
        <Box css={{ marginTop: "5%" }}>
          {linkList
            ? linkList.map(({ title, link }) => {
                if (title === "" && link === "") return null;
                return (
                  <Box key={link} css={{ marginTop: "5%" }}>
                    <Link
                      linkButton="costomUser"
                      css={{ backgroundColor: userDeteil?.color }}
                      href={link}>
                      {title !== "" ? title : link}
                    </Link>
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
      <Box
        stack="HStack"
        css={{
          position: "fixed",
          left: "0",
          bottom: "0",
          height: "5vh",
          backgroundColor: "#000000",
          padding: "1%",
          justifyContent: "center",
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
            marginTop: "5%",
          },
        }}>
        <Text color="light">create your own page :</Text>
        <Link color="light" href="http://www.profilecard.co/">
          profilecard.co
        </Link>
      </Box>
    </Box>
  );
};

export default UserProfile;
