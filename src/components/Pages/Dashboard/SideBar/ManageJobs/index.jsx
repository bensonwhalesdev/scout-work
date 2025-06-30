import React from "react";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import useGetUserJobs from "./Hook/useGetUserJobs";

const ManageJobs = () => {
  const { jobs, loading, error } = useGetUserJobs();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Jobs</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 border-b-2 border-green-500 pb-3 mb-6">
            <BriefcaseBusiness className="text-green-600" />
            <h3 className="text-lg font-semibold text-gray-700">My Job Listings</h3>
          </div>

          {loading ? (
            <p className="text-gray-500">Loading jobs...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : jobs.length === 0 ? (
            <p className="text-gray-500">You haven't posted any jobs yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-md font-semibold text-green-600 truncate">{job.title}</h4>
                  <p className="text-sm text-black">{job.location}</p>
                  <p className="text-xs text-black"><strong>{job.tags}</strong></p>
                  <p className="text-xs text-black">{job.jobType}</p>

                  <button
                    onClick={() => navigate(`/dashboard/managejobs/${job._id}`)}
                    
                    className="bg-green-400 text-white px-2 py-1 rounded-md mt-2 cursor-pointer hover:bg-green-500 transition"
                  > View Job
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ManageJobs;
