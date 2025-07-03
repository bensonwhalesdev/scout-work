import React, { useState } from "react";
import useFreelancerProfile from "./Hook/useFreelancerProfile";
import PreLoad from "@/components/Reuseables/PreLoad";

const tabs = ["Profile", "Settings"];

const FreelancerProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const {user, formData, handleChange, handleSubmit,handleAvatarChange } = useFreelancerProfile();

  if (!user) {
    return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 font-semibold ${
           activeTab === tab ? "border-b-4 border-green-600 text-green-700 cursor-pointer" : "text-gray-500 cursor-pointer"} `}>{tab}</button>
        ))}
      </div>

      {/* Profile View */}
      {activeTab === "Profile" && (
        <div className="bg-white/70 backdrop-blur-lg border shadow-lg rounded-3xl p-8 space-y-6 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <label className="cursor-pointer relative group">
              <img src={user.avatar || "/avatar.jpeg"} alt="Avatar" className="w-32 h-32 rounded-full border-4 border-green-500 object-cover shadow-md group-hover:opacity-80"/>
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange}/>
              <div className="absolute top-24 left-4 text-xs bg-white border p-1 rounded hidden group-hover:block text-center">Click to change</div>
            </label>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-green-700">{user.firstName}</h1>
              <p className="text-sm text-gray-500">{user.position || "No title"}</p>
              <p className="text-sm text-gray-600 mt-2">{user.location || "No location"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[ ["Email", user.email], ["Phone", user.phone], ["Role", user.role],
              ["Experience", user.experience], ["Skill", user.skill], ["Certification", user.certification],
              ["Education", user.education], ["Rate (₦/hr)", user.rate || "0"], ["Portfolio", user.portfolio],
              ["Work History", user.history], ].map(([label, value]) => (
              <div key={label} className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-md font-semibold text-green-600 truncate">{value || "N/A"}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-green-600 mb-1">About Me</h2>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg shadow-sm">
                {user.aboutMe || "No bio available."}
            </p>
          </div>
        </div>
      )}

      {/* Settings (Edit Form) */}
      {activeTab === "Settings" && (
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg border shadow-lg rounded-3xl p-8 space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-green-700">Edit Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[ "firstName", "email", "phone", "position", "location", "experience", "skill", "certification",
              "education", "portfolio", "history","aboutMe",].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-sm text-gray-600 capitalize">{field}</label>
                <input type="text" name={field} value={formData[field] || ""} onChange={handleChange}
                  className="mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"/>
              </div>
            ))}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Rate</label>
              <input type="number" name="rate" value={formData.rate} onChange={handleChange} className="mt-1 px-4 py-2 border rounded-md shadow-sm"/>
            </div>
          </div>

          <div className="text-right">
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 transition">Save Changes</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default FreelancerProfile;
