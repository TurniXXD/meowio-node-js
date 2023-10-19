import axios from 'axios';
import { serviceOptions } from './serviceOptions';
import { EnumCookies, useCookie } from '../auth/cookies';

export const initAxiosInstance = (token?: string) => {
  const configuredAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
      'X-API-KEY': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  serviceOptions.axios = configuredAxios;
};

export const useAxios = () => {
  const [authCookie] = useCookie(EnumCookies.Auth);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
      'X-API-KEY': process.env.REACT_APP_API_KEY,
      ...(authCookie && { Authorization: `Bearer ${authCookie}` }),
    },
  });

  axiosInstance.interceptors.request.use((config) => {
    if (authCookie) {
      config.headers['Authorization'] = `Bearer ${authCookie}`;
    }
    return config;
  });

  return axiosInstance;
};
