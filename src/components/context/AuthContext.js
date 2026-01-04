// src/components/context/AuthProvider.js
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axiosInstance, { setLogoutHandler } from "../context/axiosInstance";
import { setAccessToken as setTokenInMemory, getAccessToken } from "./authTokenManager";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//
const AuthContext = createContext();
console.log(AuthContext)
export const AuthProvider = ({ children }) => {
 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessTokenState] = useState(getAccessToken());
  const [loading, setLoading] = useState(true);

  // Safe logout function
  const logout = useCallback(async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/logout",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.warn("Logout API failed", err);
    }

    setAccessTokenState(null);
    setTokenInMemory(null);
    setUser(null);

    delete axiosInstance.defaults.headers.common["Authorization"];

    navigate("/");
  }, [navigate]);

  // Inject logout into axios instance
  useEffect(() => {
    setLogoutHandler(logout);
  }, [logout]);

  // Fetch current user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("me api calling")
        const res = await axiosInstance.get("/me", { withCredentials: true });
       
        setUser(res.data);
        if (res.data.accessToken) {
          setAccessTokenState(res.data.accessToken);
          setTokenInMemory(res.data.accessToken);
        }
      } catch (err) {
        setUser(null);
        setAccessTokenState(null);
        setTokenInMemory(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (token, userInfo) => {
    setAccessTokenState(token);
    setTokenInMemory(token);
    setUser(userInfo);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
