import { ICompany } from "../Types/index";
import ApiService from './ApiService';

export class ApiCompany extends ApiService {
  static getCompanyData() {
    const response = this.apiGet<ICompany[]>('./company.json');
    return response;
  };
};
