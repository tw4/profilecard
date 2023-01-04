import { Box, Button, Text } from "../components";
import logo from "../assets/logos/profilecard.svg";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { clearUserState } from "../features/user/UserSlice";
import { useEffect } from "react";
import { UserLoginValidator } from "../utils/UserValidator";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, "/profile");
  }, []);

  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate("/");
    sessionStorage.removeItem("user");
  };

  return (
    <Box stack="VStack">
      <Box
        stack="HStack"
        css={{
          backgroundColor: "#601CEE",
          justifyContent: "space-around",
          flexDirection: "row",
        }}>
        <Box
          stack="HStack"
          css={{ alignItems: "center", flexDirection: "row" }}>
          <img height="50px" src={logo} alt="logo" />
          <Text color="light" size="3" css={{ fontWeight: "bold" }}>
            Profile Card
          </Text>
        </Box>
        <Button
          onClick={() => logout()}
          size="4"
          css={{
            backgroundColor: "transparent",
            color: "White",
          }}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
