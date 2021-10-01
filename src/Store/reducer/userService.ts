import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { authUserService } from "../../Api/authUserService";
import { v4 as uuidv4 } from 'uuid';

interface IConfig {
  error: string,
  isLoading: boolean,
  isAuth: boolean,
}

const initialState = {
  error: '',
  isLoading: false,
  isAuth: localStorage.getItem('auth') ? true : false,
} as IConfig;

const useUser = createSlice({
  name: 'userService',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAuth: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  }
});

export const setAddUser = (username: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(useUser.actions.setLoading(true));
  setTimeout(async () => {
    const response = await authUserService();
    const dataUsers = response.data.find(user => user.username === username && user.password === password);
    if (dataUsers) {
      const token = uuidv4();
      localStorage.setItem('auth', token);
      dispatch(useUser.actions.setAuth());
    } else {
      dispatch(useUser.actions.setError('неверное имя пользователя или пароль'));
    }
    dispatch(useUser.actions.setLoading(false));
  }, 1000)
};

export const setLogout = () => async (dispatch: Dispatch) => {
  localStorage.removeItem('auth');
  dispatch(useUser.actions.logout());
};

export default useUser.reducer;
