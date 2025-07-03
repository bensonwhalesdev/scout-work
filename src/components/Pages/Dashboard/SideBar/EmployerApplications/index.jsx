import React, { useEffect, useState } from "react";
import useGetUserStore from "@/store/useGetUserStore";
import { Mail, FileText, User, CalendarDays } from "lucide-react";
import useGetUserJobs from "../ManageJobs/Hook/useGetUserJobs";
import { apiClient } from "@/lib/client";
import { Link } from "react-router-dom";

const EmployerApplications = () => {
  const { user } = useGetUserStore();
  const { jobs } = useGetUserJobs();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await apiClient.get("/jobapply");

        const employerJobIds = jobs.map((job) => job._id);

        const filtered = res.data.filter((app) =>
          employerJobIds.includes(app.jobId)
        );
                 
        setApplications(filtered);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user && jobs.length > 0) fetchApplications();
  }, [user, jobs]);

  const getJobTitle = (jobId) => {
    const job = jobs.find((job) => job._id === jobId);
    return job ? job.title : "Unknown Job";
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) return <div className="text-center py-20 text-gray-600">Loading applications...</div>;

  if (applications.length === 0)
    return (
      <div className="text-center py-20 text-gray-500 italic">
        No applications received yet for your jobs.
      </div>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Applications for Your Jobs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white border rounded-2xl p-6 shadow hover:shadow-md transition-all relative"
          >
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">
                <User className="inline-block w-4 h-4 mr-1 text-green-500" />
                {app.name || "Unnamed Freelancer"}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <Mail className="inline-block w-4 h-4 mr-1 text-green-500" />
                {app.email}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <FileText className="inline-block w-4 h-4 mr-1 text-green-500" />
                Applied for: <span className="font-semibold">{getJobTitle(app.jobId)}</span>
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <CalendarDays className="inline-block w-4 h-4 mr-1 text-green-500" />
                Date Applied: <span className="font-semibold">{formatDate(app.createdAt)}</span>
              </p>
              <p className="text-sm mt-2 text-gray-700">
                <span className="font-medium text-green-600">Message:</span> {app.message}
              </p>
            </div>

            {app.resume && (
              <a
                href={`http://localhost:4000/${app.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                View Resume
              </a>
            )}

            {app.userId && (
              <Link
                to={`/dashboard/freelancers/${app.userId}`}
                className="inline-block ml-2 mt-3 px-4 py-2 text-sm border border-green-600 text-green-700 rounded-md hover:bg-green-50 transition"
              >
                View Profile
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployerApplications;
