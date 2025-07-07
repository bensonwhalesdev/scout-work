import React, { useEffect, useState } from "react";
import FreeLancerSidebar from "./Sidebar";
import FreeLancerHeader from "./Headerbar";
import { Outlet } from "react-router-dom";
import useGetUserStore from "@/store/useGetUserStore";
import { apiClient } from "@/lib/client";
import LayoutFooter from "@/components/Reuseables/LayoutFooter";
import { BackgroundBeams } from "@/components/ui/background-beams";
import useRedirectByRole from "@/Hook/useAuthRedirect";

const FreelancerDashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  useRedirectByRole()

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
    <BackgroundBeams className="fixed inset-0 pointer-events-none" />
    </>
  );
};

export default FreelancerDashboardLayout;
