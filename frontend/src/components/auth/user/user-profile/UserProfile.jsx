import React from "react";
import { useForm } from "react-hook-form";
import UserSidebar from "../user-dashboard/UserSidebar";
import UserTopbar from "../user-dashboard/UserTopBar";

function UserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateUserProfile = (data) => {
    console.log("Profile Data:", data);
    // API call goes here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex font-sans">
      <UserSidebar />
      <main className="flex-1 p-6">
        <UserTopbar />

        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-8">
            My Profile
          </h2>

          <form onSubmit={handleSubmit(updateUserProfile)} className="space-y-6">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="number"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                {...register("address",{required: "Address is required"})}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
               {errors.address && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* State + City + Zip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  State
                </label>
                <input
                  type="text"
                  {...register("state")}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                 {errors.state && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  City
                </label>
                <input
                  type="text"
                  {...register("city",{required: "City is required"})}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                 {errors.city && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  ZIP
                </label>
                <input
                  type="text"
                  {...register("zip")}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                 {errors.zip && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.zip.message}
                </p>
              )}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;
