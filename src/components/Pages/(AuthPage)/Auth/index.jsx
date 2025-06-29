import React, { useState } from 'react';
import { useAuth } from '../Hook/useAuth';


const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [role, setRole] = useState('freelancer');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: ''
  });

  const { signup, login, loading, error } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup({ ...formData, role });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email: formData.email, password: formData.password });
  };

  return (
    <div className="max-w-md mx-auto mt-30 mb-20 bg-white rounded-xl shadow-md p-6">
      {/* Tabs */}
      <div className="flex justify-between  mb-6 border-b border-gray-200">
        <button className={`px-4 py-2 font-semibold ${activeTab === 'signup' ? 'border bg-[#26AE61] hover:bg-[#195A22] rounded text-white cursor-pointer transition duration-300' : 'text-gray-500'}`}
          onClick={() => setActiveTab('signup')}>Sign Up
        </button>
        <button className={`px-4 py-2 font-semibold ${activeTab === 'login' ? 'border bg-[#26AE61] hover:bg-[#195A22] rounded text-white cursor-pointer transition duration-300' : 'text-gray-500'}`}
        onClick={() => setActiveTab('login')}>Log In
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Signup Form */}
      {activeTab === 'signup' && (
        <form className="space-y-4" onSubmit={handleSignup}>
          <div className="flex justify-between bg-[#26AE61] text-white font-bold p-2 rounded-md mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="freelancer" checked={role === 'freelancer'}
                onChange={() => setRole('freelancer')} />Freelancer
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="employer" checked={role === 'employer'}                         onChange={() => setRole('employer')}/> Employer
            </label>
          </div>

          <input type="text" name="firstName" placeholder="First Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
            value={formData.firstName} onChange={handleChange}/>
          <input type="email" name="email" placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
            value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
            value={formData.password} onChange={handleChange} />
          <button type="submit" className="w-full text-white py-2 rounded-md border bg-[#26AE61] hover:bg-[#195A22] transition cursor-pointer" disabled={loading} >
            {loading ? 'Signing Up...' : `Sign Up as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </button>
        </form>
      )}

      {/* Login Form */}
      {activeTab === 'login' && (
        <form className="space-y-4" onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm" value={formData.password} onChange={handleChange} />
          <button type="submit" className="w-full text-white py-2 rounded-md border bg-[#26AE61] hover:bg-[#195A22] transition cursor-pointer" disabled={loading} >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthTabs;
