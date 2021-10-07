import axios from "axios";

export default class ApiService {

  static async apiGet<T>(path: string) {
    try {
      const response = await axios.get(path);
      return response.data;
    } catch (err) {
      throw new Error(`ошибка ${err}`)
    }
  };
};
