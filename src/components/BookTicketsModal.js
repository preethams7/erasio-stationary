import React, { useState } from 'react';

const BookTicketsModal = ({ isOpen, onClose, event }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Tech Symposium - Book Tickets</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <p className="text-gray-600 mb-4">Secure your spot at this event by completing the booking process.</p>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Select Payment Method</h4>
          <div className="flex space-x-2 border-b border-gray-200 mb-6">
            <button onClick={() => setPaymentMethod('credit')} className={`py-2 px-4 font-medium transition-colors ${paymentMethod === 'credit' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Credit Card</button>
            <button onClick={() => setPaymentMethod('debit')} className={`py-2 px-4 font-medium transition-colors ${paymentMethod === 'debit' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Debit Card</button>
            <button onClick={() => setPaymentMethod('erasio')} className={`py-2 px-4 font-medium transition-colors ${paymentMethod === 'erasio' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Erasio Card</button>
          </div>

          {paymentMethod === 'credit' && (
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Card Number</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="1234 5678 9012 3456" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-gray-700">Expiry Date</span>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="MM/YY" />
                </label>
                <label className="block">
                  <span className="text-gray-700">CVV</span>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="123" />
                </label>
              </div>
              <label className="block">
                <span className="text-gray-700">Name on Card</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="John Doe" />
              </label>
            </div>
          )}

          {paymentMethod === 'erasio' && (
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-3z" />
              </svg>
              <div>
                <p className="font-semibold text-blue-800">Erasio Card</p>
                <p className="text-sm text-blue-700">Pay directly with your student card balance.</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Event: <span className="font-normal">{event.title}</span></h4>
          <p className="text-gray-700 mb-1">Date: <span className="font-normal">{event.date}</span></p>
          <p className="text-gray-700">Price: <span className="font-normal">{event.ticketPrice}</span></p>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button onClick={onClose} className="px-6 py-2 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors">
            Proceed to Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTicketsModal;