import { combineReducers } from '@reduxjs/toolkit'
import useCompany from './company';
import useUser from './userService';
import useDataUser from './dataUser';
import useConfig from './config';

const reducer = combineReducers({
  company: useCompany,
  userService: useUser,
  dataUsers: useDataUser,
  config: useConfig,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;