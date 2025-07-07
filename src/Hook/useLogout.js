import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";
import useGetUserStore from "@/store/useGetUserStore";

const useLogout = () => {
  const navigate = useNavigate();
  const { clearUser } = useGetUserStore();

  const logout = () => {
    clearUser();
    Cookies.remove("token");
    navigate("/", { replace: true });
    toast.success("Logged out successfully");
  };

  return logout;
};

export default useLogout;
