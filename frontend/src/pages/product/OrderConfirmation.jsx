import React, { useEffect, useState } from "react";
import { apiUrl, userToken } from "../../components/Http";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function OrderConfirmation() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchOrder = async () => {
    try {
      const response = await fetch(`${apiUrl}/get-order-details/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${userToken()}`,
        },
      });

      const result = await response.json();
      console.log(result.data);

      if(result.status == 200){
        setLoading(false);
        setOrder(result.data);
        
      }else{
        setLoading(false);
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading order details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/orders"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition"
        >
          ← Back to order
        </Link>
      </div>

      <div className="mb-6 text-center">
          <div className="inline-block px-8 py-4 bg-green-50 border border-green-200 text-green-700 font-semibold rounded-xl shadow-sm">
            ✅ Thank you for your purchase! <br />
            We’ve received your order and it’s being processed.
          </div>
    </div>

      {/* Order Info */}
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
        <p className="text-gray-600">
            <span className="font-semibold">Order Date:</span> {order?.created_at}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Order ID:</span> {order.id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">User ID:</span> {order.user?.id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">User Name:</span> {order.user?.name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {order.user?.email}
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span> {order.phone}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Address:</span>{" "}
            {order.address}, {order.city}, {order.state}, {order.zip}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Grand Total:</span> ${order.grand_total}
          </p>
        </div>
      </div>

      {/* Products Table */}
      <h3 className="text-xl font-semibold mb-3">Ordered Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
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
            {order.orderItems?.map((item) => (
              <tr key={item.id} className="border-t">
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
}
