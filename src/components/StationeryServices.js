import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const StationeryServices = () => {
  const [activeTab, setActiveTab] = useState('Stationery Store');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Stationery Store':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse and purchase academic supplies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Mock items for Stationery Store based on image_e8ee69.png */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/premium-notebook.png" alt="Premium Notebook" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Premium Notebook</h4>
                  <p className="text-sm text-gray-600">A4 size, 100 pages, ruled paper</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-auto font-bold text-gray-900">$4.99</span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm text-gray-700 border text-center border-gray-300 rounded-md hover:bg-gray-200">Add to Cart</Link>
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm bg-blue-600 text-white text-center rounded-md hover:bg-blue-700">Buy Now</Link>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/pencil-set.png" alt="Mechanical Pencil Set" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Mechanical Pencil Set</h4>
                  <p className="text-sm text-gray-600">0.5mm, with extra leads</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-auto font-bold text-gray-900">$6.99</span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm text-gray-700 border text-center border-gray-300 rounded-md hover:bg-gray-200">Add to Cart</Link>
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm bg-blue-600 text-white text-center rounded-md hover:bg-blue-700">Buy Now</Link>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/highlighter-pack.png" alt="Highlighter Pack" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Highlighter Pack</h4>
                  <p className="text-sm text-gray-600">6 neon colors, chisel tip</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-auto font-bold text-gray-900">$8.99</span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm text-gray-700 border text-center border-gray-300 rounded-md hover:bg-gray-200">Add to Cart</Link>
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm bg-blue-600 text-white text-center rounded-md hover:bg-blue-700">Buy Now</Link>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/scientific-calculator.png" alt="Scientific Calculator" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Scientific Calculator</h4>
                  <p className="text-sm text-gray-600">Advanced functions, dual power</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-auto font-bold text-gray-900">$19.99</span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm text-gray-700 border text-center border-gray-300 rounded-md hover:bg-gray-200">Add to Cart</Link>
                    <Link to="/shopping-cart" className="flex-1 py-2 text-sm bg-blue-600 text-white text-center rounded-md hover:bg-blue-700">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Printing Solutions':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Printing Services</h3>
            <p className="text-gray-600 mb-6">Upload and print your documents easily. We support various document formats including PDF and JPEG.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Document Requirements</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Supported formats: PDF, JPEG</li>
                  <li>Maximum file size: 10MB</li>
                  <li>Clear document margins recommended</li>
                  <li>Multiple documents can be uploaded at once</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Print Options</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Single/Double sided printing</li>
                  <li>Color or black & white</li>
                  <li>Various paper sizes: A4, A3, Letter</li>
                  <li>Economy and premium paper options</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Finishing Options</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Stapling (corner or side)</li>
                  <li>Binding options available</li>
                  <li>Hole punching</li>
                  <li>Lamination services</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Delivery & Payment</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Free pickup from printing center</li>
                  <li>Campus delivery available ($2.99)</li>
                  <li>Multiple payment options</li>
                  <li>Free printing with Erasio Card</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Print Jobs</h4>
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                <table className="min-w-full text-left table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Document</th>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Pages</th>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Submitted</th>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Delivery</th>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Payment</th>
                      <th className="py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">Assignment.pdf</td>
                      <td className="py-4 px-4">12</td>
                      <td className="py-4 px-4">2025-04-20</td>
                      <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                      <td className="py-4 px-4">Pickup</td>
                      <td className="py-4 px-4">Erasio Card</td>
                      <td className="py-4 px-4"><button className="text-blue-600 hover:text-blue-800">View Details</button></td>
                    </tr>
                    {/* Add other mock data here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'Laser Cutting':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Laser Cutting Service</h3>
            <p className="text-gray-600 mb-6">Precise cutting and engraving for your projects and prototypes.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Materials</h4>
                <p className="text-sm text-gray-600">Acrylic, Wood, Paper, Fabric</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Precision</h4>
                <p className="text-sm text-gray-600">Up to 0.1mm accuracy</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Max Size</h4>
                <p className="text-sm text-gray-600">600mm x 400mm</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Turnaround</h4>
                <p className="text-sm text-gray-600">1-3 business days</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/acrylic-cutting.jpg" alt="Acrylic Cutting" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Acrylic Cutting</h4>
                  <p className="text-sm text-gray-600">Precise cutting of acrylic sheets for projects and prototypes</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-gray-900">$15.99</span>
                    <Link to="/shopping-cart" className="py-1 px-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Order Now</Link>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/wood-engraving.jpg" alt="Wood Engraving" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Wood Engraving</h4>
                  <p className="text-sm text-gray-600">Detailed engraving on various wood materials</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-gray-900">$12.99</span>
                    <Link to="/shopping-cart" className="py-1 px-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case '3D Printing':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">3D Printing Service</h3>
            <p className="text-gray-600 mb-6">Turn your designs into physical objects with our professional 3D printing.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Materials</h4>
                <p className="text-sm text-gray-600">PLA, ABS, Resin, TPU</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Resolution</h4>
                <p className="text-sm text-gray-600">Up to 0.1mm layer height</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Max Build Size</h4>
                <p className="text-sm text-gray-600">220mm x 220mm x 250mm</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Turnaround</h4>
                <p className="text-sm text-gray-600">2-5 business days</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/pla-printing.jpg" alt="PLA Printing" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">PLA Printing</h4>
                  <p className="text-sm text-gray-600">Standard PLA materials, great for general purpose models and prototypes</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-gray-900">$0.15/cm³</span>
                    <Link to="/shopping-cart" className="py-1 px-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Custom Design':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Design Printing</h3>
            <p className="text-gray-600 mb-6">Professional design and printing services for all your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Design Help</h4>
                <p className="text-sm text-gray-600">Professional designers available</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Print Quality</h4>
                <p className="text-sm text-gray-600">High-resolution printing</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Materials</h4>
                <p className="text-sm text-gray-600">Premium quality options</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Turnaround</h4>
                <p className="text-sm text-gray-600">3-7 business days</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/path/to/custom-posters.jpg" alt="Custom Posters" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium text-gray-800">Custom Posters</h4>
                  <p className="text-sm text-gray-600">High-quality poster printing for events, presentations, and projects</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-gray-900">From $14.99</span>
                    <Link to="/shopping-cart" className="py-1 px-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Order Now</Link>
                  </div>
                </div>
              </div>
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
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Stationery Services</h2>
                <p className="text-gray-600 mb-6">Browse and purchase academic supplies or request specialized services</p>
              </div>
              <Link to="/shopping-cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {/* Mock cart item count, you would use a state variable for this */}
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">0</span>
              </Link>
            </div>
            
            <div className="flex border-b border-gray-200 mb-6">
              {['Stationery Store', 'Printing Solutions', 'Laser Cutting', '3D Printing', 'Custom Design'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-4 text-sm font-medium transition-colors duration-200 ease-in-out ${
                    activeTab === tab
                      ? 'text-gray-900 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StationeryServices;