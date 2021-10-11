export default abstract class LocalStorage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  public getItem() {
    localStorage.getItem(this.key);
  };

  public setItem(value: string) {
    localStorage.setItem(this.key, value);
  };

  public removeItem() {
    localStorage.removeItem(this.key);
  };
};
