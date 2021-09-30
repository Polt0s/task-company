import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getCompanyData } from "../../Api/getCompanyData";
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
    },
    setDedicated: (state, action) => {
      // state.company = 
    },
  },
});

export const changeColorValue = (id: any) => async (dispatch: Dispatch) => {
  // const currentId = initialState.company.find((item) => item.id === id ? item.dedicated = true : item.dedicated = false);
  const currentId = initialState.company.filter((item) => item.id === id);
  console.log(currentId);
};

export const { addCompany } = useCompany.actions;

export default useCompany.reducer;