import { apiClient } from '@/lib/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import useGetUserStore from '@/store/useGetUserStore'; 

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useGetUserStore(); 

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

      const { token, user } = res.data;
      Cookies.set('token', token, { expires: 7 });
      setUser(user);
      navigate(user.role === 'employer' ? '/dashboard' : '/freelancerdashboard');
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Something went wrong, Cross-check your credentials');
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

      const { token, user } = res.data;
      Cookies.set('token', token, { expires: 7 });
      setUser(user);
      navigate(user.role === 'employer' ? '/dashboard' : '/freelancerdashboard');
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
