// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { apiClient } from "@/lib/client";

// const useLogout = () => {
//   const navigate = useNavigate();

//   const logout = async () => {
//     try {
//       await apiClient.post("/auth/logout", {}, { withCredentials: true });
//       toast.success("Logged out successfully.");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Logout failed.");
//     }
//   };

//   return logout;
// };

// export default useLogout;

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";
import useGetUserStore from "@/store/useGetUserStore";

const useLogout = () => {
  const navigate = useNavigate();
  const { clearUser } = useGetUserStore();

  const logout = async () => {
    try {
      clearUser();
      await apiClient.post("/auth/logout", {}, { withCredentials: true });
      Cookies.remove("token");
      navigate("/", { replace: true });
      toast.success("Logged out successfully");
    } catch (error) {
       toast.error(err.response?.data?.message || "Logout failed.");
    }
  };

  return logout;
};

export default useLogout;

