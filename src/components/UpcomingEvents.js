import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import CreateEvent from './CreateEvent';


const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Symposium',
    date: 'April 12, 2025',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Campus Auditorium',
    ticketPrice: '$15.00',
    description: 'Join us for a day of tech talks, workshops, and networking opportunities with industry experts.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Event+Image'
  },
  {
    id: 2,
    title: 'Career Fair',
    date: 'April 20, 2025',
    time: '10:00 AM - 03:00 PM',
    location: 'Student Center Hall',
    ticketPrice: 'Free',
    description: 'Connect with recruiters from top companies and explore internship and job opportunities.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Event+Image'
  },
];

const UpcomingEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateEvent = (eventData) => {
    console.log('New event created:', eventData);
    // Logic to add the new event to a state or send to a backend
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600 mt-1">Browse all upcoming campus events and secure your tickets</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/dashboard">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Return to Dashboard</span>
              </button>
            </Link>
            <Link to="/attended-events">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
                Attended Events
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create Event</span>
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-64" src={event.imageUrl} alt="Event" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5zm0-4.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z" />
                      </svg>
                      <span>{event.ticketPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-right">
                  {/* Corrected Link to EventDetails page */}
                  <Link to={`/event-details/${event.id}`}>
                    <button className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors">
                      Book Tickets
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <CreateEvent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateEvent} />
    </div>
  );
};

export default UpcomingEvents;