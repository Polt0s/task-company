import { combineReducers } from '@reduxjs/toolkit'
import useCompany from './company';
import useUser from './userService';

const reducer = combineReducers({
  company: useCompany,
  userService: useUser,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;