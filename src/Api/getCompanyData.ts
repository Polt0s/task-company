import axios, { AxiosResponse } from "axios"
import { ICompany } from "../Models/ICompany";
import { addCompany } from "../Store/reducer/company";
import { Dispatch } from '@reduxjs/toolkit';

export const getCompanyData = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Promise<AxiosResponse<ICompany[]>>>('./company.json');
    dispatch(addCompany(response.data));
  } catch (err) {
    throw new Error(`ошибка ${err}`)
  }
};
