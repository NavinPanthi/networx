import axios from "axios";

import { getToken, resetLoginData } from "../utils/auth-storage";

const baseURL: string | undefined = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL,
  timeout: 10000,
  timeoutErrorMessage: "The request took too long to process.",
});

http.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 401 || message === "Invalid token") {
      resetLoginData(); // remove user + token
      window.location.href = "/log-in"; // redirect instantly
    }

    return Promise.reject(error);
  },
);

http.interceptors.response.use(function (response) {
  return response;
});

export default http;
