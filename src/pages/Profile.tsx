import { Box, Button, Text } from "../components";
import logo from "../assets/logos/profilecard.svg";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { clearUserState } from "../features/user/UserSlice";
import { useEffect } from "react";
import { UserValidator } from "../utils/UserValidator";

const Profile = () => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const res = UserValidator(user);
    if (!res) {
      logout();
    }
    console.log(user);
  }, []);

  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate("/");
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
