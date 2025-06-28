import React from 'react';
import { LayoutDashboard, MessageSquare, Bookmark, Briefcase, Building2, ClipboardList, Settings, LogOut } from 'lucide-react';

const SideBar = () => {
  return (
    <aside className="w-64 min-h-screen border-r bg-white px-4 py-6 hidden md:block">
      <div className="text-sm text-gray-700 mb-6 font-bold">Start</div>
      <div className="flex flex-col gap-4">
        <button className="flex items-center gap-2 text-green-600 font-semibold">
          <LayoutDashboard /> Dashboard
        </button>
        <button className="flex items-center gap-2 text-gray-600">
          <MessageSquare /> Messages
        </button>
        <button className="flex items-center gap-2 text-gray-600">
          <Bookmark /> My Bookmarks
        </button>
      </div>

      <div className="text-sm text-green-600 mt-8 font-bold">Organize and Manage</div>
      <div className="flex flex-col gap-4 mt-2">
        <button className="flex items-center gap-2 text-gray-600">
          <Briefcase /> Jobs
        </button>
        <button className="flex items-center gap-2 text-gray-600">
          <Building2 /> Companies
        </button>
        <button className="flex items-center gap-2 text-gray-600">
          <ClipboardList /> Tasks
        </button>
      </div>

      <div className="text-sm text-green-600 mt-8 font-bold">Account</div>
      <div className="flex flex-col gap-4 mt-2">
        <button className="flex items-center gap-2 text-gray-600">
          <Settings /> My Profile
        </button>
        <button className="flex items-center gap-2 text-gray-600">
          <LogOut /> Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;