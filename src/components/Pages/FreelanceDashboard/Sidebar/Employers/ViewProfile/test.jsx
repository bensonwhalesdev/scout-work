import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "@/lib/client";
import { Mail, Phone, Briefcase, Info } from "lucide-react";

const UserProfileDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get(`/user/${id}`);
        setUserDetails(res.data);
      } catch (err) {
        console.error("Error loading user details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading profile...</p>;
  if (!userDetails) return <p className="text-center mt-10 text-red-500">User not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={userDetails.avatar || "/avatar.avif"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow border border-green-500"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{userDetails.firstName}</h2>
          <p className="flex items-center text-gray-600 gap-2 mt-2">
            <Phone className="w-4 h-4 text-green-600" /> {userDetails.phone}
          </p>
          <p className="flex items-center text-gray-600 gap-2 mt-1">
            <Mail className="w-4 h-4 text-green-600" /> {userDetails.email}
          </p>
          <p className="flex items-center text-gray-600 gap-2 mt-1">
            <Briefcase className="w-4 h-4 text-green-600" /> {userDetails.position}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5 text-green-600" />
          About Me
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {userDetails.aboutMe || "This user hasn't written an about me yet."}
        </p>
      </div>
    </div>
  );
};

export default UserProfileDetails;
