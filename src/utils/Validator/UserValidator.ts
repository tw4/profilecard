import { NavigateFunction } from "react-router-dom";
import { UsersState } from "../../features/user/UserSlice";

export const UserValidator = (user: UsersState) => {
  if (user.uid !== "" && user.email !== "" && user.displayName !== "") {
    return true;
  } else {
    return false;
  }
};

export const UserLoginValidator = (
  sessionStorage: Storage,
  navigate: NavigateFunction,
  path = "/"
) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user") || "");
    if (user) {
      if (UserValidator(user)) {
        navigate(path);
      }
    }
  } catch (error) {
    navigate("/");
  }
};
