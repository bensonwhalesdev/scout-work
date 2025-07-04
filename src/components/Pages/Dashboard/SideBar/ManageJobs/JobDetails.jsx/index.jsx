import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {Dialog,DialogContent,DialogHeader,DialogTitle,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useGetUserJobs from "../Hook/useGetUserJobs";
import { apiClient } from "@/lib/client";
import {MapPin,Globe,Briefcase,Tag,DollarSign,Laptop,Building,ExternalLink,Pencil,Trash2, Building2,} from "lucide-react";
import useGetUserStore from "@/store/useGetUserStore";
import ReuseableButton from "@/components/Reuseables/ResuableButton";
import PreLoad from "@/components/Reuseables/PreLoad";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { editJob, deleteJob } = useGetUserJobs();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [formData, setFormData] = useState({});
  const { user } = useGetUserStore();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await apiClient.get(`/job/${id}`);
        setJob(res.data.job);
        setFormData(res.data.job);
      } catch (error) {
        toast.error("Failed to load job");
        navigate("/dashboard/managejobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id, navigate]);

  const handleDelete = async () => {
    await deleteJob(id);
    navigate("/dashboard/managejobs");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await editJob(id, formData);
    setShowEditDialog(false);
    setJob((prev) => ({ ...prev, ...formData }));
  };

  if (loading) return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;
  if (!job) return <p className="p-6 text-red-500">Job not found</p>;

  return (
    <div className="min-h-screen bg-[#E4FDEC] rounded p-6 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-6 flex items-center gap-2">
        {job.title}
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
        <p className="flex items-center gap-2 text-gray-700">
          <Building2 className="w-5 h-5 text-green-600" />
          <span><strong>Company:</strong> {job.company}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <MapPin className="w-5 h-5 text-green-600" />
          <span><strong>Location:</strong> {job.location}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Globe className="w-5 h-5 text-green-600" />
          <span><strong>Region:</strong> {job.region}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Briefcase className="w-5 h-5 text-green-600" />
          <span><strong>Job Type:</strong> {job.jobType}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Tag className="w-5 h-5 text-green-600" />
          <span><strong>Category:</strong> {job.category}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Tag className="w-5 h-5 text-green-600" />
          <span><strong>Tags:</strong> {job.tags}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span><strong>Rate:</strong> {job.rate ? `$${job.rate}/hr` : "Not specified"}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Laptop className="w-5 h-5 text-green-600" />
          <span><strong>Remote:</strong> {job.isRemote ? "Yes" : "No"}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Building className="w-5 h-5 text-green-600" />
          <span><strong>Onsite:</strong> {job.isOnsite ? "Yes" : "No"}</span>
        </p>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <p className="font-semibold text-lg mb-2">Description:</p>
        <p className="whitespace-pre-line text-gray-800 leading-relaxed">{job.description}</p>
        <p className="mt-4 text-blue-500 underline"><a href="">{job.applyLink}</a></p>
        
        <Link to={`/freelancerdashboard/applyjob/${job._id}`}>
        <ReuseableButton classStyle="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out mt-4 focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer" text="Apply Here" />
        </Link>
      </div>

        {user?._id === job?.user && (
         <div className="flex flex-col sm:flex-row gap-4 mt-6">
           <Button onClick={() => setShowEditDialog(true)} className="bg-yellow-500 hover:bg-yellow-600 flex items-center gap-2"><Pencil className="w-4 h-4" />Edit</Button>
           <Button onClick={() => setShowConfirmDialog(true)} className="bg-red-600 hover:bg-red-700 flex items-center gap-2"><Trash2 className="w-4 h-4" />Delete</Button>
         </div>)}

      {/* Confirm Delete Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader><p>Are you sure you want to delete this job?</p>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
            <Button className="bg-red-600" onClick={handleDelete}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Job Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Job</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4 mt-2">
            <div>
              <Label>Title</Label>
              <Input value={formData.title || ""} onChange={(e) => setFormData({ ...formData, title: e.target.value })}/>
            </div>
            <div>
              <Label>Location</Label>
              <Input value={formData.location || ""} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            </div>
            <div>
              <Label>Rate</Label>
              <Input type="number" value={formData.rate || ""} onChange={(e) => setFormData({ ...formData, rate: e.target.value })} />
            </div>
            <div>
              <Label>Description</Label>
              <textarea value={formData.description || ""} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" rows={4} placeholder="Enter a brief description about your work, experience, or services..."></textarea>
            </div>
            <div>
              <Label>Apply Link</Label>
              <Input value={formData.applyLink || ""} onChange={(e) => setFormData({ ...formData, applyLink: e.target.value })}/>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setShowEditDialog(false)}>Cancel</Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDetails;
