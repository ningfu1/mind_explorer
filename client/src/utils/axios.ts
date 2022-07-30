import axios, { AxiosRequestHeaders } from 'axios';

const headers: AxiosRequestHeaders = {
  withCredentials: true,
  headers: true,
};

const api = {
  get: (url: string) => axios.get(url, headers),
  post: (url: string, body: any) => axios.post(url, body, headers),
  delete: (url: string, body: any) => axios.post(url, body, headers),
};

export default api;
