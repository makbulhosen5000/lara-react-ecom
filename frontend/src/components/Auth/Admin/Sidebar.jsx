import { LogOut } from 'lucide-react'
import React, { useContext } from 'react'
import { AdminAuthContext } from '../../provider/AdminAuth';

export default function Sidebar() {
    const {logOut}  = useContext(AdminAuthContext);
  return (
    <>
    {/* <!-- Sidebar --> */}
    <aside className="w-64 bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-8">SiblingsAgro Dashboard</h1>
        <nav className="space-y-3">
          <a href="#" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Users</a>
          <a href="#" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Reports</a>
          <a href="#" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Settings</a>
          <button className="w-48 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={logOut}>
                  <LogOut size={20} />
                  <span>Logout</span>
        </button>
        </nav>
      </aside>
    </>
  )
}
