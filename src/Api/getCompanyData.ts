import axios from "axios"
import { ICompany } from "../Models/ICompany";

export const getCompanyData = async () => {
  try {
    const response = await axios.get<ICompany[]>('./company.json');
    return response.data;
  } catch (err) {
    throw new Error(`ошибка ${err}`);
  };
};
