import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [deliveryOption, setDeliveryOption] = useState('pickup');

  // Mock data for the shopping cart items
  const cartItems = [
    { name: 'College Notebook', price: 5.99, quantity: 2, image: '/path/to/college-notebook.png' },
    { name: 'Erasable Pens (Pack of 5)', price: 8.50, quantity: 1, image: '/path/to/erasable-pens.png' },
    { name: 'Highlighter Set', price: 6.25, quantity: 1, image: '/path/to/highlighter-set.png' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = deliveryOption === 'delivery' ? 4.99 : 0;
  const total = subtotal + shipping;

  const handleQuantityChange = (index, delta) => {
    // You would typically update state here, for this example we'll just log
    console.log(`Item at index ${index} quantity changed by ${delta}`);
  };

  const handleRemoveItem = (index) => {
    // You would typically remove the item from state here
    console.log(`Item at index ${index} removed`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">🛒 Shopping Cart</h2>
            <Link to="/stationary-services" className="text-blue-600 hover:text-blue-800 font-medium">
              Continue Shopping
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {/* Cart Items Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Items</h3>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 border-b pb-4 last:border-b-0 last:pb-0">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleQuantityChange(index, -1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                        >-</button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(index, 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                        >+</button>
                      </div>
                      <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                      <button onClick={() => handleRemoveItem(index)} className="text-gray-400 hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-4">
                {/* Delivery Options */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Delivery Options</h4>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer">
                      <input
                        type="radio"
                        name="delivery"
                        value="pickup"
                        checked={deliveryOption === 'pickup'}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="form-radio text-blue-600 h-4 w-4"
                      />
                      <div className="ml-3 flex-1">
                        <p className="font-medium text-gray-900">Pickup</p>
                        <p className="text-sm text-gray-500">Collect from store at your convenience.</p>
                      </div>
                      <span className="text-sm text-green-600 font-semibold">Free</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer">
                      <input
                        type="radio"
                        name="delivery"
                        value="delivery"
                        checked={deliveryOption === 'delivery'}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="form-radio text-blue-600 h-4 w-4"
                      />
                      <div className="ml-3 flex-1">
                        <p className="font-medium text-gray-900">Delivery</p>
                        <p className="text-sm text-gray-500">Ship to your address.</p>
                      </div>
                      <span className="text-sm text-gray-600 font-semibold">$4.99</span>
                    </label>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Select Payment Method</h4>
                  <div className="space-y-2">
                    {['Credit Card', 'Debit Card', 'Erasio Card', 'PhonePe', 'Google Pay'].map(method => (
                      <label key={method} className="flex items-center cursor-pointer">
                        <input type="radio" name="payment" value={method} className="form-radio text-blue-600 h-4 w-4" />
                        <span className="ml-2 text-gray-700">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;