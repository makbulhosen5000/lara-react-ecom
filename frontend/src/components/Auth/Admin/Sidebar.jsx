import { LogOut } from 'lucide-react'
import React, { useContext } from 'react'
import { AdminAuthContext } from '../../provider/AdminAuth';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const {logOut}  = useContext(AdminAuthContext);
  return (
    <>
    {/* <!-- Sidebar --> */}
    <aside className="w-64 bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-8">SiblingsAgro Dashboard</h1>
        <nav className="space-y-3">
          <Link to="/admin/dashboard" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Dashboard</Link>
          <Link to="/admin/dashboard" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Categories</Link>
          <Link to="/admin/dashboard" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Brand</Link>
          <Link to="/admin/dashboard" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Users</Link>
          <Link to="/admin/dashboard" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">Setting</Link>

          <button className="w-48 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={logOut}>
                  <LogOut size={20} />
                  <span>Logout</span>
          </button>
        </nav>
      </aside>
    </>
  )
}
