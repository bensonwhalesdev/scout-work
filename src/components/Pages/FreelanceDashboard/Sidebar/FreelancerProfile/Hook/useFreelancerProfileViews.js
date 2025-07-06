import { useEffect, useState } from "react";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";

const useFreelancerProfileViews = () => {
  const { user } = useGetUserStore();
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchViews = async () => {
      if (!user?._id || user?.role !== "freelancer") return;

      try {
        const res = await apiClient.get(`/profile-views/freelancer/${user._id}`);
        setViews(res.data);
      } catch (err) {
        console.error("Failed to fetch profile views:", err);
        setError("Failed to fetch profile views.");
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [user]);

  return { views, loading, error };
};

export default useFreelancerProfileViews;
