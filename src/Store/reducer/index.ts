import { combineReducers } from '@reduxjs/toolkit'
import useCompany from './company';
import useUser from './userService';
import useDataUser from './dataUser';

const reducer = combineReducers({
  company: useCompany,
  userService: useUser,
  dataUsers: useDataUser,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;