import React, { useState } from 'react';
import Navbar from './Navbar';

const StudentWallet = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('Balance');

    // Tab content components for clarity
    const BalanceTab = () => (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Balance</h3>
            <p className="text-sm text-gray-500 mb-6">View your current wallet balance</p>
            <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 5a2 2 0 012-2h6a2 2 0 012 2v2H7V5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6M7 9v6m10-6v6m-3-6v6M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3z" />
                    </svg>
                </div>
                <p className="text-gray-500 text-sm">Available Balance</p>
                <p className="text-4xl font-bold text-blue-600">$580.75</p>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
                <button 
                    onClick={() => setActiveTab('Top Up')}
                    className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                    + Top Up
                </button>
                <button 
                    onClick={() => setActiveTab('History')}
                    className="flex items-center px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    View History
                </button>
            </div>
        </div>
    );

    const TopUpTab = () => (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Up Wallet</h3>
            <p className="text-sm text-gray-500 mb-6">Add funds to your student wallet</p>
            <div>
                <p className="text-gray-500 text-sm">Current Balance</p>
                <p className="text-3xl font-bold text-blue-600">$580.75</p>
            </div>
            <div className="mt-6">
                <label htmlFor="top-up-amount" className="block text-sm font-medium text-gray-700">Top Up Amount</label>
                <input
                    type="number"
                    id="top-up-amount"
                    placeholder="$ 0.00"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-between space-x-2 mt-4">
                <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">$20</button>
                <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">$50</button>
                <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">$100</button>
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
                Add Funds
            </button>
        </div>
    );

    const DuesTab = () => (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Dues</h3>
            <p className="text-sm text-gray-500 mb-6">View and manage your pending fees and dues</p>
            <div className="space-y-4">
                {/* Due Item */}
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Tuition Fee</p>
                        <p className="text-xs text-gray-500">Due by: 5/15/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-900">$4500.00</p>
                        <span className="text-sm font-medium text-yellow-600">Pending</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Pay</button>
                </div>
                {/* ... other dues as per screenshot ... */}
                 <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Library Dues</p>
                        <p className="text-xs text-red-500">Due by: 5/1/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-900">$45.00</p>
                        <span className="text-sm font-medium text-red-600">Overdue</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Pay</button>
                </div>
                 <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Workshop Fee</p>
                        <p className="text-xs text-gray-500">Due by: 5/10/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-900">$150.00</p>
                        <span className="text-sm font-medium text-yellow-600">Pending</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Pay</button>
                </div>
                 <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">ID Card Fee</p>
                        <p className="text-xs text-red-500">Due by: 4/30/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-900">$25.00</p>
                        <span className="text-sm font-medium text-red-600">Overdue</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Pay</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Laboratory Fee</p>
                        <p className="text-xs text-gray-500">Due by: 5/20/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-900">$200.00</p>
                        <span className="text-sm font-medium text-yellow-600">Pending</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Pay</button>
                </div>
            </div>
             <div className="mt-6 p-4 bg-gray-200 rounded-lg flex justify-between items-center">
                <p className="font-semibold text-gray-900">Total Due Amount</p>
                <p className="font-bold text-xl text-gray-900">$4920.00</p>
            </div>
        </div>
    );

    const HistoryTab = () => (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h3>
            <p className="text-sm text-gray-500 mb-6">Recent wallet activity</p>
            <div className="space-y-4">
                {/* Transaction Item */}
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Tuition Fee Payment</p>
                        <p className="text-sm text-gray-500">Apr 5, 2025</p>
                    </div>
                    <p className="font-bold text-red-600">-$250.00</p>
                </div>
                {/* ... other history items ... */}
                 <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Wallet Top Up</p>
                        <p className="text-sm text-gray-500">Apr 2, 2025</p>
                    </div>
                    <p className="font-bold text-green-600">+$300.00</p>
                </div>
                 <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Library Fee</p>
                        <p className="text-sm text-gray-500">Mar 25, 2025</p>
                    </div>
                    <p className="font-bold text-red-600">-$45.00</p>
                </div>
                 <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Wallet Top Up</p>
                        <p className="text-sm text-gray-500">Mar 20, 2025</p>
                    </div>
                    <p className="font-bold text-green-600">+$500.00</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-800">Technology Fee</p>
                        <p className="text-sm text-gray-500">Mar 15, 2025</p>
                    </div>
                    <p className="font-bold text-red-600">-$75.00</p>
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Balance':
                return <BalanceTab />;
            case 'Top Up':
                return <TopUpTab />;
            case 'Dues':
                return <DuesTab />;
            case 'History':
                return <HistoryTab />;
            default:
                return <BalanceTab />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow flex justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Student Wallet</h2>
                        <p className="text-gray-500 mt-1">Manage your wallet, top up balance, and view transaction history</p>
                    </div>
                    
                    {/* Main Card with Tabs */}
                    <div className="bg-white rounded-xl shadow-sm">
                        <div className="flex border-b border-gray-200">
                            {['Balance', 'Top Up', 'Dues', 'History'].map(tab => (
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
            </div>
        </div>
    );
};

export default StudentWallet;