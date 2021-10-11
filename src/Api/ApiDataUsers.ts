import { IUserInfo, IAboutMe } from "../Types/index";
import ApiService from "./ApiService";

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
