import React from "react";

const Home = () => {
return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-blue-500 to-blue-700 items-center justify-center p-8">
        <div className="max-w-md text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Erasio</h1>
          <p className="text-lg mb-8">
            Access your academic resources, course materials, and campus services all in one place.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-2">Courses</h3>
              <p className="text-sm">Access all your course materials and assignments</p>
            </div>
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-2">Grades</h3>
              <p className="text-sm">View your academic progress and GPA</p>
            </div>
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-2">Calendar</h3>
              <p className="text-sm">Stay on top of deadlines and events</p>
            </div>
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-2">Resources</h3>
              <p className="text-sm">Access campus services and support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Erasio Logo + Title */}
          <div className="flex items-center mb-8 space-x-3">
  <img 
    src="/logo.jpg" 
    alt="Erasio Logo" 
    className="w-10 h-10 rounded-lg object-cover" 
  />
  <div>
    <h2 className="text-xl font-bold text-gray-900">Erasio</h2>
    <p className="text-sm text-gray-500">Student Portal</p>
  </div>
</div>


          {/* Login heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Login to your account</h1>
            <p className="text-gray-600">Enter your credentials to access your student portal</p>
          </div>

          {/* Login form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Student Email / Username
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="your.name@erasio.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter your password"
                />
                <div className="flex justify-end mt-1">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">Remember me</label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Login to Portal
              </button>
            </form>
          </div>

          {/* Footer help text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Need assistance?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact IT Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
