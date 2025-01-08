/**
 * 请求实例工厂函数
 * 用于创建一个请求实例
 * @author @pureJim
 */
import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from 'axios';
import qs from 'qs';

import { useUserStore } from '@/store/system';

interface IRequestInstantFactory {
  baseURL: string;
  headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
  interceptors?: {
    requestConf?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
  };
}

class RequestInstantFactory {
  private readonly _instance: AxiosInstance;

  constructor({ baseURL, headers, interceptors }: IRequestInstantFactory) {
    const axiosInitialConfig: CreateAxiosDefaults = {
      baseURL,
    };
    if (headers) {
      axiosInitialConfig.headers = headers;
    }
    this._instance = axios.create(axiosInitialConfig);

    this._instance.defaults.paramsSerializer = {
      serialize(params) {
        return qs.stringify(params, { arrayFormat: 'brackets' });
      },
    };

    // 请求拦截
    this._instance.interceptors.request.use(
      (config) => {
        const token = useUserStore.getState().token || '';
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.Token = token;

        if (interceptors) {
          if (interceptors.requestConf) {
            Object.assign(config.headers, interceptors.requestConf);
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // 响应拦截
    this._instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 2xx
        return response;
      },
      // (error: AxiosError) => {
      //   // ^2xx
      //   if (error.response?.status === 401) {
      //     // 通过 auth-route 去判断
      //     window.location.href = '/401';
      //   } else {
      //     notificationController.notificationShow('error', String(errorCodeParser(error)));
      //   }
      //   return Promise.reject(errorCodeParser(error));
      // },
    );
  }

  public getInstance() {
    return this._instance;
  }
}

export default RequestInstantFactory;
