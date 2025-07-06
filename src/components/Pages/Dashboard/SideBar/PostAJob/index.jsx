import React, { useState } from 'react';
import { FolderClosed } from 'lucide-react';
import usePostJob from './Hook/usePostJob';

const PostaJob = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('')
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

    const jobData = { title, company, location,region, jobType, isRemote, isOnsite, tags,category,
      description, rate, applyLink, };

    postJob(jobData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a Job</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <FolderClosed className="text-green-600" />
            <h2 className="text-lg font-semibold text-gray-700 text-sm">Job Submission Form</h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter job title"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Company's Name</label>
                <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter Company's Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="Enter Country"
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
                  <option value="Health Care">Health Care</option>
                  <option value="Design">Design</option>
                  <option value="Arts & Humanities">Arts & Humanities</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Legal">Legal</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Product Management">Product Management</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm h-32"
                placeholder="Describe the job responsibilities and requirements 'Min 10 characters'"
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

            <button type="submit" disabled={loading} className="w-full bg-[#26AE61] hover:bg-[#195A22] text-white py-2 px-4 rounded-md transition cursor-pointer">{loading ? 'Submitting...' : 'Submit Job'}</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PostaJob;
