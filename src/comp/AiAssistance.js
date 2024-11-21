import React, { useState } from 'react'
import FAQs from './FAQs';

export default function AiAssistance() {
    const [billingCycle, setBillingCycle] = useState('Monthly');
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex items-center space-x-8 bg-advc rounded-lg p-16 shadow-lg">

                    <div className="max-w-md">
                        <h1 className="text-xxl font-semibold">
                            Your AI-Powered <span className="text-purple-500">Health</span> Assistant
                        </h1>
                        <p className="text-gray-600 mt-4">
                            In every step of your journey,
                            physical therapy empowers you to go farther
                        </p>
                        {/* <div className="mt-8 flex space-x-4">
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition">
                            Get Started
                        </button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
                            More Templates
                        </button>
                    </div> */}
                    </div>

                    {/* Image Section */}
                    <div className="w-80 rounded-full flex items-center justify-center overflow-hidden">
                        {/* Placeholder for Image */}
                        <img src="https://framerusercontent.com/images/cLhE0zz9KoEfqjG2JcfNsvEDpA0.png?scale-down-to=1024" alt="Design Element" className="w-full h-full object-contain" />
                    </div>

                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center p-16">
                <div className="text-center">
                    <h1 className="text-xxl font-bold  mb-2">Affordable Plans for Every Need</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Choose the perfect plan for your Helath. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered Health assistant.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center mb-8">
                        <button
                            onClick={() => setBillingCycle('Monthly')}
                            className={`px-4 py-2 rounded-l-lg text-sm ${billingCycle === 'Monthly' ? 'bg-gray-400 text-black' : 'bg-brew'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('Yearly')}
                            className={`px-4 py-2 rounded-r-lg text-sm ${billingCycle === 'Yearly' ? 'bg-gray-400 text-black' : 'bg-brew'
                                }`}
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Plans */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Free Plan */}
                        <div className="bg-advc rounded-lg shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">Free</h3>
                            <p className="text-4xl font-bold mb-2">₹ 0/m</p>
                            <p className="text-sm text-gray-700 mb-4">Free forever</p>
                            <ul className="text-left text-gray-800 space-y-2 mb-4">
                                <li>✓ Basic AI-powered health assessments</li>
                                <li>✓ Access to customizable healthcare tools</li>
                                <li>✓ Standard healthcare templates library</li>
                                <li>✓ Manage up to 5 patient profiles per month</li>
                            </ul>
                            <button className="w-full mt-8 bg-brew text-grey- py-2 rounded-md hover:bg-gray-200">
                                Get Started
                            </button>
                        </div>

                        {/* Basic Plan */}
                        <div className="bg-brew rounded-lg shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">Basic</h3>
                            <p className="text-4xl font-bold mb-2">₹{billingCycle === 'Monthly' ? '299' : '1899'}/m</p>
                            <p className="text-sm text-gray-700 mb-4">Billed {billingCycle}</p>
                            <ul className="text-left text-gray-800 space-y-2 mb-4">
                                <li>✓ AI-powered patient health assessments</li>
                                <li>✓ Full access to customizable care plans</li>
                                <li>✓ Premium healthcare templates library</li>
                                <li>✓ Unlimited patient profiles</li>
                                <li>✓ Real-time collaboration for care teams</li>
                                <li>✓ Priority email support for medical staff</li>
                            </ul>
                            <button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200">
                                Get Started
                            </button>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-advc rounded-lg shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">Pro</h3>
                            <p className="text-4xl font-bold mb-2">₹{billingCycle === 'Monthly' ? '499' : '2199'}/m</p>
                            <p className="text-sm text-gray-700 mb-4">Billed {billingCycle}</p>
                            <ul className="text-left text-gray-800 space-y-2 mb-4">
                                <li>✓ Comprehensive health management features</li>
                                <li>✓ Dedicated healthcare account manager</li>
                                <li>✓ Custom AI-powered health analytics</li>
                                <li>✓ Personalized patient care planning</li>
                                <li>✓ 24/7 priority healthcare support</li>
                                <li>✓ Advanced health insights and reporting</li>
                                <li>✓ Secure patient data storage</li>
                            </ul>
                            <button className="w-full bg-brew text-black py-2 rounded-md hover:bg-gray-200">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FAQs/>
        </>
    )
}
