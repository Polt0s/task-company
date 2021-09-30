import axios, { AxiosResponse } from "axios"
import { ICompany } from "../Models/ICompany";
import { addCompany } from "../Store/reducer/company";
import { Dispatch } from '@reduxjs/toolkit';

export const getCompanyData = () => async (dispatch: Dispatch): Promise<AxiosResponse<ICompany[]>> => {
  try {
    const response = await axios.get<ICompany[]>('./company.json');
    dispatch(addCompany(response.data));
    return response;
  } catch (err) {
    throw new Error(`ошибка ${err}`)
  }
};
