import { apiClient } from '@/lib/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';


const useGetUserJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      const res = await apiClient.get('/job/my-jobs');
      setJobs(res.data.jobs);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  };

   const editJob = async (jobId, updatedData) => {
    try {
      const res = await apiClient.patch(`/job/${jobId}`, updatedData);
      toast.success("Job updated successfully");
      // Replace the updated job in the list
      setJobs((prev) =>
        prev.map((job) => (job._id === jobId ? res.data.job : job))
      );
    } catch (err) {
      const message = err.response?.data?.message || "Failed to update job";
      toast.error(message);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await apiClient.delete(`/job/${jobId}`);
      toast.success("Job deleted successfully");
      setJobs((prev) => prev.filter((job) => job._id !== jobId));
    } catch (err) {
      const message = err.response?.data?.message || "Failed to delete job";
      toast.error(message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobs, editJob, deleteJob, loading, error };
};

export default useGetUserJobs;
