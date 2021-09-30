import { combineReducers } from '@reduxjs/toolkit'
import useCompany from './company';
import useUser from './user';

const reducer = combineReducers({
  company: useCompany,
  user: useUser,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;