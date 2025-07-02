import { useEffect, useState } from "react";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";

const useUserApplications = () => {
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useGetUserStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appsRes, jobsRes] = await Promise.all([
          apiClient.get("/jobapply"), // ideally use /jobapply/my
          apiClient.get("/job"),
        ]);

        // Filter applications belonging to the logged-in user
        const userApplications = appsRes.data.filter(
          (app) => app.email === user?.email || app.userId === user?._id
        );

        setApplications(userApplications);
        setJobs(jobsRes.data);
      } catch (err) {
        console.error("Error fetching applications or jobs:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  return { applications, jobs, loading, error };
};

export default useUserApplications;
