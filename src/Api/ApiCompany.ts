import { ICompany } from "../Types/index";
import ApiService from './ApiServise';

export class ApiCompany extends ApiService {
  static getCompanyData() {
    const response = this.apiGet<ICompany[]>('./company.json');
    return response;
  };
};
