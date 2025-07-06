import React, { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock, Search } from "lucide-react";
import { apiClient } from "@/lib/client";
import { Link } from "react-router-dom";
import PreLoad from "@/components/Reuseables/PreLoad";

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await apiClient.get("/job");
        setJobs(res.data);
        setFilteredJobs(res.data); 
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const results = jobs.filter( (job) =>
        job.title?.toLowerCase().includes(lowerSearch) ||
        job.location?.toLowerCase().includes(lowerSearch) ||
        job.tags?.toLowerCase().includes(lowerSearch)
    );
    setFilteredJobs(results);
  }, [searchTerm, jobs]);

  return (
    <div className="min-h-screen bg-[#E4FDEC] rounded py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore Job Opportunities</h1>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input type="text" placeholder="Search by title, location, or tags..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-green-200 shadow focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-sm"/>
            <Search className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Job Listings */}
        {loading ? (
          <div className="flex justify-center items-center mt-50">
            <PreLoad />
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div key={job._id} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-200">
                <h3 className="text-xl font-semibold text-green-600 mb-2 truncate">{job.title}</h3>
                <p className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />{job.jobType || "Full-Time"}
                </p>
                <p className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />{job.location || "Remote"}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  <Clock className="w-3 h-3 inline-block mr-1" /> Posted {new Date(job.createdAt).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-600 mb-4 line-clamp-3">{job.description || "No description provided."}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.tags?.split(",").map((tag, index) => (
                    <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                <Link to={`/freelancerdashboard/jobdetails/${job._id}`} className="inline-block mt-auto bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-green-600 transition">
                  View Job
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
