import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle 401 Unauthorized globally
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       toast.warn("Unauthorized – please log in again.");
//     }
//     return Promise.reject(error);
//   }
// );
