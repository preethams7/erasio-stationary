// App.js
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/stationary/admin/pages/Dashboard";
import StudentInfo from "./components/StudentInfo";
import AccountSettings from "./components/AccountSettings ";
import StudentWallet from "./components/StudentWallet ";
import Attendance from "./components/studentCourses";
import CourseDetails from "./components/CourseDetails";
import CourseEnrollment from "./components/CourseEnrollment";
import StationeryServices from "./components/StationeryServices";
import ShoppingCart from "./components/ShoppingCart";
import UpcomingEvents from "./components/UpcomingEvents";
import CreateEvent from "./components/CreateEvent";
import AttendedEvents from "./components/AttendedEvents";
import EventDetails from "./components/EventDetails";
import ELibrary from "./components/ELibrary";
import AdditionalServices from "./components/AdditionalServices";
import Login from "./components/Login";
import StationeryServicesHome from "./components/stationary/StationeryServicesHome";
import AdminLayout from "./components/stationary/admin/layout/AdminLayout";
import Orders from "./components/stationary/admin/pages/Orders";
import Products from "./components/stationary/admin/pages/Products";
import PageHome from "./components/stationary/admin/pages/PageHome";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<StationeryServicesHome />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Admin routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="page-home" element={<PageHome />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
