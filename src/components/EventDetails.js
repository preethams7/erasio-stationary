import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BookTicketsModal from './BookTicketsModal';

const event = {
  title: 'Tech Symposium',
  date: 'April 12, 2025',
  time: '09:00 AM - 05:00 PM',
  location: 'Main Campus Auditorium',
  ticketPrice: '$15.00',
  description: 'The Tech Symposium brings together leading experts, innovators, and tech enthusiasts for a full day of learning and networking. Featuring keynote speeches, interactive workshops, and panel discussions on emerging technologies, AI, cybersecurity, and software development trends. This event is perfect for students looking to expand their knowledge and make connections in the tech industry.',
  organizer: 'Computer Science Department',
  organizerEmail: 'tech-symposium@example.edu',
  schedule: [
    { time: '09:00 AM', detail: 'Registration & Welcome Coffee' },
    { time: '09:30 AM', detail: 'Opening Keynote: Future of Technology' },
    { time: '11:00 AM', detail: 'Workshop Sessions (Multiple Tracks)' },
    { time: '12:30 PM', detail: 'Lunch Break & Networking' },
    { time: '02:00 PM', detail: 'Panel Discussion: Industry Insights' },
    { time: '03:30 PM', detail: 'Interactive Demo Session' },
    { time: '04:30 PM', detail: 'Closing Remarks & Raffle Draw' },
  ]
};

const EventDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  const getTabClass = (tabName) => {
    return `border-b-2 py-4 px-1 text-center text-sm font-medium ${
      activeTab === tabName ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`;
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">About this event</h3>
            <p className="text-gray-600 mb-6">{event.description}</p>
            <h4 className="font-semibold text-gray-900">Organizer</h4>
            <p className="text-gray-600">{event.organizer}</p>
            <p className="text-gray-600">{event.organizerEmail}</p>
          </>
        );
      case 'schedule':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Schedule</h3>
            <div className="space-y-4">
              {event.schedule.map((session, index) => (
                <div key={index} className="flex space-x-4">
                  <span className="font-medium text-gray-900 w-24 flex-shrink-0">{session.time}</span>
                  <span className="text-gray-600">{session.detail}</span>
                </div>
              ))}
            </div>
          </>
        );
      case 'venue':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Venue Information</h3>
            <p className="text-gray-600 mb-4">{event.location}</p>
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-20">
              <span className="text-gray-400">Campus map would be displayed here</span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/upcoming-events" className="flex items-center text-blue-600 hover:underline mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to all events</span>
          </Link>

          <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{event.title}</h1>
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mb-6">
                <div className="p-20 text-gray-400">
                  {/* Placeholder for event image */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 20.25a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5z" />
                    <path d="M18 12.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5z" />
                  </svg>
                </div>
              </div>
              <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('details'); }} className={getTabClass('details')}>
                    Details
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('schedule'); }} className={getTabClass('schedule')}>
                    Schedule
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('venue'); }} className={getTabClass('venue')}>
                    Venue
                  </a>
                </nav>
              </div>
              {renderContent()}
            </div>

            <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p>{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p>{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p>{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5zm0-4.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Ticket Price</p>
                    <p>{event.ticketPrice}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="mt-6 w-full py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <BookTicketsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} event={event} />
    </div>
  );
};

export default EventDetails;