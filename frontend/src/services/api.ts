import axios from "axios";

import API from "../config/api";

const api = axios.create({
  baseURL: API.baseUrl,
  withCredentials: false
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ${token}`
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default api;
