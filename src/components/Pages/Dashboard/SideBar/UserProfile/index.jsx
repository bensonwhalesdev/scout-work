import React, { useEffect } from "react";
import { Mail, Phone, User, Briefcase, Info } from "lucide-react";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";

const UserProfile = () => {
const { user, loading, error } = useGetUserStore();

  if (loading) return <p className="text-center mt-10">Loading user...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user?.avatar || "/avatar.avif"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-green-500"
        />

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <User className="w-5 h-5 text-green-600" />
            {user?.firstName}
          </h2>

          <p className="flex items-center text-gray-600 gap-2 mt-2">
            <Phone className="w-4 h-4 text-green-600" />
            {user?.phone}
          </p>

          <p className="flex items-center text-gray-600 gap-2 mt-1">
            <Mail className="w-4 h-4 text-green-600" />
            {user?.email}
          </p>

          <p className="flex items-center text-gray-600 gap-2 mt-1">
            <Briefcase className="w-4 h-4 text-green-600" />
            {user?.position}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5 text-green-600" />
          About Me
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {user?.aboutMe ||
            "Passionate about building innovative products and solving user-centric problems. Brings a background in technology and a strong sense of design."}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
