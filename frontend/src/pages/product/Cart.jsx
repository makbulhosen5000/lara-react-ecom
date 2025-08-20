import React, { useContext, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../../components/provider/CartProvider';

export default function Cart() {
  const [qty, setQty] = useState({});
  const { shipping, subTotal,grandTotal,cartData,updateCartItem,handleCartItemDelete} = useContext(CartContext);

  

  // Handle quantity change
  const handleQtyChange = (itemId, newQty) => {
    if (newQty < 1) return; // prevent negative or zero
    setQty((prevQty) => ({
      ...prevQty,
      [itemId]: newQty,
    }));
    updateCartItem(itemId,newQty);
    };

  return (
    <>
      <Helmet>
        <title>MAKFashion || Cart</title>
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        
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
                    {/* Decrease button */}
                    <button
                      className="text-gray-600 hover:text-black"
                      onClick={() => handleQtyChange(item.id, (qty[item.id] || item.qty) - 1)}
                    >
                      -
                    </button>

                    {/* Input (editable) */}
                    <input
                      type="number"
                      value={qty[item.id] || item.qty}
                      onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value) || 1)}
                      className="w-12 text-center border-0 focus:outline-none"
                    />

                    {/* Increase button */}
                    <button
                      className="text-gray-600 hover:text-black"
                      onClick={() => handleQtyChange(item.id, (qty[item.id] || item.qty) + 1)}
                    >
                      +
                    </button>
                  </div>

                {/* Price & Delete */}
                <div className="text-right flex gap-4 items-center">
                  <p className="text-lg font-medium">${(item.price * item.qty).toFixed(2)}</p>
                  <button
                    onClick={() => handleCartItemDelete(item.id)}
                    title="delete"
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaRegTrashCan />
                  </button>
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
               Continue Shopping
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
