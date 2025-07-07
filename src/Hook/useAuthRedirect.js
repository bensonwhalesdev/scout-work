import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useGetUserStore from "@/store/useGetUserStore";

const useAuthRedirect = ({ allowedRole }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useGetUserStore();

  useEffect(() => {
    if (loading) return; // Wait until user data is ready

    // Not logged in
    if (!user) {
      navigate("/auth", { replace: true });
      return;
    }

    // Role mismatch
    if (allowedRole && user.role !== allowedRole) {
      const fallback = user.role === "employer" ? "/dashboard" : "/freelancerdashboard";
      navigate(fallback, { replace: true });
    }

    // If logged in and role is allowed, do nothing
  }, [user, loading, allowedRole, navigate, location]);
};

export default useAuthRedirect;
