import React, { useState } from 'react';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [role, setRole] = useState('freelancer');

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

      {/* Signup Form */}
      {activeTab === 'signup' && (
        <form className="space-y-4">
          {/* Role Selection */}
          <div className="flex justify-between bg-[#26AE61] text-white font-bold p-2 rounded-md mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="freelancer" checked={role === 'freelancer'}
                onChange={() => setRole('freelancer')}/>Freelancer
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="employer"
                checked={role === 'employer'}
                onChange={() => setRole('employer')}
              />
              Employer
            </label>
          </div>

          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
          />
          <button
            type="submit"
            className="w-full text-white py-2 rounded-md border bg-[#26AE61] hover:bg-[#195A22] transition cursor-pointer"
          >
            Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      )}

      {/* Login Form */}
      {activeTab === 'login' && (
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
          />
          <button
            type="submit"
            className="w-full text-white py-2 rounded-md border bg-[#26AE61] hover:bg-[#195A22] transition cursor-pointer"
          >
            Log In
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthTabs;
