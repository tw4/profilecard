import { UsersState } from "../features/user/UserSlice";

export const UserValidator = (user: UsersState) => {
  if (user.uid !== "" || user.email !== "" || user.displayName !== "") {
    return true;
  } else {
    return false;
  }
};
