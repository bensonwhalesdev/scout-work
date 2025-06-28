import React, { useState } from 'react';
import { AlignRight, X } from 'lucide-react';
import ReuseableButton from '@/components/Reuseables/ResuableButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow border-b border-gray-300">
        <nav className="flex justify-between items-center p-2 w-[90%] mx-auto">
          {/* Logo */}
          <div>
            <img className="w-20" src="/logo.jpg" alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex border-gray-300 border-l border-r px-10 py-2">
            <ul className="flex gap-4 font-bold">
              <li>Home</li>
              <li>About</li>
              <li>Employer</li>
              <li>Freelancer</li>
            </ul>
          </div>

          {/* Buttons + Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              <ReuseableButton classStyle="bg-[#fff] hover:bg-[#fff] cursor-pointer hover:text-[#FF701D] text-black" text="Login" />
              <ReuseableButton classStyle="bg-[#fff] hover:bg-[#fff] cursor-pointer hover:text-[#FF701D] text-black" text="+ Register" />
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
              <AlignRight size={28} />
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img className="w-16" src="/logo.jpg" alt="logo" />
          <X className="cursor-pointer" onClick={toggleSidebar} />
        </div>

        <ul className="flex flex-col p-4 space-y-4 font-bold">
          <li onClick={toggleSidebar}>Home</li>
          <li onClick={toggleSidebar}>About</li>
          <li onClick={toggleSidebar}>Employer</li>
          <li onClick={toggleSidebar}>Freelancer</li>
        </ul>

        <div className="p-4 flex flex-col gap-2">
          <ReuseableButton classStyle="bg-[#fff] hover:bg-[#fff] cursor-pointer hover:text-[#FF701D] text-black" text="Login" />
          <ReuseableButton classStyle="bg-[#fff] hover:bg-[#fff] cursor-pointer hover:text-[#FF701D] text-black" text="+ Register" />
        </div>
      </div>
    </>
  );
};

export default Header;
