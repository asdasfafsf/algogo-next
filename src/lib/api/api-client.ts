import { AxiosInstance } from 'axios';
import { clientApiClient } from './client-api-client';
import { serverApiClient } from './server-api-client';

export const apiClient = new Proxy({} as AxiosInstance, {
    get(_target, prop: keyof AxiosInstance) {
      const actualClient = typeof window !== 'undefined' ? clientApiClient : serverApiClient;
      
      return Reflect.get(actualClient, prop, actualClient);
    }
  });

export default apiClient;