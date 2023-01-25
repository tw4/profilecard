import { Box, Button, Text } from "../ui-library";
import profileCard from "../assets/logos/profilecard.svg";
import { auth } from "../services/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { setUserState, UsersState } from "../features/user/UserSlice";
import { useEffect } from "react";
import { UserLoginValidator } from "../utils/Validator/UserValidator";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, "/profile");
  }, []);

  const login = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user: UsersState = {
      uid: res.user.uid,
      displayName: res.user.displayName as string,
      email: res.user.email as string,
    };

    dispatch(setUserState(user));
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      })
    );
    navigate("/profile");
  };

  const MetaTag = () => {
    return (
      <Helmet>
        <title>ProfileCard</title>
        <meta
          name="description"
          content="http://profilecard.co is a web application that allows users to create their own personal profile pages and share links such as social media accounts on these pages."
        />
      </Helmet>
    );
  };

  const Nav = () => {
    return (
      <Box
        stack="HStack"
        css={{
          alignItems: "center",
          height: "5vh",
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
          },
        }}>
        <img src={profileCard} height="30px" alt="profilecard logo" />
        <Text color="light" size="4" css={{ fontWeight: "bold" }}>
          Profile Card
        </Text>
      </Box>
    );
  };

  const HeaderSide = () => {
    return (
      <Box stack="VStack" css={{ alignItems: "center" }}>
        <Text
          color="reinbow"
          size="1"
          css={{ textAlign: "center", display: "block", fontWeight: "bold" }}>
          Profile Card
        </Text>
        <Text
          color="grey"
          size="4"
          css={{
            width: "50%",
            "@media screen and (max-width: 768px)": {
              width: "90%",
            },
          }}>
          Welcome to ProfileCard! We are a web application that allows users to
          create their own personal profile pages and share links such as social
          media accounts on these pages. Easily share your social media
          accounts, email address, or blog on your profile page. Customize your
          profile page and share it with friends, business partners, or
          potential employers. ProfileCard is a great tool for creating and
          sharing your personal brand. Sign up now and create your own profile
          page!
        </Text>
        <Box
          css={{
            width: "25%",
            marginTop: "5%",
            padding: "0.3%",
            background: "linear-gradient(to right, #CE4DA4, #7353E5)",
            borderRadius: "50px",
            "@media screen and (max-width: 768px)": {
              width: "90%",
            },
          }}>
          <Button
            variant="gradient"
            onClick={() => login()}
            size="3"
            css={{
              width: "100%",
            }}>
            Sign in with Google
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      stack="HStack"
      css={{
        backgroundColor: "#1D1A27",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
      }}>
      <MetaTag />
      <Box stack="VStack">
        <Nav />
        <Box stack="VStack" css={{ marginTop: "10%" }}>
          <HeaderSide />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
