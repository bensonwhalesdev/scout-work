import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../LandingPage/Home/Footer'
import AuthHeader from './AuthHeader'
import useGetUserStore from '@/store/useGetUserStore';
import { useEffect } from 'react';

const Authpage = () => {
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
        <AuthHeader />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Authpage