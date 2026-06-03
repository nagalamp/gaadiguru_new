import API from "./api";

import { getToken } from "../utils/storage";

// REQUEST INTERCEPTOR

API.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR

API.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }

    return Promise.reject(error);
  }
);

export default API;