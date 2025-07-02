import React, { useEffect, useState } from "react";
import FreeLancerSidebar from "./Sidebar";
import FreeLancerHeader from "./Headerbar";
import { Outlet } from "react-router-dom";
import useGetUserStore from "@/store/useGetUserStore";
import { apiClient } from "@/lib/client";
import LayoutFooter from "@/components/Reuseables/LayoutFooter";

const FreelancerDashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const { setUser, setLoading, setError } = useGetUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get("/user");
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-50">
      <FreeLancerHeader toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <FreeLancerSidebar
          isCollapsed={isSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
    <LayoutFooter />
    </>
  );
};

export default FreelancerDashboardLayout;
