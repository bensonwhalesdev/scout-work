import React, { useState } from "react";
import useFreelancerProfile from "./Hook/useFreelancerProfile";
import PreLoad from "@/components/Reuseables/PreLoad";
import { Camera, Star } from "lucide-react";

const tabs = ["Profile", "Settings"];

const FreelancerProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const {user, formData, handleChange, handleSubmit,handleAvatarChange, loading } = useFreelancerProfile();

  if (!user) {
    return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;
  }

  return (
    <section className="max-w-6xl  mx-auto px-4 py-10">
  {/* Tabs */}
  <div className="flex flex-wrap gap-4 border-b pb-4 mb-8">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`text-sm font-semibold px-5 py-2 rounded-t-md transition-all ${
          activeTab === tab
            ? "text-green-700 border-b-4 border-green-600 shadow"
            : "text-gray-500 hover:text-green-600"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Profile View */}
  {activeTab === "Profile" && (
    <div className="bg-white/80 backdrop-blur-md border rounded-3xl shadow-2xl p-8 space-y-8 animate-fade-in">
      {/* Profile Top */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <label className="relative group cursor-pointer">
          <img
            src={user.avatar || "/avatar.jpeg"}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-green-500 object-cover shadow-lg group-hover:opacity-80 transition"
          />
          <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs bg-white border px-2 py-1 rounded shadow hidden group-hover:block">
            <Camera className="inline-block w-4 h-4 text-green-500" />
          </span>
        </label>

        <div className="text-center md:text-left space-y-1">
          <h1 className="text-3xl font-bold text-green-700">{user.firstName}</h1>
          <p className="text-sm text-gray-600">{user.position || "No title"}</p>
          <p className="text-sm text-gray-600">{user.location || "No location"}</p>
          <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            {user.skill || "No skills"}
          </p>
        </div>
      </div>

      {/* Grid Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Email", value: user.email },
          { label: "Phone Number", value: user.phone },
          { label: "Rate (₦/hr)", value: user.rate || "N/A" },
          {
            label: "Portfolio",
            value: user.portfolio ? (
              <a
                href={
                  user.portfolio.startsWith("http")
                    ? user.portfolio
                    : `https://${user.portfolio}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                {user.portfolio}
              </a>
            ) : (
              <span className="italic text-gray-400">N/A</span>
            ),
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border border-green-100 p-5 rounded-xl shadow hover:shadow-md transition-all"
          >
            <h3 className="text-green-600 font-semibold text-sm mb-1">{item.label}</h3>
            <p className="text-gray-700 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* More Info Sections */}
      {[
        { title: "Education", value: user.education },
        { title: "Certification", value: user.certification },
        { title: "Work History", value: user.history },
        { title: "About Me", value: user.aboutMe },
        { title: "Experience", value: user.experience },
      ].map((item, i) => (
        <div key={i}>
          <h2 className="text-lg font-semibold text-green-600 mb-1">{item.title}</h2>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-xl shadow-inner text-sm leading-relaxed">
            {item.value || "N/A"}
          </p>
        </div>
      ))}
    </div>
  )}

  {/* Settings (Edit Form) */}
  {activeTab === "Settings" && (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md border shadow-2xl rounded-3xl p-8 space-y-6 animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-green-700">Edit Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "firstName",
          "email",
          "phone",
          "position",
          "location",
          "experience",
          "skill",
          "certification",
          "education",
          "history",
          "aboutMe",
        ].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm text-gray-600 capitalize mb-1">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="px-4 py-2 border border-green-100 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 text-sm"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}

        {/* Portfolio */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Portfolio URL</label>
          <input
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="px-4 py-2 border border-green-100 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 text-sm"
            placeholder="https://yourportfolio.com"
          />
        </div>

        {/* Rate */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Rate (₦/hr)</label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="px-4 py-2 border border-green-100 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 text-sm"
            placeholder="e.g. 5000"
          />
        </div>
      </div>

      <div className="text-right pt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-200"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  )}
</section>
  );
};

export default FreelancerProfile;
