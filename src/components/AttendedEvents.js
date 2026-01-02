import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const attendedEvents = [
  { event: 'AI Research Workshop', date: 'March 15, 2025', type: 'Workshop', ticketId: 'TKT-2025-001', hasCertificate: true },
  { event: 'Winter Tech Conference', date: 'February 20, 2025', type: 'Conference', ticketId: 'TKT-2025-018', hasCertificate: true },
  { event: 'Coding Competition', date: 'January 25, 2025', type: 'Competition', ticketId: 'TKT-2025-045', hasCertificate: false },
  { event: 'Campus Networking Event', date: 'January 10, 2025', type: 'Event', ticketId: 'TKT-2025-072', hasCertificate: false },
];

const AttendedEvents = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = attendedEvents.filter(event => {
    if (filter === 'with') {
      return event.hasCertificate;
    }
    if (filter === 'without') {
      return !event.hasCertificate;
    }
    return true;
  });

  const getButtonClass = (buttonFilter) => {
    return `py-2 px-4 border-b-2 font-medium transition-colors ${
      filter === buttonFilter
        ? 'border-blue-500 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700'
    }`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900">Attended Events</h2>
            <p className="text-gray-600 mt-1">View your attended events, certificates and attendance history</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Return to Dashboard</span>
              </button>
            </Link>
            <Link to="/upcoming-events">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 transition-colors">
                Browse Upcoming Events
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex border-b border-gray-200">
            <button onClick={() => setFilter('all')} className={getButtonClass('all')}>All Events</button>
            <button onClick={() => setFilter('with')} className={getButtonClass('with')}>With Certificates</button>
            <button onClick={() => setFilter('without')} className={getButtonClass('without')}>Without Certificates</button>
          </div>
          <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">Your Event Attendance History</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvents.map((event, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.event}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.ticketId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <a href="#" className="text-blue-600 hover:underline">View Invoice</a>
                      {event.hasCertificate && (
                        <a href="#" className="text-green-600 hover:underline">View Certificate</a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AttendedEvents;