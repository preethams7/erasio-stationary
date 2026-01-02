import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {sidebarOpen && <Sidebar />}

      <div className="flex-1 flex flex-col">
        <AdminNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-6">
         <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
