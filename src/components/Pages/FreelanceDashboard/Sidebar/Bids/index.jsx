import React, { useEffect, useState } from "react";
import { Download, FileText, CalendarDays, Briefcase, Tag } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import useUserApplications from "./Hook/useUserApplication";
import PreLoad from "@/components/Reuseables/PreLoad";

const Bids = () => {
  const { applications, jobs, loading, error } = useUserApplications();

  if (loading) return <div className="flex justify-center items-center mt-50"><PreLoad /></div>;
  if (applications.length === 0)
    return <p className="text-center text-gray-400 mt-10">You haven’t applied for any jobs yet.</p>;

  const getJobDetails = (jobId) => jobs.find((job) => job._id === jobId);

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-0">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Applications</h2>
      <div className="space-y-6">
        {applications.map((app) => {
          const job = getJobDetails(app.jobId);

          return (
            <div key={app._id} className="bg-white/80 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6 transition-all">
              {/* Job Info */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
                  <Briefcase className="w-5 h-5 text-green-600" />{job ? job.title : "Job Title Unavailable"}
                </div>
                <p className="text-sm text-gray-600 mt-1">{job?.company || "Company Info Missing"}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job?.tags?.split(",").map((tag, i) => (
                    <span key={i} className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">{tag.trim()}</span>
                  ))}
                </div>
              </div>

              {/* Application Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-md font-medium text-gray-700">{app.name}</h3>
                  <p className="text-sm text-gray-500">{app.email} • {app.phone}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 md:mt-0">
                  <CalendarDays className="w-4 h-4" />
                  {formatDistanceToNow(new Date(app.createdAt), { addSuffix: true })}
                </div>
              </div>

              {/* Message & Resume */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-gray-700">
                  <FileText className="w-4 h-4 mt-0.5 text-green-600" />
                  <p><span className="font-medium">Message:</span> {app.message}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <a href={`http://localhost:4000/${app.resume}`} target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition">View Resume</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Bids;
