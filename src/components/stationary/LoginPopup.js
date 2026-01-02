import React, { useState } from "react";
import "./LoginPopup.css";
import axiosInstance from "../context/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth  } from '../context/AuthContext';



const VIEWS = {
  LOGIN_PASSWORD: "password",
  LOGIN_OTP: "otp",
  SIGNUP: "signup",
  VERIFY_OTP: "verifyOtp",
};

function LoginPopup({ open, onClose }) {
  const [currentView, setCurrentView] = useState(VIEWS.LOGIN_PASSWORD);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
const navigate = useNavigate();
  if (!open) return null;

  const passwordInputType = showPassword ? "text" : "password";

  const resetErrors = () => setErrorMessage("");

  
  const handlePasswordLogin = async (e) => {
  e.preventDefault();
  resetErrors();

  if (!email || !password) {
    setErrorMessage("Email and password required");
    return;
  }

  const payload = {
    username: email,
    password: password,
  };

  try {
   const response = await axiosInstance.post("/authenticate", payload);
      const data = response.data;

   
    const role = data.authorities?.[0]?.authority;
    console.log(data);
     login(data.token, data);


   if (role === "ROLE_ADMIN") {
  navigate("/admin", { replace: true });
} else {
  navigate("/", { replace: true });
}
  } catch (error) {
    if (error.response?.data?.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage("Login failed");
    }
  }
};


  // ---------------- SIGNUP ----------------
  const handleSignup = async(e) => {
    e.preventDefault();
    resetErrors();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const payload = {
      username: email,
      password: password,
      passwordConfirm: confirmPassword,
      role: "ROLE_USER",
    };

    setLoading(true);
   await axiosInstance.post("/register",payload)
    
      .then(() => {
        alert("OTP sent to your email");
        setCurrentView(VIEWS.VERIFY_OTP);
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        if (error.response?.data?.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Signup failed");
        }
      })
      .finally(() => setLoading(false));
  };

  
  const handleOtpVerification = async(e) => {
    e.preventDefault();
    resetErrors();

    if (!otp) {
      setErrorMessage("OTP is required");
      return;
    }

    setLoading(true);
await axiosInstance.post("/validateotp",null, {
  params: {
    token: otp,
    username: email,
  },
})
   
      .then(() => {
        alert("OTP verified successfully. Please login.");
        setOtp("");
        setCurrentView(VIEWS.LOGIN_PASSWORD);
      })
      .catch((error) => {
        if (error.response?.data?.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Invalid OTP");
        }
      })
      .finally(() => setLoading(false));
  };

  // ---------------- TOP TABS ----------------
  const renderTabs = () => {
    if (currentView === VIEWS.VERIFY_OTP) return null;

    return (
      <div className="tab-switcher">
        <p
          className={`tab-link ${
            currentView !== VIEWS.SIGNUP ? "active" : ""
          }`}
          onClick={() => setCurrentView(VIEWS.LOGIN_PASSWORD)}
        >
          Login
        </p>
        <p
          className={`tab-link ${
            currentView === VIEWS.SIGNUP ? "active" : ""
          }`}
          onClick={() => setCurrentView(VIEWS.SIGNUP)}
        >
          Sign up
        </p>
      </div>
    );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h3 className="popup-title">Welcome</h3>
        {renderTabs()}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* ---------------- LOGIN PASSWORD ---------------- */}
        {currentView === VIEWS.LOGIN_PASSWORD && (
          <form onSubmit={handlePasswordLogin}>
            <h3 className="login-heading">Login with Password</h3>

            <label className="input-label">Email</label>
            <input
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="input-label">Password</label>
            <div className="password-input-container">
              <input
                type={passwordInputType}
                className="input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button className="login-btn">Login</button>

            <p
              className="toggle-link"
              onClick={() => setCurrentView(VIEWS.LOGIN_OTP)}
            >
              Login with OTP
            </p>
          </form>
        )}

        {/* ---------------- LOGIN OTP ---------------- */}
        {currentView === VIEWS.LOGIN_OTP && (
          <form onSubmit={handlePasswordLogin}>
            <h3 className="login-heading">Login with OTP</h3>

            <label className="input-label">Email</label>
            <input
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="login-btn">Get OTP</button>

            <p
              className="toggle-link"
              onClick={() => setCurrentView(VIEWS.LOGIN_PASSWORD)}
            >
              Login with password
            </p>
          </form>
        )}

        {/* ---------------- SIGNUP ---------------- */}
        {currentView === VIEWS.SIGNUP && (
          <form onSubmit={handleSignup}>
            <h3 className="login-heading">Create Account</h3>

            <label className="input-label">Email</label>
            <input
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="input-label">Create Password</label>
            <div className="password-input-container">
              <input
                type={passwordInputType}
                className="input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <label className="input-label">Confirm Password</label>
            <input
              type={passwordInputType}
              className="input-box"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button className="login-btn" disabled={loading}>
              {loading ? "Creating..." : "Sign up"}
            </button>
          </form>
        )}

        {/* ---------------- VERIFY OTP ---------------- */}
        {currentView === VIEWS.VERIFY_OTP && (
          <form onSubmit={handleOtpVerification}>
            <h3 className="login-heading">Verify OTP</h3>

            <p style={{ fontSize: "14px" }}>
              OTP sent to <b>{email}</b>
            </p>

            <label className="input-label">Enter OTP</label>
            <input
              className="input-box"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <button className="login-btn" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPopup;
