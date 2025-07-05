import { Mail, FileText, User, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import PreLoad from "@/components/Reuseables/PreLoad";
import useEmployerApplications from "./Hook/useEmployerApplications";
import { useState } from "react";
import MessageWithToggle from "./MessageToogle";
import OfferJobModal from "./OfferjobModal";

const EmployerApplications = () => {
  const { applications, loading, getJobTitle, formatDate } = useEmployerApplications();
 
  if (loading) return <div className="flex justify-center items-center mt-20"><PreLoad /></div>;

  if (applications.length === 0)
    return (
      <div className="text-center py-20 text-gray-500 italic">No applications received yet for your jobs.</div>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Applications for Your Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div key={app._id} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-sm text-gray-500 flex items-center">
                <User className="w-4 h-4 mr-2 text-green-500" />
                <span>{app.name || "Unnamed Freelancer"}</span>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-green-500" />
                <span>{app.email}</span>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-green-500" />
                <span>Applied for: <span className="font-semibold text-gray-700">{getJobTitle(app.jobId)}</span></span>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <CalendarDays className="w-4 h-4 mr-2 text-green-500" />
                <span>Date Applied: <span className="font-semibold text-gray-700">{formatDate(app.createdAt)}</span></span>
              </div>
              <MessageWithToggle message={app.message} />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {app.resume && (
                <a href={`http://localhost:4000/${app.resume}`} target="_blank"rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition cursor-pointer">View Resume</a>)}
              {app.userId && (
                <Link to={`/dashboard/freelancers/${app.userId}`} className="px-4 py-2 text-sm border border-green-600 text-green-700 rounded-md hover:bg-green-50 transition cursor-pointer">View Profile</Link>
              )}
              <OfferJobModal freelancerId={app.userId} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EmployerApplications;
