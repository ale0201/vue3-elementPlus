import axios from "axios";
import qs from "qs";
import { AxiosRequestConfig } from "axios";

const request = axios.create();
request.defaults.timeout = 10000;

request.interceptors.request.use((config: AxiosRequestConfig) => {
  // config.headers = "";
  return config;
});

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  }
);

class HttpRequest {
  static async postJson(url: string, params: any) {
    request.defaults.headers = {
      "Content-type": "application/json;charset=UTF-8",
    };
    return await request.post(url, params);
  }
  static async post(url: string, params: any) {
    request.defaults.headers = {
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
    return await request.post(url, JSON.stringify(params));
  }
  static async get(url: string, params: any) {
    return await request.get(url, { params: params });
  }
  static async postQs(url: string, params: any) {
    request.defaults.headers = {
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    }
    return await request.post(url, qs.stringify(params));
  }
}
export default HttpRequest;
