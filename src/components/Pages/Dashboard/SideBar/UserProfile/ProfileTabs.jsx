import React, { useState } from 'react';
import UserProfile from '.';
import EditProfileForm from './EditProfileForm';
import ChangePasswordForm from './ChangepasswordForm';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div> 
        <div className="max-w-4xl mx-auto mt-5">
      {/* Tab Buttons */}
      <div className="flex border-b border-green-400 mb-4">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'profile' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'settings' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'profile' && <UserProfile />}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <EditProfileForm />
            <ChangePasswordForm />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProfileTabs;
