import { createSlice } from "@reduxjs/toolkit";

interface IConfig {
  theme: { status: boolean, mode: 'light' | 'dark' },
};

const initialState: IConfig = {
  theme: { status: false, mode: 'light' },
};

const useConfig = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setThemeLight: (state) => {
      state.theme.status = false;
      state.theme.mode = 'light';
    },
    setThemeDark: (state) => {
      state.theme.status = true;
      state.theme.mode = 'dark';
    },
  },
});

export const { setThemeLight, setThemeDark } = useConfig.actions;

export default useConfig.reducer;
