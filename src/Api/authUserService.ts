import axios from "axios"
import { IUser } from "../Models/IUser";

export const authUserService = async () => {
  return axios.get<IUser[]>('./users.json');
};
