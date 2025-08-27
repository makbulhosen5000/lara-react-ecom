import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../../components/provider/CartProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CreditCard, MapPin, ShoppingBag } from "lucide-react";
import { apiUrl, userToken } from "../../components/Http";
import { toast } from "react-toastify";


export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const { cartData, shipping, subTotal, grandTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   // process order function
   const processOrder = async (formValue) => {
    if (paymentMethod === "cash_on_delivery") {
      await saveOrder(formValue, "not paid");
    }
  };

  const saveOrder = async(formData,paymentStatus) => {
    const newFormData = {
      ...formData,
      shipping: shipping || 0,
      sub_total: subTotal || 0,
      grand_total: grandTotal || 0,
      discount: 0,
      payment_status: paymentStatus,
      status: "pending",
      cart: cartData || [],
    };
    console.log("Order Submitted ✅", newFormData);

    try {
          const response = await fetch(`${apiUrl}/order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization':`Bearer ${userToken()}`,
            },
            body: JSON.stringify(newFormData),
            
          })
          const result = await response.json()
          console.log("result",result);
          if (result.status == 200) {
            // localStorage.setItem("userInfo", JSON.stringify(userInfo))
            // login(userInfo)
            toast.success(result.message || "Order placed successfully!");
            localStorage.removeItem("cart");
            navigate(`/order-confirmation/${result.id}`);
          } else {
            toast.error(result.message || "Something went wrong");
          }
        } catch (error) {
          console.error("Error fetching order:", error)
        }
  };

  return (
    <>
      <Helmet>
        <title>MAKFashion || Checkout</title>
      </Helmet>

      <form
        onSubmit={handleSubmit(processOrder)}
        className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 my-10"
      >
        {/* 🧾 Left Section: Billing + Payment */}
        <div className="space-y-6">
          {/* Billing Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
              <MapPin className="w-5 h-5 text-green-600" />
              Billing Address
            </h2>

            <div className="flex justify-between gap-2 mb-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                {...register("name", { required: "The name field is required" })}
                type="text"
                className="mt-1 w-full border rounded-lg px-8 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                {...register("phone", { required: "The phone field is required" })}
                type="tel"
                className="mt-1 w-full border rounded-lg px-8 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="+8801XXXXXXXXX"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>
            </div>

            <div className="flex justify-between gap-2 mb-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  {...register("email", {
                    required: "The email field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="mt-1 w-full border rounded-lg px-8 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="johndoe@gmail.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  {...register("city", {
                    required: "The city field is required",
              
                  })}
                  type="text"
                  className="mt-1 w-full border rounded-lg px-8 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Dhaka"
                />
                {errors.city && (
                  <span className="text-red-500 text-sm">{errors.city.message}</span>
                )}
              </div>         
            </div>
            <div className="flex justify-between gap-2 mb-4">
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  {...register("state", {
                    required: "The state field is required",
                
                  })}
                  type="text"
                  className="mt-1 w-full border rounded-lg px-8 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="johndoe@gmail.com"
                />
                {errors.state && (
                  <span className="text-red-500 text-sm">{errors.state.message}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Zip</label>
                <input
                  {...register("zip", {
                    required: "The zip field is required",
                  })}
                  type="text"
                  className="mt-1 w-full border rounded-lg px-8 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Dhaka"
                />
                {errors.zip && (
                  <span className="text-red-500 text-sm">{errors.zip.message}</span>
                )}
              </div>         
            </div>
            <div>
                <label className="block text-sm font-medium">Shipping Address</label>
                <textarea
                  {...register("address", { required: "The address field is required" })}
                  rows="3"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="123 Main St, City, Country"
                ></textarea>
                {errors.address && (
                  <span className="text-red-500 text-sm">{errors.address.message}</span>
                )}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
              <CreditCard className="w-5 h-5 text-green-600" />
              Payment Methods
            </h2>
            <div className="space-y-3 flex  justify-between">
              {["cash_on_delivery", "bkash","stripe"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-green-600 transition"
                >
                  <input
                    type="radio"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={handlePaymentMethod}
                    className="h-5 w-5 text-green-600 focus:ring-green-500"
                  />
                  <span className="capitalize font-medium">
                    {method.replace(/_/g, " ")}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 🛒 Right Section: Cart Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6">
            <ShoppingBag className="w-5 h-5 text-green-600" />
            Cart Summary
          </h2>

          {cartData.length > 0 ? (
            <>
              {cartData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-5 border-b pb-5"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        Qty: {item.qty} {item.size && `| Size: ${item.size}`}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-green-700">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}

              {/* Totals */}
              <div className="space-y-2 text-lg font-semibold">
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sub Total:</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Confirm Order */}
              <button
                type="submit"
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
              >
                Confirm Order
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-gray-500 font-semibold">Your cart is empty.</p>
              <Link to="/shop">
                <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
