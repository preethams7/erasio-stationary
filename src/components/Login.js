import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Hardcoded credentials for demo
    if (email === 'preetham' && password === 'preetham') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side: Welcome Banner */}
      <div className="w-1/2 bg-blue-600 text-white p-12 flex flex-col justify-center items-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Welcome to Erasio</h1>
          <p className="text-lg mb-8">
            Access your academic resources, course materials, and campus services all in one place.
          </p>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold">Courses</h4>
              <p className="text-sm">Access all your course materials and assignments</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold">Grades</h4>
              <p className="text-sm">View your academic progress and GPA</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold">Calendar</h4>
              <p className="text-sm">Stay on top of deadlines and events</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold">Resources</h4>
              <p className="text-sm">Access campus services and support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 flex flex-col justify-center p-12">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to your account</h2>
          <p className="text-gray-600 mb-6">
            Enter your credentials to access your student portal
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <label className="block">
              <span className="text-gray-700">Student Email / Username</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                placeholder="your.name@erasio.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="block">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Password</span>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
              <span className="text-gray-700 text-sm">Remember me</span>
            </label>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Login to Portal
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Need assistance?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Contact IT Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;