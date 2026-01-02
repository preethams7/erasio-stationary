import React, { useState } from 'react';
import Navbar from './Navbar';

// Data for demonstration
const studentCourses = [
  { name: 'Introduction to Computer Science', attended: 32, total: 40, color: 'text-green-600' },
  { name: 'Data Structures and Algorithms', attended: 25, total: 30, color: 'text-green-600' },
  { name: 'Software Engineering', attended: 28, total: 35, color: 'text-yellow-600' },
  { name: 'Database Management Systems', attended: 18, total: 25, color: 'text-red-600' },
];

const pastLeaveRequests = [
  {
    id: 1,
    reason: "Family emergency",
    startDate: "2024-03-10",
    endDate: "2024-03-12",
    status: "Approved",
    approvedOn: "2024-03-09"
  },
  {
    id: 2,
    reason: "Medical appointment",
    startDate: "2024-02-20",
    endDate: "2024-02-20",
    status: "Approved",
    approvedOn: "2024-02-18"
  },
  {
    id: 3,
    reason: "Travel",
    startDate: "2024-01-05",
    endDate: "2024-01-10",
    status: "Rejected",
    rejectedOn: "2024-01-04"
  }
];

const calculateOverallAttendance = () => {
    const totalAttended = studentCourses.reduce((sum, course) => sum + course.attended, 0);
    const totalClasses = studentCourses.reduce((sum, course) => sum + course.total, 0);
    const percentage = (totalAttended / totalClasses) * 100;
    return { percentage, totalAttended, totalClasses };
};

const overallAttendance = calculateOverallAttendance();

// Leave Request Modal Component
const LeaveRequestModal = ({ onClose }) => {
    const [reason, setReason] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Leave request submitted:", { reason, startDate, endDate, file });
        alert("Your leave request has been submitted successfully!");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Request Leave</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
                </div>
                <p className="text-sm text-gray-600 mb-4">Fill out the form below to request a leave of absence.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Reason for Leave</label>
                        <textarea
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input
                                type="date"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">End Date</label>
                            <input
                                type="date"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Supporting Document (Optional)</label>
                        <input
                            type="file"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <p className="mt-2 text-xs text-gray-500">e.g., Doctor's note, official letter</p>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Main Attendance Component
const Attendance = () => {
    const [activeTab, setActiveTab] = useState('Records');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderTabContent = () => {
        if (activeTab === 'Records') {
            return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Overall Attendance Summary Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            Overall Attendance
                        </h3>
                        <div className="text-center my-8">
                            <div className="relative w-40 h-40 mx-auto">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        className="text-gray-200 stroke-current"
                                        strokeWidth="8"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                    />
                                    <circle
                                        className="stroke-current text-green-500"
                                        strokeWidth="8"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        strokeDasharray={`${overallAttendance.percentage * 2.513}, 251.3`}
                                        transform="rotate(-90 50 50)"
                                    />
                                    <text
                                        x="50"
                                        y="50"
                                        className="text-2xl font-bold text-gray-900"
                                        dominantBaseline="middle"
                                        textAnchor="middle"
                                    >
                                        {Math.round(overallAttendance.percentage)}%
                                    </text>
                                </svg>
                            </div>
                            <p className="mt-4 text-gray-600 text-sm">
                                Attended **{overallAttendance.totalAttended}** of **{overallAttendance.totalClasses}** classes
                            </p>
                        </div>
                    </div>
                    
                    {/* Course-wise Attendance Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Course-wise Attendance
                        </h3>
                        <div className="space-y-4">
                            {studentCourses.map((course, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-800">{course.name}</p>
                                        <p className="text-sm text-gray-500">
                                            {course.attended} Attended • {course.total - course.attended} Missed • {course.total} Lectures
                                        </p>
                                    </div>
                                    <div className="text-right flex items-center">
                                        <div className="w-16">
                                            <p className={`text-xl font-bold ${course.color}`}>
                                                {Math.round((course.attended / course.total) * 100)}%
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                (Threshold 75%)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else if (activeTab === 'Requests') {
            return (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Leave Request History
                        </h3>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Request New Leave
                        </button>
                    </div>
                    <div className="space-y-4">
                        {pastLeaveRequests.length > 0 ? (
                            pastLeaveRequests.map((request) => (
                                <div key={request.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            {request.reason} <span className="text-sm text-gray-500">({request.startDate} to {request.endDate})</span>
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Status Date: {request.status === 'Approved' ? request.approvedOn : request.rejectedOn}
                                        </p>
                                    </div>
                                    <div>
                                        {request.status === 'Approved' ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                Approved
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                                Rejected
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No past leave requests found.</p>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow flex justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Attendance</h2>
                        <p className="text-gray-500 mt-1">Track your course attendance and manage leave requests.</p>
                    </div>

                    {/* Tabbed Content */}
                    <div className="bg-white rounded-xl shadow-sm">
                        <div className="flex border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('Records')}
                                className={`py-4 px-6 text-sm font-medium transition-colors duration-200 ease-in-out ${
                                    activeTab === 'Records'
                                        ? 'text-gray-900 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Attendance Records
                            </button>
                            <button
                                onClick={() => setActiveTab('Requests')}
                                className={`py-4 px-6 text-sm font-medium transition-colors duration-200 ease-in-out ${
                                    activeTab === 'Requests'
                                        ? 'text-gray-900 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Leave Requests
                            </button>
                        </div>
                        <div className="p-6">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </main>
            {isModalOpen && <LeaveRequestModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Attendance;