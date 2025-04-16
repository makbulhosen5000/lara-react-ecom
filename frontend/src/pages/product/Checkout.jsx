import React from 'react'

export default function Checkout() {
  return (
    <>
    <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 my-10">

        {/* <!-- 💳 Payment Methods (Left Side) --> */}
        <div class="bg-white shadow-md rounded-xl p-6">
        <h2 class="text-2xl font-bold mb-4">Payment Methods</h2>

        <form class="space-y-4">
            <div class="flex items-center">
               <input id="cod" name="payment_method" type="radio" value="cod" class="h-5 w-5 text-blue-600 focus:ring-blue-500" checked />
               <label for="cod" class="ml-3 block text-lg font-medium text-gray-700">Cash on Delivery</label>
            </div>
            <div class="flex items-center">
               <input id="cod" name="payment_method" type="radio" value="cod" class="h-5 w-5 text-blue-600 focus:ring-blue-500" checked />
               <label for="cod" class="ml-3 block text-lg font-medium text-gray-700">Bkash</label>
            </div>
            <div class="flex items-center">
               <input id="cod" name="payment_method" type="radio" value="cod" class="h-5 w-5 text-blue-600 focus:ring-blue-500" checked />
               <label for="cod" class="ml-3 block text-lg font-medium text-gray-700">Nagad</label>
            </div>
            <div class="flex items-center">
               <input id="cod" name="payment_method" type="radio" value="cod" class="h-5 w-5 text-blue-600 focus:ring-blue-500" checked />
               <label for="cod" class="ml-3 block text-lg font-medium text-gray-700">Rocket</label>
            </div>


            <div class="flex items-center">
            <input id="card" name="payment_method" type="radio" value="card" class="h-5 w-5 text-blue-600 focus:ring-blue-500" disabled />
            <label for="card" class="ml-3 block text-lg font-medium text-gray-400 line-through">Credit/Debit Card (Coming Soon)</label>
            </div>

            {/* <!-- Add more methods if needed --> */}
        </form>
        </div>

        {/* <!-- 🛒 Cart Summary (Right Side) --> */}
        <div class="bg-white shadow-md rounded-xl p-6">
        <h2 class="text-2xl font-bold mb-4">Cart Summary</h2>

        {/* <!-- Cart Item --> */}
        <div class="flex justify-between items-center mb-4 border-b pb-4">
            <div class="flex items-center gap-4">
            <img src="https://via.placeholder.com/80" alt="Product" class="w-20 h-20 object-cover rounded" />
            <div>
                <h3 class="text-lg font-semibold">Product Name</h3>
                <p class="text-sm text-gray-500">Qty: 1</p>
            </div>
            </div>
            <div class="text-right">
            <p class="text-lg font-medium">$19.99</p>
            </div>
        </div>

        {/* <!-- Total --> */}
        <div class="flex justify-between text-lg font-semibold mt-4 mb-6">
            <span>Total:</span>
            <span>$19.99</span>
        </div>

        {/* <!-- Confirm Order Button --> */}
        <button class="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700">
            Confirm Order
        </button>
        </div>
    </div>

    </>
  )
}
