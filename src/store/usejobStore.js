import { create } from "zustand";

const useJobStore = create((set) => ({
  jobs: [],
  loading: false,
  error: null,
  setJobs: (jobs) => set({ jobs }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useJobStore;
