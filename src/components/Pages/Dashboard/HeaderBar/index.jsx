import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import useGetUserStore from '@/store/useGetUserStore';

const HeaderBar = ({ toggleSidebar }) => {
  const { user } = useGetUserStore();
  return (
    <header className="bg-white shadow px-4 py-2 flex justify-between items-center w-full border-b-2 border-green-400">
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <img src="/logo1.png" alt="logo" className="h-10 hidden md:block" />
        <nav className="hidden md:flex gap-6 font-bold text-sm text-gray-600">
          <Link to={'/dashboard'}>Home</Link>
          <div className="relative group">
            <button className="flex items-center gap-1">For Talents <ChevronDown size={16} /></button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">For Employers <ChevronDown size={16} /></button>
          </div>
        </nav>
      </div>
      <Link to={'/dashboard/userprofile'}>
      <div className="flex items-center gap-2">
        <img src={user?.avatar || '/avatar.avif' } alt="avatar" className="w-8 h-8 rounded-full border-1 border-green-500" />
        <span className="text-sm">Hi, {user?.firstName}</span>
      </div>
      </Link>
      
    </header>
  );
};

export default HeaderBar;