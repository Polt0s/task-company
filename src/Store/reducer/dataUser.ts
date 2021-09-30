import { createSlice } from "@reduxjs/toolkit";

interface IDataUser {
  user: {
    name: string,
    company: string,
    avatar: string | "Gravatar",
    followers: number,
  },
  aboutMe: {
    avatar: string,
    html_url: string,
    followers: number,
  },
}

const initialState = {
  user: {
    name: '',
    company: '',
    avatar: '',
    followers: 0,
  },
  aboutMe: {
    avatar: '',
    html_url: '',
    followers: 0,
  },
} as IDataUser;

const useDataUser = createSlice({
  name: 'dataUsers',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setInfoAboutMe: (state, action) => {
      state.aboutMe = action.payload;
    },
  },
});

export const { setUser, setInfoAboutMe } = useDataUser.actions;

export default useDataUser.reducer;

