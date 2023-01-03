import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UsersState {
  uid: string;
  displayName: string;
  email: string;
}

const initialState: UsersState = {
  uid: "",
  displayName: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<UsersState>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    clearUserState: (state) => {
      state.displayName = "";
      state.email = "";
      state.uid = "";
    },
  },
});

export const { clearUserState, setUserState } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
