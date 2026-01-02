import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const courses = [
  {
    code: 'CS101',
    name: 'Introduction to Computer Science',
    credits: 4,
    status: 'Open',
    professor: 'Dr. Emily Chen',
    schedule: 'Mon, Wed 10:00-11:30 AM',
    department: 'Computer Science',
    enrolled: 45,
    capacity: 60
  },
  {
    code: 'CS201',
    name: 'Data Structures',
    credits: 4,
    status: 'Open',
    professor: 'Dr. Michael Rodriguez',
    schedule: 'Tue, Thu 1:00-2:30 PM',
    department: 'Computer Science',
    enrolled: 38,
    capacity: 50
  },
  {
    code: 'MATH240',
    name: 'Linear Algebra',
    credits: 3,
    status: 'Waitlist',
    professor: 'Dr. Sarah Johnson',
    schedule: 'Mon, Wed, Fri 9:00-10:00 AM',
    department: 'Mathematics',
    enrolled: 50,
    capacity: 50
  },
  {
    code: 'PHYS101',
    name: 'Introduction to Physics',
    credits: 4,
    status: 'Open',
    professor: 'Dr. James Thompson',
    schedule: 'Tue, Thu 1:00-2:30 AM',
    department: 'Physics',
    enrolled: 42,
    capacity: 60
  },
  {
    code: 'ENG200',
    name: 'Creative Writing',
    credits: 3,
    status: 'Open',
    professor: 'Prof. Amanda Williams',
    schedule: 'Wed 2:00-5:00 PM',
    department: 'English',
    enrolled: 18,
    capacity: 25
  },
  {
    code: 'BIO150',
    name: 'Cell Biology',
    credits: 4,
    status: 'Open',
    professor: 'Dr. Robert Chen',
    schedule: 'Mon, Wed, Fri 11:00-12:00 PM',
    department: 'Biology',
    enrolled: 32,
    capacity: 40
  },
  {
    code: 'CS250',
    name: 'Web Development',
    credits: 3,
    status: 'Open',
    professor: 'Prof. Sarah Williams',
    schedule: 'Tue, Thu 4:00-5:30 PM',
    department: 'Computer Science',
    enrolled: 32,
    capacity: 40
  },
  {
    code: 'HIST209',
    name: 'Modern World History',
    credits: 3,
    status: 'Open',
    professor: 'Dr. Thomas Brooks',
    schedule: 'Mon, Wed, Fri 1:00-2:00 PM',
    department: 'History',
    enrolled: 28,
    capacity: 40
  }
];

const CourseEnrollment = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) => {
        if (status === 'Open') return 'bg-green-100 text-green-800';
        if (status === 'Waitlist') return 'bg-yellow-100 text-yellow-800';
        return 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow flex justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Available Courses</h2>
                        <div className="flex space-x-2 items-center">
                            <span className="text-gray-500 font-medium">View</span>
                            <button className="p-2 border rounded-md bg-gray-200 text-gray-800">
                                Grid
                            </button>
                            <button className="p-2 border rounded-md text-gray-500 hover:bg-gray-100">
                                List
                            </button>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search by course name or code..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map(course => (
                            <Link key={course.code} to={`/course-details/${course.code}`}>
                                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-lg font-bold text-gray-800">{course.name}</div>
                                        <div className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(course.status)}`}>
                                            {course.status}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{course.credits} Credits</p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Professor: <span className="font-medium text-gray-800">{course.professor}</span>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Schedule: <span className="font-medium text-gray-800">{course.schedule}</span>
                                    </p>
                                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{course.enrolled}/{course.capacity} Enrolled</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CourseEnrollment;