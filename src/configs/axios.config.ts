import axios from 'axios';
import env from 'configs/environment.config';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: env.api.url,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data) return response.data;
    return response;
  },
  (error) => {
    throw new Error(error);
  }
);

export default axiosClient;
