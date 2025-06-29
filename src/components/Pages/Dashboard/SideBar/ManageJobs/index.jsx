import React, { useState } from "react";
import HeaderBar from "../../HeaderBar";
import Sidebar from "../../SideBar";
import { BriefcaseBusiness } from "lucide-react";
import useGetUserJobs from "./Hook/useGetUserJobs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ManageJobs = () => {
  const { jobs, editJob, deleteJob, loading, error } = useGetUserJobs();
  const [editedJob, setEditedJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (job) => {
    setEditedJob(job);
    setIsEditing(true);
  };

  const handleEditChange = (field, value) => {
    setEditedJob((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSubmit = () => {
    editJob(editedJob._id, editedJob);
    setIsEditing(false);
  };

  const handleDelete = (jobId) => {
    if (confirm("Are you sure you want to delete this job?")) {
      deleteJob(jobId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderBar />

      <div className="flex flex-1">
        <Sidebar />

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
                  <Dialog key={job._id}>
                    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
                      <h4 className="text-md font-semibold text-green-600 truncate">{job.title}</h4>
                      <p className="text-sm text-black">{job.location}</p>
                      <p className="text-xs text-black"><strong>{job.tags}</strong></p>
                      <p className="text-xs text-black">{job.jobType}</p>

                      <DialogTrigger asChild>
                        <button className="bg-green-400 text-white px-2 py-1 rounded-md mt-2 cursor-pointer hover:bg-green-500 transition">
                          View Job
                        </button>
                      </DialogTrigger>
                    </div>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-green-600">{job.title}</DialogTitle>
                        <DialogDescription>
                          {isEditing && editedJob?._id === job._id ? (
                            <div className="space-y-4 mt-4">
                              <Input
                                value={editedJob.title}
                                onChange={(e) => handleEditChange("title", e.target.value)}
                                placeholder="Job Title"
                              />
                              <Textarea
                                value={editedJob.description}
                                onChange={(e) => handleEditChange("description", e.target.value)}
                                placeholder="Job Description"
                              />
                              <div className="flex justify-end gap-3 mt-4">
                                <Button
                                  variant="outline"
                                  onClick={() => setIsEditing(false)}
                                >
                                  Cancel
                                </Button>
                                <Button onClick={handleEditSubmit}>Save</Button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p><strong>Location:</strong> {job.location}</p>
                              <p><strong>Region:</strong> {job.region}</p>
                              <p><strong>Job Type:</strong> {job.jobType}</p>
                              <p><strong>Category:</strong> {job.category}</p>
                              <p><strong>Tags:</strong> {job.tags}</p>
                              <p><strong>Rate:</strong> ${job.rate}/hr</p>
                              <p><strong>Remote:</strong>{" "}{job.isRemote ? "Yes" : "No"}</p>
                              <p><strong>Onsite:</strong>{" "}{job.isOnsite ? "Yes" : "No"}</p>
                              <p className="mt-2"><strong>Description:</strong></p>
                              <p className="text-sm text-gray-700 whitespace-pre-line">{job.description}</p>
                              {job.applyLink && (
                                <p className="mt-2">
                                  <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                    Apply Here
                                  </a>
                                </p>
                              )}
                              <div className="flex justify-end gap-4 mt-6">
                                <button
                                  className="text-white bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded cursor-pointer"
                                  onClick={() => handleEdit(job)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded cursor-pointer"
                                  onClick={() => handleDelete(job._id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </>
                          )}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageJobs;
