import React, { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";
import useActiveJobs from "./Hook/useActiveJobs";

const ActiveJobs = () => {
 const { activeJobs } = useActiveJobs();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Active Jobs</h2>

      {activeJobs.length === 0 ? (
        <p className="text-gray-500 italic">No active jobs yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {activeJobs.map((job) => (
            <div
              key={job._id}
              className="p-5 bg-white border rounded-xl shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-green-700">{job.jobId?.title}</h3>
                <BadgeCheck className="text-green-500" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{job.message}</p>
              <p className="mt-1 text-xs text-gray-400">Offered by: {job.employerId?.firstName || "Employer"}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ActiveJobs;
