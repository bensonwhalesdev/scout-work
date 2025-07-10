import React from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import 'animate.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 mt-20"
      style={{ backgroundImage: "url('/hero-img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 animate__animated animate__slideInDown">
          Find Your Dream Job
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-stretch gap-4 md:gap-3 text-black">
          {/* Job Title */}
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              What job are you looking for?
            </label>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <Briefcase className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Job title, skill, industry"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Where?
            </label>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <MapPin className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="City, State or Zip code"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Category */}
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Categories
            </label>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <select className="bg-transparent outline-none w-full text-sm appearance-none bg-">
                <option >All Categories</option>
                <option>Software Engineer</option>
                <option>Doctor</option>
                <option>Design</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="bg-[#26AE61] hover:bg-[#195A22] text-white px-6 py-3 rounded-md w-full md:w-auto text-sm flex items-center justify-center gap-2 cursor-pointer">
              <Link className='flex gap-2 items-center' to={'/auth'}><Search size={16} />Search</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
