import { Box, Button, Text, ImageIcon } from "../components";
import profileCard from "../assets/logos/profilecard.svg";
import google from "../assets/logos/google.svg";
import { auth } from "../services/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { setUserState, UsersState } from "../features/user/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    dispatch(setUserState(res.user as UsersState));
    navigate("/profile");
  };

  return (
    <Box stack="HStack">
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
