import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import Sidebar from "./SideBar";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";
import LayoutFooter from "@/components/Reuseables/LayoutFooter";
import { BackgroundBeams } from "@/components/ui/background-beams";



const DashboardLayout = () => {
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
      <HeaderBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isSidebarCollapsed} isMobileOpen={isMobileSidebarOpen} toggleSidebar={toggleSidebar} />
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

export default DashboardLayout;
