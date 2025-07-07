import useGetUserStore from '@/store/useGetUserStore';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const { user } = useGetUserStore();
  const navigate = useNavigate();
  
    useEffect(() => {
      if (user?.role === "employer") {
        navigate("/dashboard");
      } else if (user?.role === "freelancer") {
        navigate("/freelancerdashboard");
      }
    }, [user]);
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default LandingPage