import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../../components/provider/CartProvider';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const { cartData,shipping, subTotal,grandTotal} = useContext(CartContext);
    
    const handlePaymentMethod = (e) => {
        console.log(e.target.value);
        setPaymentMethod(e.target.value);
    }
  
  return (
    <>
    <Helmet>
          <title>MakbulAgro||Checkout</title>
    </Helmet>
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 my-10">

        {/* <!-- 💳 Payment Methods (Left Side) --> */}
        <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>

        <form className="space-y-4">
            <div className="flex items-center">
               <input onClick={handlePaymentMethod} checked={paymentMethod == 'cash_on_delivery'} value={'cash_on_delivery'}  name="cash_on_delivery" type="radio"  className="h-5 w-5 text-blue-600 focus:ring-blue-500"/>
               <label for="cod" className="ml-3 block text-lg font-medium text-gray-700">Cash on Delivery</label>
            </div>
            <div className="flex items-center">
               <input onClick={handlePaymentMethod} checked={paymentMethod == 'bkash'} value={'bkash'} name="bkash" type="radio" className="h-5 w-5 text-blue-600 focus:ring-blue-500"/>
               <label for="cod" className="ml-3 block text-lg font-medium text-gray-700">Bkash</label>
            </div>
            <div className="flex items-center">
               <input onClick={handlePaymentMethod} checked={paymentMethod == 'stripe'} value={'stripe'} name="stripe" type="radio" className="h-5 w-5 text-blue-600 focus:ring-blue-500"  />
               <label for="cod" className="ml-3 block text-lg font-medium text-gray-700">Stripe</label>
            </div>
            <div className="flex items-center">
               <input onClick={handlePaymentMethod} checked={paymentMethod == 'cod'} value={'cod'} name="cod" type="radio"className="h-5 w-5 text-blue-600 focus:ring-blue-500" />
               <label for="cod" className="ml-3 block text-lg font-medium text-gray-700">COD</label>
            </div>


            {/* <!-- Add more methods if needed --> */}
        </form>
        </div>

        {/* <!-- 🛒 Cart Summary (Right Side) --> */}
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
                    <div className='flex  gap-3'>
                        <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                        {
                        item.size && (
                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                        )}
                    </div>
                  </div>
                </div>
                {/* Price  */}
                <div className="text-right flex gap-4 items-center">
                  <p className="text-lg font-medium">${(item.price * item.qty).toFixed(2)}</p>
    
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-gray-500 font-semibold">Your cart is empty.</p>
              <Link to="/shop">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-700">
               Continue Shopping
              </button>
            </Link>
            </div>
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
        
        {/* <!-- Confirm Order Button --> */}
        <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700">
            Confirm Order
        </button>
        </div>
    </div>

    </>
  )
}
