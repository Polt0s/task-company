import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../Models/IUser";

const initialState = {
  username: '',
  password: '',
} as IUser;

const useUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  }
});

export const { addUser } = useUser.actions;

export default useUser.reducer;
