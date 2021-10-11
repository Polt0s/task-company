import { IUser } from "../Types/index";
import ApiService from "./ApiService";

export class ApiAuthUserService extends ApiService {

  static authUserService() {
    const response = this.apiGet<IUser[]>('./users.json');
    return response;
  };
};
