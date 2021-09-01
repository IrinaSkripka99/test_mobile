import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const API_URL = 'https://api.github.com/';

class AxiosService {
  api: AxiosInstance;
  constructor() {
    const api = axios.create({
      baseURL: API_URL,
    });

    api.interceptors.response.use(this.handleSuccess, this.handleError);

    this.api = api;
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  get(path: string, params?: any) {
    return this.api.get(path, {params});
  }

  post(path: string, payload: any) {
    return this.api.post(path, payload);
  }

  put(path: string, payload: any) {
    return this.api.put(path, payload);
  }

  delete(path: string, params: any) {
    return this.api.delete(path, {params});
  }
}
const axiosService = new AxiosService();
export default axiosService;
