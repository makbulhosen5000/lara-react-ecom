
import React, { useContext } from 'react'
import { AdminAuthContext } from '../../provider/AdminAuth';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {

  return (
    <>
    <div className="bg-gray-100 font-sans">
      <div className="min-h-screen flex">
      <Sidebar/>

      {/* <!-- Main Content --> */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
        {/* <!-- Cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-700">Users</h3>
            <p className="text-3xl font-bold mt-2 text-blue-600">1,024</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
            <p className="text-3xl font-bold mt-2 text-green-600">$8,560</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-700">Products</h3>
            <p className="text-3xl font-bold mt-2 text-purple-600">23,542</p>
          </div>
        </div>

        {/* <!-- Chart or Analytics Area --> */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Monthly Performance</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
      </main>
      </div>
    </div>
    </>
  )
}
