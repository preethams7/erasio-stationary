import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same directory
import { Link } from 'react-router-dom';

// --- SVG Icons (for use in the component) ---

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const NewCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const RenewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l16 16" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

// --- Modal Components ---

const PasswordModal = ({ onClose, onPasswordVerified, action }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password entered for", action + ":", password);
    onPasswordVerified();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Verify Your Identity</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <p className="text-sm text-gray-600 mb-4">To protect your account, please verify your password to continue</p>
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.071 1.047.251 2.062.535 3.03M12 21c-1.047-.071-2.062-.251-3.03-.535M2.944 12A12.007 12.007 0 0012 21c3.856 0 7.29-1.996 9.27-5.03M21 12c-.071-1.047-.251-2.062-.535-3.03" />
          </svg>
        </div>
        <p className="font-medium text-gray-800 text-center mb-4">{action}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const VerificationCodeModal = ({ onClose, onVerifySuccess, action }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log("Verification code entered for", action + ":", fullCode);
      onVerifySuccess();
    } else {
      alert("Please enter a 6-digit code.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Two-Step Verification</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <p className="text-sm text-gray-600 mb-6">A verification code has been sent to your registered mobile number</p>
        <form onSubmit={handleSubmit}>
          <p className="font-medium text-gray-800 mb-3">Enter the 6-digit code</p>
          <div className="flex justify-center space-x-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mb-6">Didn't receive the code? <button type="button" className="text-blue-600 hover:underline">Resend</button></p>
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
              Verify & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const MessageModal = ({ onClose, title, message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---

const StudentPortal = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showVerificationCodeModal, setShowVerificationCodeModal] = useState(false);
  const [isCardLocked, setIsCardLocked] = useState(false);
  const [showFinalMessageModal, setShowFinalMessageModal] = useState(false);
  const [currentAction, setCurrentAction] = useState(''); // To specify the action for modals

  const student = {
    name: 'Preetham S',
    program: 'Computer Science',
    id: 'E22345',
    registrationNumber: 'REG2023-8765',
    yearEnrolled: '2023',
    yearOfStudy: '2nd Year',
    profileImageUrl: '\studentimg.jpg',
  };

  const InfoField = ({ label, value }) => (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );

  const handleActionClick = (actionName) => {
    setCurrentAction(actionName);
    setShowPasswordModal(true);
  };

  const handlePasswordVerified = () => {
    setShowPasswordModal(false);
    setShowVerificationCodeModal(true);
  };

  const handleVerificationSuccess = () => {
    setShowVerificationCodeModal(false);
    
    // Perform action based on currentAction
    if (currentAction === 'Lock ID Card') {
      setIsCardLocked(true);
    } 
    // No specific state change for "Report Lost Card", "New Card" or "Renew Card" for this example
    // In a real app, this would trigger backend calls and potentially update UI states.

    setShowFinalMessageModal(true); // Always show a final message
  };

  const handleCloseModals = () => {
    setShowPasswordModal(false);
    setShowVerificationCodeModal(false);
    setShowFinalMessageModal(false);
    setCurrentAction(''); // Reset current action
  };

  const getFinalMessage = () => {
    switch (currentAction) {
      case 'Lock ID Card':
        return {
          title: 'Success!',
          message: 'Your ID card has been successfully locked. You can unlock it from the settings.'
        };
      case 'Report Lost Card':
        return {
          title: 'Card Reported as Lost',
          message: 'Your ID card has been reported as lost. We have deactivated it and notified the administration.'
        };
      case 'Request New Card':
        return {
          title: 'New Card Request Submitted',
          message: 'Your request for a new ID card has been submitted. You will be notified when it\'s ready for collection.'
        };
      case 'Renew ID Card':
        return {
          title: 'Card Renewal Request Submitted',
          message: 'Your ID card renewal request has been submitted. We will process it shortly.'
        };
      default:
        return { title: 'Action Completed', message: 'Your request has been processed.' };
    }
  };

  const finalMessage = getFinalMessage();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar/>
      <div className="flex-grow flex justify-center items-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Student Information</h2>
            <p className="text-gray-500 mt-1">View and manage your personal information.</p>
          </div>

          {/* Personal Details Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Personal Details</h3>
            <p className="text-sm text-gray-500 mb-6">Your registered student information</p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Left Side: Profile Picture */}
              <div className="flex-shrink-0 text-center">
                <img 
                  src={student.profileImageUrl} 
                  alt="Student Profile" 
                  className="h-32 w-32 rounded-full object-cover mx-auto"
                />
                <h4 className="mt-4 text-xl font-bold text-gray-800">{student.name}</h4>
                <p className="text-gray-600">{student.program}</p>
              </div>

              {/* Right Side: Information Grid */}
              <div className="flex-grow grid grid-cols-2 gap-x-8 gap-y-6 w-full">
                <InfoField label="Student ID" value={student.id} />
                <InfoField label="Program" value={student.program} />
                <InfoField label="Registration Number" value={student.registrationNumber} />
                <InfoField label="Year of Study" value={student.yearOfStudy} />
                <InfoField label="Year Enrolled" value={student.yearEnrolled} />
              </div>
            </div>
          </div>

          {/* ID Card Management */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ID Card Management</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Lock Card Button */}
              <button
                onClick={() => handleActionClick('Lock ID Card')}
                className={`flex items-center justify-center p-4 rounded-lg shadow-sm transition-colors ${
                  isCardLocked ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                <LockIcon /> {isCardLocked ? 'Card Locked' : 'Lock Card'}
              </button>
              {/* Report Lost */}
              <button
                onClick={() => handleActionClick('Report Lost Card')}
                className="flex items-center justify-center p-4 bg-white text-red-600 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                <ReportIcon /> Report Lost
              </button>
              {/* New Card */}
              <button
                onClick={() => handleActionClick('Request New Card')}
                className="flex items-center justify-center p-4 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                <NewCardIcon /> New Card
              </button>
              {/* Renew Card */}
              <button
                onClick={() => handleActionClick('Renew ID Card')}
                className="flex items-center justify-center p-4 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                <RenewIcon /> Renew Card
              </button>
            </div>
          </div>

          {/* Account Actions */}
          <div className="flex items-center space-x-4">
                        <Link to="/account-settings" className="flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                            <SettingsIcon /> Account Settings
                        </Link>
                        <button className="flex items-center px-4 py-2 bg-gray-100 text-red-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                            <LogoutIcon /> Logout
                        </button>
                    </div>
        </div>
      </div>

      {/* Modals */}
      {showPasswordModal && (
        <PasswordModal onClose={handleCloseModals} onPasswordVerified={handlePasswordVerified} action={currentAction} />
      )}
      {showVerificationCodeModal && (
        <VerificationCodeModal onClose={handleCloseModals} onVerifySuccess={handleVerificationSuccess} action={currentAction} />
      )}
      {showFinalMessageModal && (
        <MessageModal
          onClose={handleCloseModals}
          title={finalMessage.title}
          message={finalMessage.message}
        />
      )}
    </div>
  );
};

export default StudentPortal;