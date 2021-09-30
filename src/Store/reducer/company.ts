import { createSlice } from "@reduxjs/toolkit";
import { ICompany } from "../../Models/ICompany";

interface IState {
  company: ICompany[]
}

const initialState = {
  company: [],
} as IState;

const useCompany = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.company = action.payload
    }
  },
});

export const { addCompany } = useCompany.actions;

export default useCompany.reducer;