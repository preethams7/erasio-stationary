import React, { useState } from 'react';

const CreateEvent = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    ticketPrice: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
    setFormData({ title: '', description: '', date: '', time: '', location: '', ticketPrice: '', imageUrl: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Create New Event</h3>
        <p className="text-gray-600 mb-6">Fill in the details below to create and publish a new event or workshop.</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block col-span-2">
              <span className="text-gray-700">Event Title</span>
              <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" placeholder="Tech Workshop, Career Fair, etc." required />
            </label>
            <label className="block col-span-2">
              <span className="text-gray-700">Description</span>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" placeholder="Provide details about this event..." required></textarea>
            </label>
            <label className="block">
              <span className="text-gray-700">Event Date</span>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" required />
            </label>
            <label className="block">
              <span className="text-gray-700">Time</span>
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" required />
            </label>
            <label className="block">
              <span className="text-gray-700">Location</span>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" placeholder="Campus Building, Room 101" required />
            </label>
            <label className="block">
              <span className="text-gray-700">Ticket Price</span>
              <input type="text" name="ticketPrice" value={formData.ticketPrice} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" placeholder="e.g. Free or $15.00" required />
            </label>
            <label className="block col-span-2">
              <span className="text-gray-700">Image URL (Optional)</span>
              <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" placeholder="e.g. /placeholder.svg" />
            </label>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-6 py-2 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;