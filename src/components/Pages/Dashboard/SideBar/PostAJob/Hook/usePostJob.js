import { apiClient } from "@/lib/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const usePostJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const postJob = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.post("/job", formData);
      setSuccess(true);
      toast.success("Job posted successfully!");
      navigate("/dashboard/managejobs");
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || "An error occurred";
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 3000);
    }
  }, [success]);

  return {
    postJob,
    loading,
    error,
    success,
  };
};

export default usePostJob;
