import axios, { AxiosResponse } from "axios"
import { IUser } from "../Models/IUser";


export const authUserService = async () => {
  const response = axios.get<Promise<AxiosResponse<IUser>>>('./users');
  return response;
}