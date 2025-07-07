import { apiClient } from '@/lib/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ firstName, email, password, role }) => {
    try {
      setLoading(true);
      setError(null);

      const res = await apiClient.post('/auth/register', {
        firstName,
        email,
        password,
        role,
      });

      const userRole = res.data?.user?.role;
      navigate(userRole === "employer" ? "/dashboard" : "/freelancerdashboard");
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      setError(null);

      const res = await apiClient.post('/auth/login', {
        email,
        password,
      });

      const userRole = res.data?.user?.role;
      navigate(userRole === "employer" ? "/dashboard" : "/freelancerdashboard")
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    login,
    loading,
    error,
  };
};
