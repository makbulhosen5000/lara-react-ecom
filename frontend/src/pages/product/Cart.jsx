import React, { Component} from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Cart(){

    return (
      <>
        <Helmet>
          <title>MakbulAgro||Cart</title>
        </Helmet>
      <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {/* <!-- 🛒 Cart Summary (Left Side) --> */}
          <div class="bg-white shadow-md rounded-xl p-6">
            <h2 class="text-2xl font-bold mb-4">Cart Summary</h2>

            {/* <!-- Cart Item --> */}
            <div class="flex justify-between items-center mb-4 border-b pb-4">
              <div class="flex items-center gap-4">
                <img src="https://i.ibb.co.com/5hntPphG/banana1.jpg" alt="Product" class="w-20 h-20 rounded" />
                <div>
                  <h3 class="text-lg font-semibold">Product Name</h3>
                </div>
              </div>
              <div class="flex items-center border rounded px-2 py-1">
                    <button class="text-gray-600 hover:text-black">-</button>
                    <input type="text" value="1" class="w-10 text-center border-0 focus:outline-none" />
                    <button class="text-gray-600 hover:text-black">+</button>
                  </div>
              <div class="text-right flex gap-4">
                <p class="text-lg font-medium">$19.99</p>
                <button onClick={() => alert('Are Your Want To Delete?')} title="delete" class="text-red-500 hover:text-red-700">
                <FaRegTrashCan className=''/>
                </button>
              </div>
            </div>
            

            {/* <!-- Add more cart items as needed --> */}

            <div class="flex justify-between text-lg font-semibold mt-4">
              <span>Sub Total:</span>
              <span>$19.99</span>
            </div>
            <div class="flex justify-between text-lg font-semibold mt-4">
              <span>Grand Total:</span>
              <span>$19.99</span>
            </div>
          </div>

          {/* <!-- 📬 Address & Action Section (Right Side) --> */}
          <div class="bg-white shadow-md rounded-xl p-6">
            <h2 class="text-2xl font-bold mb-4">Customer Details</h2>

            {/* <!-- Address Form --> */}
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium">Full Name</label>
                <input type="text" class="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label class="block text-sm font-medium">Phone</label>
                <input type="tel" class="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Phone" />
              </div>

              <div>
                <label class="block text-sm font-medium">Shipping Address</label>
                <textarea rows="3" class="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500" placeholder="123 Main St, City, Country"></textarea>
              </div>
            </form>

            {/* <!-- Buttons --> */}
            <div class="mt-6 flex flex-col md:flex-row gap-4">
              <Link to='/product'>
              <button class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add More Item
              </button>
              </Link>
              <Link  to='/checkout'>
              <button class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
      </div>
      </>
    )
}
