import React from "react";
import { Link } from "react-router-dom";

export default function OrderConfirmation({ id }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Order Confirmed 🎉</h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase! Your order has been placed successfully.
        </p>

        {/* Order ID */}
        {id && (
          <div className="mt-4 bg-gray-100 text-gray-800 text-sm font-medium p-3 rounded-lg">
            Order ID: <span className="text-gray-900">{id}</span>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/orders"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition"
          >
            View My Orders
          </Link>
          <Link
            to="/"
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-lg font-medium transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
