import React, { useState } from 'react';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Hi, Tom</h1>
          <p className="text-gray-500 mb-6">We are glad to see you again!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-4 hover:bg-green-400 hover:text-white border-l-4 border-green-400 hover:border-blue-500 transition duration-300">
              <p className="text-sm font-semibold  mb-2">Active Job Listings</p>
              <p className="text-3xl font-bold">0</p>
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
                <button className="text-xs text-gray-500">Clear All</button>
              </div>
              <div className="text-sm">
                <p>Task <span className="text-green-600 font-semibold">Test Security Staff</span> was created. <span className="text-gray-400">1 day ago</span></p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-green-400">Your Listing Packages</h2>
              <div className="text-sm">
                <p><strong>Basic</strong></p>
                <p className="text-gray-500 text-sm">Order: #28768 | Price: $58.00 | 3 listings posted</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
