import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";
import { useEffect, useState } from "react";

const useActiveJobs = () => {
     const { user } = useGetUserStore();
  const [activeJobs, setActiveJobs] = useState([]);

  useEffect(() => {
    const fetchActive = async () => {
      try {
        const res = await apiClient.get(`/joboffer/freelancer/${user._id}`);
        const accepted = res.data.filter((offer) => offer.status === "accepted");
        setActiveJobs(accepted);
      } catch (err) {
        console.error("Failed to load active jobs");
      }
    };

    if (user) fetchActive();
  }, [user]);

  return { activeJobs };
}

export default useActiveJobs