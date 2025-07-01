import useGetUserStore from '@/store/useGetUserStore';
import React, { useState } from 'react';
import useGetUserJobs from './SideBar/ManageJobs/Hook/useGetUserJobs';
import { formatDistanceToNow } from "date-fns";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { user } = useGetUserStore()
  const { jobs  } = useGetUserJobs();

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Hi, {user?.firstName}</h1>
          <p className="text-gray-500 mb-6">We are glad to see you!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-4 hover:bg-green-400 hover:text-white border-l-4 border-green-400 hover:border-blue-500 transition duration-300">
              <p className="text-sm font-semibold  mb-2">Active Job Listings</p>
              <p className="text-3xl font-bold">{jobs.length}</p>
            </div>
            <div className="bg-white rounded shadow p-4 hover:bg-green-400 hover:text-white border-l-4 border-purple-400 hover:border-blue-500 transition duration-300">
              <p className="text-sm font-semibold mb-2">Total Jobs Views</p>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="bg-white rounded shadow p-4 hover:bg-green-400 hover:text-white border-l-4 border-yellow-400 hover:border-blue-500 transition duration-300">
              <p className="text-sm font-semibold mb-2">Total Applications</p>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl">
              <div className="flex justify-between items-center mb-4 border-b-2 border-green-400">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
              </div>
              <div className="text-sm space-y-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
               {jobs.length === 0 ? (
               <p className="text-gray-500">No recent activity</p>
                ) : (
                 jobs
                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                 .slice(0, 3)
                 .map((job) => (
                 <div key={job._id} className="flex items-start justify-between">
                  <div>
                   <Link to={`/dashboard/managejobs/${job._id}`}>
                   <p>Task{" "}<span className="text-green-600 font-semibold">{job.title}</span>{" "}was created.</p>
                   </Link>
                   <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}</p>
                </div>
              </div>)))}
             </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-green-400">Your Listings</h2>
              <div className="text-sm space-y-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-base font-semibold text-gray-800 border-b pb-2">Basic</p>
              { jobs.length === 0 ? (
                <p className="text-gray-500">You have not posted a job yet</p>
                 ) : (
                jobs.map((job) => (
                 <div key={job._id} className="p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition border border-gray-100">
                  <Link to={`/dashboard/managejobs/${job._id}`}>
                  <p className="font-medium text-green-700">{job.title}</p>
                  </Link>
                  <p className="text-gray-600 text-xs">{job.tags}</p>
              </div>))
              )
              }
             </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
