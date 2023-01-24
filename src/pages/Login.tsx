import { Box, Button, Text, ImageIcon } from "../ui-library";
import profileCard from "../assets/logos/profilecard.svg";
import google from "../assets/logos/google.svg";
import { auth } from "../services/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { setUserState, UsersState } from "../features/user/UserSlice";
import { useEffect } from "react";
import { UserLoginValidator } from "../utils/Validator/UserValidator";
import { Helmet } from "react-helmet";
import loginRightImage from "../assets/loginRightImage.svg";

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

  return (
    <Box stack="HStack" css={{ backgroundColor: "#601CEE" }}>
      <Helmet>
        <title>ProfileCard</title>
        <meta
          name="description"
          content="http://profilecard.co is a web application that allows users to create their own personal profile pages and share links such as social media accounts on these pages."
        />
      </Helmet>

      <Box stack="VStack" css={{ height: "100vh" }}>
        <Box
          stack="HStack"
          css={{
            alignItems: "center",
            height: "5vh",
            marginLeft: "5%",
            "@media screen and (max-width: 768px)": {
              flexDirection: "row",
            },
          }}>
          <img src={profileCard} height="30px" alt="profilecard logo" />
          <Text color="light" size="4" css={{ fontWeight: "bold" }}>
            Profile Card
          </Text>
        </Box>
        <Box stack="VStack" css={{ marginTop: "25%" }}>
          <Box
            stack="VStack"
            css={{
              height: "60%",
              padding: "5%",
              margin: "2.5%",
              backgroundColor: "white",
              borderTopRightRadius: "10%",
              borderBottomLeftRadius: "10%",
              color: "#601CEE",
              "@media screen and (max-width: 768px)": {
                height: "100%",
              },
            }}>
            <Text size="1" css={{ textAlign: "start" }}>
              Profile Card
            </Text>
            <Text size="4" css={{ textAlign: "justify" }}>
              Welcome to ProfileCard! We are a web application that allows users
              to create their own personal profile pages and share links such as
              social media accounts on these pages. Easily share your social
              media accounts, email address, or blog on your profile page.
              Customize your profile page and share it with friends, business
              partners, or potential employers. ProfileCard is a great tool for
              creating and sharing your personal brand. Sign up now and create
              your own profile page!
            </Text>
            <Button
              onClick={() => login()}
              variant="google"
              css={{ marginTop: "5%" }}>
              <ImageIcon
                variant="right"
                height="30px"
                src={google}
                alt="google"
              />
              <Text css={{ width: "30%" }}> Sign in with Google</Text>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box stack="VStack">
        <Box css={{ padding: "5%", height: "90vh" }}>
          <img src={loginRightImage} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
