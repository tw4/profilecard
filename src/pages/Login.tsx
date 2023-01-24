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
    <Box stack="HStack">
      <Helmet>
        <title>ProfileCard</title>
        <meta
          name="description"
          content="http://profilecard.co is a web application that allows users to create their own personal profile pages and share links such as social media accounts on these pages."
        />
      </Helmet>
      <Box stack="VStack" css={{ backgroundColor: "#601CEE", height: "100vh" }}>
        <img src={profileCard} height="50%" alt="profilecard logo" />
        <Text color="light" size="1" css={{ fontWeight: "bold" }}>
          Profile Card
        </Text>
        <Text color="light" size="2">
          All links to one link
        </Text>
      </Box>
      <Box stack="VStack" css={{ marginTop: "20vh" }}>
        <Text size="1" css={{ color: "Gray", marginTop: "5%" }}>
          Sign Up or Login In
        </Text>
        <Box css={{ padding: "5%" }}>
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
  );
};

export default Login;
