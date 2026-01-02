import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {  return (
 <div className="min-h-screen bg-gray-50 flex flex-col">
 <Navbar />

 {/* Dashboard Content */}
 <main className="flex-1 p-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-2">
 Welcome back, Preetham S
 </h2>
<p className="text-gray-600 mb-6">
 Computer Science • 2nd Year • ID: E22345
 </p>
{/* Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Student Info */}
 <Link to="/student-info">
<div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500 
 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
<h3 className="text-lg font-bold text-gray-800 mb-2">
Student Information
 </h3>
 <p className="text-sm text-gray-600 mb-2">
View and update your personal information
</p>
 <p className="text-sm font-medium">Preetham S</p>
 <p className="text-sm text-gray-500">Computer Science • 2nd Year</p>
 </div>
</Link>

 {/* Fee Payments */}
<Link to="/student-wallet">
<div className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500 
hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
 <h3 className="font-bold text-gray-800 mb-2 flex items-center">
💳 Fee Payments
</h3>
 <p className="text-sm text-gray-600">Manage your tuition and other fees</p>
<p className="mt-4 font-bold text-gray-900">Balance Due: $1,200.00</p>
</div>
</Link>

{/* Attendance */}
<Link to="/attendance">
<div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
<h3 className="font-bold text-gray-800 mb-2 flex items-center">📅 Attendance</h3>
 <p className="text-sm text-gray-600">Track your course attendance records</p>
<p className="mt-4 font-bold text-green-600">Overall: 80%</p>
 </div>
</Link>

{/* Course Enrollment */}
<Link to="/course-enrollment">
 <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
<h3 className="font-bold text-gray-800 mb-2 flex items-center">📘 Course Enrollment</h3>
 <p className="text-sm text-gray-600">View and manage your course registrations</p>
 <p className="mt-4 text-gray-900">4 Courses (3 Enrolled • 1 Waitlisted)</p>
 </div>
 </Link>

{/* Stationery Access */}
 <Link to="/stationary-services">
 <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
<h3 className="font-bold text-gray-800 mb-2 flex items-center">🛒 Stationery Access</h3>
 <p className="text-sm text-gray-600">Access study materials and resources</p>
<p className="mt-4 text-gray-900">Browse and purchase stationery items</p>
</div>
</Link>

 {/* Upcoming Events */}
<Link to="/upcoming-events">
<div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-400
hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
<h3 className="font-bold text-gray-800 mb-2 flex items-center">
🎉 Upcoming Events
 </h3>
<p className="text-sm text-gray-600">Events you may be interested in</p>  <p className="mt-4 text-gray-900">Tech Symposium • Apr 12</p>
 </div>
</Link>
          
          {/* E-Library */}
          <Link to="/e-library">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-400 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                📚 E-Library
              </h3>
              <p className="text-sm text-gray-600">
                Access textbooks, research papers, and reference materials.
              </p>
              <div className="mt-4 text-gray-900 flex justify-between">
                <span>5,000+ <br /> E-Books</span>
                <span>2,500+ <br /> Journals</span>
              </div>
            </div>
          </Link>

          {/* Additional Services */}
          <Link to="/additional-services">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-400 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                🏢 Additional Services
              </h3>
              <p className="text-sm text-gray-600">
                Request transportation services and apply for college residence accommodation.
              </p>
              <div className="mt-4 space-x-2 text-gray-900">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                  Bus/Van Service
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                  College Residence
                </button>
              </div>
            </div>
          </Link>
          
</div>
</main>
</div>
);
};

export default Dashboard;