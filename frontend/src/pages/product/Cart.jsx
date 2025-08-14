import React, { useContext } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../../components/provider/CartProvider';

export default function Cart() {
  const { cartData } = useContext(CartContext);

// Calculate totals
const subTotal = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0);
const shipping = 10;
const grandTotal = subTotal + shipping;
  return (
    <>
      <Helmet>
        <title>MAKFashion || Cart</title>
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        
        {/* 🛒 Cart Summary (Left Side) */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>

          {cartData.length > 0 ? (
            cartData.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-4">
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-20 h-20 rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.size && (
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    )}
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center border rounded px-2 py-1">
                  <button className="text-gray-600 hover:text-black">-</button>
                  <input
                    type="text"
                    value={item.qty}
                    readOnly
                    className="w-10 text-center border-0 focus:outline-none"
                  />
                  <button className="text-gray-600 hover:text-black">+</button>
                </div>

                {/* Price & Delete */}
                <div className="text-right flex gap-4 items-center">
                  <p className="text-lg font-medium">${(item.price * item.qty).toFixed(2)}</p>
                  <button
                    onClick={() => alert('Are you sure you want to delete?')}
                    title="delete"
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}

          {/* Totals */}
          {cartData.length > 0 && (
            <>
            <div className="flex justify-between text-lg font-semibold mt-4">
                <span>Shipping:</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4">
                <span>Sub Total:</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4">
                <span>Grand Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        {/* 📬 Address & Action Section (Right Side) */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Customer Details</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Shipping Address</label>
              <textarea
                rows="3"
                className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="123 Main St, City, Country"
              ></textarea>
            </div>
          </form>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link to="/shop">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add More Item
              </button>
            </Link>
            <Link to="/checkout">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
