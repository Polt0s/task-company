import LocalStorage from "./LocalStorage";

export class AuthLocalStorage extends LocalStorage {
  constructor() {
    super('auth');
  }
}
