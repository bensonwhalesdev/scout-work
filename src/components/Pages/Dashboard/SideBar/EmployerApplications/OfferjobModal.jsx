import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";
import useGetUserJobs from "../ManageJobs/Hook/useGetUserJobs";



const OfferJobModal = ({ freelancerId, triggerLabel = "Offer Job" }) => {
  const { user } = useGetUserStore(); // employer
  const { jobs } = useGetUserJobs(); // all jobs posted by employer
  

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    jobId: jobs[0]?._id, // default to first job if exists
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (jobs.length > 0 && !form.jobId) {
    setForm((prev) => ({
      ...prev,
      jobId: jobs[0]._id,
    }));
  }
}, [jobs]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.jobId || !form.message) return alert("All fields required");
    try {
      setLoading(true);
      await apiClient.post("/joboffer", {
        jobId: form.jobId,
        employerId: user._id,
        freelancerId,
        message: form.message,
      });
      toast.success("Job offer sent successfully!")
      setOpen(false);
      setForm({ jobId: jobs[0]?._id || "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send job offer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-sm bg-green-500 hover:bg-green-700 cursor-pointer">
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">Send Job Offer</DialogTitle>
          <DialogDescription>
            Choose one of your jobs and add a personalized message.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-sm">Select Job</Label>
            <select
              name="jobId"
              value={form.jobId}
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {jobs.map((job) => (
                <option key={job._id} value={job._id}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label className="text-sm">Message</Label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Why are you offering this job to the freelancer?"
              className="mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700">
              {loading ? "Sending..." : "Send Offer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OfferJobModal;
