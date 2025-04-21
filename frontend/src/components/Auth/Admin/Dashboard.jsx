import { LogOut } from 'lucide-react'
import React, { useContext } from 'react'
import { AdminAuthContext } from '../../provider/AdminAuth'

export default function Dashboard() {
  const {logOut}  = useContext(AdminAuthContext);
  return (
    <>
    <div>
        <h1>Dashboard</h1>
        <button className="w-48 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={logOut}>
                  <LogOut size={20} />
                  <span>Logout</span>
        </button>
    </div>
    </>
  )
}
