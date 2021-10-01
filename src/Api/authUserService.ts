import axios, { AxiosResponse } from "axios"
import { IUser } from "../Models/IUser";

export const authUserService = async (): Promise<AxiosResponse<IUser[]>> => {
  return axios.get<IUser[]>('./users.json');
};
