import React, { useEffect, useState } from "react";
import { apiUrl, userToken } from "../../components/Http";
import { useParams } from "react-router-dom";

export default function ordersDetails () {
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

//   if (!orders) {
//     return <p className="text-center text-gray-600">No orders found</p>;
//   }

  const fetchOrders = async () => {
      try {
        const response = await fetch(`${apiUrl}/get-order-details/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${userToken()}`,
          },
        });
  
        const result = await response.json();
        console.log(result.data);
        setOrders(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Orders:", error);
      }
    };
  
 
   useEffect(() => {
       fetchOrders();
   },[]);
   
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {/* orders Info */}
      <h2 className="text-2xl font-bold mb-4">orders Details</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600">
            <span className="font-semibold">orders ID:</span> {orders.id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">User ID:</span> {orders.user?.id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">User Name:</span> {orders.user?.name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {orders.user?.email}
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span> {orders.phone}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Address:</span> {orders.address}, {orders.city}, {orders.state}, {orders.zip}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Grand Total:</span> ${orders.grand_total}
          </p>
        </div>
      </div>

      {/* Products Table */}
      <h3 className="text-xl font-semibold mb-3">ordersed Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full borders borders-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Size</th>
              <th className="px-4 py-2 text-center">Qty</th>
              <th className="px-4 py-2 text-right">Unit Price</th>
              <th className="px-4 py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.ordersItems?.map((item) => (
              <tr key={item.id} className="borders-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.size}</td>
                <td className="px-4 py-2 text-center">{item.qty}</td>
                <td className="px-4 py-2 text-right">${item.unit_price}</td>
                <td className="px-4 py-2 text-right">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


