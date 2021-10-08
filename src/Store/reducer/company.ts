import { createSlice } from "@reduxjs/toolkit";
import { ICompany } from "../../Types/index";

interface IState {
  company: ICompany[]
}

const initialState: IState = {
  company: [],
};

const useCompany = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.company = action.payload
    },
    setSelected: (state, action) => {
      state.company = state.company.map((item) => {
        if (item.id === action.payload) {
          return { ...item, selected: !item.selected }
        }
        return item;
      })
    }
  },
});

export const { addCompany, setSelected } = useCompany.actions;

export default useCompany.reducer;