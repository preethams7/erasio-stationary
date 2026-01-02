import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same directory

// --- SVG Icons ---
// You can reuse icons from your other components if they're in a shared file, or redefine them here.
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const DisplayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-9.25-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l1.25-1.25m-6.5 0L9.75 17m3.5-3.5L12 10.5m0 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    </svg>
);

const FingerprintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V7m0 3a1 1 0 00-2 0v3a1 1 0 002 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 13v-3m0 3a1 1 0 00-2 0v3a1 1 0 002 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 13v-3m0 3a1 1 0 00-2 0v3a1 1 0 002 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
    </svg>
);

const FaceRecognitionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Main Component ---
const AccountSettings = () => {
    // State for password form
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    // State for Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // State for Authentication Settings
    const [fingerprintEnabled, setFingerprintEnabled] = useState(false);
    const [faceRecognitionEnabled, setFaceRecognitionEnabled] = useState(false);

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            alert("New passwords do not match!");
            return;
        }
        // Here you would send the data to a backend for verification and update
        console.log("Password update requested:", { currentPassword, newPassword });
        alert("Password updated successfully!");
        // Clear form fields
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        // You would typically apply a class to the root HTML element here, e.g., document.documentElement.classList.toggle('dark');
        console.log("Dark Mode toggled:", !isDarkMode);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow flex justify-center items-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
                        <p className="text-gray-500 mt-1">Manage your account preferences and security.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Change Password Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <LockIcon /> Change Password
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">Update your password for security.</p>
                            <form onSubmit={handlePasswordUpdate}>
                                <div className="mb-4">
                                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                                    <input
                                        type="password"
                                        id="current-password"
                                        className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                                    <input
                                        type="password"
                                        id="new-password"
                                        className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirm-new-password"
                                        className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                                >
                                    Update Password
                                </button>
                            </form>
                        </div>

                        {/* Display & Appearance Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <DisplayIcon /> Display & Appearance
                            </h3>
                            <p className="text-sm text-gray-500 mb-6 flex-grow">Customize your visual preferences.</p>
                            
                            {/* Dark Mode Toggle */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-800">Dark Mode</p>
                                    <p className="text-sm text-gray-500">Switch between light and dark themes.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={isDarkMode} onChange={handleDarkModeToggle} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Authentication Settings Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <FingerprintIcon /> Authentication Settings
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">Configure your login preferences.</p>
                        
                        <div className="space-y-4">
                            {/* Fingerprint Authentication */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="fingerprint-auth"
                                    checked={fingerprintEnabled}
                                    onChange={() => setFingerprintEnabled(!fingerprintEnabled)}
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="fingerprint-auth" className="ml-3 text-sm font-medium text-gray-800 flex items-center">
                                    <FingerprintIcon /> Enable Fingerprint Authentication
                                    <span className="text-gray-500 ml-2 font-normal">Use your fingerprint for faster and more secure login.</span>
                                </label>
                            </div>
                            
                            {/* Face Recognition */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="face-recognition"
                                    checked={faceRecognitionEnabled}
                                    onChange={() => setFaceRecognitionEnabled(!faceRecognitionEnabled)}
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="face-recognition" className="ml-3 text-sm font-medium text-gray-800 flex items-center">
                                    <FaceRecognitionIcon /> Enable Face Recognition
                                    <span className="text-gray-500 ml-2 font-normal">Use facial recognition for quicker authentication.</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;