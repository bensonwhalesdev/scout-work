import React from 'react';
import SideBar from './SideBar';
import HeaderBar from './HeaderBar';


const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <main className="flex-1 p-6">
        <HeaderBar />
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-800">Hi, Tom</h1>
          <p className="text-gray-500 mb-6">We are glad to see you again!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Active Job Listings</p>
              <p className="text-3xl font-bold text-black">0</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Total Jobs Views</p>
              <p className="text-3xl font-bold text-black">0</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Total Applications</p>
              <p className="text-3xl font-bold text-black">0</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
                <button className="text-xs text-gray-500">Clear All</button>
              </div>
              <div className="text-sm">
                <p>Task <span className="text-green-600 font-semibold">Test Security Staff</span> was created. <span className="text-gray-400">1 day ago</span></p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Listing Packages</h2>
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