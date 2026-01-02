import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell, Peter Norvig',
    isEbook: true,
    isAvailable: true,
    isbn: '978-0134610993',
    year: 2020,
    course: 'CS401',
  },
  {
    id: 2,
    title: 'Computer Ethics',
    author: 'Deborah G. Johnson',
    isEbook: true,
    isAvailable: true,
    isbn: '978-0131112414',
    year: 2009,
    course: 'HUM210',
    location: 'Floor 1, Section HM'
  },
  {
    id: 3,
    title: 'Database System Concepts',
    author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
    isEbook: true,
    isAvailable: true,
    isbn: '978-0073523223',
    year: 2010,
    course: 'CS215',
  },
  {
    id: 4,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    isEbook: true,
    isAvailable: true,
    isbn: '978-0262033848',
    year: 2009,
    course: 'CS301',
    location: 'Floor 2, Section CS'
  },
  {
    id: 5,
    title: 'Modern Operating Systems',
    author: 'Andrew S. Tanenbaum, Herbert Bos',
    isEbook: false,
    isAvailable: false,
    isbn: '978-0133591628',
    year: 2014,
    course: 'CS350',
    location: 'Floor 2, Section CS'
  },
];

const ELibrary = () => {
  const [filter, setFilter] = useState('all');

  const filteredBooks = books.filter(book => {
    if (filter === 'available') {
      return book.isAvailable;
    }
    if (filter === 'ebooks') {
      return book.isEbook;
    }
    return true;
  });

  const getButtonClass = (buttonFilter) => {
    return `py-2 px-4 rounded-full font-medium transition-colors ${
      filter === buttonFilter
        ? 'bg-gray-900 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900">E-Library</h2>
            <p className="text-gray-600 mt-1">Browse and search through our collection of academic resources</p>
          </div>
          <Link to="/">
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Return to Dashboard</span>
            </button>
          </Link>
        </div>

        {/* Search & Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input type="text" placeholder="🔍 Search by title, author..." className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Title</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Departments</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Courses</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Formats</option>
            </select>
            <div className="flex justify-end col-span-1 md:col-span-2 lg:col-span-4">
              <button className="px-4 py-2 text-gray-600 font-medium hover:text-gray-900">
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex space-x-2 mb-6">
          <button onClick={() => setFilter('all')} className={getButtonClass('all')}>All Books</button>
          <button onClick={() => setFilter('available')} className={getButtonClass('available')}>Available</button>
          <button onClick={() => setFilter('ebooks')} className={getButtonClass('ebooks')}>E-Books</button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="w-48 h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden mb-4">
                <span className="text-gray-400 text-3xl font-bold">{book.title.split(' ')[0]}</span>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900">{book.title}</h4>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                <div className="flex justify-center space-x-2 text-xs font-medium">
                  {book.isAvailable && <span className="bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">Available</span>}
                  {book.isEbook && <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">E-Book</span>}
                  {!book.isAvailable && <span className="bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">Unavailable</span>}
                  {!book.isEbook && <span className="bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full">Physical</span>}
                </div>
              </div>
              <div className="mt-4 w-full text-sm text-gray-700 space-y-1 text-left">
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Year:</strong> {book.year}</p>
                <p><strong>Course:</strong> {book.course}</p>
                {book.location && <p><strong>Location:</strong> {book.location}</p>}
              </div>
              <div className="mt-6 flex space-x-4">
                {book.isEbook && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                    Download E-Book
                  </button>
                )}
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Request Borrow
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ELibrary;