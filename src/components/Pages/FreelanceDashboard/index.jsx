import React from "react";
import useGetUserStore from "@/store/useGetUserStore";
import {
  Briefcase,
  PlusCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  User,
} from "lucide-react";

const FreelancerDashboard = () => {
  const { user } = useGetUserStore();

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Welcome Block */}
      <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-md p-6 mb-8 flex flex-col md:flex-row items-center justify-between transition duration-300">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Hello, {user?.firstName || "Freelancer"}
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Ready to elevate your freelancing today?
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md">
            <PlusCircle size={18} />
            Post a New Service
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Active Jobs",
            value: "5",
            icon: <Briefcase className="text-indigo-500" />,
          },
          {
            title: "Completed",
            value: "12",
            icon: <CheckCircle className="text-green-500" />,
          },
          {
            title: "Pending",
            value: "2",
            icon: <Clock className="text-yellow-500" />,
          },
          {
            title: "Profile Views",
            value: "238",
            icon: <TrendingUp className="text-pink-500" />,
          },
        ].map(({ title, value, icon }, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-5 border border-white/30 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500">{title}</p>
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-medium shadow hover:scale-105 transition">
            Apply to New Jobs
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-3 rounded-lg font-medium shadow hover:scale-105 transition">
            Update Portfolio
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium shadow hover:scale-105 transition">
            Share Your Profile
          </button>
        </div>
      </div>

      {/* About Me Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">About You</h2>
        <p className="text-gray-600 text-sm">
          {user?.aboutMe ||
            "Tell potential clients more about your experience, passion, and areas of expertise. This helps you stand out!"}
        </p>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
