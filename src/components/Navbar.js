import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPopup from "./stationary/LoginPopup"; 
import { useAuth } from "./context/AuthContext"; 

const Navbar = () => {
  const { user, accessToken, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false); 
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
  logout(); 
  setIsDropdownOpen(false);
};


  const toggleMobileSearch = () => {
    setShowMobileSearchBar(prev => !prev);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow px-4 sm:px-6 py-3 flex justify-between items-center relative z-40">
       
        <div className="flex items-center space-x-2">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Erasio" className="w-8 h-8 rounded" />
            <h1 className="text-lg font-bold text-gray-900">Erasio</h1>
          </div>
        </div>

       
        <div className="hidden md:flex flex-grow justify-center px-4">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 border border-gray-300 rounded-lg pl-4 pr-10 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
              stroke="currentColor"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors"
            >
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"/>
            </svg>
          </div>
        </div>

       
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMobileSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"/>
            </svg>
          </button>

         
          <Link to="/shopping-cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">0</span>
          </Link>

          
          {!accessToken ? (
            <div className="relative">
              <button
                onClick={() => setShowLoginPopup(true)}
                className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"/>
                </svg>
                <span className="text-sm font-medium">Login / Signup</span>
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100"
              >
                <div className="hidden md:flex flex-col items-end text-right">
                  <p className="text-sm font-semibold text-gray-800">{user?.username || "User"}</p>
                  <p className="text-xs text-gray-500">Balance: $580.75</p>
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {user?.username?.[0]?.toUpperCase() || "U"}
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border z-50">
                  <div className="p-4 border-b">
                    <p className="font-semibold text-gray-800">{user?.username || "User"}</p>
                    <p className="text-xs text-gray-500">ID: E22345</p>
                  </div>
                  <div className="border-t">
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      ⚙️ Account Settings
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      
      {showMobileSearchBar && (
        <div className="md:hidden bg-white shadow-lg px-4 py-2 z-30 w-full absolute top-16 left-0 border-b">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 border border-blue-500 rounded-lg pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              autoFocus 
            />
          </div>
        </div>
      )}

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-4 py-2 z-30 w-full absolute top-16 left-0">
          {!accessToken && (
            <button
              onClick={() => {
                setShowLoginPopup(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border-b"
            >
              <span className="text-base font-medium">Login / Signup</span>
            </button>
          )}

          <Link to="/help-center" className="w-full block p-3 text-gray-700 hover:bg-gray-50 rounded-lg">❓ Help Center</Link>
          <Link to="/store-locator" className="w-full block p-3 text-gray-700 hover:bg-gray-50 rounded-lg">📍 Store Locator</Link>
        </div>
      )}

      
      <LoginPopup
        open={showLoginPopup} 
        onClose={() => setShowLoginPopup(false)}
      />
    </>
  );
};

export default Navbar;
