import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import Sidebar from "./SideBar";


const DashboardLayout = () => {
   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isSidebarCollapsed} isMobileOpen={isMobileSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
