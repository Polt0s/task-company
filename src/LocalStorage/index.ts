export default class LocalStorage {

  static getItem(key: string) {
    localStorage.getItem(key);
  };

  static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  };

  static removeItem(key: string) {
    localStorage.removeItem(key);
  };
};
