import { create } from "zustand";

const useGetUserStore = create((set) => ({ user: null, loading: false,error: null,
      setUser: (userData) => set({ user: userData, loading: false, error: null }),
      clearUser: () => set({ user: null }),
      setLoading: (isLoading) => set({ loading: isLoading }),
      setError: (error) => set({ error }),
    }),
  
);

export default useGetUserStore;
