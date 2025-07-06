import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { apiClient } from "@/lib/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useGetUserStore from "@/store/useGetUserStore";



const ApplyJobForm = () => {
  const { id: jobId } = useParams();
  const { user } = useGetUserStore();
  
  const [formData, setFormData] = useState({
    name: user?.firstName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    message: "",
    resume: null,
    jobId,
    userId: user?._id || "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, resume: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      await apiClient.post(`/jobapply/${jobId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Application sent successfully!");
      setFormData((prev) => ({ ...prev, resume: null }));
      navigate("/freelancerdashboard/browsejobs");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 px-4 sm:px-6 lg:px-0">
      <div className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl p-8 space-y-6 transition-all hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Apply for this Job</h2>
        <p className="text-sm text-gray-500 mb-4">
          Fill in the details below to submit your application.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="text-gray-600">Full Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-600">Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-600">Phone Number</Label>
            <Input
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-600">Message</Label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Why are you a good fit for this job?"
              className="mt-1 resize-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>

          <div>
            <Label className="text-gray-600">Upload Resume</Label>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="mt-1"
            />
            <p className="text-xs text-gray-400 mt-1">
              Supported formats: PDF, DOC, DOCX.
            </p>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading || !formData.resume}
              className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyJobForm;
