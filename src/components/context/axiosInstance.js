// src/components/utils/axiosInstance.js
import axios from "axios";
import { getAccessToken, setAccessToken } from "../context/authTokenManager";

let logoutHandler = null; // will be set by AuthProvider

export const setLogoutHandler = (callback) => {
  logoutHandler = callback;
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10000,
  withCredentials: true, // send refresh token cookie
});

// Add access token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Auto-refresh token on 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) return Promise.reject(error);

    // Only retry once and avoid /refresh endpoint
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const refreshRes = await axios.post(
          "http://localhost:8080/api/refresh",
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshRes.data.accessToken;
        setAccessToken(newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        if (logoutHandler) logoutHandler(); // safe call to logout
        else window.location.href = "/"; // fallback redirect

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
