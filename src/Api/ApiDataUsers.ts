import { IUserInfo } from "../Models/IUserInfo";
import { IAboutMe } from "../Models/IAboutMe";
import ApiService from "./ApiServise";

export class ApiDataUsers extends ApiService {

  static getInfoUser() {
    const response = this.apiGet<IUserInfo>('https://api.github.com/users/gaearon');
    return response;
  };

  static getInfoAboutMe() {
    const response = this.apiGet<IAboutMe>('https://api.github.com/users/polt0s');
    return response;
  };
};
