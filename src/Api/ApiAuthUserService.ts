import { IUser } from "../Types/IUser";
import ApiService from "./ApiServise";

export class ApiAuthUserService extends ApiService {

  static authUserService() {
    const response = this.apiGet<IUser[]>('./users.json');
    return response;
  };
};
