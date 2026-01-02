import React, { useState } from 'react';
import Navbar from './Navbar';
import { useParams, Link } from 'react-router-dom';

const courses = [
  {
    code: 'CS101',
    name: 'Introduction to Computer Science',
    credits: 4,
    status: 'Open',
    professor: 'Dr. Emily Chen',
    schedule: 'Mon, Wed 10:00-11:30 AM',
    department: 'Computer Science',
    location: 'Tech Building 305',
    enrolled: 45,
    capacity: 60,
    description: 'An introductory course covering the fundamentals of computer science, including basic programming concepts, algorithms, and problem-solving strategies.',
    syllabus: 'This course provides a comprehensive introduction to the field of computer science, exploring the fundamental concepts that form the foundation of computing. Students will learn basic programming principles using Python, develop problem-solving skills through algorithmic thinking, and gain an understanding of computer systems and their components.',
    prerequisites: 'None'
  },
  {
    code: 'CS201',
    name: 'Data Structures',
    credits: 4,
    status: 'Open',
    professor: 'Dr. Michael Rodriguez',
    schedule: 'Tue, Thu 1:00-2:30 PM',
    department: 'Computer Science',
    location: 'Science Hall 215',
    enrolled: 38,
    capacity: 50,
    description: 'This course provides a comprehensive study of fundamental data structures and algorithms. Topics include lists, stacks, queues, trees, graphs, and hash tables. Students will also learn to analyze the efficiency of various algorithms.',
    syllabus: 'A core course for computer science majors, this class covers the design, implementation, and analysis of data structures. It focuses on how data can be organized and manipulated efficiently in memory.',
    prerequisites: 'CS101'
  },
  // Add other course details here
];

const mockAssignments = [
    { title: 'Assignment 1: Data Types', dueDate: 'October 25, 2024', status: 'Submitted', grade: '92/100' },
    { title: 'Assignment 2: Basic Algorithms', dueDate: 'November 8, 2024', status: 'Submitted', grade: '85/100' },
    { title: 'Midterm Project', dueDate: 'November 29, 2024', status: 'Pending' },
    { title: 'Final Exam', dueDate: 'December 20, 2024', status: 'Pending' }
];

const mockSchedule = [
    { date: 'October 21, 2024', topic: 'Introduction to Binary Trees', location: 'Room 305' },
    { date: 'October 23, 2024', topic: 'Tree Traversal Algorithms', location: 'Room 305' },
    { date: 'October 28, 2024', topic: 'Graph Theory Fundamentals', location: 'Room 305' },
    { date: 'October 30, 2024', topic: 'Graph Traversal (BFS & DFS)', location: 'Room 305' }
];

const mockResources = [
    { name: 'Lecture 1 Slides: Introduction.pdf', type: 'PDF', size: '2.5 MB', uploaded: 'Oct 2, 2024' },
    { name: 'Syllabus.pdf', type: 'PDF', size: '0.8 MB', uploaded: 'Sep 28, 2024' },
    { name: 'Python Basics Cheatsheet.pdf', type: 'PDF', size: '1.2 MB', uploaded: 'Oct 5, 2024' },
    { name: 'Sample Code for Recursion.zip', type: 'ZIP', size: '4.1 MB', uploaded: 'Oct 15, 2024' }
];

const CourseDetails = () => {
  const { courseCode } = useParams();
  const course = courses.find(c => c.code === courseCode);
  const [activeTab, setActiveTab] = useState('Course Info');

  if (!course) {
    return <div className="p-8 text-center">Course not found.</div>;
  }

  const getStatusColor = (status) => {
    if (status === 'Open') return 'bg-green-100 text-green-800';
    if (status === 'Waitlist') return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Course Info':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Description</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Syllabus</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{course.syllabus}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h3>
              <p className="text-gray-700">{course.prerequisites}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Details</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <p className="text-sm font-medium text-gray-500">Professor</p>
                  <p className="font-semibold">{course.professor}</p>
                </li>
                <li>
                  <p className="text-sm font-medium text-gray-500">Schedule</p>
                  <p className="font-semibold">{course.schedule}</p>
                </li>
                <li>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="font-semibold">{course.location}</p>
                </li>
                <li>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="font-semibold">{course.department}</p>
                </li>
                <li>
                  <p className="text-sm font-medium text-gray-500">Enrollment</p>
                  <p className="font-semibold">{course.enrolled}/{course.capacity} students enrolled</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'Assignments':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming and Past Assignments</h3>
            <div className="space-y-4">
              {mockAssignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{assignment.title}</p>
                    <p className="text-sm text-gray-500 mt-1">Due: {assignment.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {assignment.status}
                    </span>
                    {assignment.grade && (
                      <p className="text-sm font-medium text-gray-700 mt-1">Grade: {assignment.grade}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Schedule':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Schedule</h3>
            <div className="space-y-4">
              {mockSchedule.map((item, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800">{item.topic}</p>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Location: {item.location}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Class Resources':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Materials</h3>
            <div className="space-y-4">
              {mockResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">{resource.name}</p>
                      <p className="text-sm text-gray-500">{resource.size} • {resource.uploaded}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Download</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Enrolled Users':
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enrolled Users</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
              <table className="w-full text-left table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 font-medium text-sm text-gray-600">Name</th>
                    <th className="py-3 px-4 font-medium text-sm text-gray-600">Student ID</th>
                    <th className="py-3 px-4 font-medium text-sm text-gray-600">Email</th>
                    <th className="py-3 px-4 font-medium text-sm text-gray-600">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4">John Doe</td>
                    <td className="py-4 px-4">STU001</td>
                    <td className="py-4 px-4">john.doe@example.com</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Student</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Jane Smith</td>
                    <td className="py-4 px-4">STU002</td>
                    <td className="py-4 px-4">jane.smith@example.com</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Student</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Emily Chen</td>
                    <td className="py-4 px-4">PROF001</td>
                    <td className="py-4 px-4">emily.chen@example.com</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Professor</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-blue-600 rounded-lg p-6 text-white mb-6">
            <Link to="/course-enrollment" className="flex items-center text-blue-200 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Course Listing
            </Link>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="text-3xl font-bold">{course.name}</h2>
                <p className="text-blue-200 mt-1">{course.department} • {course.credits} Credits</p>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('Enrolled Users')}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Enrolled Users
                </button>
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Enroll in Course
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm">
            <div className="flex border-b border-gray-200">
              {['Course Info', 'Assignments', 'Schedule', 'Class Resources'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 text-sm font-medium transition-colors duration-200 ease-in-out ${
                      activeTab === tab
                          ? 'text-gray-900 border-b-2 border-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;