import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const AdditionalServices = () => {
  const [activeTab, setActiveTab] = useState('transportation');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'transportation':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation Services</h3>
            <p className="text-gray-600 mb-4">Request bus/van transportation service for your daily commute.</p>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <p className="text-sm font-medium text-yellow-800">Our college provides daily transportation service for students. Fill out the form below to request this service. Monthly fee: $25.00</p>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="text-gray-700">Full Name</span>
                  <input type="text" value="Preetham S" disabled className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2" />
                </label>
                <label className="block">
                  <span className="text-gray-700">Student ID</span>
                  <input type="text" value="E22345" disabled className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2" />
                </label>
              </div>
              <label className="block mb-4">
                <span className="text-gray-700">Home Address</span>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 p-2 resize-none" rows="3" placeholder="Enter your complete home address"></textarea>
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Preferred Pickup Point</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 p-2" placeholder="Enter a landmark or street corner near your home" />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Contact Number</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 p-2" placeholder="Enter your contact number" />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Additional Notes</span>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 p-2 resize-none" rows="3" placeholder="Any additional information we should know"></textarea>
              </label>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setPaymentAmount(25.00);
                    setIsPaymentModalOpen(true);
                  }}
                  className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        );
      case 'residence':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">College Residence</h3>
            <p className="text-gray-600 mb-4">Apply for on-campus accommodation at our college residences</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <label className="block">
                <span className="text-gray-700">Full Name</span>
                <input type="text" value="Preetham S" disabled className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2" />
              </label>
              <label className="block">
                <span className="text-gray-700">Student ID</span>
                <input type="text" value="E22345" disabled className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2" />
              </label>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-gray-900">Select Room Type</h4>
              <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-gray-900">Standard Single Room</p>
                  <p className="text-blue-600">$3200/semester</p>
                </div>
                <p className="text-sm text-gray-600 mb-2">Single Occupancy</p>
                <div className="flex space-x-2 text-xs text-gray-700">
                  <span className="bg-gray-200 px-2 py-1 rounded">Single Bed</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Desk</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Wardrobe</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Shared Bathroom</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-gray-900">Premium Single Room</p>
                  <p className="text-blue-600">$4500/semester</p>
                </div>
                <p className="text-sm text-gray-600 mb-2">Single Occupancy with En-suite</p>
                <div className="flex space-x-2 text-xs text-gray-700">
                  <span className="bg-gray-200 px-2 py-1 rounded">Single Bed</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Desk</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Wardrobe</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Private Bathroom</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Mini Refrigerator</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-gray-900">Double Room</p>
                  <p className="text-blue-600">$2800/semester</p>
                </div>
                <p className="text-sm text-gray-600 mb-2">Shared Occupancy</p>
                <div className="flex space-x-2 text-xs text-gray-700">
                  <span className="bg-gray-200 px-2 py-1 rounded">Two Single Beds</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Two Desks</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Two Wardrobes</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Shared Bathroom</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="duration" value="full-year" defaultChecked className="form-radio text-blue-600" />
                    <span className="text-gray-700">Full Academic Year</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="duration" value="fall-semester" className="form-radio text-blue-600" />
                    <span className="text-gray-700">Fall Semester Only</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="duration" value="spring-semester" className="form-radio text-blue-600" />
                    <span className="text-gray-700">Spring Semester Only</span>
                  </label>
                </div>
              </div>
              <label className="block">
                <span className="text-gray-700">Dietary Requirements</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 p-2" placeholder="Any special dietary requirements" />
              </label>
              <label className="block">
                <span className="text-gray-700">Special Accommodations</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 p-2" placeholder="Any special needs or accommodations" />
              </label>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setPaymentAmount(4500.00); // Example price
                  setIsPaymentModalOpen(true);
                }}
                className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
              <p className="text-gray-600 mt-1">Transportation and residence facilities available for students</p>
            </div>
            <Link to="/dashboard">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Dashboard</span>
              </button>
            </Link>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('transportation')}
                className={`flex items-center space-x-2 py-4 px-1 text-center text-sm font-medium ${
                  activeTab === 'transportation' ? 'border-b-2 border-blue-500 text-blue-600' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Transportation</span>
              </button>
              <button
                onClick={() => setActiveTab('residence')}
                className={`flex items-center space-x-2 py-4 px-1 text-center text-sm font-medium ${
                  activeTab === 'residence' ? 'border-b-2 border-blue-500 text-blue-600' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h.01M17 11h.01M12 11h.01M12 7h.01" />
                </svg>
                <span>College Residence</span>
              </button>
            </nav>
          </div>
          {renderContent()}
        </div>
      </main>
      
      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative bg-white p-8 rounded-xl shadow-xl w-11/12 md:w-1/3">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Payment Method</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <div className="p-4 border-2 border-blue-600 rounded-lg cursor-pointer transition-colors">
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment-option" defaultChecked className="form-radio text-blue-600" />
                    <span className="font-semibold text-gray-900">Credit Card</span>
                  </div>
                </label>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment-option" className="form-radio text-gray-600" />
                    <span className="font-semibold text-gray-900">Debit Card</span>
                  </div>
                </label>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment-option" className="form-radio text-gray-600" />
                    <span className="font-semibold text-gray-900">Erasio ID Card</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button onClick={() => setIsPaymentModalOpen(false)} className="px-6 py-2 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition">
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsPaymentModalOpen(false);
                  // Open Secure Verification Modal
                  // For now, we'll simulate the next step directly
                  console.log(`Proceeding to payment verification for $${paymentAmount}`);
                }}
                className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalServices;