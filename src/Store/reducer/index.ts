import { combineReducers } from '@reduxjs/toolkit'


const reducer = combineReducers({
  // config: useConfig,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;