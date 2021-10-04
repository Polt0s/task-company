import axios from "axios"
import { IUserInfo } from "../Models/IUserInfo";
import { IAboutMe } from "../Models/IAboutMe";

export const getInfoUser = async () => {
  try {
    const response = await axios.get<IUserInfo>('https://api.github.com/users/gaearon');
    return response.data;
  } catch (err) {
    throw new Error(`ошибка ${err}`)
  }
};

export const getInfoAboutMe = async () => {
  try {
    const response = await axios.get<IAboutMe>('https://api.github.com/users/polt0s');
    return response.data;
  } catch (err) {
    throw new Error(`ошибка ${err}`)
  }
};
