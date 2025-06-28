import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header className="bg-white shadow px-4 py-2 flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <img src="/logo1.png" alt="logo" className="h-10" />
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#">Home</a>
          <div className="relative group">
            <button className="flex items-center gap-1">For Candidates <ChevronDown size={16} /></button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">For Employers <ChevronDown size={16} /></button>
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <img src="/avatar.avif" alt="avatar" className="w-8 h-8 rounded-full" />
        <span className="text-sm">Hi, Tom <ChevronDown size={16} /></span>
      </div>
    </header>
  );
};

export default HeaderBar;