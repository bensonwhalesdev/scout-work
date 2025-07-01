import useGetUserStore from '@/store/useGetUserStore';
import { ChevronDown, Menu } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const FreeLancerHeader = ({ toggleSidebar }) => {
    const { user } = useGetUserStore();
  return (
    <header className="bg-white shadow px-4 py-2 flex justify-between items-center w-full border-b-2 border-green-400">
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <img src="/logo1.png" alt="logo" className="h-10 hidden md:block" />
        <nav className="hidden md:flex gap-6 font-bold text-sm text-gray-600">
          <Link to={'/freelancerdashboard'}>Home</Link>
          <div className="relative group">
         <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-600 transition">For Talents <ChevronDown size={16} /></button>
           <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-99">
              <ul className="py-2">
                <li><Link to="/freelancerdashboard/browsejobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">Broswe Jobs</Link></li>
              </ul>
            </div>
           </div>
        </nav>
      </div>
      <Link to={'/freelancerdashboard/userprofile'}>
      <div className="flex items-center gap-2">
        <img src={user?.avatar || '/avatar.avif' } alt="avatar" className="w-8 h-8 rounded-full border-1 border-green-500" />
        <span className="text-sm">Hi, {user?.firstName || "User"}</span>
      </div>
      </Link>
      
    </header>
  )
}

export default FreeLancerHeader