import axios from "axios";
import { toast } from "sonner";

const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.warn("Unauthorized – please log in again.");
    }
    return Promise.reject(error);
  }
);
