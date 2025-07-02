import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useGetUserStore from "@/store/useGetUserStore";

const FreelancerProfile = () => {
  const { user, loading } = useGetUserStore();
  const navigate = useNavigate();

  if (loading) return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;
  if (!user) return <div className="text-center py-10 text-red-500">No user found</div>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 animate-fade-in">
      <div className="bg-white/70 backdrop-blur-lg border shadow-lg rounded-3xl p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar || "/avatar.avif"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 object-cover shadow-md"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-green-700">{user.firstName}</h1>
            <p className="text-sm text-gray-500">{user.position || "No title"}</p>
            <p className="text-sm text-gray-600 mt-2">{user.location || "No location"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileField label="Email" value={user.email} />
          <ProfileField label="Phone" value={user.phone} />
          <ProfileField label="Role" value={user.role} />
          <ProfileField label="Experience" value={user.experience} />
          <ProfileField label="Skill" value={user.skill} />
          <ProfileField label="Certification" value={user.certification} />
          <ProfileField label="Education" value={user.education} />
          <ProfileField label="Rate (₦/hr)" value={user.rate || "0"} />
          <ProfileField label="Portfolio" value={user.portfolio} />
          <ProfileField label="Work History" value={user.history} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-1">About Me</h2>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg shadow-sm">
            {user.aboutMe || "No bio available."}
          </p>
        </div>

        <div className="text-right">
            <Link to={'/freelancerdashboard/editprofile'}>
            <button
            className="px-6 py-2 bg-green-600 text-white rounded-md cursor-pointer shadow hover:bg-green-700 transition"
          >
            Edit Profile
          </button>
            </Link>
          
        </div>
      </div>
    </section>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-md font-semibold text-green-500 truncate">{value || "N/A"}</p>
  </div>
);

export default FreelancerProfile;
