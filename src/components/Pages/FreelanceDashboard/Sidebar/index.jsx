import React, { useState } from 'react';
import { LayoutDashboard, Briefcase, ClipboardList, Settings, LogOut, X, ChevronDown, HandHelping } from 'lucide-react';
import { Link } from 'react-router-dom';
import useLogout from '@/Hook/useLogout';

const FreeLancerSidebar = ({ isCollapsed, isMobileOpen, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = useLogout();

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${isMobileOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`bg-white border-r px-4 py-6 z-50 fixed border-green-400 border-r-2 md:relative transition-all duration-300 ease-in-out 
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
        ${isCollapsed ? 'w-16' : 'w-64'} 
        md:translate-x-0 md:block md:min-h-screen`}
      >
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={toggleSidebar}>
            <X size={20} />
          </button>
        </div>

        <div className={`text-sm mb-6 font-bold ${isCollapsed ? 'hidden' : 'text-gray-700'}`}>Start</div>
        <div className="flex flex-col gap-4">
          <Link to={'/freelancerdashboard'} >
          <button className={`flex items-center gap-2 cursor-pointer ${isCollapsed ? 'justify-center' : 'text-green-600 font-semibold'}`}>
            <LayoutDashboard /> {!isCollapsed && 'Dashboard'}
          </button>
          </Link>
        </div>

        <div className={`text-sm mt-8 font-bold ${isCollapsed ? 'hidden' : 'text-green-600'}`}>Organize and Manage</div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center w-full gap-2 px-1 py-2 rounded-md hover:bg-green-300 transition cursor-pointer ${
          isCollapsed ? 'justify-center' : 'justify-between'
        }`}
      >
        <span className="flex items-center gap-2 text-gray-700">
          <Briefcase />
          {!isCollapsed && 'Jobs'}
        </span>
        {!isCollapsed && <ChevronDown size={16} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && !isCollapsed && (
        <div className="absolute left-0 top-full mt-2 w-55 bg-white shadow-lg border rounded-md z-20">
          <ul className="text-sm text-gray-700">
            <Link to={'/freelancerdashboard/browsejobs'} >
            <li onClick={toggleDropdown} className="px-4 py-2 bg-[#E4FDEC] hover:bg-green-300 cursor-pointer">Broswe Jobs</li>
            </Link>
            {/* <Link to={'/freelancerdashboard/managejobs'}>
            <li onClick={toggleDropdown} className="px-4 py-2 hover:bg-green-300 cursor-pointer">Manage Jobs</li>
            </Link> */}
          </ul>
        </div>
      )}
    </div>
          <button className={`flex items-center gap-2 px-1 py-2 hover:bg-green-300 rounded-md cursor-pointer ${isCollapsed ? 'justify-center' : 'text-gray-600'}`}>
            <Link className='flex gap-2' to={'/freelancerdashboard/employers'}><ClipboardList /> {!isCollapsed && 'Browse Employers'}</Link>
          </button>
          <button className={`flex items-center gap-2 px-1 py-2 hover:bg-green-300 rounded-md cursor-pointer ${isCollapsed ? 'justify-center' : 'text-gray-600'}`}>
            <Link className='flex gap-2' to={'/freelancerdashboard/bids'}>
            <HandHelping /> {!isCollapsed && 'Bids'}
            </Link>
          </button>
          
        </div>

        <div className={`text-sm mt-8 font-bold ${isCollapsed ? 'hidden' : 'text-green-600'}`}>Account</div>
        <div className="flex flex-col gap-4 mt-2">
          
          <button className={`flex items-center gap-2 px-1 py-2 hover:bg-green-300 rounded-md cursor-pointer ${isCollapsed ? 'justify-center' : 'text-gray-600'}`}>
            <Link className='flex gap-2' to={'/freelancerdashboard/userprofile'}>
            <Settings /> {!isCollapsed && 'My Profile'}
            </Link>
          </button>
          <button onClick={logout} className={`flex items-center gap-2 px-1 py-2 hover:bg-green-300 rounded-md cursor-pointer ${isCollapsed ? 'justify-center' : 'text-gray-600'}`}>
            <LogOut /> {!isCollapsed && 'Logout'}
          </button>
        </div>
      </aside>
    </>
  );
};

export default FreeLancerSidebar;