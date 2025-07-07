import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useGetUserStore from "@/store/useGetUserStore";

const useRedirectByRole = () => {
  const { user } = useGetUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) return;

    if (user.role === "employer" && !location.pathname.startsWith("/dashboard")) {
      navigate("/dashboard", { replace: true });
    } else if (user.role === "freelancer" && !location.pathname.startsWith("/freelancerdashboard")) {
      navigate("/freelancerdashboard", { replace: true });
    }
  }, [user, navigate, location]);
};

export default useRedirectByRole;
