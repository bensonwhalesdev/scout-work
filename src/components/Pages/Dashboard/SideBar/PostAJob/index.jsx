import React, { useState } from 'react';
import HeaderBar from '../../HeaderBar';
import Sidebar from '../../SideBar';
import { FolderClosed } from 'lucide-react';
import usePostJob from './Hook/usePostJob';


const PostaJob = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [region, setRegion] = useState('');
  const [jobType, setJobType] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [isOnsite, setIsOnsite] = useState(false);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [applyLink, setApplyLink] = useState('');

  const { postJob, loading, error, success } = usePostJob();

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      title,
      location,
      region,
      jobType,
      isRemote,
      isOnsite,
      tags,
      category,
      description,
      rate,
      applyLink,
    };

    postJob(jobData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderBar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a Job</h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FolderClosed className="text-green-600" />
              <h2 className="text-lg font-semibold text-gray-700">Job Submission Form</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter job title"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Eg: Abuja"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Region</label>
                  <input
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="Enter region"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={isRemote}
                      onChange={() => setIsRemote(!isRemote)}
                    /> Remote
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={isOnsite}
                      onChange={() => setIsOnsite(!isOnsite)}
                    /> Onsite
                  </label>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  >
                    <option value="">Select type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Tags</label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Eg: PHP, Social media, Management"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  >
                    <option value="">Select category</option>
                    <option value="Web development">Web development</option>
                    <option value="Mobile development">Mobile development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm h-32"
                  placeholder="Describe the job responsibilities and requirements"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Min Rate/hr ($)</label>
                  <input
                    type="text"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Eg: 10"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">External Apply Link</label>
                  <input
                    type="text"
                    value={applyLink}
                    onChange={(e) => setApplyLink(e.target.value)}
                    placeholder="Eg: https://example.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#26AE61] hover:bg-[#195A22] text-white py-2 px-4 rounded-md transition"
              >
                {loading ? 'Submitting...' : 'Submit Job'}
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PostaJob;
