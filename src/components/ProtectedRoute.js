// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { accessToken, loading } = useAuth();

  if (loading) return <div>Loading...</div>; 

  
  if (!accessToken) return <Navigate to="/" />;

  // Access token exists → render children
  return children;
};

export default ProtectedRoute;
