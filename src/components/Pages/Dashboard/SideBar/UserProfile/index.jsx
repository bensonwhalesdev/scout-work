import React, { useRef } from "react";
import { Mail, Phone, User, Briefcase, Info, Camera } from "lucide-react";
import useGetUserStore from "@/store/useGetUserStore";
import PreLoad from "@/components/Reuseables/PreLoad";
import { apiClient } from "@/lib/client";
import { toast } from "sonner";

const UserProfile = () => {
  const { user, setUser, loading, error } = useGetUserStore();
  const fileInputRef = useRef(null);

  if (loading) return <div className="flex justify-center items-center mt-50"><PreLoad /></div>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64String = reader.result;

      try {
        const res = await apiClient.patch(`/user/${user._id}`, { avatar: base64String });
        setUser(res.data.user); // update store
        toast.success("Profile picture updated!");
      } catch (err) {
        toast.error("Failed to update profile picture.");
        console.error(err);
      }
    };

    reader.readAsDataURL(file); // Converts to base64
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6 relative">
        <div className="relative group">
          <img
            src={user?.avatar || "/avatar.jpeg"}
            alt="Profile"
            onClick={handleAvatarClick}
            className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-green-500 cursor-pointer group-hover:opacity-80"
          />
          <Camera className="absolute bottom-2 right-2 w-5 h-5 text-white bg-green-600 p-1 rounded-full shadow group-hover:scale-110 transition" />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

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
            "N/A."}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
