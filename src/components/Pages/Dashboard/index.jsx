import useGetUserStore from '@/store/useGetUserStore';
import React from 'react';
import useGetUserJobs from './SideBar/ManageJobs/Hook/useGetUserJobs';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { Briefcase, Eye, Users } from 'lucide-react';

const Dashboard = () => {
  const { user } = useGetUserStore();
  const { jobs } = useGetUserJobs();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-white px-4 md:px-6 py-6">
      <main className="w-full">
        {/* Welcome Message */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Hi, {user?.firstName}</h1>
          <p className="text-gray-600 text-sm md:text-base">We're excited to see what you'll achieve today!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
          <StatCard
            title="Active Job Listings"
            value={jobs.length}
            icon={<Briefcase className="text-green-500" />}
            borderColor="border-green-400"
            gradient="from-green-100 to-green-200"
          />
          <StatCard
            title="Total Job Views"
            value={0}
            icon={<Eye className="text-purple-500" />}
            borderColor="border-purple-400"
            gradient="from-purple-100 to-purple-200"
          />
          <StatCard
            title="Total Applications"
            value={0}
            icon={<Users className="text-yellow-500" />}
            borderColor="border-yellow-400"
            gradient="from-yellow-100 to-yellow-200"
          />
        </div>

        {/* Lower Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 border border-gray-200">
            <div className="border-b border-green-400 pb-3 mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Recent Activities</h2>
            </div>
            <div className="space-y-4">
              {jobs.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent activity</p>
              ) : (
                jobs
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 3)
                  .map((job) => (
                    <div key={job._id} className="bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg border border-gray-100">
                      <Link to={`/dashboard/managejobs/${job._id}`}>
                        <p className="text-sm text-gray-700">
                          Task <span className="text-green-600 font-semibold">{job.title}</span> was created.
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                        </p>
                      </Link>
                    </div>
                  ))
              )}
            </div>
          </div>

          {/* Your Listings */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 border border-gray-200">
            <div className="border-b border-green-400 pb-3 mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Your Listings</h2>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-600">Basic</p>
              {jobs.length === 0 ? (
                <p className="text-gray-500 text-sm">You have not posted any job yet</p>
              ) : (
                jobs.map((job) => (
                  <Link to={`/dashboard/managejobs/${job._id}`} key={job._id}>
                    <div className="p-4 bg-gray-50 hover:bg-gray-100 transition rounded-lg border border-gray-100">
                      <p className="font-medium text-green-700">{job.title}</p>
                      <p className="text-xs text-gray-600">{job.tags}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Reusable StatCard Component
const StatCard = ({ title, value, icon, borderColor, gradient }) => (
  <div
    className={`bg-gradient-to-br ${gradient} p-4 sm:p-5 md:p-6 rounded-xl shadow-md border-l-4 ${borderColor} transition transform hover:scale-[1.02]`}
  >
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{value}</h3>
  </div>
);

export default Dashboard;
