import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
const AdminNavbar = ({ toggleSidebar }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
const { user, accessToken, logout } = useAuth();
const handleLogout = () => {
  logout(); 
};

  return (
    <header className="bg-white border-b shadow-sm px-4 py-3 flex items-center gap-3 relative">

      {/* LEFT: SIDEBAR TOGGLE */}
      <button
        onClick={toggleSidebar}
        className="text-2xl font-bold md:hidden"
      >
        ☰
      </button>

      <button
        onClick={toggleSidebar}
        className="hidden md:block text-xl font-bold hover:text-blue-600"
      >
        ☰
      </button>

      {/* DESKTOP SEARCH */}
      <div className="hidden md:flex flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search orders, products, customers..."
          className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* MOBILE SEARCH ICON */}
      <button
        onClick={() => setShowMobileSearch(!showMobileSearch)}
        className="md:hidden text-xl"
      >
        🔍
      </button>

      {/* RIGHT ICONS */}
      <div className="ml-auto flex items-center gap-4">

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer">
          🔔
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* PROFILE */}
        <div className="relative">
          <img
            src="/admin-avatar.png"
            alt="Admin"
            onClick={() => setShowProfile(!showProfile)}
            className="w-9 h-9 rounded-full border cursor-pointer"
          />

          {showProfile && (
            <div className="absolute right-0 mt-3 w-44 bg-white border rounded-lg shadow-lg text-sm z-50">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Settings
              </button>
              <hr />
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE SEARCH OVERLAY */}
      {showMobileSearch && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-3 md:hidden z-40">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
