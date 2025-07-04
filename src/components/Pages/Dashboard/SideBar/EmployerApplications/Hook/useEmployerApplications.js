import useGetUserStore from "@/store/useGetUserStore";
import { useEffect, useState } from "react";
import useGetUserJobs from "../../ManageJobs/Hook/useGetUserJobs";
import { apiClient } from "@/lib/client";


const useEmployerApplications = () => {
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

  return {
    applications,
    loading,
    getJobTitle,
    formatDate,
  };
};

export default useEmployerApplications;
