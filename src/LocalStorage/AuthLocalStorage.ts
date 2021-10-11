import LocalStorage from "./LocalStorage";

export class AuthLocalStorage extends LocalStorage {
  key: string;
  constructor() {
    super('');
    this.key = 'auth';
  }
};
