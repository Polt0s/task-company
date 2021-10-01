import axios, { AxiosResponse } from "axios"
import { Dispatch } from '@reduxjs/toolkit';
import { IUserInfo } from "../Models/IUserInfo";
import { setUser, setInfoAboutMe } from "../Store/reducer/dataUser";
import { IAboutMe } from "../Models/IAboutMe";

export const getInfoUser = () => async (dispatch: Dispatch): Promise<AxiosResponse<IUserInfo>> => {
  try {
    const response = await axios.get<IUserInfo>('https://api.github.com/users/gaearon');
    const result = {
      name: response.data.name,
      company: response.data.company,
      avatar_url: response.data.avatar_url,
      followers: response.data.followers,
    };
    dispatch(setUser(result));
    return response;
  } catch (err) {
    throw new Error(`ошибка ${err}`)
  }
};

export const getInfoAboutMe = () => async (dispatch: Dispatch): Promise<AxiosResponse<IAboutMe>> => {
  try {
    const response = await axios.get<IAboutMe>('https://api.github.com/users/polt0s');
    const result = {
      avatar_url: response.data.avatar_url,
      html_url: response.data.html_url,
      followers: response.data.followers,
    };
    dispatch(setInfoAboutMe(result));
    return response;
  } catch (err) {
    throw new Error(`ошибка ${err}`)
  }
};